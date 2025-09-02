type ButtonProps = {
  buttonText: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
};

function Button({ buttonText, type, disabled }: ButtonProps) {
  return (
    <button
      className=" w-full
    bg-amber-500 hover:bg-amber-600 active:bg-amber-700 
    cursor-pointer text-white font-medium py-4 px-8 rounded uppercase
    focus:ring-2 focus:ring-amber-400 focus:outline-none
    disabled:bg-amber-300 disabled:text-gray-500 disabled:cursor-not-allowed
    duration-200
  "
      disabled={disabled}
      type={type || "button"}
    >
      {buttonText}
    </button>
  );
}

export default Button;
