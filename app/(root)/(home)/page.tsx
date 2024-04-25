import BlogCard from '@/components/cards/blog-card'
import BgArrow from '@/components/shared/bg-arrow'
import { blogs } from '@/constants'

export default function page() {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[60vh] flex items-center jusitfy-center'>
				<h1 className='text-4xl md:text-5xl lg:txt-7xl shadow-sm font-bold max-w-2xl mx-auto font-createRound w-5/5 md:w-3/5 text-center'>
					Taking control of your daily life is easy when you know how!
				</h1>
				<BgArrow />
			</div>
			<div className='max-w-6xl mx-auto justify-center flex'>
				<h2 className='text-3xl mb-5 md:text-3xl lg:text-4xl font-createRound section-title'>
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
