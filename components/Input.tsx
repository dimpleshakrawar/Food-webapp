type TInputProps = {
  id: string | undefined;
  name: string | undefined;
  placeholder: string;
  error?: boolean;
  value: string;
  onChange: (e: any) => void;
};

const Input = ({
  id,
  name,
  placeholder,
  error,
  value,
  onChange,
}: TInputProps) => {
  return (
    <input
      id={id}
      name={name}
      type="text"
      aria-placeholder={placeholder}
      value={value}
      className={`h-10 md:w-[30rem] rounded-2xl p-2 outline-none text-gray-900 shadow-sm 
      ring-1 
      ring-inset 
      ring-gray-300 
      placeholder:text-gray-400 
      focus:ring-2 
      focus:ring-inset 
      focus:ring-sky-600 
      sm:text-sm 
      sm:leading-6
      font-satoshi font-sm placeholder-slate-400 `}
      onChange={onChange}
    />
  );
};

export default Input;
