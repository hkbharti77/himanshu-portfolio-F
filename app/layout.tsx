import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './components/ThemeProvider';


export const metadata = {
  title: 'StackSphere - Full-Stack Development & AI Solutions',
  description: 'Professional full-stack development services. Building scalable web applications, APIs, AI-powered features, and modern user interfaces. Fast, secure, and production-ready solutions.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="mithila-bg-primary">
      <body className="mithila-bg-primary mithila-text-primary">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>
            <main className="flex-grow pt-20"> {/* Added pt-20 to account for navbar height */}
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}