import { Oxanium, Noto_Sans_KR, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const oxanium = Oxanium({
    weight: '500',
    variable: '--font-oxanium',
    subsets: ['latin'],
    display: 'swap'
})

const noto_sans_kr  = Noto_Sans_KR({
    weight: '500',
    variable: '--font-noto-sans-kr',
    preload: false,
    display: 'swap'
})

const noto_sans_jp = Noto_Sans_JP({
    weight: '500',
    variable: '--font-noto-sans-jp',
    preload: false,
    display: 'swap'
})

export const metadata = {
    title: "Track Player",
    description: "tracks from youtube playlist",
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body
                className={`${oxanium.variable} ${noto_sans_kr.variable} ${noto_sans_jp.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}

export default RootLayout
