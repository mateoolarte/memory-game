export function Input({ type = "text", id, label, placeholder }) {
  return (
    <div className="flex flex-col gap-2 text-slate-600">
      {label && (
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        placeholder={placeholder}
      />
    </div>
  );
}
