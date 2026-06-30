export type DietaryTag = "vegetarian" | "vegan" | "gluten-free" | "spicy";
export type SpiceLevel = "mild" | "medium" | "hot";
export type AllergenTag = "dairy" | "egg" | "nuts" | "soy" | "gluten";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  spiceLevel: SpiceLevel;
  allergens: AllergenTag[];
  tags?: DietaryTag[];
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

type RawItem = [name: string, price: number];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function includesAny(name: string, keywords: string[]) {
  const normalizedName = name.toLowerCase();
  return keywords.some((keyword) => normalizedName.includes(keyword));
}

function getSpiceLevel(name: string, categoryId: string): SpiceLevel {
  if (["mocktails-beverages", "salad-raita", "sweets-ice-cream", "roti-breads"].includes(categoryId)) {
    return "mild";
  }

  const hotKeywords = [
    "chilly",
    "chili",
    "65",
    "kalimirch",
    "hot",
    "manchaw",
    "manchurian",
    "garlic",
    "tikka",
    "kabab",
    "kassa",
    "rogan",
  ];

  if (includesAny(name, hotKeywords)) {
    return "hot";
  }

  const mediumKeywords = [
    "masala",
    "karahi",
    "handi",
    "curry",
    "biryani",
    "do pyaza",
    "bhuna",
    "dehati",
    "korma",
    "pulao",
    "roll",
    "noodles",
    "tandoori",
  ];

  return includesAny(name, mediumKeywords) ? "medium" : "mild";
}

function getAllergens(name: string, categoryId: string): AllergenTag[] {
  const allergens: AllergenTag[] = [];

  if (includesAny(name, ["paneer", "butter", "malai", "lassi", "raita", "curd", "ice cream", "milk", "cheese", "shahi"])) {
    allergens.push("dairy");
  }

  if (includesAny(name, ["egg", "omlet"])) {
    allergens.push("egg");
  }

  if (includesAny(name, ["kashmiri", "korma", "afghani"])) {
    allergens.push("nuts");
  }

  if (includesAny(name, ["noodles", "manchurian", "chilly", "hakka", "dry rice"])) {
    allergens.push("soy");
  }

  if (
    includesAny(name, [
      "naan",
      "roti",
      "paratha",
      "kulcha",
      "roll",
      "noodles",
      "pakora",
      "cutlet",
      "fry",
      "manchurian",
      "papad",
      "gulab jamun",
      "rasgulla",
      "lollipop",
    ]) ||
    categoryId === "roti-breads"
  ) {
    allergens.push("gluten");
  }

  return [...new Set(allergens)];
}

function getDietaryTags(name: string, spiceLevel: SpiceLevel, allergens: AllergenTag[]): DietaryTag[] {
  const tags: DietaryTag[] = [];
  const isNonVegetarian = includesAny(name, ["chicken", "mutton", "egg", "fish", "omlet"]);

  if (!isNonVegetarian) {
    tags.push("vegetarian");
  }

  if (!isNonVegetarian && !allergens.includes("dairy") && !includesAny(name, ["honey"])) {
    tags.push("vegan");
  }

  if (!allergens.includes("gluten")) {
    tags.push("gluten-free");
  }

  if (spiceLevel === "hot") {
    tags.push("spicy");
  }

  return tags;
}

