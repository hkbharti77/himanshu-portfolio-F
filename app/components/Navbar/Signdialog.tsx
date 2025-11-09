'use client';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, FormEvent } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Signin = () => {
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const [rememberMe, setRememberMe] = useState(false);

    const closeModal = () => {
        setIsOpen(false)
        // Reset form when closing
        setFormData({ email: '', password: '' });
        setErrors({});
        setSubmitStatus({ type: null, message: '' });
        setRememberMe(false);
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setRememberMe(checked);
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
            // Clear error for this field when user starts typing
            if (errors[name]) {
                setErrors((prev) => ({ ...prev, [name]: '' }));
            }
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
            const response = await fetch(`${apiUrl}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email.trim(),
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                // Store token and user data
                if (data.data?.token) {
                    // Use localStorage or sessionStorage based on remember me
                    const storage = rememberMe ? localStorage : sessionStorage;
                    storage.setItem('authToken', data.data.token);
                    storage.setItem('user', JSON.stringify(data.data.user));
                }

                setSubmitStatus({
                    type: 'success',
                    message: data.message || 'Login successful! Redirecting...',
                });

                // Reset form
                setFormData({
                    email: '',
                    password: '',
                });
                setRememberMe(false);

                // Dispatch custom event to notify Navbar of login
                window.dispatchEvent(new Event('authChange'));

                // Close modal and reload page after 1 second
                setTimeout(() => {
                    closeModal();
                    router.refresh(); // Refresh to update UI with logged-in state
                    window.location.href = '/'; // Redirect to home
                }, 1000);
            } else {
                // Handle validation errors from backend
                let errorMessage = data.error || data.message || 'Invalid credentials. Please try again.';
                
                if (data.errors && Array.isArray(data.errors)) {
                    const fieldErrors: Record<string, string> = {};
                    const errorMessages: string[] = [];
                    
                    data.errors.forEach((err: any) => {
                        if (err.field || err.param) {
                            const field = err.field || err.param;
                            fieldErrors[field] = err.msg || err.message;
                        } else {
                            errorMessages.push(err.msg || err.message || err);
                        }
                    });
                    
                    if (Object.keys(fieldErrors).length > 0) {
                        setErrors((prev) => ({ ...prev, ...fieldErrors }));
                    }
                    
                    if (errorMessages.length > 0) {
                        errorMessage = errorMessages.join(', ');
                    }
                }
                
                setSubmitStatus({
                    type: 'error',
                    message: errorMessage,
                });
            }
        } catch (error) {
            console.error('Login error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Failed to login. Please check your connection and try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
                <div className='hidden lg:block'>
                    <button 
                        type="button" 
                        className='text-slate-700 dark:text-slate-200 font-medium px-6 py-2 rounded-lg border border-slate-500/40 hover:border-peacock hover:text-peacock transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-peacock/60 focus:ring-offset-2 focus:ring-offset-slate-900'
                        onClick={openModal}
                    >
                        Sign In
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-cream p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-deep">
                                    <div className="flex min-h-full items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <div className="mx-auto h-16 w-16 rounded-full bg-rose/10 dark:bg-rose/10 flex items-center justify-center">
                                                    <LockClosedIcon className="h-8 w-8 text-rose dark:text-rose" aria-hidden="true" />
                                                </div>
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-ink">
                                                    Sign in to your account
                                                </h2>
                                                <p className="mt-2 text-center text-sm text-slate-600 dark:text-ink/80">
                                                    Enter your credentials to access your account
                                                </p>
                                            </div>
                                            {/* Status Messages */}
                                            {submitStatus.type && (
                                                <div
                                                    className={`p-4 rounded-lg ${
                                                        submitStatus.type === 'success'
                                                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                                    }`}
                                                >
                                                    {submitStatus.message}
                                                </div>
                                            )}

                                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                                <div className="space-y-4 rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 dark:text-ink mb-1">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email-address"
                                                            name="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            autoComplete="email"
                                                            required
                                                            className={`relative block w-full appearance-none rounded-lg border px-4 py-3 text-slate-900 placeholder-slate-500 focus:z-10 focus:outline-none focus:ring-2 sm:text-sm dark:bg-bg-deep/10 dark:text-ink dark:placeholder-ink/50 ${
                                                                errors.email
                                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                                                    : 'border-slate-300 focus:border-peacock focus:ring-peacock/20 dark:border-ink/30'
                                                            }`}
                                                            placeholder="Email address"
                                                        />
                                                        {errors.email && (
                                                            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-ink mb-1">
                                                            Password
                                                        </label>
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            autoComplete="current-password"
                                                            required
                                                            className={`relative block w-full appearance-none rounded-lg border px-4 py-3 text-slate-900 placeholder-slate-500 focus:z-10 focus:outline-none focus:ring-2 sm:text-sm dark:bg-bg-deep/10 dark:text-ink dark:placeholder-ink/50 ${
                                                                errors.password
                                                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                                                    : 'border-slate-300 focus:border-peacock focus:ring-peacock/20 dark:border-ink/30'
                                                            }`}
                                                            placeholder="Password"
                                                        />
                                                        {errors.password && (
                                                            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            checked={rememberMe}
                                                            onChange={handleChange}
                                                            className="h-4 w-4 rounded border-slate-300 text-rose focus:ring-peacock dark:bg-bg-deep/10 dark:border-ink/30"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-ink">
                                                            Remember me
                                                        </label>
                                                    </div>

                                                    <div className="text-sm">
                                                        <Link 
                                                            href="/forgot-password"
                                                            onClick={closeModal}
                                                            className="font-medium text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi transition-colors"
                                                        >
                                                            Forgot your password?
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="group relative flex w-full justify-center rounded-lg border border-transparent bg-rose py-3 px-4 text-sm font-medium text-slate-900 hover:bg-haldi focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gradient-to-r dark:from-rose dark:to-haldi dark:text-slate-900"
                                                    >
                                                        {isSubmitting ? 'Signing in...' : 'Sign in'}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors dark:bg-bg-deep dark:text-ink dark:hover:bg-bg-deep/50"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Signin;