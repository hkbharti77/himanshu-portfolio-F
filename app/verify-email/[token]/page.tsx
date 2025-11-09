'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircleIcon, XCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function VerifyEmailPage() {
  const params = useParams();
  const router = useRouter();
  const token = params?.token as string;
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState(true);
  const hasVerified = useRef(false); // Track if verification has been triggered
  
  // Resend verification email state
  const [resendEmail, setResendEmail] = useState<string>('');
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    // Only trigger verification once when page loads and token is available
    if (hasVerified.current || !token) {
      if (!token && !hasVerified.current) {
        hasVerified.current = true;
        setStatus('error');
        setMessage('Invalid verification link. Token is missing.');
        setIsVerifying(false);
      }
      return;
    }

    const verifyEmail = async () => {
      hasVerified.current = true; // Mark as verified to prevent re-triggering

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/auth/verify-email/${token}`, {
          method: 'GET',
          headers: {
            'accept': '*/*',
          },
        });

        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          // If response is not JSON, handle it
          setStatus('error');
          setMessage(`Server error: ${response.status} ${response.statusText}`);
          setIsVerifying(false);
          return;
        }

        if (response.ok && data.success) {
          setStatus('success');
          setMessage(data.message || 'Email verified successfully!');
          // Redirect to home page after 3 seconds
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } else {
          // Handle different error scenarios
          if (response.status === 400) {
            const errorMsg = data.error || data.message || '';
            // Check if it's an "already verified" scenario - treat as success
            if (errorMsg.toLowerCase().includes('already') || errorMsg.toLowerCase().includes('verified')) {
              setStatus('success');
              setMessage('This email has already been verified. You can now log in to your account.');
              // Redirect to home page after 3 seconds
              setTimeout(() => {
                router.push('/');
              }, 3000);
            } else {
              setStatus('error');
              setMessage(errorMsg || 'Invalid or expired verification token. The link may have expired or already been used.');
            }
          } else {
            setStatus('error');
            if (response.status === 404) {
              setMessage('Verification endpoint not found. Please contact support.');
            } else {
              setMessage(data.error || data.message || `Verification failed. Please try again or contact support.`);
            }
          }
        }
      } catch (error) {
        console.error('Email verification error:', error);
        setStatus('error');
        setMessage('Failed to verify email. Please check your connection and try again.');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]); // Only run when token is available, but useRef ensures it only runs once

  const handleResendVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resendEmail.trim()) {
      setResendStatus({
        type: 'error',
        message: 'Please enter your email address',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resendEmail.trim())) {
      setResendStatus({
        type: 'error',
        message: 'Please enter a valid email address',
      });
      return;
    }

    setIsResending(true);
    setResendStatus({ type: null, message: '' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/resend-verification`, {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: resendEmail.trim(),
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        // If response is not JSON, handle it
        setResendStatus({
          type: 'error',
          message: `Server error: ${response.status} ${response.statusText}`,
        });
        setIsResending(false);
        return;
      }

      if (response.ok && data.success) {
        setResendStatus({
          type: 'success',
          message: data.message || 'Verification email sent successfully! Please check your inbox.',
        });
        setResendEmail(''); // Clear email field
      } else {
        // Handle different error scenarios
        const errorMsg = data.error || data.message || '';
        
        if (response.status === 400) {
          // Check for "already verified" message
          if (errorMsg.toLowerCase().includes('already verified') || 
              errorMsg.toLowerCase().includes('email already verified')) {
            setResendStatus({
              type: 'success',
              message: 'This email is already verified. You can log in to your account.',
            });
          } else {
            // Other 400 errors (validation, etc.)
            setResendStatus({
              type: 'error',
              message: errorMsg || 'Failed to send verification email. Please check your email address and try again.',
            });
          }
        } else if (response.status === 404) {
          setResendStatus({
            type: 'error',
            message: 'User not found with this email address. Please check your email and try again.',
          });
        } else {
          setResendStatus({
            type: 'error',
            message: errorMsg || `Failed to send verification email (${response.status}). Please try again.`,
          });
        }
      }
    } catch (error) {
      console.error('Resend verification error:', error);
      setResendStatus({
        type: 'error',
        message: 'Failed to send verification email. Please check your connection and try again.',
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="mithila-bg-primary min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="mithila-card p-8 text-center">
          {isVerifying ? (
            <div className="space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-peacock/10 dark:bg-peacock/20 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-peacock"></div>
              </div>
              <h2 className="text-2xl font-bold text-mithila-red dark:text-mithila-yellow">
                Verifying Your Email
              </h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                Please wait while we verify your email address...
              </p>
            </div>
          ) : status === 'success' ? (
            <div className="space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <CheckCircleIcon className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-mithila-red dark:text-mithila-yellow">
                Email Verified!
              </h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                {message}
              </p>
              <p className="text-sm text-mithila-brown/80 dark:text-mithila-cream/80">
                Redirecting you to the home page...
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                >
                  Go to Home Page
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                <XCircleIcon className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-mithila-red dark:text-mithila-yellow">
                Verification Failed
              </h2>
              <p className="text-mithila-brown dark:text-mithila-cream">
                {message}
              </p>
              
              {/* Resend Verification Email Section */}
              <div className="pt-4 border-t border-slate-200 dark:border-ink/20">
                <div className="flex items-center justify-center mb-3">
                  <EnvelopeIcon className="h-5 w-5 text-peacock mr-2" />
                  <p className="text-sm font-medium text-mithila-brown dark:text-mithila-cream">
                    Resend Verification Email
                  </p>
                </div>
                <p className="text-xs text-mithila-brown/80 dark:text-mithila-cream/80 mb-4">
                  Enter your email address to receive a new verification link
                </p>
                
                {/* Resend Status Messages */}
                {resendStatus.type && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-sm ${
                      resendStatus.type === 'success'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}
                  >
                    {resendStatus.message}
                  </div>
                )}

                <form onSubmit={handleResendVerification} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      value={resendEmail}
                      onChange={(e) => setResendEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-ink/30 text-slate-900 dark:text-ink placeholder-slate-500 dark:placeholder-ink/50 focus:outline-none focus:ring-2 focus:ring-peacock focus:border-peacock dark:bg-bg-deep/10 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isResending}
                    className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-2 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isResending ? 'Sending...' : 'Resend Verification Email'}
                  </button>
                </form>
              </div>

              <div className="pt-4 space-y-2 border-t border-slate-200 dark:border-ink/20">
                <p className="text-sm text-mithila-brown/80 dark:text-mithila-cream/80">
                  Or you can:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-ink/30 px-6 py-3 text-sm font-medium text-slate-900 dark:text-ink hover:bg-slate-50 dark:hover:bg-bg-deep/50 focus:outline-none focus:ring-2 focus:ring-peacock focus:ring-offset-2 transition-all duration-300"
                  >
                    Go to Home
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