function getIngredientText(name: string, categoryId: string) {
  if (categoryId === "mocktails-beverages") {
    if (includesAny(name, ["tea"])) return "Tea leaves, milk and water";
    if (includesAny(name, ["coffee"])) return "Roasted coffee, milk and sugar";
    if (includesAny(name, ["cold drink"])) return "Chilled carbonated soft drink";
    if (includesAny(name, ["blue lemon"])) return "Lemon juice, blue syrup and soda";
    if (includesAny(name, ["ocean blue"])) return "Citrus blend, blue syrup and ice";
    if (includesAny(name, ["lemon soda"])) return "Fresh lemon, soda and black salt";
    if (includesAny(name, ["jal jira"])) return "Roasted cumin, mint, lemon and chilled water";
    if (includesAny(name, ["milk shake"])) return "Chilled milk, ice cream and syrup";
    return "House beverage ingredients";
  }

  if (includesAny(name, ["paneer mushroom"])) return "Paneer, mushroom, onion and tomato";
  if (includesAny(name, ["mix veg"])) return "Seasonal vegetables, onion, tomato and spices";
  if (includesAny(name, ["palak paneer"])) return "Paneer, spinach puree and aromatic spices";
  if (includesAny(name, ["malai kofta"])) return "Soft kofta dumplings, cream and mild spices";
  if (includesAny(name, ["dal makhni"])) return "Whole lentils, butter, cream and spices";
  if (includesAny(name, ["dal"])) return "Lentils, onion, garlic and tempering spices";
  if (includesAny(name, ["pulao", "biryani"])) return "Basmati rice, whole spices and herbs";
  if (includesAny(name, ["jeera rice"])) return "Steamed rice, cumin and ghee";
  if (includesAny(name, ["steam rice"])) return "Long-grain rice and water";
  if (includesAny(name, ["naan", "kulcha"])) return "Refined flour dough, yogurt and butter";
  if (includesAny(name, ["roti", "paratha"])) return "Whole-wheat dough, ghee and seasonings";
  if (includesAny(name, ["sattu"])) return "Roasted gram flour stuffing, onion and spices";
  if (includesAny(name, ["raita"])) return "Curd, roasted cumin and fresh vegetables";
  if (includesAny(name, ["curd"])) return "Fresh cultured milk";
  if (includesAny(name, ["salad"])) return "Fresh-cut vegetables and light seasoning";
  if (includesAny(name, ["gulab jamun"])) return "Khoya dumplings, cardamom and sugar syrup";
  if (includesAny(name, ["rasgulla"])) return "Chenna balls and light sugar syrup";
  if (includesAny(name, ["ice cream"])) return "Flavored milk cream and sugar";
  if (includesAny(name, ["lassi"])) return "Curd, sugar and chilled water";
  if (includesAny(name, ["mutton"])) return "Mutton, onion, tomato and whole spices";
  if (includesAny(name, ["chicken"])) return "Chicken, onion, tomato and house spices";
  if (includesAny(name, ["fish"])) return "Fish fillet, ginger-garlic and spice blend";
  if (includesAny(name, ["egg", "omlet"])) return "Eggs, onion, chili and spices";
  if (includesAny(name, ["paneer"])) return "Paneer, onion, tomato and masala";
  if (includesAny(name, ["mushroom"])) return "Mushroom, onion, tomato and spices";
  if (includesAny(name, ["baby corn"])) return "Baby corn, capsicum and sauces";
  if (includesAny(name, ["corn"])) return "Corn, onion and spice seasoning";
  if (includesAny(name, ["potato", "aloo"])) return "Potato, onion and dry spices";
  if (includesAny(name, ["bhindi"])) return "Okra, onion and spices";
  if (includesAny(name, ["mutter"])) return "Green peas, onion and tomato masala";
  if (includesAny(name, ["tomato soup"])) return "Ripe tomato puree, herbs and pepper";
  if (includesAny(name, ["soup"])) return "Stock, vegetables and seasoning";
  if (includesAny(name, ["noodles"])) return "Noodles, vegetables and sauces";
  if (includesAny(name, ["dry rice"])) return "Rice, vegetables and Indo-Chinese sauces";
  if (includesAny(name, ["roll"])) return "Paratha, salad onions and spiced filling";
  if (includesAny(name, ["pakora", "cutlet", "fry", "65", "lollipop"])) return "Main ingredient, gram flour coating and spices";
  return "Fresh ingredients and house spice mix";
}

function getPreparationText(name: string, categoryId: string) {
  if (categoryId === "mocktails-beverages") {
    if (includesAny(name, ["tea"])) return "Brewed and served hot";
    if (includesAny(name, ["coffee"])) return "Brewed fresh and served hot";
    if (includesAny(name, ["cold drink"])) return "Served chilled";
    return "Blended or mixed and served chilled";
  }

  if (includesAny(name, ["hot & sour", "manchaw", "clear"])) return "Slow-simmered into a clear, seasoned broth";
  if (includesAny(name, ["soup"])) return "Slow-simmered and finished with herbs";
  if (includesAny(name, ["pakora", "cutlet", "fry", "65", "finger chips", "french fry", "lollipop"])) return "Crisp-fried and served hot";
  if (includesAny(name, ["chilly", "manchurian"])) return "Wok-tossed on high flame with sauce";
  if (includesAny(name, ["noodles", "hakka"])) return "High-flame wok-tossed";
  if (includesAny(name, ["dry rice"])) return "Stir-fried in Indo-Chinese style";
  if (includesAny(name, ["roll"])) return "Stuffed and wrapped in a toasted paratha";
  if (includesAny(name, ["biryani"])) return "Layered and dum-cooked";
  if (includesAny(name, ["pulao", "rice"])) return "Cooked fluffy with whole spices";
  if (includesAny(name, ["naan", "roti", "kulcha", "paratha"])) return "Tawa or tandoor cooked to order";
  if (includesAny(name, ["tandoori", "tikka", "kabab"])) return "Marinated and roasted in the tandoor";
  if (includesAny(name, ["karahi"])) return "Cooked in a karahi with onion and capsicum";
  if (includesAny(name, ["do pyaza"])) return "Sauteed with double onion and masala";
  if (includesAny(name, ["bhuna"])) return "Bhuna-cooked until masala is reduced";
  if (includesAny(name, ["korma"])) return "Slow-cooked in a rich korma-style gravy";
  if (includesAny(name, ["butter masala"])) return "Cooked in creamy butter-tomato gravy";
  if (includesAny(name, ["curry", "masala", "handi", "dehati", "kassa", "bharta"])) return "Slow-cooked in house gravy";
  if (includesAny(name, ["raita"])) return "Whisked and served chilled";
  if (includesAny(name, ["salad"])) return "Fresh-cut and lightly seasoned";
  if (includesAny(name, ["ice cream"])) return "Scooped and served cold";
  if (includesAny(name, ["gulab jamun", "rasgulla"])) return "Sweetened and served dessert-style";
  if (includesAny(name, ["lassi"])) return "Whisked until smooth and served chilled";
  return "Prepared fresh to order";
}

