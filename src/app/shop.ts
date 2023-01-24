export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  shop: string;
  salePercent: number;
  description: string;
  attributes: string[];
}

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Orange',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
    price: 50,
    shop: 'Amazon',
    salePercent: 45,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores ad quae voluptates provident deserunt blanditiis impedit corrupti amet quasi ratione earum odit laborum accusantium praesentium ducimus cumque, qui enim!',
    attributes: ['free delivery', 'new']
  },
  {
    id: 2,
    name: 'Orange',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
    price: 50,
    shop: 'Amazon',
    salePercent: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores ad quae voluptates provident deserunt blanditiis impedit corrupti amet quasi ratione earum odit laborum accusantium praesentium ducimus cumque, qui enim!',
    attributes: ['free delivery', 'new']
  },
  {
    id: 3,
    name: 'Orange',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
    price: 50,
    shop: 'Amazon',
    salePercent: 60,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores ad quae voluptates provident deserunt blanditiis impedit corrupti amet quasi ratione earum odit laborum accusantium praesentium ducimus cumque, qui enim!',
    attributes: ['free delivery', 'new', 'HOT']
  },
  {
    id: 4,
    name: 'Orange',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
    price: 50,
    shop: 'Amazon',
    salePercent: 50,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores ad quae voluptates provident deserunt blanditiis impedit corrupti amet quasi ratione earum odit laborum accusantium praesentium ducimus cumque, qui enim!',
    attributes: ['02:22', 'new']
  },
  {
    id: 5,
    name: 'Orange',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
    price: 50,
    shop: 'Amazon',
    salePercent: 33,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, maiores ad quae voluptates provident deserunt blanditiis impedit corrupti amet quasi ratione earum odit laborum accusantium praesentium ducimus cumque, qui enim!',
    attributes: ['new']
  }
];
