import Link from 'next/link'

export default function Logo() {
	return (
		<Link href={'/'}>
			<h1 className='text-2xl md:text-3xl lg:text-5xl font-bold'>Sammi</h1>
		</Link>
	)
}
