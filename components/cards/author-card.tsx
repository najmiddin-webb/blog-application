import { IAuthors } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function AuthorCard(author: IAuthors) {
	return (
		<div>
			<div className='flex w-52 flex-col space-y-2 text-center'>
				<div className='relative h-52 w-full'>
					<Image
						className='rounded-md object-cover grayscale transition-all duration-200 hover:grayscale-0'
						src={author.image}
						alt={author.name}
						fill
					/>
				</div>
				<h2 className='font-createRound text-2xl'>{author.name}</h2>
			</div>
		</div>
	)
}
