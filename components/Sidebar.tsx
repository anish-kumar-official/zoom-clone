'use client'
import SidebarLinks from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const pathname = usePathname();
    console.log(pathname);
    

  return (
    <div className='sticky left-0 top-0 h-screen w-fit flex flex-col text-white bg-dark-bg2 justify-between pt-20'>
      <div className='flex flex-col gap-6 px-2'>
        {SidebarLinks.map((links) =>{
            const isActive = pathname === links.url|| pathname.startsWith(links.url)
             return(
                <Link 
                href={links.url}
                key={links.label}
                className={cn('flex gap-4 items-center p-4 rounded-lg justify-start',{'bg-blue-700':isActive},{'hover:text-blue-700':!isActive})}
                >
                  <Image 
                  src={links.imgPath}
                  alt={links.label}
                  width={20}
                  height={20}
                  />
                  {links.label}
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default Sidebar
