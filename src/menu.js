const menu = {
    appetizers: [
        { name: "Iceberg Wedge Salad with House Cured Bacon", description: "tomato salsa gorgonzola", price: 7.50 },
        { name: "Sautéed Shredded Brussels Sprouts", description: "bacon hazelnuts gorgonzola", price: 6.95 },
        { name: "Kale Salad", description: "parmesan crisp corn radish garlic-lemon vinaigrette", price: 7.50 },
        { name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto", description: "grilled tomato salsa crostini", price: 6.95 },
        { name: "Chicken and Cabbage Eggrolls", description: "hot & sour dipping sauce", price: 6.95 }
    ],
    entrees: [
        { name: "Farfalle Pasta with Braised Pork in Tomato Cream", description: "capers butternut squash kale", price: 12.95 },
        { name: "Stout Braised Bratwurst", description: "horseradish mashed potatoes roasted root veggies grilled onion", price: 13.95 },
        { name: "Salmon & Crispy Tofu in Yellow Curry Sauce", description: "vegetable sauté golden raisin chutney", price: 15.95 },
        { name: "Sesame Shrimp", description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions", price: 13.95 }
    ],
    sandwiches: {
        cold: [
            { name: "Turkey & Avocado", description: "with tomato", halfPrice: 7.95, fullPrice: 9.25 },
            { name: "Pub Club", description: "turkey, bacon, lettuce, tomato", halfPrice: 7.95, fullPrice: 9.25 },
            { name: "Rare Roast Beef & Swiss", description: "sweet-hot mustard, lettuce, red onion", halfPrice: 7.95, fullPrice: 9.25 },
            { name: "Veggie", description: "pepper jack, avocado, sprout, tomato", halfPrice: 7.95, fullPrice: 9.25 }
        ],
        hot: [
            { name: "Southwest Chicken Breast", description: "grilled onion, poblano pepper, tomato, lettuce, jack cheese", price: 9.50 },
            { name: "Portobello Fresh Mozzarella", description: "caramelized onion, roasted pepper, tomato, field greens, basil aioli", price: 9.50 },
            { name: "Chipotle BBQ Pork Sandwich", description: "with pickled jalapeño slaw", price: 9.50 },
            { name: "Bacon Burger*", description: "Swiss, lettuce, tomato", price: 9.25 },
            { name: "Mexi Burger*", description: "pepper relish, pepper jack, tomato, lettuce, guacamole", price: 9.25 },
            { name: "Herb Marinated Top Sirloin*", description: "crimini mushrooms, caramelized onion, gorgonzola, basil aioli, served open-faced on focaccia", price: 10.95 },
            { name: "Roast Beef with Ancho Au Jus", description: "jack cheese, grilled onions, served on Crumb Bros. Baguette", price: 9.75 },
            { name: "Blackened Catfish", description: "creole peppers & onions, fresh herb aioli, served on house made sourdough", price: 9.75 }
        ]
    },
    soupAndSaladCombos: {
        soup: [
            { name: "French Onion or Soup of the Day", price: 4.95 },
            { name: "French Onion or Soup of the Day Combo with small green salad, fresh fruit or house pasta", price: 7.25 },
            { name: "French Onion or Soup of the Day Combo with half pasta of the day", price: 8.75 }
        ]
    },
    fajitas: [
        { name: "Chicken", description: "onions, poblano and bell peppers, guacamole, two salsas", price: 10.95 },
        { name: "Sirloin Steak", description: "onions, poblano and bell peppers, carrots, onion, guacamole, two salsas", price: 10.95 }
    ],
    tacos: [
        { name: "Beer Battered Fish", description: "with jalapeño remoulade, roasted salsa, cabbage", price: 9.95 },
        { name: "Carne Asada", description: "(marinated sirloin) with guacamole, tomatillo salsa", price: 9.95 },
        { name: "Citrus Marinated Chicken", description: "with guacamole, tomatillo salsa", price: 9.95 },
        { name: "Grilled Veggie", description: "with zucchini, yellow squash, bell peppers, onion, guacamole, tomatillo salsa", price: 9.95 }
    ],
    enchiladas: [
        { name: "Choice of Beef, Chicken, Cheese or Veggie", descriptions: ["uno", "dos", "tres"], prices: [8.50, 9.95, 11.50] },
        { name: "Chili Relleno", description: "Stuffed with jack cheese & corn glazed yam, chayote squash succotash, red chili sauce", price: 9.95 },
        { name: "Pepita Crusted Salmon", description: "with chipotle glaze – chevre whipped yams, jicama slaw, tomatillo sauce", price: 10.95 }
    ],
    quiche: [
        { name: "Bacon, Swiss, Mushroom, Zucchini", description: "Mushroom Quiche Choice of Fresh Fruit or Green Salad", price: 8.95 }
    ],
    greenSalads: [
        { name: "Grilled Red Trout", description: "Lentils, tomatoes, cukes, green beans, red bells, almonds, sundried tomato vinaigrette", price: 10.95 },
        { name: "Smoked Turkey Cheese Tortellini", description: "Bacon, tomato, cucumber, egg, black bean-corn salsa, avocado", price: 9.95 },
        { name: "Asian Grilled Chicken", description: "Snow peas, carrot slaw, red bells, water chestnut, peanuts, baby corn, cilantro, cukes, spicy peanut dressing", price: 10.50 },
        { name: "Southwest Grilled Chicken", description: "Tomato, guacamole, pepitas, jicama, corn & black bean salsa, orange wedges, spicy citrus vinaigrette", price: 10.50 },
        { name: "Mediterranean Italian Sausage", description: "Artichoke hearts, green beans, roma tomato, kalamatas, red onion, cucumber, croutons, parmesan, fresh mozzarella, gorgonzola vinaigrette", price: 9.95 },
        { name: "Grilled Salmon", description: "Artichoke tapenade, shredded kale, corn, radish, parmesan crisps", price: 11.50 }
    ]
};

module.exports = menu;