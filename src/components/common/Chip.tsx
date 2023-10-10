import React, { FC } from "react";
import { Chip, Stack } from "@mui/material";

interface TButtonProps {
  label: string;
}

const TagButton: FC<TButtonProps> = ({ label }) => (
  <Stack direction="row" spacing={1}>
    <Chip label={label} variant="outlined" />
  </Stack>
);

export default TagButton;
