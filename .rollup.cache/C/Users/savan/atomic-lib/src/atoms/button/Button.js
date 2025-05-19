import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, onClick }) => {
  return _jsx("button", {
    className:
      "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    onClick: onClick,
    children: children,
  });
};
//# sourceMappingURL=Button.js.map
