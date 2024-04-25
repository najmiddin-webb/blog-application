import AuthorCard from '@/components/cards/author-card'
import { authors } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[20vh] flex-col items-center justify-end'>
				<h2 className='section-title relative flex text-center  font-workSans text-4xl'>
					<span>About</span>
				</h2>
				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link href={'/'} className='hover:underline'>
						Home
					</Link>
					<Dot />
					<span>About</span>
				</div>
			</div>
			<div className='flex items-center justify-center gap-1 font-workSans text-2xl md:text-3xl lg:text-5xl'>
				<h1 className='mt-10 text-center'>
					We are the Sammi, <br /> Team of content writers and designers
				</h1>
			</div>

			<div className='mt-6 grid min-h-96 grid-cols-4 gap-4'>
				<div className='relative col-span-2 h-80 max-md:col-span-4'>
					<Image
						src={'/about/00.jpg'}
						alt='About'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 self-end max-md:col-span-4 max-md:h-72'>
					<Image
						src={'/about/01.jpg'}
						alt='About'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 max-md:col-span-2 max-md:mb-8 max-md:h-72'>
					<Image
						src={'/about/02.jpg'}
						alt='About'
						fill
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='mx-auto mt-12 flex max-w-6xl flex-col gap-7 text-center text-white/70'>
				<p>
					If ever a place existed where you could just go crazy creatively, it
					is definitely your about page. It’s your chance to show your readers
					who you really are. Pictures, quotes, inspirational graphics, whatever
					it is that drives you.. Display it here in a way that only you can.
				</p>
				<p>
					I’ve included a plugin in the setup of this theme that will make
					adding columns to your pages and posts a piece of cake. Let creativity
					take control, and forget about the technical end of things, I’ve got
					your six.
				</p>
			</div>

			<h1 className='section-title relative my-10 flex justify-center  font-workSans text-2xl md:text-3xl lg:text-4xl'>
				<span>Our writers</span>
			</h1>

			<div className='flex flex-wrap justify-around max-md:flex-col max-md:space-y-4'>
				{authors.map(author => (
					<AuthorCard key={author.name} {...author} />
				))}
			</div>
		</div>
	)
}
