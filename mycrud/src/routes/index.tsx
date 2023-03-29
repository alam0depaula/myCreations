import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import { Button } from "@mui/material";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" onClick={toggleTheme} color="primary">
            Página Inicial
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
