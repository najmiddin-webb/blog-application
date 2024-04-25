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
			<div className='flex flex-col items-center justify-center py-24 font-createRound text-3xl md:text-4xl lg:text-6xl'>
				<h1 className='w-3/5 text-center'>
					Get latest posts delivered right to your inbox
				</h1>
				<div className='mt-7 flex items-center gap-2'>
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

			<div className='mb-5 flex items-center justify-between'>
				<Logo />
				<Link href={'https://t.me/webdeveloper707'}>
					Created by Najmiddin Turgunpo`latov
				</Link>
			</div>
		</>
	)
}
