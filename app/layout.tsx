import { ThemeProvider } from '@/components/providers/theme-provider'
import { ChildProps } from '@/types'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const createRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-createRound',
})

const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${createRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
