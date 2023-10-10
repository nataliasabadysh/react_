// core
import Dashboard from "components/dashboard/dashboard";
import React from "react";
// components
import HeaderApp from "./components/header";
import { Layout } from "./components/layout/index";
import "./theme/index.css";

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default App;
