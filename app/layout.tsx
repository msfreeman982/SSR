import type { Metadata } from 'next'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'

// These styles apply to every route in the application
import './global.css'

export const metadata: Metadata = {
    title: 'Xtoniq Bank',
    description: 'Xtoniq Bank App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="container">{children}</div>
                <Footer />
            </body>
        </html>
    )
}

import './assets/styles/index.scss'
