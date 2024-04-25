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
		<div className='z-50 w-full border-b py-2 backdrop-blur-xl'>
			<div className='flex items-center justify-between px-2'>
				<Logo />
				<div className='hidden gap-3 font-createRound md:flex'>
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
				<div className='flex items-center gap-2'>
					<div className='flex items-center gap-3'>
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
