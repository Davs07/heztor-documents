import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { Bell } from "lucide-react";

export const Sidebar = () => {
  return (
    <nav className="absolute top-2 w-full">
      <ul className="flex flex-col gap-2 px-4">
        <li className="w-[calc(100%-2.5em)] flex flex-row items-center justify-between">
          <UserButton />
          <Bell size={20}/>
        </li>
        <li>
          <Link to="/">
            <Button variant={"ghost"} className="w-full justify-start ">
              General
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/document">
            <Button variant={"ghost"} className="w-full justify-start">
              Documento
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
