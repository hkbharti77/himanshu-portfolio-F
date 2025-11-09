'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, UserIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Helpdialog from "./Helpdialog";
import ThemeToggle from '../ThemeToggle';
import Logo from '../Logo/Logo';


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/#services', current: false },
    { name: 'About', href: '/#about', current: false },
    { name: 'Project', href: '/#project', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [userName, setUserName] = React.useState<string>('');
    const [userRole, setUserRole] = React.useState<string>('');

    // Check if user is logged in
    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
            const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
            
            if (token && userStr) {
                try {
                    const user = JSON.parse(userStr);
                    setIsLoggedIn(true);
                    setUserName(user.name || '');
                    setUserRole(user.role || '');
                } catch (error) {
                    setIsLoggedIn(false);
                    setUserName('');
                    setUserRole('');
                }
            } else {
                setIsLoggedIn(false);
                setUserName('');
                setUserRole('');
            }
        };

        // Check on mount
        checkAuth();

        // Listen for storage changes (when user logs in/out in another tab)
        window.addEventListener('storage', checkAuth);

        // Custom event listener for login/logout
        const handleAuthChange = () => checkAuth();
        window.addEventListener('authChange', handleAuthChange);

        return () => {
            window.removeEventListener('storage', checkAuth);
            window.removeEventListener('authChange', handleAuthChange);
        };
    }, []);

    const handleProfileClick = () => {
        router.push('/profile');
    };

    return (
        <Disclosure as="nav" className="navbar sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
            {/* Gradient border implementation using pseudo-elements */}
            <>
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-rose-500/10 to-transparent"></div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">

                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <Logo variant="navbar" showIcon={true} />
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:block m-auto">
                                <div className="flex space-x-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current 
                                                    ? 'text-haldi font-bold' 
                                                    : 'text-slate-700 hover:text-peacock dark:text-slate-200',
                                                'px-3 py-2 text-lg font-medium transition-colors duration-200 relative'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                            {/* Leaf-motif underline animation */}
                                            <span className={`absolute bottom-0 left-0 h-0.5 bg-haldi rounded-full transition-all duration-300 ${item.current ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </Link>
                                    ))}
                                    <Helpdialog />
                                </div>
                            </div>
                        </div>

                        {/* THEME TOGGLE */}
                        <div className="hidden lg:block mr-6">
                            <ThemeToggle />
                        </div>

                        {/* PROFILE ICON (when logged in) or SIGN IN/SIGN UP (when not logged in) */}
                        {isLoggedIn ? (
                            <div className="hidden lg:flex items-center gap-3">
                                {userRole === 'admin' && (
                                    <Link
                                        href="/admin"
                                        className="inline-flex items-center px-4 py-2 rounded-lg bg-mithila-blue/10 dark:bg-mithila-blue/20 text-mithila-blue dark:text-mithila-blue hover:bg-mithila-blue/20 dark:hover:bg-mithila-blue/30 transition-colors text-sm font-medium"
                                    >
                                        <ShieldCheckIcon className="h-4 w-4 mr-2" />
                                        Admin
                                    </Link>
                                )}
                                <button
                                    onClick={handleProfileClick}
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-rose to-haldi text-slate-900 hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2"
                                    title={userName ? `Profile - ${userName}` : 'Profile'}
                                    aria-label="View Profile"
                                >
                                    <UserIcon className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* SIGNIN DIALOG */}
                                <div className="hidden lg:block mr-4">
                                    <Signdialog />
                                </div>

                                {/* REGISTER DIALOG */}
                                <div className="hidden lg:block mr-6">
                                    <Registerdialog />
                                </div>
                            </>
                        )}

                        {/* DRAWER FOR MOBILE VIEW */}
                        {/* DRAWER ICON */}
                        <div className='block lg:hidden flex items-center'>
                            <ThemeToggle />
                            {isLoggedIn && (
                                <button
                                    onClick={handleProfileClick}
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-rose to-haldi text-slate-900 hover:opacity-90 transition-all duration-300 ml-4 focus:outline-none focus:ring-2 focus:ring-rose focus:ring-offset-2"
                                    title={userName ? `Profile - ${userName}` : 'Profile'}
                                    aria-label="View Profile"
                                >
                                    <UserIcon className="h-5 w-5" />
                                </button>
                            )}
                            <Bars3Icon className="block h-6 w-6 text-slate-700 dark:text-slate-200 ml-4" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata onHelpClick={() => setIsOpen(false)} />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;