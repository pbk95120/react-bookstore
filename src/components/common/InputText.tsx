import React, { ForwardedRef } from "react";
import { InputTextProps } from "@/types/type";

const InputText = React.forwardRef(
  ({ placeholder }: InputTextProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        className="py-1 px-3 border border-solid border-grey rounded font-small text-black leading-6 "
        placeholder={placeholder}
        ref={ref}
      />
    );
  }
);

export default InputText;
