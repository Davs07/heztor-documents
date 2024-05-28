import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Sidebar = () => {
  

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <Button></Button>
        </li>
        <li>
          <Link to="/">
            <Button>Documents</Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button>Carpetas</Button>
          </Link>
        </li>
        <li>
          <Link to="/document">
            <Button>Documento</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
