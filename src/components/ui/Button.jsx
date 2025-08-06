import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "md", ...props }, ref) => {
 return (
 <button
 className={cn(
 "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
 variant === "default" && "bg-white/10 hover:bg-white/20 text-white",
 variant === "primary" && "bg-blue-600 hover:bg-blue-700 text-white",
 variant === "secondary" && "bg-white/80 hover:bg-white text-blue-900",
 variant === "ghost" && "bg-transparent hover:bg-white/10 text-white",
 size === "sm" && "h-8 px-3 text-sm",
 size === "md" && "h-10 px-5 text-base",
 size === "lg" && "h-12 px-8 text-lg",
 className
 )}
 ref={ref}
 {...props}
 />
 )
})
Button.displayName = "Button"

export { Button }
