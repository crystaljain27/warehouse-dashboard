import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import BotStatus from "./pages/BotStatus";
import TaskAllocation from "./pages/TaskAllocation";
import TaskQueue from "./pages/TaskQueue";
import Analytics from "./pages/Analytics";
import Map from "./pages/Map";

import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Login — no sidebar */}
        <Route path="/" element={<Login />} />

        {/* All dashboard pages — wrapped inside Layout */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/bots"
          element={
            <Layout>
              <BotStatus />
            </Layout>
          }
        />

        <Route
          path="/allocate"
          element={
            <Layout>
              <TaskAllocation />
            </Layout>
          }
        />

        <Route
          path="/queue"
          element={
            <Layout>
              <TaskQueue />
            </Layout>
          }
        />

        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />

        <Route
          path="/map"
          element={
            <Layout>
              <Map />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
