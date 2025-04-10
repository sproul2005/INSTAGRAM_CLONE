// import * as React from "react"
// import * as SelectPrimitive from "@radix-ui/react-select"
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

// import { cn } from "@/lib/utils"

// function Select({
//   ...props
// }) {
//   return <SelectPrimitive.Root data-slot="select" {...props} />;
// }

// function SelectGroup({
//   ...props
// }) {
//   return <SelectPrimitive.Group data-slot="select-group" {...props} />;
// }

// function SelectValue({
//   ...props
// }) {
//   return <SelectPrimitive.Value data-slot="select-value" {...props} />;
// }

// function SelectTrigger({
//   className,
//   size = "default",
//   children,
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.Trigger
//       data-slot="select-trigger"
//       data-size={size}
//       className={cn(
//         "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}>
//       {children}
//       <SelectPrimitive.Icon asChild>
//         <ChevronDownIcon className="size-4 opacity-50" />
//       </SelectPrimitive.Icon>
//     </SelectPrimitive.Trigger>)
//   );
// }

// function SelectContent({
//   className,
//   children,
//   position = "popper",
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.Portal>
//       <SelectPrimitive.Content
//         data-slot="select-content"
//         className={cn(
//           "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
//           position === "popper" &&
//             "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
//           className
//         )}
//         position={position}
//         {...props}>
//         <SelectScrollUpButton />
//         <SelectPrimitive.Viewport
//           className={cn("p-1", position === "popper" &&
//             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1")}>
//           {children}
//         </SelectPrimitive.Viewport>
//         <SelectScrollDownButton />
//       </SelectPrimitive.Content>
//     </SelectPrimitive.Portal>)
//   );
// }

// function SelectLabel({
//   className,
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.Label
//       data-slot="select-label"
//       className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
//       {...props} />)
//   );
// }

// function SelectItem({
//   className,
//   children,
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.Item
//       data-slot="select-item"
//       className={cn(
//         "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
//         className
//       )}
//       {...props}>
//       <span className="absolute right-2 flex size-3.5 items-center justify-center">
//         <SelectPrimitive.ItemIndicator>
//           <CheckIcon className="size-4" />
//         </SelectPrimitive.ItemIndicator>
//       </span>
//       <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//     </SelectPrimitive.Item>)
//   );
// }

// function SelectSeparator({
//   className,
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.Separator
//       data-slot="select-separator"
//       className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
//       {...props} />)
//   );
// }

// function SelectScrollUpButton({
//   className,
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.ScrollUpButton
//       data-slot="select-scroll-up-button"
//       className={cn("flex cursor-default items-center justify-center py-1", className)}
//       {...props}>
//       <ChevronUpIcon className="size-4" />
//     </SelectPrimitive.ScrollUpButton>)
//   );
// }

// function SelectScrollDownButton({
//   className,
//   ...props
// }) {
//   return (
//     (<SelectPrimitive.ScrollDownButton
//       data-slot="select-scroll-down-button"
//       className={cn("flex cursor-default items-center justify-center py-1", className)}
//       {...props}>
//       <ChevronDownIcon className="size-4" />
//     </SelectPrimitive.ScrollDownButton>)
//   );
// }

// export {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectScrollDownButton,
//   SelectScrollUpButton,
//   SelectSeparator,
//   SelectTrigger,
//   SelectValue,
// }

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
       "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1   bg-text-white dark:ring-offset-slate-950 dark:focus:ring-slate-300",
      // "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300",
       className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}>
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800  ",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("p-1", position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-white focus:text-black data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className
    )}
    {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}