import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
 <span
 ref={ref}
 className={cn(
 "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
 variant === "default" && "bg-white/20 text-white",
 variant === "planet" && "bg-gradient-to-r from-blue-400 to-purple-400 text-white",
 className
 )}
 {...props}
 />
))
Badge.displayName = "Badge"

export { Badge }
