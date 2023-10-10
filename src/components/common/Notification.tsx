import React, { ReactNode } from "react";
import Badge from "@mui/material/Badge";

interface NotificationProps {
  children: ReactNode;
  amount: number;
}

const Notification: React.FC<NotificationProps> = ({
  children,
  amount = 2,
}) => {
  return (
    <Badge badgeContent={amount} color="primary">
      {children}
    </Badge>
  );
};

export default Notification;
