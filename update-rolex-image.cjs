const fs = require('fs');
let data = fs.readFileSync('lib/site-data.ts', 'utf8');

// Replace the image specifically for the first product (Rolex Jar)
data = data.replace(
  'slug: "96mm-rolex-jar-40gm",\n    name: "96 MM ROLEX JAR", neck: "96mm", weight: "40 GM", category: "Jar",\n    dimensions: { height: "246.5 mm", diameter: "96 mm" },\n    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "Crystal Clear Visibility", icon: "Eye" }, { label: "Lightweight & Easy", icon: "Leaf" }],\n    suitableFor: ["Chikki", "Dry Fruits", "Cookies", "Mukhwas", "Candy", "Spices"],\n    image: "/images/large_jar.jpg"',
  'slug: "96mm-rolex-jar-40gm",\n    name: "96 MM ROLEX JAR", neck: "96mm", weight: "40 GM", category: "Jar",\n    dimensions: { height: "246.5 mm", diameter: "96 mm" },\n    features: [{ label: "Food Grade Material", icon: "Utensils" }, { label: "Strong & Durable", icon: "Diamond" }, { label: "Crystal Clear Visibility", icon: "Eye" }, { label: "Lightweight & Easy", icon: "Leaf" }],\n    suitableFor: ["Chikki", "Dry Fruits", "Cookies", "Mukhwas", "Candy", "Spices"],\n    image: "/images/rolex_poster.jpg"'
);

fs.writeFileSync('lib/site-data.ts', data, 'utf8');
