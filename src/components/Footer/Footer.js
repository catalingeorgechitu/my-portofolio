import React from 'react';

export default function Footer() {
	const current = new Date();
	const date = current.getFullYear();
	return (
		<div className='h-20 flex items-center justify-center border-t-2 w-full dark:border-t-[#1a1c23]'>
			©{date} Catalin Chitu. All Rights Reserved
		</div>
	);
}
