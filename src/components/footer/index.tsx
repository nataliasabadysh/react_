import React, { ReactNode } from "react";

interface FooterProps {
    children: ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
    return <div>{children}</div>;
};
