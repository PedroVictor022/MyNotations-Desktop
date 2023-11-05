import { ComponentProps, ReactNode } from "react";

export interface ButtonFloatProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function FloatButton(props: ButtonFloatProps) {
  return (
    <button
      className="p-2 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-600 text-sm flex items-center rounded font-medium leading-none data-[active=true]:text-emerald-400"
      {...props}
    />
  );
}
