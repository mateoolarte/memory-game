export function Statistics({ level, success, errors }) {
  return (
    <div className="flex items-center gap-4 mb-6 px-4 xl:px-0">
      <p className="sm:text-lg text-green-500 font-medium">
        Success: {success}/{level}
      </p>
      <p className="sm:text-lg text-rose-500 font-medium">Errors: {errors}</p>
    </div>
  );
}
