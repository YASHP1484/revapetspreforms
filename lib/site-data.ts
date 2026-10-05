export type ProductRange = {
  neck: string;
  weights: string[];
  name: string;
  kind: "Bottle preform" | "Jar preform";
  note?: string;
  description?: string;
  filledImage?: string;
};

export const productRanges: ProductRange[] = [
  { neck: "28mm", weights: ["23gm"], name: "Long PCO", kind: "Bottle preform", note: "STANDARD WATER & BEVERAGE", filledImage: "/images/large_jar.jpg", description: "Manufactured with high precision for maximum durability and crystal-clear appearance. This 28mm Long PCO preform is specifically designed for carbonated drinks, juices, and mineral water bottles. 100% food-grade and BPA-free." },
  { neck: "32mm", weights: ["10gm"], name: "32mm Series", kind: "Bottle preform", note: "IDEAL FOR SAUCES & SYRUPS", filledImage: "/images/large_jar.jpg", description: "Engineered for thick liquids, this 32mm neck finish is the industry standard for ketchup, mayonnaise, and pharmaceutical syrups. Highly durable, squeeze-resistant, and 100% food-grade." },
  { neck: "53mm", weights: ["11gm", "14gm", "21gm", "25gm"], name: "53mm Series", kind: "Jar preform", note: "COMPACT STORAGE JARS", filledImage: "/images/large_jar.jpg", description: "Versatile 53mm jar preforms available in multiple weights. Perfect for premium spices, saffron, pickles, and mini kitchen storage. Delivers exceptional clarity and strength for long-lasting freshness." },
  { neck: "60mm", weights: ["30gm", "63gm"], name: "60mm Series", kind: "Jar preform", note: "SPREADS & HONEY CONTAINERS", filledImage: "/images/large_jar.jpg", description: "Designed specifically for spreads, peanut butter, and honey. The 60mm series ensures a wide enough mouth for easy access while maintaining structural integrity and premium shelf appeal." },
  { neck: "63mm", weights: ["19gm", "21gm", "30gm"], name: "63mm Series", kind: "Jar preform", note: "SQUARE & ROUND SPICE JARS", filledImage: "/images/large_jar.jpg", description: "The 63mm series provides excellent structural balance for medium-sized jars. Widely used for premium spices, dry fruits, and mukhwas. Offers a perfect blend of lightweight economy and durability." },
  { neck: "73mm", weights: ["27gm", "30gm", "35gm"], name: "73mm Series", kind: "Jar preform", note: "ESSENTIAL KITCHEN STORAGE", filledImage: "/images/large_jar.jpg", description: "A highly popular size for household staples. The 73mm neck size is standard for ghee, dal, and everyday kitchen ingredients. Designed to withstand rough handling while keeping contents secure." },
  { neck: "83mm", weights: ["45gm", "50gm"], name: "83mm Series", kind: "Jar preform", note: "VERSATILE SNACK CONTAINERS", filledImage: "/images/large_jar.jpg", description: "Engineered for volume packaging. The 83mm wide mouth is ideal for snacks, cookies, and premium dry fruits. Its heavy-duty build ensures product safety during transit and retail display." },
  { neck: "96mm", weights: ["45gm", "50gm"], name: "96mm Light Series", kind: "Jar preform", note: "CHIKKI & CONFECTIONERY", filledImage: "/images/large_jar.jpg", description: "Lightweight yet structurally sound, this 96mm series is the go-to choice for lightweight bulk items like chikki, wafers, and candy. Provides maximum visual appeal at an economical weight." },
  { neck: "96mm", weights: ["60gm", "65gm", "70gm"], name: "96mm Heavy Series", kind: "Jar preform", note: "HEAVY FILLING & PROTEIN", filledImage: "/images/large_jar.jpg", description: "Built for heavy-duty applications. This thick-walled 96mm series is designed for protein powders, bulk sweets, and dense materials. Ensures zero deformation under weight and stacking." },
  { neck: "120mm", weights: ["102gm", "130gm", "140gm"], name: "120mm Series", kind: "Jar preform", note: "JUMBO BULK STORAGE", filledImage: "/images/large_jar.jpg", description: "Our largest wide-mouth series for wholesale packaging. The 120mm neck allows easy hand access, making it perfect for farsan, bulk confectionery, and massive household storage jars." },
];

