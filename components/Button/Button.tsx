import classnames from "classnames";

export function Button({
  type = "button",
  children,
  style = "primary",
  disabled,
}) {
  const classNames = classnames("py-2 px-4 rounded-md text-lg", {
    "bg-violet-500 text-slate-50 shadow-md hover:bg-violet-600":
      style === "primary",
  });

  return (
    <button type={type} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
}
