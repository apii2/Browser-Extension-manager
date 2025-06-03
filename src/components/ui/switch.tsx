import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      aria-checked={props.checked}
      data-state={props.checked?'checked':'unchecked'}
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-input border-2 focus-visible:outline-2 focus-visible:outline-red-700 dark:focus-visible:border-neutral-900 focus-visible:border-neutral-0 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full shadow-xs transition-all disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-state={props.checked?'checked':'unchecked'}
        data-slot="switch-thumb"
        className={cn(
          "bg-white dark:data-[state=unchecked]:bg-foreground data-[state=checked]:bg-neutral-0 pointer-events-none block size-[14px] rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-0px)] data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
