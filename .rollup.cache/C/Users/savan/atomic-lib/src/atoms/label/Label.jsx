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
  return (
    <label htmlFor={htmlFor} className={classes} style={style} id={id}>
      {children}
      {required && <span className="label-required">*</span>}
    </label>
  );
};
//# sourceMappingURL=Label.jsx.map
