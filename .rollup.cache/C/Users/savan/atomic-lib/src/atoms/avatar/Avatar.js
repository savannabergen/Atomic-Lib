import { jsx as _jsx } from "react/jsx-runtime";
const sizeClasses = {
  small: "w-8 h-8",
  medium: "w-12 h-12",
  large: "w-16 h-16",
};
export const Avatar = ({ src, alt = "", size = "medium" }) => {
  return _jsx("img", {
    src: src,
    alt: alt,
    className: `rounded-full object-cover ${sizeClasses[size]}`,
  });
};
//# sourceMappingURL=Avatar.js.map
