import type { LabelProps } from "./label.types";

const Label = ({
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
}: LabelProps) => {
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

export default Label;
