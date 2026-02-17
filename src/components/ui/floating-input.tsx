import * as React from "react";

import { cn } from "@/lib/utils";

type FloatingInputProps = Omit<React.ComponentProps<"input">, "placeholder"> & {
  label: string;
  wrapperClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
};

function FloatingInput({
  label,
  wrapperClassName,
  inputClassName,
  labelClassName,
  className,
  id,
  ...props
}: FloatingInputProps) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("relative", wrapperClassName)}>
      <input
        id={inputId}
        data-slot="floating-input"
        placeholder=" "
        className={cn(
          "peer h-14 w-full rounded-2xl border-[1.5px] border-[#c9c1b8] bg-[#f7f1ff]/90 px-4 pt-5 text-[15px] text-[#2a2238] outline-none transition-colors duration-150",
          "focus:border-[#6d39b5]",
          "invalid:[&:not(:placeholder-shown):not(:focus)]:border-[#cc5f72]",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className,
          inputClassName
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 bg-transparent px-1 text-[15px] text-[#63557f] transition-all duration-150",
          "peer-focus:top-0 peer-focus:scale-[0.82] peer-focus:bg-[#f3ecfa] peer-focus:text-[#6d39b5]",
          "peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:scale-[0.82] peer-[&:not(:placeholder-shown)]:bg-[#f3ecfa] peer-[&:not(:placeholder-shown)]:text-[#6d39b5]",
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
}

export { FloatingInput };
