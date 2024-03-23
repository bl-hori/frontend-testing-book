import React from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const Button = ({ label, onClick }: { label: string; onClick: any }) => {
  // biome-ignore lint/a11y/useButtonType: <explanation>
  return <button onClick={onClick}>{label}</button>;
};
