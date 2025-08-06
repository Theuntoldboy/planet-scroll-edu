import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
 <div
 ref={ref}
 className={cn(
 "rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/10 p-6",
 className
 )}
 {...props}
 />
))
Card.displayName = "Card"

export { Card }
