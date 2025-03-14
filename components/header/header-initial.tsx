import React from 'react'
import TopBar from '@/components/header/topbar'

import ROUTES from '@/lib/routes'

import logo from '@/public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const HeaderInitial = () => {
	return (
		<div>
			<TopBar />

			<nav className='flex justify-between items-center px-11 mt-12'>
				<Link href={ROUTES.HOME}>
					<Image src={logo} alt='logo' width={144} height={125} />
				</Link>

<ul>
    <li></li>
</ul>
			</nav>
		</div>
	)
}

export default HeaderInitial
