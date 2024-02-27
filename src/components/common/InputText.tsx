import React, { ForwardedRef } from "react";
import { InputTextProps } from "@/types/type";

/**
 * 공용 Input 컴포넌트
 */
const InputText = React.forwardRef(
  (
    { placeholder, name, inputType, onChange, className }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className={`py-1 px-3 border border-solid border-grey rounded font-small text-black leading-6 ${className}`}
        placeholder={placeholder}
        name={name}
        ref={ref}
        type={inputType}
        onChange={onChange}
      />
    );
  }
);

export default InputText;
