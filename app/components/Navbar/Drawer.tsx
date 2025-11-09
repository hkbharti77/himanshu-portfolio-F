import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../Logo/Logo';

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                " fixed overflow-hidden z-50 bg-black/30 backdrop-blur-sm inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
            <section
        className={
            "w-80 max-w-lg left-0 absolute bg-cream h-full shadow-2xl delay-400 duration-500 ease-in-out transition-all transform dark:bg-bg-deep " +
            (isOpen ? "translate-x-0" : "-translate-x-full")
        }
    >
 
                <article className="relative w-full pb-10 flex flex-col space-y-6 h-full">
                    <header className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-ink/20">
                        <div 
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <Logo variant="navbar" showIcon={true} />
                        </div>
                        <XMarkIcon className="block h-6 w-6 text-slate-900 dark:text-ink cursor-pointer" onClick={() => {
                            setIsOpen(false);
                        }} />
                    </header>
                    <div onClick={() => {
                        setIsOpen(false);
                    }} className="px-6 text-slate-900 dark:text-ink">{children}</div>
                </article>
            </section>
            <section
                className=" w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;