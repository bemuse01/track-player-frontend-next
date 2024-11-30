import { Oxanium } from 'next/font/google'
import './globals.css'

const oxanium = Oxanium({
    weight: '500',
    variable: '--font-open-sans',
    subsets: ['latin']
})

export const metadata = {
    title: "Track Player",
    description: "tracks from youtube playlist",
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body
                className={`${oxanium.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}

export default RootLayout
