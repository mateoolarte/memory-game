export function Select(props) {
  const { label, id, placeholder, options, value, onChange, required } = props;

  return (
    <div className="flex flex-col gap-2 text-slate-600">
      {label && (
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      )}
      <select
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 cursor-pointer"
        required={required}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
