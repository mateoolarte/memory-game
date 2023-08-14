import classNames from "classnames";

export function Input(props) {
  const {
    type = "text",
    id,
    label,
    placeholder,
    value,
    onChange,
    required,
    error,
  } = props;

  const classNameInput = classNames(
    "block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50",
    {
      "border-rose-500 text-rose-600 focus:border-rose-500 focus:ring-rose-500":
        error,
    }
  );

  return (
    <div className="flex flex-col gap-2 text-slate-600">
      {label && (
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      )}
      <input
        className={classNameInput}
        required={required}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="input-errorMessage text-pink-600">{error}</p>}
    </div>
  );
}
