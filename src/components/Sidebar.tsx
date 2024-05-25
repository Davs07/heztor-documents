import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Documents</li>
        </Link>
        <Link to="/">
          <li>Carpetas</li>
        </Link>
        <Link to="/document">
          <li>Documento</li>
        </Link>
      </ul>
    </nav>
  );
};
