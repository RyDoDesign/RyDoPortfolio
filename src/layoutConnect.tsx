import { NavbarConnect } from "./components/navbarConnect";
import { Outlet } from "react-router-dom";

export function LayoutConnect() {
  return (
    <>
      <NavbarConnect />
      <div>
        <Outlet />
      </div>
    </>
  )
}