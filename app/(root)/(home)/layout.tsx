
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative bg-dark-bg1'>
            <Navbar/>
                <div className='flex '>
                    <Sidebar/>

                    <section className='flex flex-1 flex-col min-h-screen pb-5 pt-20 px-6 '>
                        <div className='w-full h-full text-white'>
                           {children}
                        </div>
                       
                    </section>
                </div>
        </main>
    )
}

export default HomeLayout
