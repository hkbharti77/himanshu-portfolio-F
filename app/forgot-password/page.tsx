'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon, EnvelopeIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    // Clear error when user starts typing
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        setSubmitStatus({
          type: 'error',
          message: `Server error: ${response.status} ${response.statusText}`,
        });
        setIsSubmitting(false);
        return;
      }

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Password reset email sent successfully! Please check your inbox.',
        });
        setEmail(''); // Clear email field
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || data.message || 'Failed to send password reset email. Please try again.',
        });
      }
    } catch (error) {
      console.error('Forgot password error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send password reset email. Please check your connection and try again.',
      });
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
              <EnvelopeIcon className="h-8 w-8 text-peacock" />
            </div>
            <h1 className="text-3xl font-bold text-mithila-red dark:text-mithila-yellow mb-2">
              Forgot Password?
            </h1>
            <p className="text-mithila-brown dark:text-mithila-cream">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-4 p-4 rounded-lg ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              <div className="flex items-start">
                {submitStatus.type === 'success' ? (
                  <CheckCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircleIcon className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                )}
                <p>{submitStatus.message}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-mithila-brown dark:text-mithila-cream mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 sm:text-sm dark:bg-bg-deep/10 dark:text-ink dark:placeholder-ink/50 ${
                  errors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                    : 'border-slate-300 focus:border-peacock focus:ring-peacock/20 dark:border-ink/30'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi py-3 px-4 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-mithila-brown/80 dark:text-mithila-cream/80">
              Remember your password?{' '}
              <Link href="/" className="text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi font-medium transition-colors">
                Sign In
              </Link>
            </p>
            <p className="text-sm text-mithila-brown/80 dark:text-mithila-cream/80">
              Don&apos;t have an account?{' '}
              <Link href="/" className="text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi font-medium transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

