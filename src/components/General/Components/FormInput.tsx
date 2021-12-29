import React from "react";

interface Props {
  type: string;
  placeholder?: string;
  min?: string;
  max?: string;
  id: string;
  name: string;
  step?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  type,
  placeholder,
  max,
  min,
  name,
  step,
  id,
  label,
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex mb-2 md:flex-col md:w-4/12 md:px-2">
      <label
        htmlFor={id}
        className="w-2/12 text-zinc-50 mr-5 font-semibold md:mb-2 "
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        min={min}
        max={max}
        step={step}
        name={name}
        className="w-10/12 px-2  py-1 rounded-md shadow-inner md:w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
