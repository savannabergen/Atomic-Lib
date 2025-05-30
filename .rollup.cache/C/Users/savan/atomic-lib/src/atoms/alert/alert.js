import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Alert = ({
  children,
  type = "info",
  dismissible = false,
  onDismiss,
  className,
}) => {
  const typeClasses = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };
  const classes = [
    "p-4 mb-4 border rounded",
    typeClasses[type],
    dismissible && "flex justify-between items-center",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return _jsxs("div", {
    className: classes,
    role: "alert",
    children: [
      children,
      dismissible &&
        _jsx("button", {
          type: "button",
          className: "ml-4 text-gray-500 hover:text-gray-700",
          onClick: onDismiss,
          children: "\u00D7",
        }),
    ],
  });
};
//# sourceMappingURL=alert.js.map