function getFinishText(name: string, spiceLevel: SpiceLevel) {
  if (includesAny(name, ["hot & sour"])) return "Tangy and peppery finish.";
  if (includesAny(name, ["manchaw", "manchurian", "chilly", "65"])) return "Bold Indo-Chinese flavor.";
  if (includesAny(name, ["biryani"])) return "Aromatic and deeply spiced.";
  if (includesAny(name, ["korma", "malai", "reshmi"])) return "Rich and creamy profile.";
  if (includesAny(name, ["raita", "salad", "lassi"])) return "Cooling and refreshing.";
  if (includesAny(name, ["ice cream", "gulab jamun", "rasgulla"])) return "Sweet finish.";
  if (spiceLevel === "hot") return "Spicy finish.";
  if (spiceLevel === "medium") return "Balanced spice.";
  return "Mild and comforting.";
}

function buildDescription(name: string, spiceLevel: SpiceLevel, categoryId: string) {
  const ingredients = getIngredientText(name, categoryId);
  const preparation = getPreparationText(name, categoryId);
  const finish = getFinishText(name, spiceLevel);
  return `${ingredients}. ${preparation}. ${finish}`;
}

function toItems(categoryId: string, categoryName: string, items: RawItem[]) {
  return items.map(([name, price]) => {
    const spiceLevel = getSpiceLevel(name, categoryId);
    const allergens = getAllergens(name, categoryId);

    return {
      id: slugify(name),
      name,
      description: buildDescription(name, spiceLevel, categoryId),
      price,
      spiceLevel,
      allergens,
      tags: getDietaryTags(name, spiceLevel, allergens),
    };
  });
}

