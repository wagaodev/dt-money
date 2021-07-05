import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/globalStyles";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}
