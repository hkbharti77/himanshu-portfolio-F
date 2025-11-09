import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'

interface HelpDialogProps {
    onOpen?: () => void;
    className?: string;
}

const HelpDialog = ({ onOpen, className = '' }: HelpDialogProps) => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        if (onOpen) {
            onOpen()
        }
        setIsOpen(true)
    }

    const faqs = [
        {
            question: "How do I get started?",
            answer: "You can get started by creating an account. Click on the Sign up button in the navigation bar to create your account and begin your journey with us."
        },
        {
            question: "How can I contact support?",
            answer: "You can reach our support team via email at support@example.com or by filling out the contact form on our website. We typically respond within 24 hours."
        },
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of services to meet your needs. Visit our Services section to learn more about what we can do for you."
        },
        {
            question: "Is there a mobile app?",
            answer: "Currently, we offer a responsive web application that works seamlessly on all devices. A dedicated mobile app is in development and will be available soon."
        },
        {
            question: "How do I reset my password?",
            answer: "If you've forgotten your password, click on 'Forgot your password?' link on the Sign In page. You'll receive instructions via email to reset your password."
        }
    ]

    return (
        <>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                }}
                className={classNames(
                    'text-slate-700 hover:text-peacock dark:text-slate-200',
                    'px-3 py-2 text-lg font-medium transition-colors duration-200 relative',
                    className
                )}
            >
                Help
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-cream p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-deep">
                                    <div className="flex min-h-full items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-2xl space-y-8">
                                            <div>
                                                <div className="mx-auto h-16 w-16 rounded-full bg-rose/10 dark:bg-rose/10 flex items-center justify-center">
                                                    <QuestionMarkCircleIcon className="h-8 w-8 text-rose dark:text-rose" aria-hidden="true" />
                                                </div>
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-ink">
                                                    Help & Support
                                                </h2>
                                                <p className="mt-2 text-center text-sm text-slate-600 dark:text-ink/80">
                                                    Find answers to common questions or get in touch with our support team
                                                </p>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-ink mb-4">
                                                        Frequently Asked Questions
                                                    </h3>
                                                    <div className="space-y-4">
                                                        {faqs.map((faq, index) => (
                                                            <div key={index} className="border border-slate-200 dark:border-ink/20 rounded-lg p-4">
                                                                <h4 className="font-medium text-slate-900 dark:text-ink mb-2">
                                                                    {faq.question}
                                                                </h4>
                                                                <p className="text-sm text-slate-600 dark:text-ink/70">
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="border-t border-slate-200 dark:border-ink/20 pt-6">
                                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-ink mb-4">
                                                        Still need help?
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-sm font-medium text-slate-700 dark:text-ink">Email:</span>
                                                            <a href="mailto:support@example.com" className="text-sm text-peacock hover:text-rose dark:text-ink dark:hover:text-haldi transition-colors">
                                                                support@example.com
                                                            </a>
                                                        </div>
                                                        <div className="flex items-center space-x-3">
                                                            <span className="text-sm font-medium text-slate-700 dark:text-ink">Response Time:</span>
                                                            <span className="text-sm text-slate-600 dark:text-ink/70">Within 24 hours</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors dark:bg-bg-deep dark:text-ink dark:hover:bg-bg-deep/50"
                                            onClick={closeModal}
                                        >
                                            Close
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

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default HelpDialog;

