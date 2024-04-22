import { NavList } from '@/constants'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <div className='p-5 w-full bg-fuchsia-500 bg-opacity-50 flex justify-between'>
            <div className=''>
                Logo
            </div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn >
                    <div className="px-8 py-4 flex ring-1">
                        <UserButton />
                        {NavList.map((x: { title: string; }) => (
                            <Link href={`/${x.title}`} key={x.title} className='p-4'>
                                {x.title}
                            </Link>
                        ))}
                    </div>

                </SignedIn>
            </div>
            <div className=''>
                Another
            </div>
        </div>
    )
}

export default Nav