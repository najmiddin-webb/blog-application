import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dot, Home, MessageCircle, Phone, Send } from 'lucide-react'
import Link from 'next/link'

export default function page() {
	return (
		<div>
			<div className='relative flex min-h-[20vh] flex-col items-center justify-end'>
				<h2 className='section-title relative flex text-center  font-workSans text-4xl'>
					<span>Contact</span>
				</h2>
				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link href={'/'} className='hover:underline'>
						Home
					</Link>
					<Dot />
					<span className='text-muted-foreground'>Contact</span>
				</div>
			</div>

			<div className='mt-5 grid grid-cols-1 md:grid-cols-2'>
				<div className='w-4/5'>
					<h1 className=' font-createRound text-2xl font-bold md:text-4xl lg:text-5xl'>
						Contact Sammi
					</h1>
					<p className='text-muted-foreground'>
						I am here to help and answer any question you might have. I look
						forward to hearing from you
					</p>
					<div className='mt-5'>
						<div className='my-3 flex items-center gap-2 text-[14px]'>
							<MessageCircle />
							<span>info@sammi.ac</span>
						</div>
						<div className='flex items-center gap-2 text-[14px]'>
							<Phone />
							<span>+98 02 296 4902</span>
						</div>
					</div>
				</div>

				<div className='mt-10 flex flex-col gap-5 md:mt-0'>
					<h1 className='font-createRound text-2xl font-bold md:text-4xl lg:text-5xl'>
						Contact form
					</h1>

					<Textarea
						className='h-32 resize-none'
						placeholder='Ask question or just say Hi'
					></Textarea>

					<Input placeholder='Email adress' />
					<Input placeholder='Your name here' />
					<Button size={'lg'} className='w-fit'>
						<span>Send</span>
						<Send className='ml-2 size-4' />
					</Button>
				</div>
			</div>
		</div>
	)
}
