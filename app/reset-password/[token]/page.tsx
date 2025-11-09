'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { CheckCircleIcon, XCircleIcon, LockClosedIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ResetPasswordPage() {
  const params = useParams();
  const router = useRouter();
  const token = params?.token as string;
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string>('');
  const hasReset = useRef(false); // Track if password has been reset

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      setStatus('error');
      setMessage('Invalid reset link. Token is missing.');
      return;
    }

    if (hasReset.current) {
      return; // Prevent multiple submissions
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus('loading');
    setMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/reset-password/${token}`, {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        setStatus('error');
        setMessage(`Server error: ${response.status} ${response.statusText}`);
        setIsSubmitting(false);
        return;
      }

      if (response.ok && data.success) {
        hasReset.current = true;
        setStatus('success');
        setMessage(data.message || 'Password reset successfully!');
        
        // Clear form
        setPassword('');
        setConfirmPassword('');
        
        // Auto-close/redirect after 3 seconds
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else {
        setStatus('error');
        const errorMsg = data.error || data.message || '';
        
        if (response.status === 400) {
          if (errorMsg.toLowerCase().includes('expired') || errorMsg.toLowerCase().includes('invalid')) {
            setMessage('Invalid or expired reset token. Please request a new password reset link.');
          } else {
            setMessage(errorMsg || 'Failed to reset password. Please try again.');
          }
        } else {
          setMessage(errorMsg || `Failed to reset password (${response.status}). Please try again.`);
        }
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setStatus('error');
      setMessage('Failed to reset password. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mithila-bg-primary min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="mithila-card p-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center text-mithila-brown dark:text-mithila-cream hover:text-mithila-red dark:hover:text-mithila-yellow mb-6 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-peacock/10 dark:bg-peacock/20 flex items-center justify-center mb-4">
              {status === 'success' ? (
                <CheckCircleIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              ) : status === 'error' ? (
                <XCircleIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
              ) : (
                <LockClosedIcon className="h-8 w-8 text-peacock" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-mithila-red dark:text-mithila-yellow mb-2">
              {status === 'success' ? 'Password Reset!' : status === 'error' ? 'Reset Failed' : 'Reset Password'}
            </h1>
            <p className="text-mithila-brown dark:text-mithila-cream">
              {status === 'success' 
                ? 'Your password has been reset successfully.'
                : status === 'error'
                ? message
                : 'Enter your new password below.'}
            </p>
          </div>

          {status === 'success' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{message}</p>
                </div>
              </div>
              <p className="text-sm text-mithila-brown/80 dark:text-mithila-cream/80 text-center">
                Redirecting you to the home page...
              </p>
              <div className="pt-4">
                <Link
                  href="/"
                  className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                >
                  Go to Home Page
                </Link>
              </div>
            </div>
          ) : status === 'error' && (message.toLowerCase().includes('expired') || message.toLowerCase().includes('invalid')) ? (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                <div className="flex items-start">
                  <XCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{message}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/forgot-password"
                  className="flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                >
                  Request New Reset Link
                </Link>
                <Link
                  href="/"
                  className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-ink/30 px-6 py-3 text-sm font-medium text-slate-900 dark:text-ink hover:bg-slate-50 dark:hover:bg-bg-deep/50 focus:outline-none focus:ring-2 focus:ring-peacock focus:ring-offset-2 transition-all duration-300"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          ) : status === 'error' ? (
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                <div className="flex items-start">
                  <XCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <p>{message}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/forgot-password"
                  className="flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                >
                  Try Again
                </Link>
                <Link
                  href="/"
                  className="flex-1 inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-ink/30 px-6 py-3 text-sm font-medium text-slate-900 dark:text-ink hover:bg-slate-50 dark:hover:bg-bg-deep/50 focus:outline-none focus:ring-2 focus:ring-peacock focus:ring-offset-2 transition-all duration-300"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-mithila-brown dark:text-mithila-cream mb-1">
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 sm:text-sm dark:bg-bg-deep/10 dark:text-ink dark:placeholder-ink/50 ${
                    errors.password
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-300 focus:border-peacock focus:ring-peacock/20 dark:border-ink/30'
                  }`}
                  placeholder="Enter new password (min. 6 characters)"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-mithila-brown dark:text-mithila-cream mb-1">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 sm:text-sm dark:bg-bg-deep/10 dark:text-ink dark:placeholder-ink/50 ${
                    errors.confirmPassword
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                      : 'border-slate-300 focus:border-peacock focus:ring-peacock/20 dark:border-ink/30'
                  }`}
                  placeholder="Confirm new password"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || status === 'loading'}
                className="w-full flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi py-3 px-4 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting || status === 'loading' ? 'Resetting Password...' : 'Reset Password'}
              </button>
            </form>
          )}

          {/* Links */}
          {status !== 'success' && (
            <div className="mt-6 text-center">
              <p className="text-sm text-mithila-brown/80 dark:text-mithila-cream/80">
                Remember your password?{' '}
                <Link href="/" className="text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi font-medium transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

