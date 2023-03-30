import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        path: "pagina-inicial",
        label: "Página Inicial",
      }
    ]);
  });
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" onClick={toggleDrawerOpen} color="primary">
            Toggle Drawer
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
