const fs = require('fs');

const originalContent = fs.readFileSync('lib/site-data.ts', 'utf8');
const baseContent = originalContent.split('export type FinishedProduct = {')[0];

const newContent = baseContent + export type FinishedProduct = {
  slug: string;
  name: string;
  neck: string;
  weight: string;
  category: "Jar" | "Bottle";
  dimensions: { height: string; diameter: string; };
  features: { label: string; icon: string }[];
  suitableFor: string[];
  image: string;
  note?: string;
};

export const catalogProducts: FinishedProduct[] = [
  // --- JARS (10 Products) ---
  {
    slug: "96mm-rolex-jar-40gm",
    name: "96 MM ROLEX JAR", neck: "96mm", weight: "40 GM", category: "Jar",
    dimensions: { height: "246.5 mm", diameter: "96 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "Crystal Clear Visibility", icon: "Eye" }, { label: "Lightweight & Easy", icon: "Leaf" }],
    suitableFor: ["Chikki", "Dry Fruits", "Cookies", "Mukhwas", "Candy", "Spices"],
    image: "/images/preform-hero.png", note: "IDEAL FOR CHIKKI & CONFECTIONERY"
  },
  {
    slug: "53mm-fridge-jar-25gm",
    name: "53 MM FRIDGE JAR", neck: "53mm", weight: "25 GM", category: "Jar",
    dimensions: { height: "110 mm", diameter: "53 mm" },
    features: [{ label: "Space Saving", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Durable", icon: "Diamond" }],
    suitableFor: ["Spices", "Pickles", "Sauces", "Chutney"],
    image: "/images/preform-hero.png", note: "IDEAL FOR KITCHEN SPICES"
  },
  {
    slug: "60mm-round-jar-30gm",
    name: "60 MM ROUND JAR", neck: "60mm", weight: "30 GM", category: "Jar",
    dimensions: { height: "120 mm", diameter: "60 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "High Clarity", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Peanut Butter", "Honey", "Jam", "Pickles"],
    image: "/images/preform-hero.png", note: "PERFECT FOR SPREADS & HONEY"
  },
  {
    slug: "63mm-square-jar-30gm",
    name: "63 MM SQUARE JAR", neck: "63mm", weight: "30 GM", category: "Jar",
    dimensions: { height: "125 mm", diameter: "63 mm" },
    features: [{ label: "Stackable Design", icon: "Diamond" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Easy to Handle", icon: "Leaf" }],
    suitableFor: ["Pickles", "Spices", "Dry Fruits", "Mukhwas"],
    image: "/images/preform-hero.png", note: "ELEGANT SQUARE DESIGN"
  },
  {
    slug: "73mm-kitchen-jar-35gm",
    name: "73 MM KITCHEN JAR", neck: "73mm", weight: "35 GM", category: "Jar",
    dimensions: { height: "140 mm", diameter: "73 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Impact Resistant", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Ghee", "Masala", "Namkeen", "Pulses"],
    image: "/images/preform-hero.png", note: "ESSENTIAL KITCHEN STORAGE"
  },
  {
    slug: "83mm-multipurpose-jar-50gm",
    name: "83 MM MULTIPURPOSE JAR", neck: "83mm", weight: "50 GM", category: "Jar",
    dimensions: { height: "160 mm", diameter: "83 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Heavy Duty", icon: "Diamond" }, { label: "Premium Look", icon: "Eye" }, { label: "Easy to Handle", icon: "Leaf" }],
    suitableFor: ["Dry Fruits", "Namkeen", "Cookies", "Chocolates"],
    image: "/images/preform-hero.png", note: "VERSATILE FOR ALL SNACKS"
  },
  {
    slug: "96mm-heavy-jar-65gm",
    name: "96 MM HEAVY JAR", neck: "96mm", weight: "65 GM", category: "Jar",
    dimensions: { height: "245 mm", diameter: "96 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Extra Strong", icon: "Diamond" }, { label: "Crystal Clear Visibility", icon: "Eye" }, { label: "Premium Feel", icon: "Leaf" }],
    suitableFor: ["Protein Powder", "Snacks", "Bulk Sweets", "Dry Fruits"],
    image: "/images/preform-hero.png", note: "IDEAL FOR HEAVY FILLING"
  },
  {
    slug: "120mm-wide-mouth-jar-102gm",
    name: "120 MM WIDE MOUTH JAR", neck: "120mm", weight: "102 GM", category: "Jar",
    dimensions: { height: "180 mm", diameter: "120 mm" },
    features: [{ label: "Wide Opening", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Strong & Durable", icon: "Diamond" }],
    suitableFor: ["Farsan", "Cookies", "Papad", "Wafers"],
    image: "/images/preform-hero.png", note: "EASY ACCESS WIDE MOUTH"
  },
  {
    slug: "120mm-jumbo-jar-140gm",
    name: "120 MM JUMBO JAR", neck: "120mm", weight: "140 GM", category: "Jar",
    dimensions: { height: "220 mm", diameter: "120 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Maximum Strength", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Bulk Storage", icon: "Leaf" }],
    suitableFor: ["Bulk Sweets", "Confectionery", "Farsan", "Wholesale Packaging"],
    image: "/images/preform-hero.png", note: "FOR LARGE QUANTITY STORAGE"
  },
  {
    slug: "53mm-mini-jar-14gm",
    name: "53 MM MINI JAR", neck: "53mm", weight: "14 GM", category: "Jar",
    dimensions: { height: "80 mm", diameter: "53 mm" },
    features: [{ label: "Compact Design", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Durable", icon: "Diamond" }],
    suitableFor: ["Saffron", "Elaichi", "Mukhwas", "Premium Spices"],
    image: "/images/preform-hero.png", note: "PERFECT FOR PREMIUM SPICES"
  },

  // --- BOTTLES (10 Products) ---
  {
    slug: "28mm-pco-water-bottle-23gm",
    name: "28 MM PCO WATER BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "260 mm", diameter: "65 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Leak Proof", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Mineral Water", "Soda", "Juice", "Cold Drinks"],
    image: "/images/preform-hero.png", note: "STANDARD MINERAL WATER BOTTLE"
  },
  {
    slug: "28mm-juice-bottle-23gm",
    name: "28 MM JUICE BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "250 mm", diameter: "60 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "High Clarity", icon: "Eye" }, { label: "Easy Grip", icon: "Leaf" }],
    suitableFor: ["Fruit Juice", "Flavored Milk", "Dairy", "Syrups"],
    image: "/images/preform-hero.png", note: "ATTRACTIVE SHAPE FOR BEVERAGES"
  },
  {
    slug: "28mm-fridge-bottle-23gm",
    name: "28 MM FRIDGE BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "280 mm", diameter: "70 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Fridge Safe", icon: "Leaf" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Strong", icon: "Diamond" }],
    suitableFor: ["Drinking Water", "Shakes", "Juices"],
    image: "/images/preform-hero.png", note: "IDEAL FOR HOME REFRIGERATORS"
  },
  {
    slug: "32mm-sauce-bottle-10gm",
    name: "32 MM SAUCE BOTTLE", neck: "32mm", weight: "10 GM", category: "Bottle",
    dimensions: { height: "150 mm", diameter: "50 mm" },
    features: [{ label: "Squeezable", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear", icon: "Eye" }, { label: "Durable", icon: "Diamond" }],
    suitableFor: ["Ketchup", "Chili Sauce", "Mayonnaise", "Dressings"],
    image: "/images/preform-hero.png", note: "PERFECT FOR TABLE SAUCES"
  },
  {
    slug: "28mm-edible-oil-bottle-23gm",
    name: "28 MM EDIBLE OIL BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "275 mm", diameter: "75 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Spill Proof", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Ergonomic", icon: "Leaf" }],
    suitableFor: ["Cooking Oil", "Ghee", "Mustard Oil", "Hair Oil"],
    image: "/images/preform-hero.png", note: "DESIGNED FOR OILS & LIQUIDS"
  },
  {
    slug: "28mm-carbonated-drink-bottle-23gm",
    name: "28 MM CSD BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "265 mm", diameter: "68 mm" },
    features: [{ label: "Pressure Resistant", icon: "Diamond" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Cola", "Soda", "Sparkling Water", "Energy Drinks"],
    image: "/images/preform-hero.png", note: "FOR CARBONATED SOFT DRINKS"
  },
  {
    slug: "32mm-syrups-bottle-10gm",
    name: "32 MM SYRUPS BOTTLE", neck: "32mm", weight: "10 GM", category: "Bottle",
    dimensions: { height: "160 mm", diameter: "50 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "Amber/Clear", icon: "Eye" }, { label: "Accurate Dosing", icon: "Leaf" }],
    suitableFor: ["Cough Syrup", "Liquid Medicines", "Food Syrups"],
    image: "/images/preform-hero.png", note: "PHARMA & FOOD GRADE"
  },
  {
    slug: "28mm-handwash-dispenser-23gm",
    name: "28 MM HANDWASH BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "180 mm", diameter: "70 mm" },
    features: [{ label: "Pump Compatible", icon: "Leaf" }, { label: "Strong Design", icon: "Diamond" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Chemical Safe", icon: "Utensils" }],
    suitableFor: ["Handwash", "Sanitizer", "Body Wash", "Liquid Soap"],
    image: "/images/preform-hero.png", note: "COMPATIBLE WITH DISPENSER PUMPS"
  },
  {
    slug: "28mm-shampoo-bottle-23gm",
    name: "28 MM SHAMPOO BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "200 mm", diameter: "60 mm" },
    features: [{ label: "Premium Look", icon: "Eye" }, { label: "Durable", icon: "Diamond" }, { label: "Squeezable", icon: "Leaf" }, { label: "Chemical Safe", icon: "Utensils" }],
    suitableFor: ["Shampoo", "Conditioner", "Lotions", "Cosmetics"],
    image: "/images/preform-hero.png", note: "IDEAL FOR PERSONAL CARE"
  },
  {
    slug: "28mm-travel-bottle-23gm",
    name: "28 MM TRAVEL BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "140 mm", diameter: "50 mm" },
    features: [{ label: "Compact & Light", icon: "Leaf" }, { label: "Leak Proof", icon: "Diamond" }, { label: "Clear", icon: "Eye" }, { label: "Food Grade", icon: "Utensils" }],
    suitableFor: ["Travel Liquids", "Lotions", "Oils", "Samples"],
    image: "/images/preform-hero.png", note: "POCKET FRIENDLY TRAVEL SIZE"
  }
];
\;

fs.writeFileSync('lib/site-data.ts', newContent, 'utf8');
