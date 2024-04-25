import BlogCard from '@/components/cards/blog-card'
import { blogs } from '@/constants'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

export default function page() {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[20vh] flex-col items-center justify-end'>
				<h2 className='section-title relative flex text-center  font-workSans text-4xl'>
					<span>Blog</span>
				</h2>

				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link href={'/'} className='hover:underline'>
						Home
					</Link>
					<Dot />
					<span>Blogs</span>
				</div>
			</div>

			<div className='mt-24 grid grid-cols-1 gap-x-4 gap-y-24 md:grid-cols-2'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}
