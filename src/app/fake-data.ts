import { Menu } from './types';

export const fakeMenu: Menu[] = [{
    id: '123',
    name: 'Sopaipillas con Pebre',
    description: "Sopaipillas con Pebre offers a regal combination of warm, golden sopaipillas and a vibrant salsa. The crispness of the sopaipillas paired with the zesty pebre creates a delightfully royal snack.",
    ingredients: ["sopaipillas", "pebre salsa (tomatoes, onions, cilantro, garlic, spices)"],
    allergens: ["gluten (from sopaipillas)"],
    price: 7,
    sold: 0,
}, {
    id: '345',
    name: `Vegan Queen's Royale Completo`,
    description: `Experience the regal pleasure of a Vegan Completo, a culinary masterpiece where compassion meets excellence. This plant-based delight features a soft bun, savory plant-based sausage, creamy avocado spread, tangy mayo, juicy tomato slices, zesty ketchup, and a delightful sauerkraut crunch. Indulge in the symphony of flavors, fit for royalty.`,
    ingredients: ["avocado", "vegan sausage", "mayonnaise or vegannaise", "tomato", "ketchup", "sauerkraut"],
    allergens: ["soy (tofu or tempeh)"],
    price: 8,
    sold: 0,
},{
    id: '456',
    name: 'Our mouthwatering Chacarero',
    description: "Indulging in a Vegan Chacarero is embarking on a regal journey of flavors. Grilled vegetables, seasoned tofu or tempeh, greens, vegan mayo, and homemade salsa elevate this sandwich to greatness.",
    ingredients: ["grilled vegetables", "seasoned tofu or tempeh", "greens", "vegan mayo", "homemade salsa"],
    allergens: ["soy (if using tofu or tempeh)"],
    price: 11,
    sold: 0,
}];

