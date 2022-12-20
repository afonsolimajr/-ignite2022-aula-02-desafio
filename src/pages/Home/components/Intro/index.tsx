import { ShoppingCart } from "phosphor-react";
import {
  ImageContainer,
  IntroContainer,
  Item,
  ItemsContainer,
  TitleContainer,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <TitleContainer>
        <h3>Encontre o café perfeito para qualquer hora do dia</h3>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>
        <ItemsContainer>
          <Item>
            <ShoppingCart weight="fill" size={24} />
            <span>Compra simples e segura</span>
          </Item>
          <Item>
            <ShoppingCart weight="fill" size={24} />
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item>
            <ShoppingCart weight="fill" size={24} />
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
            <ShoppingCart weight="fill" size={24} />
            <span>O café chega fresquinho até você</span>
          </Item>
        </ItemsContainer>
      </TitleContainer>
      <ImageContainer>
        <img src="images/intro-image.png" alt="" />
      </ImageContainer>
    </IntroContainer>
  );
}
