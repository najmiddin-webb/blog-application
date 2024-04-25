import Logo from '@/components/shared/logo'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Mobile() {
	const pathname = usePathname()
	return (
		<div className='flex md:hidden'>
			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetContent side={'left'}>
					<SheetHeader>
						<SheetTitle>
							<Logo />
							<div className='mt-2 w-full border bg-secondary'></div>
						</SheetTitle>
						{navLinks.map(nav => (
							<Link
								className={cn(
									'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors flex items-center gap-2',
									pathname === `${nav.route}` && 'bg-secondary'
								)}
								key={nav.name}
								href={nav.route}
							>
								<nav.icon />
								{nav.name}
							</Link>
						))}
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	)
}
