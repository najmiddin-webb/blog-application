import BlogCard from '@/components/cards/blog-card'
import BgArrow from '@/components/shared/bg-arrow'
import { blogs } from '@/constants'

export default function page() {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[60vh] items-center justify-center'>
				<h1 className='mx-auto w-full max-w-2xl text-center font-createRound text-4xl font-bold shadow-sm md:w-3/5 md:text-5xl lg:text-7xl'>
					Taking control of your daily life is easy when you know how!
				</h1>
				<BgArrow />
			</div>
			<div className='mx-auto flex max-w-6xl justify-center'>
				<h2 className='section-title mb-5 font-createRound text-3xl md:text-3xl lg:text-4xl'>
					<span>Recent posts</span>
				</h2>
			</div>
			<div className='flex flex-col gap-5'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}
