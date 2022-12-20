export type DataType = {
  id: string;
  tag: string;
  name: string;
  description: string;
  img: string;
  price: number;
};

export function getData(): DataType[] {
  return [
    {
      id: "1",
      tag: "tradicional",
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      img: "expresso.png",
      price: 9.99,
    },
    {
      id: "2",
      tag: "tradicional",
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      img: "americano.png",
      price: 9.99,
    },
    {
      id: "3",
      tag: "tradicional",
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      img: "expresso-cremoso.png",
      price: 9.99,
    },
    {
      id: "4",
      tag: "tradicional",
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      img: "cafe-gelado.png",
      price: 9.99,
    },
    {
      id: "5",
      tag: "tradicional",
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      img: "cafe-com-leite.png",
      price: 9.99,
    },
    {
      id: "6",
      tag: "tradicional",
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      img: "latte.png",
      price: 9.99,
    },
    {
      id: "7",
      tag: "tradicional",
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      img: "capuccino.png",
      price: 9.99,
    },
    {
      id: "8",
      tag: "tradicional",
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      img: "macchiato.png",
      price: 9.99,
    },
    {
      id: "9",
      tag: "tradicional",
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      img: "mocaccino.png",
      price: 9.99,
    },
    {
      id: "10",
      tag: "tradicional",
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      img: "chocolate-quente.png",
      price: 9.99,
    },
    {
      id: "11",
      tag: "tradicional",
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      img: "cubano.png",
      price: 9.99,
    },
    {
      id: "12",
      tag: "tradicional",
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      img: "havaiano.png",
      price: 9.99,
    },
    {
      id: "13",
      tag: "tradicional",
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      img: "arabe.png",
      price: 9.99,
    },
    {
      id: "14",
      tag: "tradicional",
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      img: "irlandes.png",
      price: 9.99,
    },
  ];
}
