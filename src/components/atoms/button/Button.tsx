import React, { useState } from 'react';
import type { ButtonProps } from './button.types';

const Button = ({ children }: ButtonProps) => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => setCount(count + 1)}
    >
      {children} ({count})
    </button>
  );
};

export default Button;
