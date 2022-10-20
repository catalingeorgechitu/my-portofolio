import React from 'react';

export default function Snap() {
	return (
		<div className='h-screen w-full snap-y snap-mandatory overflow-y-scroll bg-red-400 '>
			<div className='flex h-screen w-full snap-start items-center justify-center bg-blue-400 text-6xl'>
				1
			</div>
			<div className='flex h-screen w-full snap-start items-center justify-center bg-yellow-400 text-6xl'>
				2
			</div>
			<div className='flex h-screen w-full snap-start items-center justify-center bg-green-400 text-6xl'>
				3
			</div>
			<div className='flex h-screen w-full snap-start items-center justify-center bg-amber-600 text-6xl'>
				4
			</div>
		</div>
	);
}