export const dietaryFilterOptions: { label: string; value: DietaryTag }[] = [
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Vegan", value: "vegan" },
  { label: "Gluten Free", value: "gluten-free" },
  { label: "Spicy", value: "spicy" },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "mocktails-beverages",
    name: "Mocktails & Beverages",
    description: "Refreshing mocktails and everyday beverages.",
    items: toItems("mocktails-beverages", "Mocktails & Beverages", [
      ["Tea", 20],
      ["Hot Coffee", 50],
      ["Cold Drink (200ml)", 40],
      ["Blue Lemon", 60],
      ["Ocean Blue", 60],
      ["Lemon Soda", 50],
      ["Jal Jira", 40],
      ["Milk Shake", 60],
      ["Cold Casserly", 100],
    ]),
  },
  {
    id: "soups",
    name: "Soups",
    description: "Warm and comforting soup selections.",
    items: toItems("soups", "Soups", [
      ["Veg Soup", 60],
      ["Veg Hot & Sour Soup", 70],
      ["Chicken Soup", 90],
      ["Chicken Hot & Sour Soup", 100],
      ["Tomato Soup", 80],
      ["Veg Clear Soup", 70],
      ["Veg Manchaw Soup", 70],
      ["Chicken Manchaw Soup", 70],
      ["Chicken Manchaw Soup (Special)", 90],
      ["Chicken Hot Garlic Soup", 100],
      ["Mushroom Soup", 70],
      ["Veg Garlic Soup", 70],
    ]),
  },
  {
    id: "starters",
    name: "Starters",
    description: "Crispy and flavorful starters.",
    items: toItems("starters", "Starters", [
      ["French Fry", 50],
      ["Veg Pakora (8pcs)", 100],
      ["Paneer Pakora (8pcs)", 100],
      ["Chicken Pakora", 140],
      ["Veg Cutlet", 100],
      ["Finger Chips", 100],
      ["Omlet", 50],
      ["Onion Pakora (8pcs)", 100],
      ["Paneer 65", 170],
      ["Baby Corn Chilly", 190],
      ["Baby Corn Chilly Crispy", 200],
      ["Potato Chilly", 150],
      ["Honey Chilly Potato", 170],
      ["Paneer Garlic Chilly Dry", 190],
      ["Chicken Chilly Dry", 190],
      ["Paneer Chilly Dry", 180],
      ["Mushroom Chilly Dry", 180],
      ["Chicken Lolipop (16pcs)", 200],
      ["Veg Manchurian Dry", 100],
      ["Mushroom 65", 170],
    ]),
  },
  {
    id: "chinese",
    name: "Chinese",
    description: "Popular noodles, rice, and Indo-Chinese favorites.",
    items: toItems("chinese", "Chinese", [
      ["Veg Noodles", 100],
      ["Paneer Noodles", 110],
      ["Egg Noodles", 120],
      ["Chicken Noodles", 130],
      ["Mix Noodles", 150],
      ["Veg Hakka Noodles", 120],
      ["Chicken Hakka Noodles", 160],
      ["Veg Dry Rice", 110],
      ["Chicken Dry Rice", 130],
      ["Mix Dry Rice", 140],
      ["Paneer Dry Rice", 130],
      ["Paneer Chilly (9pcs)", 190],
      ["Mushroom Chilly", 190],
      ["Paneer Garlic Chilly (9pcs)", 200],
      ["Veg Manchurian", 110],
    ]),
  },
  {
    id: "rolls",
    name: "Rolls",
    description: "Quick and tasty rolls for every craving.",
    items: toItems("rolls", "Rolls", [
      ["Veg Roll", 40],
      ["Paneer Roll", 60],
      ["Paneer Cheese Roll", 80],
      ["Egg Roll", 40],
      ["Double Egg Roll", 40],
      ["Roll Special Veg Roll", 40],
      ["Double Egg Chicken Roll", 70],
      ["Chicken Tikka Kabab Roll", 100],
      ["Chicken Cheese Roll", 70],
    ]),
  },
  {
    id: "biryani",
    name: "Biryani",
    description: "Aromatic biryani options in veg and non-veg.",
    items: toItems("biryani", "Biryani", [
      ["Chicken Biryani", 170],
      ["Chicken Lakhnawi Biryani", 190],
      ["Mutton Biryani", 230],
      ["Mutton Hyderabadi Biryani", 240],
      ["Veg Biryani", 130],
      ["Paneer Biryani", 140],
      ["Egg Biryani", 140],
      ["Veg Hyderabadi Biryani", 140],
    ]),
  },
  {
    id: "roti-breads",
    name: "Roti / Breads",
    description: "Freshly prepared Indian breads.",
    items: toItems("roti-breads", "Roti / Breads", [
      ["Tandoori Roti", 15],
      ["Tandoori Butter Roti", 15],
      ["Butter Naan", 35],
      ["Plain Naan", 30],
      ["Lachha Paratha", 35],
      ["Missi Roti", 35],
      ["Butter Kulcha", 40],
      ["Masala Kulcha", 50],
      ["Paneer Paratha", 50],
      ["Aloo Paratha", 40],
      ["Sattu Paratha", 50],
      ["Garlic Naan", 35],
      ["Kashmiri Naan", 50],
      ["Paneer Stuff Naan", 50],
      ["Veg Stuffed Naan", 50],
    ]),
  },
  {
    id: "dal-rice",
    name: "Dal / Rice",
    description: "Classic dal and rice combinations.",
    items: toItems("dal-rice", "Dal / Rice", [
      ["Dal Fry", 80],
      ["Dal Tarka", 100],
      ["Dal Makhni", 120],
      ["Steam Rice", 80],
      ["Jeera Rice", 90],
      ["Veg Pulao", 130],
      ["Kashmiri Pulao", 150],
    ]),
  },
  {
    id: "kabab",
    name: "Kabab",
    description: "Tandoor and grill specialties.",
    items: toItems("kabab", "Kabab", [
      ["Chicken Tandoori (Half)", 200],
      ["Chicken Tandoori (Full)", 350],
      ["Chicken Tikka", 260],
      ["Chicken Boti Kabab", 270],
      ["Chicken Afghani Tikka", 280],
      ["Chicken Kalimirch Tikka", 280],
      ["Chicken Malai Tikka", 290],
      ["Paneer Tikka", 180],
      ["Paneer Boti Kabab", 190],
      ["Mushroom Tikka", 180],
      ["Chicken Reshmi Kabab", 290],
      ["Chicken Leg Kabab", 290],
    ]),
  },
  {
    id: "main-course-veg",
    name: "Main Course (Veg)",
    description: "Rich and hearty vegetarian mains.",
    items: toItems("main-course-veg", "Main Course (Veg)", [
      ["Paneer Karahi", 230],
      ["Paneer Do Pyaza", 220],
      ["Paneer Butter Masala", 240],
      ["Paneer Handi", 240],
      ["Paneer Masala", 210],
      ["Shahi Paneer", 225],
      ["Malai Kofta", 240],
      ["Mutter Paneer", 200],
      ["Paneer Mushroom Masala", 220],
      ["Paneer Dehati", 240],
      ["Mushroom Karahi", 230],
      ["Mushroom Masala", 210],
      ["Mushroom Handi", 240],
      ["Mushroom Do Pyaza", 220],
      ["Mushroom Dehati", 240],
      ["Paneer Adrakhi", 230],
      ["Paneer Lababdar", 230],
      ["Mix Veg", 130],
      ["Mushroom Butter Masala", 200],
    ]),
  },
  {
    id: "s-veg",
    name: "S. Veg",
    description: "Simple vegetarian comfort dishes.",
    items: toItems("s-veg", "S. Veg", [
      ["Aloo Mutter", 100],
      ["Aloo Dum / Aloo Jeera", 100],
      ["Aloo Do Pyaza", 100],
      ["Aloo Gobi", 100],
      ["Mutter Masala", 100],
      ["Aloo Parwal", 100],
      ["Aloo Palak", 110],
      ["Bhindi Masala", 110],
      ["Palak Paneer", 200],
    ]),
  },
  {
    id: "non-veg",
    name: "Non-Veg",
    description: "Chicken and mutton specialties.",
    items: toItems("non-veg", "Non-Veg", [
      ["Chicken Karahi", 230],
      ["Chicken Bhuna", 210],
      ["Chicken Masala", 200],
      ["Chicken Curry", 200],
      ["Chicken Do Pyaza (Half)", 120],
      ["Chicken Do Pyaza (Full)", 220],
      ["Chicken Butter Masala", 240],
      ["Chicken Bharta", 200],
      ["Chicken Kalimirch", 230],
      ["Chicken Korma", 250],
      ["Chicken Kassa", 200],
      ["Chicken Dehati (Half)", 250],
      ["Chicken Dehati (Full)", 450],
      ["Mutton Masala", 290],
      ["Mutton Do Pyaza", 290],
      ["Mutton Rogan Gosh", 290],
      ["Mushroom Dehati (Half)", 320],
      ["Mushroom Dehati (Full)", 600],
      ["Mutton Handi", 500],
      ["Mutton Karahi", 290],
      ["Mutton Kalimirch", 290],
      ["Arch Special Chicken (Full)", 600],
    ]),
  },
  {
    id: "egg-fish",
    name: "Egg & Fish",
    description: "Egg and fish preparations.",
    items: toItems("egg-fish", "Egg & Fish", [
      ["Egg Curry (2pcs)", 100],
      ["Egg Masala", 100],
      ["Egg Do Pyaza", 110],
      ["Omlet Masala", 110],
      ["Fish Curry", 220],
      ["Fish Fry", 150],
    ]),
  },
  {
    id: "salad-raita",
    name: "Salad & Raita",
    description: "Fresh sides and cooling accompaniments.",
    items: toItems("salad-raita", "Salad & Raita", [
      ["Green Salad", 45],
      ["Onion Salad", 25],
      ["Cucumber Salad", 25],
      ["Fruit Salad", 80],
      ["Mix Raita", 60],
      ["Bundi Raita", 80],
      ["Boondi Raita (Special)", 80],
      ["Papad", 10],
      ["Curd", 50],
    ]),
  },
  {
    id: "sweets-ice-cream",
    name: "Sweets & Ice Cream",
    description: "Classic desserts and chilled favorites.",
    items: toItems("sweets-ice-cream", "Sweets & Ice Cream", [
      ["Gulab Jamun (2pcs)", 50],
      ["Rasgulla (2pcs)", 50],
      ["Butter Scotch Ice Cream", 80],
      ["Chocolate Ice Cream", 80],
      ["Vanilla Ice Cream", 60],
      ["Strawberry Ice Cream", 80],
      ["Lassi", 60],
    ]),
  },
];

export const featuredDishIds = [
  "arch-special-chicken-full",
  "chicken-biryani",
  "paneer-butter-masala",
];
