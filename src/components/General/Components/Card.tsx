import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: Props) => {
  const classes = `rounded-md p-2 overflow-hidden shadow-md ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
