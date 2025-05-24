import { useContext } from "react";
import { useUser, cartContext } from "../../contexts";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { setActiveClass } from "../../utilities/setActive";

export const Navbar = () => {
  const { total } = useContext(cartContext);
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <NavLink to="/">
        <button className={setActiveClass}>🍕Home</button>
      </NavLink>
      {token ? (
        <>
          <NavLink to="/profile">
            <button className={setActiveClass}>🔓Profile</button>
          </NavLink>
          <NavLink onClick={handleLogout} className="boton1">🔒Logout</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">
            <button className={setActiveClass}>🔐Login</button>
          </NavLink>

          <NavLink to="/register">
            <button className={setActiveClass}>🔐Register</button>
          </NavLink>
        </>
      )}

      <div className="totalCompra">
        <Link to="/cart">
          <button className="boton2">🛒Total:$ {total.toFixed(0)}</button>
        </Link>
      </div>
    </nav>
  );
};
