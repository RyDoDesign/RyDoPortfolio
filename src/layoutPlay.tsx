import { NavbarPlay } from "./components/navbarPlay";
import { Outlet } from "react-router-dom";

export function LayoutPlay() {
  return (
    <>
      <NavbarPlay />
      <div>
        <Outlet />
      </div>
    </>
  )
}