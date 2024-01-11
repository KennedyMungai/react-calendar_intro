import ReduxProvider from '@/providers/ReduxProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'React Calendar',
	description: 'A simple project for the React Calendar'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<ReduxProvider>
				<body className={inter.className}>{children}</body>
			</ReduxProvider>
		</html>
	)
}
