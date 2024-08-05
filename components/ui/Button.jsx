// components/ui/button.jsx
import * as React from "react";
import clsx from "clsx";

export function Button({ variant, size, children, ...props }) {
  const baseClasses = "rounded px-4 py-2";
  const variantClasses = {
    outline: "border border-gray-300",
    solid: "bg-blue-500 text-white",
  };
  const sizeClasses = {
    icon: "p-2",
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size])}
      {...props}
    >
      {children}
    </button>
  );
}
