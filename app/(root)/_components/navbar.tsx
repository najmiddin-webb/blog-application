'use client'

import GlobalSarch from '@/app/(root)/_components/global-search'
import Logo from '@/components/shared/logo'
import ModeToggle from '@/components/shared/mode-toggle'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { SignUpButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Mobile from './mobile'

export default function Navbar() {
	const pathname = usePathname()
	return (
		<div className='border-b w-full py-2 backdrop-blur-xl z-50'>
			<div className='flex justify-between items-center px-2'>
				<Logo />
				<div className='hidden md:flex gap-3 font-createRound'>
					{navLinks.map(navLink => (
						<Link
							key={navLink.route}
							href={navLink.route}
							className={cn(
								'py-1 px-3 rounded-md',
								pathname === `${navLink.route}` &&
									'dark:bg-blue-950 bg-blue-100'
							)}
						>
							{navLink.name}
						</Link>
					))}
				</div>
				<div className='flex gap-2 items-center'>
					<div className='flex gap-3 items-center'>
						<GlobalSarch />
						<ModeToggle />
					</div>
					<Mobile />
					<SignedOut>
						<SignUpButton mode='modal'>
							<Button>Sign up</Button>
						</SignUpButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</div>
	)
}
