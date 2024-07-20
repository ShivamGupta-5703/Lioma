"use client"
import Link from "next/link"
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Logout from '../assets/logout.jpg';


export function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex fixed w-full backdrop-blur-sm items-center px-4 py-4 justify-between z-50">
      <div className="flex gap-8 items-center">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Link href="/">Lioma</Link>
          </p>
        </div>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:underline">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <header style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
          {/* <span ><SignInButton/></span> */}
          <SignedOut>
            <SignInButton>
              <div style={{backgroundColor : 'black', color : 'white', padding : 10, borderRadius : 10}}> Sign In
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer p-2'>
                <Image
                  src={Logout}
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
          <div className="p-2">
            <UserButton afterSignOutUrl="/"/>
          </div>
      </header>
    </nav>
  )
}
