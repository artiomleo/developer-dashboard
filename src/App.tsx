import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LayoutProvider } from "./context/LayoutProvider";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { cyan } from "@mui/material/colors";
import Widgets from "@/components/widgets/Widgets";
import InfoPage from "@/components/info/InfoPage";
import Settings from "@/components/settings/Settings";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: cyan["A700"],
      },
    },
  });

  const routes = [
    {
      title: "Info",
      path: "/app",
      element: InfoPage,
    },
    {
      title: "Dashboard",
      path: "/app/dashboard",
      element: Dashboard,
    },
    {
      title: "Widgets",
      path: "/app/widgets",
      element: Widgets,
    },
    {
      title: "Settings",
      path: "/app/settings",
      element: Settings,
    },
  ];

  return (
    <LayoutProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/app/dashboard" />} />
            <Route path="/app" element={<Layout />}>
              {routes.map((item) => (
                <Route path={item.path} Component={item.element} />
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LayoutProvider>
  );
}

export default App;
