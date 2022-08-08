import { SET_PRODUCTS } from '../../utils/consts'

const initialState = {
  items: [
    {
      id: 1,
      imgUrl: '10310c15-34cc-480c-8a1b-8593ef9ca940.jpg',
      title: 'iPhone 12 Pro Max',
      rating: 0,
      price: 6000,
      typeId: 2,
      brandId: 7,
    },
    {
      id: 2,
      imgUrl: '5340481e-4ed5-4867-96c4-5fca40251ec2.jpg',
      title: 'Y70',
      rating: 0,
      price: 599,
      typeId: 2,
      brandId: 8,
    },
    {
      id: 3,
      imgUrl: 'bed07eb2-9070-416d-8dae-0f53c3f13716.jpg',
      title: 'Samsung Galaxy S22 5G',
      rating: 0,
      price: 2270,
      typeId: 2,
      brandId: 1,
    },
    {
      id:4,
      imgUrl: '912e3529-a7d8-49a8-8d1e-3ecf2873b664.jpg',
      title: 'Четырёхдверный холодильник LG',
      rating: 0,
      price: 9322,
      typeId: 3,
      brandId: 2,
    },
    {
      id: 5,
      imgUrl: '980cbd49-386f-4986-b3bd-9604f0597ab7.jpg',
      title: 'Холодильник LG GA-B419SQGL',
      rating: 0,
      price: 2099,
      typeId: 3,
      brandId: 2,
    },
    {
      id: 6,
      imgUrl: '990ac1b2-6023-47ec-b25d-30346d3ffeea.jpg',
      title: 'Телевизор Xiaomi MI TV P1 50',
      rating: 0,
      price: 1703,
      typeId: 1,
      brandId: 4,
    },
    {
      id: 7,
      imgUrl: '243b7bce-1678-4442-b2ea-5b8eeb0aafe7.jpg',
      title: 'Монитор LG 24MK600M-B',
      rating: 0,
      price: 590,
      typeId: 4,
      brandId: 2,
    },
  ],
  isLoaded: false
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}

export default products