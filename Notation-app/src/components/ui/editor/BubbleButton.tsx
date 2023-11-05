import { ComponentProps, ReactNode } from "react";

export interface ButtonBubbleProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: ButtonBubbleProps) {
  return (
    <button
      className="p-2 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none data-[active=true]:text-emerald-400"
      {...props}
    />
  );
}
