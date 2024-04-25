'use client'

import Logo from '@/components/shared/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PersonStanding } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
	const [active, setActive] = useState(false)
	return (
		<>
			<div className='flex py-24 flex-col justify-center items-center text-3xl md:text-4xl lg:text-6xl font-createRound'>
				<h1 className='text-center w-3/5'>
					Get latest posts delivered right to your inbox
				</h1>
				<div className='flex gap-2 mt-7 items-center'>
					<Input
						className='w-[400px]'
						onFocus={() => setActive(true)}
						placeholder='Your email adress...'
						onBlur={() => setActive(false)}
					/>
					<Button
						size={'lg'}
						variant={active ? 'default' : 'outline'}
						className='border'
					>
						<PersonStanding className='size-6' />
						Join Today
					</Button>
				</div>
			</div>

			<div className='flex items-center justify-between mb-5'>
				<Logo />
				<Link href={'https://t.me/webdeveloper707'}>
					Created by Najmiddin Turgunpo`latov
				</Link>
			</div>
		</>
	)
}
