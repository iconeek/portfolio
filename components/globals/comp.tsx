import Wrapper from '@/components/globals/Wrapper'
import Image from 'next/image'
import React from 'react'
import error from '../public/illustration/error.svg'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CornerUpLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <Wrapper className='min-h-[80vh] flex flex-col items-center justify-center text-center gap-6'>
      
      <Image src={error} alt="not found" width={500} height={500} className='' />
      <div className='text-center text-lg font-bold'>Well, this is awkward. There&apos;s nothing here.</div>
      <Link href={'/'} className={cn("font-bold",buttonVariants({
        variant: "default",
        className: "rounded-full"
      }) )
      }>
        <CornerUpLeft className="h-4 w-4" />
        Go Back
      </Link>
    </Wrapper>
  )
}

export default NotFound;

