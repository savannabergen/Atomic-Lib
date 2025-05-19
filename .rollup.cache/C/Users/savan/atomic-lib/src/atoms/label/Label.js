import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Label = ({
  children,
  htmlFor,
  className,
  style,
  id,
  required,
  disabled,
  error,
  size = "md",
  variant = "default",
}) => {
  const classes = [
    "label",
    size && `label-${size}`,
    variant && `label-${variant}`,
    className,
    error && "label-error",
    disabled && "label-disabled",
  ]
    .filter(Boolean)
    .join(" ");
  return _jsxs("label", {
    htmlFor: htmlFor,
    className: classes,
    style: style,
    id: id,
    children: [
      children,
      required && _jsx("span", { className: "label-required", children: "*" }),
    ],
  });
};
//# sourceMappingURL=Label.js.map
