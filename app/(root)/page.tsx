import Image from 'next/image'

import { UserButton } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Button variant='default'>Hello ClickMe !</Button>
      </div>

      <UserButton afterSignOutUrl='/' />
    </main>
  )
}
