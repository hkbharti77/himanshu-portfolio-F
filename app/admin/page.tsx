'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  EnvelopeIcon, 
  UserIcon, 
  CalendarIcon,
  ShieldCheckIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState<{ role: string; name: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get token and user from storage
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');

        if (!token || !userStr) {
          setError('Please log in to access the admin panel');
          setLoading(false);
          setTimeout(() => {
            router.push('/');
          }, 2000);
          return;
        }

        let userData;
        try {
          userData = JSON.parse(userStr);
        } catch (error) {
          setError('Invalid user data');
          setLoading(false);
          return;
        }

        // Check if user is admin
        if (userData.role !== 'admin') {
          setError('Access denied. Admin privileges required.');
          setLoading(false);
          setTimeout(() => {
            router.push('/');
          }, 2000);
          return;
        }

        setUser(userData);

        // Fetch contacts
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
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
          setContacts(data.data || []);
        } else {
          if (response.status === 401) {
            setError('Session expired. Please log in again.');
            localStorage.removeItem('authToken');
            sessionStorage.removeItem('authToken');
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
            setTimeout(() => {
              router.push('/');
            }, 2000);
          } else if (response.status === 403) {
            setError('Access denied. Admin privileges required.');
            setTimeout(() => {
              router.push('/');
            }, 2000);
          } else {
            setError(data.error || data.message || 'Failed to load contacts');
          }
        }
      } catch (error) {
        console.error('Admin page error:', error);
        setError('Failed to load admin data. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className="mithila-bg-primary min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-peacock/10 dark:bg-peacock/20 flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-peacock"></div>
          </div>
          <p className="text-mithila-brown dark:text-mithila-cream">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mithila-bg-primary min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="mithila-card p-8 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
              <XCircleIcon className="h-10 w-10 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-mithila-red dark:text-mithila-yellow mb-2">
              Access Denied
            </h2>
            <p className="text-mithila-brown dark:text-mithila-cream mb-6">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-rose to-haldi px-6 py-3 text-sm font-medium text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mithila-bg-primary min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-mithila-brown dark:text-mithila-cream hover:text-mithila-red dark:hover:text-mithila-yellow mb-2 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-mithila-red dark:text-mithila-yellow">
              Admin Dashboard
            </h1>
            <p className="text-mithila-brown dark:text-mithila-cream mt-1">
              Welcome, {user?.name} - Manage contact submissions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/users"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-mithila-blue/10 dark:bg-mithila-blue/20 text-mithila-blue dark:text-mithila-blue hover:bg-mithila-blue/20 dark:hover:bg-mithila-blue/30 transition-colors text-sm font-medium"
            >
              <UserIcon className="h-4 w-4 mr-2" />
              Manage Users
            </Link>
            <div className="flex items-center gap-2 bg-mithila-blue/10 dark:bg-mithila-blue/20 px-4 py-2 rounded-lg">
              <ShieldCheckIcon className="h-5 w-5 text-mithila-blue" />
              <span className="text-sm font-medium text-mithila-brown dark:text-mithila-cream">
                Admin
              </span>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="mithila-card p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-mithila-red dark:text-mithila-yellow mb-1">
                Contact Submissions
              </h2>
              <p className="text-3xl font-bold text-mithila-brown dark:text-mithila-cream">
                {contacts.length}
              </p>
            </div>
            <div className="h-16 w-16 rounded-full bg-peacock/10 dark:bg-peacock/20 flex items-center justify-center">
              <EnvelopeIcon className="h-8 w-8 text-peacock" />
            </div>
          </div>
        </div>

        {/* Contacts Table */}
        {contacts.length === 0 ? (
          <div className="mithila-card p-12 text-center">
            <EnvelopeIcon className="h-16 w-16 text-mithila-brown/30 dark:text-mithila-cream/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-mithila-brown dark:text-mithila-cream mb-2">
              No Contact Submissions
            </h3>
            <p className="text-mithila-brown/80 dark:text-mithila-cream/80">
              No contact form submissions have been received yet.
            </p>
          </div>
        ) : (
          <div className="mithila-card p-6 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-ink/20">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Subject
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Message
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr
                      key={contact._id}
                      className="border-b border-slate-100 dark:border-ink/10 hover:bg-slate-50 dark:hover:bg-bg-deep/30 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-rose to-haldi flex items-center justify-center mr-3">
                            <UserIcon className="h-4 w-4 text-slate-900" />
                          </div>
                          <span className="font-medium text-mithila-brown dark:text-mithila-cream">
                            {contact.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <EnvelopeIcon className="h-4 w-4 text-peacock mr-2" />
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi transition-colors break-all"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-mithila-brown dark:text-mithila-cream">
                          {contact.subject}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-mithila-brown dark:text-mithila-cream line-clamp-2 max-w-xs">
                          {contact.message}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-sm text-mithila-brown/70 dark:text-mithila-cream/70">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {formatDate(contact.createdAt)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

