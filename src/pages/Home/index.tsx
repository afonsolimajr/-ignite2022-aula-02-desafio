import { getData } from "../../data/Data";
import { CoffeeCard } from "./components/CoffeeCard";
import { Intro } from "./components/Intro";
import { CoffeeContainer, HomeContainer, IntroContainer } from "./styles";

export function Home() {
  const data = getData();

  return (
    <HomeContainer>
      <IntroContainer>
        <Intro />
      </IntroContainer>
      <CoffeeContainer>
        {data.map((d) => (
          <CoffeeCard data={d} />
        ))}
      </CoffeeContainer>
    </HomeContainer>
  );
}
