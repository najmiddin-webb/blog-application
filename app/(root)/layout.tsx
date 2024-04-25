import { ChildProps } from '@/types'
import { Metadata } from 'next'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

export const metadata: Metadata = {
	title: 'Home || Blog App',
	description: 'Web dasturlashga oid eng so`ngi bloglar!',
}
export default function layout({ children }: ChildProps) {
	return (
		<div className='container mx-auto'>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}
