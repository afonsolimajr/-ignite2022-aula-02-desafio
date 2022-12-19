import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer } from "./styles";

import logo from "../../assets/images/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <a>
          <MapPin weight="fill" size={24} /> Recife, PE
        </a>
        <ShoppingCart weight="fill" size={24} />
      </nav>
    </HeaderContainer>
  );
}
