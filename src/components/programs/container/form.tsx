import React, { FC } from "react";

interface Props {
  buttonText: string;
}

export const CreateProgram: FC<Props> = ({ buttonText }) => {
  const handleClick = () => {
    alert("Hello, World!");
  };

  return <button onClick={handleClick}>{buttonText}</button>;
};
