import React from 'react'
import { HomeIcon, File, UserRound } from 'lucide-react'
import Link from 'next/link'
import NavButton from './NavButton'
import { ModeToggle } from './ModeToggle'



const Header = () => {
    return (

        <header className=' animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>
            <div className=' flex flex-row h-8 items-center justify-between w-full'>
                <div className=' flex flex-row items-center gap-2'>
                    <NavButton href='/home' label='home' icon={HomeIcon} />

                    <Link href={"/home"} className=' flex justify-center items-center gap-2 ml-0' title='Home'>
                        <h1 className=' hidden sm:block font-bold m-0 mt-1 text-xl'>
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>

                <div className=' flex flex-row items-center'>
                    <NavButton href='/tickets' label='tickets' icon={File} />

                    <NavButton href='/customers' label='customers' icon={UserRound} />

                    <ModeToggle />

                </div>
            </div>

        </header>
    )
}

export default Header