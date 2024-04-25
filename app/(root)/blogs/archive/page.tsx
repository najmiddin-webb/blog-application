import { Archive, Dot, Home } from 'lucide-react'
import Link from 'next/link'

export default function page() {
	return (
		<div>
			<div className='relative flex min-h-[20vh] flex-col items-center justify-end'>
				<h2 className='section-title relative flex text-center  font-workSans text-4xl'>
					<span>Archive</span>
				</h2>
				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link href={'/'} className='hover:underline'>
						Home
					</Link>
					<Dot />
					<span>Blogs</span>
					<Dot />
					<span className='text-muted-foreground'>Archive</span>
				</div>
			</div>

			<div className='mt-8 flex flex-col space-y-3'>
				<div className='relative'>
					<span className='relative z-20 font-createRound text-5xl'>2024</span>
					<Archive className='absolute size-16 -translate-x-4 -translate-y-12 opacity-10' />
				</div>
			</div>

			<div className='mt-8 flex flex-col space-y-2'>
				<div className='flex gap-2 text-lg text-muted-foreground'>
					<p>05 Dec</p>
					<Dot className='size-8 text-white' />
					<div className='cursor-pointer hover:text-white hover:underline'>
						14 Feb The AGI hype train is running out of steam
					</div>
				</div>
				<div className='flex gap-2 text-lg text-muted-foreground'>
					<p>01 Nov</p>
					<Dot className='size-8 text-white' />
					<div className='cursor-pointer hover:text-white hover:underline'>
						14 Sep The AGI hype train is running out of steam
					</div>
				</div>
			</div>
		</div>
	)
}
