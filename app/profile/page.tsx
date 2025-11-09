'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  UserIcon, 
  EnvelopeIcon, 
  ShieldCheckIcon, 
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

interface UserData {
  id: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
  role: string;
  createdAt: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Get token from localStorage or sessionStorage
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');

        if (!token) {
          setError('Please log in to view your profile');
          setLoading(false);
          // Redirect to home after 2 seconds
          setTimeout(() => {
            router.push('/');
          }, 2000);
          return;
        }

        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/auth/me`, {
          method: 'GET',
          headers: {
            'accept': '*/*',
            'Authorization': `Bearer ${token}`,
          },
        });

        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          setError('Failed to parse server response');
          setLoading(false);
          return;
        }

        if (response.ok && data.success) {
          setUser(data.data?.user || null);
        } else {
          if (response.status === 401) {
            setError('Session expired. Please log in again.');
            // Clear stored token
            localStorage.removeItem('authToken');
            sessionStorage.removeItem('authToken');
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            // Redirect to home after 2 seconds
            setTimeout(() => {
              router.push('/');
            }, 2000);
          } else {
            setError(data.error || data.message || 'Failed to load profile');
          }
        }
      } catch (error) {
        console.error('Profile fetch error:', error);
        setError('Failed to load profile. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    
    // Dispatch custom event to notify Navbar of logout
    window.dispatchEvent(new Event('authChange'));
    
    router.push('/');
    router.refresh();
  };

  return (
    <div className="mithila-bg-primary min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center text-mithila-brown dark:text-mithila-cream hover:text-mithila-red dark:hover:text-mithila-yellow mb-6 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="mithila-card p-6 md:p-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-peacock/10 dark:bg-peacock/20 flex items-center justify-center mb-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-peacock"></div>
                </div>
                <p className="text-mithila-brown dark:text-mithila-cream">Loading your profile...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="mx-auto h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                <XCircleIcon className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-mithila-red dark:text-mithila-yellow mb-2">
                Error Loading Profile
              </h2>
              <p className="text-mithila-brown dark:text-mithila-cream mb-6">{error}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => router.push('/')}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                >
                  Go to Home
                </button>
                {error.includes('log in') && (
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-ink/30 px-6 py-3 text-sm font-medium text-slate-900 dark:text-ink hover:bg-slate-50 dark:hover:bg-bg-deep/50 focus:outline-none focus:ring-2 focus:ring-peacock focus:ring-offset-2 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          ) : user ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center border-b border-slate-200 dark:border-ink/20 pb-6">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-rose to-haldi flex items-center justify-center mb-4">
                  <UserIcon className="h-12 w-12 text-slate-900" />
                </div>
                <h1 className="text-3xl font-bold text-mithila-red dark:text-mithila-yellow mb-2">
                  {user.name}
                </h1>
                <p className="text-mithila-brown dark:text-mithila-cream">
                  Your Profile Information
                </p>
              </div>

              {/* Profile Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="mithila-card p-4">
                  <div className="flex items-start">
                    <div className="bg-mithila-red/10 dark:bg-mithila-yellow/10 rounded-full p-2 mr-4">
                      <UserIcon className="h-5 w-5 text-mithila-red dark:text-mithila-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Full Name
                      </h3>
                      <p className="text-lg font-semibold text-mithila-brown dark:text-mithila-cream">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mithila-card p-4">
                  <div className="flex items-start">
                    <div className="bg-peacock/10 dark:bg-peacock/20 rounded-full p-2 mr-4">
                      <EnvelopeIcon className="h-5 w-5 text-peacock" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Email Address
                      </h3>
                      <p className="text-lg font-semibold text-mithila-brown dark:text-mithila-cream break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Verification Status */}
                <div className="mithila-card p-4">
                  <div className="flex items-start">
                    <div className={`rounded-full p-2 mr-4 ${
                      user.isEmailVerified 
                        ? 'bg-green-100 dark:bg-green-900' 
                        : 'bg-yellow-100 dark:bg-yellow-900'
                    }`}>
                      {user.isEmailVerified ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Email Verification
                      </h3>
                      <p className={`text-lg font-semibold ${
                        user.isEmailVerified 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {user.isEmailVerified ? 'Verified' : 'Not Verified'}
                      </p>
                      {!user.isEmailVerified && (
                        <p className="text-xs text-mithila-brown/60 dark:text-mithila-cream/60 mt-1">
                          Please verify your email to access all features
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="mithila-card p-4">
                  <div className="flex items-start">
                    <div className="bg-mithila-blue/10 dark:bg-mithila-blue/20 rounded-full p-2 mr-4">
                      <ShieldCheckIcon className="h-5 w-5 text-mithila-blue dark:text-mithila-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Account Role
                      </h3>
                      <p className="text-lg font-semibold text-mithila-brown dark:text-mithila-cream capitalize">
                        {user.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Created */}
                <div className="mithila-card p-4 md:col-span-2">
                  <div className="flex items-start">
                    <div className="bg-haldi/10 dark:bg-haldi/20 rounded-full p-2 mr-4">
                      <CalendarIcon className="h-5 w-5 text-haldi" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Member Since
                      </h3>
                      <p className="text-lg font-semibold text-mithila-brown dark:text-mithila-cream">
                        {formatDate(user.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-slate-200 dark:border-ink/20">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 dark:border-ink/30 px-6 py-3 text-sm font-medium text-slate-900 dark:text-ink hover:bg-slate-50 dark:hover:bg-bg-deep/50 focus:outline-none focus:ring-2 focus:ring-peacock focus:ring-offset-2 transition-all duration-300"
                  >
                    Go to Home
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

