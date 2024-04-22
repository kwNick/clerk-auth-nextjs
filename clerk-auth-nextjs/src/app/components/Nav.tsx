import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
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
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            <div className=''>
                Another
            </div>
        </div>
    )
}

export default Nav