export const contact = {
  name: "Sejal Patel",
  phones: ["+91 99256 83344", "+91 91068 04501"],
  phoneLinks: ["+919925683344", "+919106804501"],
  email: "revapetpreforms@gmail.com",
  address: "LS No. 1852, Plot No. 27/4, Navkar Estate, Santej-Khatraj Road, Near Rajnagar, Taluka Kalol, District Gandhinagar, Gujarat, India",
};

export type FinishedProduct = {
  slug: string;
  name: string;
  neck: string;
  weight: string;
  category: "Jar" | "Bottle";
  dimensions: { height: string; diameter: string; };
  features: { label: string; icon: string }[];
  description?: string;
  filledImage?: string;
  suitableFor: string[];
  image: string;
  note?: string;
};

export const catalogProducts: FinishedProduct[] = [
  {
    slug: "96mm-rolex-jar-40gm",
    name: "96 MM ROLEX JAR", neck: "96mm", weight: "40 GM", category: "Jar",
    dimensions: { height: "246.5 mm", diameter: "96 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "Crystal Clear Visibility", icon: "Eye" }, { label: "Lightweight & Easy", icon: "Leaf" }],
    suitableFor: ["Chikki", "Dry Fruits", "Cookies", "Mukhwas", "Candy", "Spices"],
    image: "/images/large_jar.jpg", note: "IDEAL FOR CHIKKI & CONFECTIONERY", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. IDEAL FOR CHIKKI & CONFECTIONERY."
  },
  {
    slug: "53mm-fridge-jar-25gm",
    name: "53 MM FRIDGE JAR", neck: "53mm", weight: "25 GM", category: "Jar",
    dimensions: { height: "110 mm", diameter: "53 mm" },
    features: [{ label: "Space Saving", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Durable", icon: "Diamond" }],
    suitableFor: ["Spices", "Pickles", "Sauces", "Chutney"],
    image: "/images/small_jar.jpg", note: "IDEAL FOR KITCHEN SPICES", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. IDEAL FOR KITCHEN SPICES."
  },
  {
    slug: "60mm-round-jar-30gm",
    name: "60 MM ROUND JAR", neck: "60mm", weight: "30 GM", category: "Jar",
    dimensions: { height: "120 mm", diameter: "60 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "High Clarity", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Peanut Butter", "Honey", "Jam", "Pickles"],
    image: "/images/jar_60mm_round.jpg", note: "PERFECT FOR SPREADS & HONEY", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. PERFECT FOR SPREADS & HONEY."
  },
  {
    slug: "63mm-square-jar-30gm",
    name: "63 MM SQUARE JAR", neck: "63mm", weight: "30 GM", category: "Jar",
    dimensions: { height: "125 mm", diameter: "63 mm" },
    features: [{ label: "Stackable Design", icon: "Diamond" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Easy to Handle", icon: "Leaf" }],
    suitableFor: ["Pickles", "Spices", "Dry Fruits", "Mukhwas"],
    image: "/images/jar_63mm_square.jpg", note: "ELEGANT SQUARE DESIGN", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. ELEGANT SQUARE DESIGN."
  },
  {
    slug: "73mm-kitchen-jar-35gm",
    name: "73 MM KITCHEN JAR", neck: "73mm", weight: "35 GM", category: "Jar",
    dimensions: { height: "140 mm", diameter: "73 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Impact Resistant", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Ghee", "Masala", "Namkeen", "Pulses"],
    image: "/images/jar_73mm_kitchen.jpg", note: "ESSENTIAL KITCHEN STORAGE", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. ESSENTIAL KITCHEN STORAGE."
  },
  {
    slug: "83mm-multipurpose-jar-50gm",
    name: "83 MM MULTIPURPOSE JAR", neck: "83mm", weight: "50 GM", category: "Jar",
    dimensions: { height: "160 mm", diameter: "83 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Heavy Duty", icon: "Diamond" }, { label: "Premium Look", icon: "Eye" }, { label: "Easy to Handle", icon: "Leaf" }],
    suitableFor: ["Dry Fruits", "Namkeen", "Cookies", "Chocolates"],
    image: "/images/jar_83mm_multi.jpg", note: "VERSATILE FOR ALL SNACKS", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. VERSATILE FOR ALL SNACKS."
  },
  {
    slug: "96mm-heavy-jar-65gm",
    name: "96 MM HEAVY JAR", neck: "96mm", weight: "65 GM", category: "Jar",
    dimensions: { height: "245 mm", diameter: "96 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Extra Strong", icon: "Diamond" }, { label: "Crystal Clear Visibility", icon: "Eye" }, { label: "Premium Feel", icon: "Leaf" }],
    suitableFor: ["Protein Powder", "Snacks", "Bulk Sweets", "Dry Fruits"],
    image: "/images/jar_96mm_heavy.jpg", note: "IDEAL FOR HEAVY FILLING", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. IDEAL FOR HEAVY FILLING."
  },
  {
    slug: "120mm-wide-mouth-jar-102gm",
    name: "120 MM WIDE MOUTH JAR", neck: "120mm", weight: "102 GM", category: "Jar",
    dimensions: { height: "180 mm", diameter: "120 mm" },
    features: [{ label: "Wide Opening", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Strong & Durable", icon: "Diamond" }],
    suitableFor: ["Farsan", "Cookies", "Papad", "Wafers"],
    image: "/images/jar_120mm_wide.jpg", note: "EASY ACCESS WIDE MOUTH", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. EASY ACCESS WIDE MOUTH."
  },
  {
    slug: "120mm-jumbo-jar-140gm",
    name: "120 MM JUMBO JAR", neck: "120mm", weight: "140 GM", category: "Jar",
    dimensions: { height: "220 mm", diameter: "120 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Maximum Strength", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Bulk Storage", icon: "Leaf" }],
    suitableFor: ["Bulk Sweets", "Confectionery", "Farsan", "Wholesale Packaging"],
    image: "/images/jar_120mm_jumbo.jpg", note: "FOR LARGE QUANTITY STORAGE", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. FOR LARGE QUANTITY STORAGE."
  },
  {
    slug: "53mm-mini-jar-14gm",
    name: "53 MM MINI JAR", neck: "53mm", weight: "14 GM", category: "Jar",
    dimensions: { height: "80 mm", diameter: "53 mm" },
    features: [{ label: "Compact Design", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Durable", icon: "Diamond" }],
    suitableFor: ["Saffron", "Elaichi", "Mukhwas", "Premium Spices"],
    image: "/images/jar_53mm_mini.jpg", note: "PERFECT FOR PREMIUM SPICES", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. PERFECT FOR PREMIUM SPICES."
  },
  {
    slug: "28mm-pco-water-bottle-23gm",
    name: "28 MM PCO WATER BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "260 mm", diameter: "65 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Leak Proof", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Mineral Water", "Soda", "Juice", "Cold Drinks"],
    image: "/images/water_bottle.jpg", note: "STANDARD MINERAL WATER BOTTLE", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. STANDARD MINERAL WATER BOTTLE."
  },
  {
    slug: "28mm-juice-bottle-23gm",
    name: "28 MM JUICE BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "250 mm", diameter: "60 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "High Clarity", icon: "Eye" }, { label: "Easy Grip", icon: "Leaf" }],
    suitableFor: ["Fruit Juice", "Flavored Milk", "Dairy", "Syrups"],
    image: "/images/bot_28mm_juice.jpg", note: "ATTRACTIVE SHAPE FOR BEVERAGES", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. ATTRACTIVE SHAPE FOR BEVERAGES."
  },
  {
    slug: "28mm-fridge-bottle-23gm",
    name: "28 MM FRIDGE BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "280 mm", diameter: "70 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Fridge Safe", icon: "Leaf" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Strong", icon: "Diamond" }],
    suitableFor: ["Drinking Water", "Shakes", "Juices"],
    image: "/images/water_bottle.jpg", note: "IDEAL FOR HOME REFRIGERATORS", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. IDEAL FOR HOME REFRIGERATORS."
  },
  {
    slug: "32mm-sauce-bottle-10gm",
    name: "32 MM SAUCE BOTTLE", neck: "32mm", weight: "10 GM", category: "Bottle",
    dimensions: { height: "150 mm", diameter: "50 mm" },
    features: [{ label: "Squeezable", icon: "Leaf" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear", icon: "Eye" }, { label: "Durable", icon: "Diamond" }],
    suitableFor: ["Ketchup", "Chili Sauce", "Mayonnaise", "Dressings"],
    image: "/images/pump_bottle.jpg", note: "PERFECT FOR TABLE SAUCES", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. PERFECT FOR TABLE SAUCES."
  },
  {
    slug: "28mm-edible-oil-bottle-23gm",
    name: "28 MM EDIBLE OIL BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "275 mm", diameter: "75 mm" },
    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Spill Proof", icon: "Diamond" }, { label: "Crystal Clear", icon: "Eye" }, { label: "Ergonomic", icon: "Leaf" }],
    suitableFor: ["Cooking Oil", "Ghee", "Mustard Oil", "Hair Oil"],
    image: "/images/water_bottle.jpg", note: "DESIGNED FOR OILS & LIQUIDS", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. DESIGNED FOR OILS & LIQUIDS."
  },
  {
    slug: "28mm-carbonated-drink-bottle-23gm",
    name: "28 MM CSD BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "265 mm", diameter: "68 mm" },
    features: [{ label: "Pressure Resistant", icon: "Diamond" }, { label: "Food Grade", icon: "Utensils" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Lightweight", icon: "Leaf" }],
    suitableFor: ["Cola", "Soda", "Sparkling Water", "Energy Drinks"],
    image: "/images/water_bottle.jpg", note: "FOR CARBONATED SOFT DRINKS", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. FOR CARBONATED SOFT DRINKS."
  },
  {
    slug: "32mm-syrups-bottle-10gm",
    name: "32 MM SYRUPS BOTTLE", neck: "32mm", weight: "10 GM", category: "Bottle",
    dimensions: { height: "160 mm", diameter: "50 mm" },
    features: [{ label: "Food Grade", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "Amber/Clear", icon: "Eye" }, { label: "Accurate Dosing", icon: "Leaf" }],
    suitableFor: ["Cough Syrup", "Liquid Medicines", "Food Syrups"],
    image: "/images/pump_bottle.jpg", note: "PHARMA & FOOD GRADE", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. PHARMA & FOOD GRADE."
  },
  {
    slug: "28mm-handwash-dispenser-23gm",
    name: "28 MM HANDWASH BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "180 mm", diameter: "70 mm" },
    features: [{ label: "Pump Compatible", icon: "Leaf" }, { label: "Strong Design", icon: "Diamond" }, { label: "Clear Visibility", icon: "Eye" }, { label: "Chemical Safe", icon: "Utensils" }],
    suitableFor: ["Handwash", "Sanitizer", "Body Wash", "Liquid Soap"],
    image: "/images/pump_bottle.jpg", note: "COMPATIBLE WITH DISPENSER PUMPS", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. COMPATIBLE WITH DISPENSER PUMPS."
  },
  {
    slug: "28mm-shampoo-bottle-23gm",
    name: "28 MM SHAMPOO BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "200 mm", diameter: "60 mm" },
    features: [{ label: "Premium Look", icon: "Eye" }, { label: "Durable", icon: "Diamond" }, { label: "Squeezable", icon: "Leaf" }, { label: "Chemical Safe", icon: "Utensils" }],
    suitableFor: ["Shampoo", "Conditioner", "Lotions", "Cosmetics"],
    image: "/images/pump_bottle.jpg", note: "IDEAL FOR PERSONAL CARE", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. IDEAL FOR PERSONAL CARE."
  },
  {
    slug: "28mm-travel-bottle-23gm",
    name: "28 MM TRAVEL BOTTLE", neck: "28mm", weight: "23 GM", category: "Bottle",
    dimensions: { height: "140 mm", diameter: "50 mm" },
    features: [{ label: "Compact & Light", icon: "Leaf" }, { label: "Leak Proof", icon: "Diamond" }, { label: "Clear", icon: "Eye" }, { label: "Food Grade", icon: "Utensils" }],
    suitableFor: ["Travel Liquids", "Lotions", "Oils", "Samples"],
    image: "/images/water_bottle.jpg", note: "POCKET FRIENDLY TRAVEL SIZE", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. POCKET FRIENDLY TRAVEL SIZE."
  }
];
