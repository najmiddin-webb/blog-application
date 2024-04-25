import React from 'react'

export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
	title: string
	description: string
	author: string
	date: string
	image: string
	tags: string[]
}

export interface IAuthors {
	name: string
	image: string
}
