type BaseProduct = {
  id: number;
  name: string;
  price: number;
  description: string;
  quantity: number; 
};

type Electronics = BaseProduct & {
  category: 'electronics';
  brand: string;
  warrantyPeriod: number; 
  batteryLife: string; 
};

type Clothing = BaseProduct & {
  category: 'clothing';
  size: string;
  material: string;
  gender: 'male' | 'female' | 'unisex';
};

const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
  return products.find(product => product.id === id);
};

const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
  return products.filter(product => product.price <= maxPrice);
};

type CartItem<T> = {
  product: T;
  quantity: number;
};

const addToCart = <T extends BaseProduct>(
  cart: CartItem<T>[],
  product: T,
  amount: number
): CartItem<T>[] => {
  const existingItem = cart.find(item => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += amount;
  } else {
    cart.push({ product, quantity: amount });
  }
  return cart;
};

const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

const electronics: Electronics[] = [
  {
    id: 1,
    name: "Ноутбук",
    price: 23000,
    description: "Потужний ноутбук з високоякісним дисплеєм та тривалим часом автономної роботи",
    quantity: 100,
    category: 'electronics',
    brand: "Apple",
    warrantyPeriod: 48,
    batteryLife: "До 10 годин автономної роботи"
  },
  {
    id: 2,
    name: "Навушники",
    price: 7000,
    description: "Безпровідні навушники з високоякісним звуком та тривалим часом роботи.",
    quantity: 30,
    category: 'electronics',
    brand: "Apple",
    warrantyPeriod: 12,
    batteryLife: "До 20 годин автономної роботи"
  }
];

const clothing: Clothing[] = [
  {
    id: 3,
    name: "Зимова куртка",
    price: 5500,
    description: "Тепла зимова куртка на кожен день",
    quantity: 100,
    category: 'clothing',
    size: "S",
    material: "Cotton",
    gender: "unisex"
  },
  {
    id: 4,
    name: "Спортивний костюм",
    price: 4500,
    description: "Комфортний спортивний костюм для щоденного носіння",
    quantity: 40,
    category: 'clothing',
    size: "L",
    material: "Cotton",
    gender: "male"
  }
];

const phone = findProduct(electronics, 1);
console.log("Знайдений товар:", phone);

const affordableElectronics = filterByPrice(electronics, 15000);
console.log("Доступні товари до 15000:", affordableElectronics);

let cart: CartItem<BaseProduct>[] = [];
if (phone) cart = addToCart(cart, phone, 2); 
const total = calculateTotal(cart); 

console.log("Кошик:", cart);
console.log("Загальна вартість:", total);
