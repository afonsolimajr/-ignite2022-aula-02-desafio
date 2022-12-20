import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "./styles";

// import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src="images/logo.png" alt="" />
      <nav>
        <MapPin weight="fill" size={24} />
        <a>Recife, PE</a>
        <NavLink to="/history" title="Histórico">
          <ShoppingCart weight="fill" size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
