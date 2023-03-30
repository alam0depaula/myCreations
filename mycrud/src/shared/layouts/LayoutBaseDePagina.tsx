import React from "react";
import { Box } from "@mui/material";

interface ILayoutBase {
  children: React.ReactNode
}
export const LayoutBaseDePagina: React.FC<ILayoutBase> = () => {
  return (
    <Box>
      Test
    </Box>
  );
};
