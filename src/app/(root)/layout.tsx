

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import "../globals.css"
import QueryWrapper from "@/components/wrapper/query-wrapper"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { dark } from "@clerk/themes";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Lioma",
    template: `%s - ${"Lioma"}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en">
      <body className={`${inter.className} bg-dark-1`}>
        <QueryWrapper>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
        </QueryWrapper>
      </body>
    </html>
    </ClerkProvider>
  )
}
