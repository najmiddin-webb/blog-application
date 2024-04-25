import Link from 'next/link'

export default function Logo() {
	return (
		<Link href={'/'}>
			<h1 className='text-2xl font-bold md:text-3xl lg:text-5xl'>Sammi</h1>
		</Link>
	)
}
