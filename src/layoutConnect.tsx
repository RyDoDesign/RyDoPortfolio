import { Navbar } from "./components/navbarConnect";
import { Outlet } from "react-router-dom";

export function LayoutConnect() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}