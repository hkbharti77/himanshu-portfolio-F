'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeftIcon, 
  UserIcon, 
  CalendarIcon,
  ShieldCheckIcon,
  XCircleIcon,
  CheckCircleIcon,
  PencilIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  isEmailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminUsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [user, setUser] = useState<{ role: string; name: string } | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [updatingRole, setUpdatingRole] = useState(false);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get token and user from storage
        const authToken = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');

        if (!authToken || !userStr) {
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
        setToken(authToken);

        // Fetch users
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const response = await fetch(`${apiUrl}/api/admin/users`, {
          method: 'GET',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${authToken}`,
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
          setUsers(data.data || []);
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
            setError(data.error || data.message || 'Failed to load users');
          }
        }
      } catch (error) {
        console.error('Admin users page error:', error);
        setError('Failed to load users. Please check your connection and try again.');
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

  const handleViewUser = async (userId: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admin/users/${userId}`, {
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
        alert('Failed to parse server response');
        return;
      }

      if (response.ok && data.success) {
        setSelectedUser(data.data.user);
        setShowUserModal(true);
      } else {
        alert(data.error || data.message || 'Failed to load user details');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      alert('Failed to load user details');
    }
  };

  const handleUpdateRole = async (userId: string, newRole: 'user' | 'admin') => {
    if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) {
      return;
    }

    setUpdatingRole(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/admin/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ role: newRole }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        alert('Failed to parse server response');
        setUpdatingRole(false);
        return;
      }

      if (response.ok && data.success) {
        // Update the user in the list
        setUsers(users.map(u => u._id === userId ? { ...u, role: newRole } : u));
        if (selectedUser && selectedUser._id === userId) {
          setSelectedUser({ ...selectedUser, role: newRole });
        }
        alert('User role updated successfully!');
      } else {
        alert(data.error || data.message || 'Failed to update user role');
      }
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Failed to update user role');
    } finally {
      setUpdatingRole(false);
    }
  };

  if (loading) {
    return (
      <div className="mithila-bg-primary min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-peacock/10 dark:bg-peacock/20 flex items-center justify-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-peacock"></div>
          </div>
          <p className="text-mithila-brown dark:text-mithila-cream">Loading users...</p>
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
              href="/admin"
              className="inline-flex items-center text-mithila-brown dark:text-mithila-cream hover:text-mithila-red dark:hover:text-mithila-yellow mb-2 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Admin Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-mithila-red dark:text-mithila-yellow">
              User Management
            </h1>
            <p className="text-mithila-brown dark:text-mithila-cream mt-1">
              Welcome, {user?.name} - Manage all users
            </p>
          </div>
          <div className="flex items-center gap-2 bg-mithila-blue/10 dark:bg-mithila-blue/20 px-4 py-2 rounded-lg">
            <ShieldCheckIcon className="h-5 w-5 text-mithila-blue" />
            <span className="text-sm font-medium text-mithila-brown dark:text-mithila-cream">
              Admin
            </span>
          </div>
        </div>

        {/* Stats Card */}
        <div className="mithila-card p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-mithila-red dark:text-mithila-yellow mb-1">
                Total Users
              </h2>
              <p className="text-3xl font-bold text-mithila-brown dark:text-mithila-cream">
                {users.length}
              </p>
              <p className="text-sm text-mithila-brown/70 dark:text-mithila-cream/70 mt-2">
                {users.filter(u => u.role === 'admin').length} Admin{users.filter(u => u.role === 'admin').length !== 1 ? 's' : ''} • {users.filter(u => u.role === 'user').length} User{users.filter(u => u.role === 'user').length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="h-16 w-16 rounded-full bg-mithila-blue/10 dark:bg-mithila-blue/20 flex items-center justify-center">
              <UserIcon className="h-8 w-8 text-mithila-blue" />
            </div>
          </div>
        </div>

        {/* Users Table */}
        {users.length === 0 ? (
          <div className="mithila-card p-12 text-center">
            <UserIcon className="h-16 w-16 text-mithila-brown/30 dark:text-mithila-cream/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-mithila-brown dark:text-mithila-cream mb-2">
              No Users Found
            </h3>
            <p className="text-mithila-brown/80 dark:text-mithila-cream/80">
              No users have been registered yet.
            </p>
          </div>
        ) : (
          <div className="mithila-card p-6 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-ink/20">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      User
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Email Verified
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Created
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-mithila-brown dark:text-mithila-cream">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((userItem) => (
                    <tr
                      key={userItem._id}
                      className="border-b border-slate-100 dark:border-ink/10 hover:bg-slate-50 dark:hover:bg-bg-deep/30 transition-colors"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-rose to-haldi flex items-center justify-center mr-3">
                            <UserIcon className="h-5 w-5 text-slate-900" />
                          </div>
                          <span className="font-medium text-mithila-brown dark:text-mithila-cream">
                            {userItem.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <a
                          href={`mailto:${userItem.email}`}
                          className="text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi transition-colors break-all"
                        >
                          {userItem.email}
                        </a>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            userItem.role === 'admin'
                              ? 'bg-mithila-blue/10 text-mithila-blue dark:bg-mithila-blue/20 dark:text-mithila-blue'
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {userItem.role === 'admin' && (
                            <ShieldCheckIcon className="h-3 w-3 mr-1" />
                          )}
                          {userItem.role.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          {userItem.isEmailVerified ? (
                            <>
                              <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                              <span className="text-green-600 dark:text-green-400 text-sm">Verified</span>
                            </>
                          ) : (
                            <>
                              <XCircleIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                              <span className="text-yellow-600 dark:text-yellow-400 text-sm">Unverified</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-sm text-mithila-brown/70 dark:text-mithila-cream/70">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {formatDate(userItem.createdAt)}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewUser(userItem._id)}
                            className="p-2 rounded-lg bg-peacock/10 dark:bg-peacock/20 text-peacock hover:bg-peacock/20 dark:hover:bg-peacock/30 transition-colors"
                            title="View Details"
                          >
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleUpdateRole(userItem._id, userItem.role === 'admin' ? 'user' : 'admin')}
                            disabled={updatingRole}
                            className="p-2 rounded-lg bg-mithila-blue/10 dark:bg-mithila-blue/20 text-mithila-blue hover:bg-mithila-blue/20 dark:hover:bg-mithila-blue/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            title={userItem.role === 'admin' ? 'Change to User' : 'Change to Admin'}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* User Details Modal */}
        {showUserModal && selectedUser && (
          <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="mithila-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-mithila-red dark:text-mithila-yellow">
                  User Details
                </h2>
                <button
                  onClick={() => {
                    setShowUserModal(false);
                    setSelectedUser(null);
                  }}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <XCircleIcon className="h-6 w-6 text-mithila-brown dark:text-mithila-cream" />
                </button>
              </div>

              <div className="space-y-4">
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
                        {selectedUser.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mithila-card p-4">
                  <div className="flex items-start">
                    <div className="bg-peacock/10 dark:bg-peacock/20 rounded-full p-2 mr-4">
                      <UserIcon className="h-5 w-5 text-peacock" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Email Address
                      </h3>
                      <p className="text-lg font-semibold text-mithila-brown dark:text-mithila-cream break-all">
                        {selectedUser.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Role */}
                <div className="mithila-card p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className="bg-mithila-blue/10 dark:bg-mithila-blue/20 rounded-full p-2 mr-4">
                        <ShieldCheckIcon className="h-5 w-5 text-mithila-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                          Role
                        </h3>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            selectedUser.role === 'admin'
                              ? 'bg-mithila-blue/10 text-mithila-blue dark:bg-mithila-blue/20 dark:text-mithila-blue'
                              : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {selectedUser.role === 'admin' && (
                            <ShieldCheckIcon className="h-3 w-3 mr-1" />
                          )}
                          {selectedUser.role.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleUpdateRole(selectedUser._id, selectedUser.role === 'admin' ? 'user' : 'admin')}
                      disabled={updatingRole}
                      className="px-4 py-2 rounded-lg bg-mithila-blue/10 dark:bg-mithila-blue/20 text-mithila-blue hover:bg-mithila-blue/20 dark:hover:bg-mithila-blue/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                    >
                      {updatingRole ? 'Updating...' : `Change to ${selectedUser.role === 'admin' ? 'User' : 'Admin'}`}
                    </button>
                  </div>
                </div>

                {/* Email Verification */}
                <div className="mithila-card p-4">
                  <div className="flex items-start">
                    <div
                      className={`rounded-full p-2 mr-4 ${
                        selectedUser.isEmailVerified
                          ? 'bg-green-100 dark:bg-green-900'
                          : 'bg-yellow-100 dark:bg-yellow-900'
                      }`}
                    >
                      {selectedUser.isEmailVerified ? (
                        <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircleIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                        Email Verification Status
                      </h3>
                      <p
                        className={`text-lg font-semibold ${
                          selectedUser.isEmailVerified
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-yellow-600 dark:text-yellow-400'
                        }`}
                      >
                        {selectedUser.isEmailVerified ? 'Verified' : 'Not Verified'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mithila-card p-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-mithila-brown/70 dark:text-mithila-cream/70 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                          Created At
                        </h3>
                        <p className="text-sm text-mithila-brown dark:text-mithila-cream">
                          {formatDate(selectedUser.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mithila-card p-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-mithila-brown/70 dark:text-mithila-cream/70 mr-3" />
                      <div>
                        <h3 className="text-sm font-medium text-mithila-brown/70 dark:text-mithila-cream/70 mb-1">
                          Last Updated
                        </h3>
                        <p className="text-sm text-mithila-brown dark:text-mithila-cream">
                          {formatDate(selectedUser.updatedAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

