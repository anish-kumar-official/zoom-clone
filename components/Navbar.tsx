import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className='p-4 bg-dark-bg2 fixed z-50 w-full justify-between items-center flex'>
            <Link
            href='/'
            className='flex gap-4 items-center'>

                <Image
                    src='/icons/logo.svg'
                    alt='voom logo'
                    height={32}
                    width={32}
                />
                <p className='text-white text-2xl font-extrabold max-sm:hidden'>VOOM</p>
            </Link>

            <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <MobileSidebar/>
            </div>





        </nav>
    )
}

export default Navbar
