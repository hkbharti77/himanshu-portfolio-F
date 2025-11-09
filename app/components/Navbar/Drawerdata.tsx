'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import Helpdialog from "./Helpdialog";

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

interface DrawerdataProps {
  onHelpClick?: () => void;
}

const Data = ({ onHelpClick }: DrawerdataProps) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string>('');
  const [userRole, setUserRole] = useState<string>('');

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

    checkAuth();
    const handleAuthChange = () => checkAuth();
    window.addEventListener('authChange', handleAuthChange);
    window.addEventListener('storage', checkAuth);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleProfileClick = () => {
    if (onHelpClick) onHelpClick();
    router.push('/profile');
  };

  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onHelpClick}
                className={classNames(
                  item.current 
                    ? 'text-haldi font-bold' 
                    : 'text-slate-900 hover:text-peacock dark:text-ink dark:hover:text-peacock',
                  'px-3 py-3 text-lg block rounded-lg hover:bg-slate-100/50 dark:hover:bg-bg-deep/50 transition-colors relative'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
                {/* Leaf-motif underline animation */}
                <span className={`absolute bottom-0 left-3 h-0.5 bg-haldi rounded-full transition-all duration-300 ${item.current ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'}`}></span>
              </Link>
            ))}
            <div onClick={(e) => e.stopPropagation()}>
              <Helpdialog 
                onOpen={onHelpClick}
                className="text-slate-900 hover:text-peacock dark:text-ink dark:hover:text-peacock w-full text-left px-3 py-3 text-lg rounded-lg hover:bg-slate-100/50 dark:hover:bg-bg-deep/50 transition-colors relative block"
              />
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-ink/20"></div>
            
            {isLoggedIn ? (
              <>
                {userRole === 'admin' && (
                  <Link
                    href="/admin"
                    onClick={onHelpClick}
                    className="w-full flex items-center justify-center gap-2 bg-mithila-blue/10 dark:bg-mithila-blue/20 text-mithila-blue dark:text-mithila-blue hover:bg-mithila-blue/20 dark:hover:bg-mithila-blue/30 transition-colors font-medium py-3 px-4 rounded-lg mb-3"
                  >
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span>Admin Dashboard</span>
                  </Link>
                )}
                <button
                  onClick={handleProfileClick}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose to-haldi text-slate-900 font-medium py-3 px-4 rounded-full hover:opacity-90 transition-all duration-300 ring-1 ring-white/10 hover:scale-[1.01]"
                >
                  <UserIcon className="h-5 w-5" />
                  <span>{userName ? `Profile - ${userName}` : 'Profile'}</span>
                </button>
              </>
            ) : (
              <>
                <button className="w-full text-slate-900 font-medium py-3 px-4 rounded-lg border border-slate-500/40 hover:border-peacock hover:text-peacock transition-colors dark:text-ink dark:border-ink/30 dark:hover:border-peacock dark:hover:text-peacock">
                  Sign In
                </button>
                <button className="w-full bg-gradient-to-r from-rose to-haldi text-slate-900 font-medium my-3 py-3 px-4 rounded-full hover:opacity-90 transition-all duration-300 ring-1 ring-white/10 hover:scale-[1.01]">
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;