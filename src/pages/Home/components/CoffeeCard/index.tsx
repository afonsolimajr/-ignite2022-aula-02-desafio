import {
  ActionsContainer,
  BuyContainer,
  CardContainer,
  CoffeeImage,
  CounterContainer,
  Description,
  IconButton,
  Name,
  Price,
  Tag,
} from "./styles";

import imageProd from "../../../../assets/images/expresso.png";
import { ShoppingCart } from "phosphor-react";
import { DataType } from "../../../../data/Data";

interface CoffeeCardProps {
  data: DataType;
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  return (
    <CardContainer>
      <CoffeeImage src={`images/${data.img}`} alt="" />
      <Tag>{data.tag}</Tag>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <BuyContainer>
        R$<Price>{data.price}</Price>
        <ActionsContainer>
          <CounterContainer>- 1 +</CounterContainer>
          <IconButton>
            <ShoppingCart weight="fill" size={24} />
          </IconButton>
        </ActionsContainer>
      </BuyContainer>
    </CardContainer>
  );
}
