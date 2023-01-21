export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  shop:string;
  salePercent:number;
  description: string;
  attributes:string[];
}

export const products:IProduct[] = [
  {
    id: 1,
    name: 'Orange',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
    price: 50,
    shop: 'Amazon',
    salePercent:45,
    description: 'Tasty orange',
    attributes: ['free delivery', 'new'],
  }
];


