import { cn } from '@/lib/utils'
import React from 'react'

const Wrapper = ({children, className}: {
    children: React.ReactNode,
    className?: string
}) => {
  return (
    <div className={cn("mx-auto px-2 md:px-4", className)}>
        {children}
    </div>
  )
}

export default Wrapper
