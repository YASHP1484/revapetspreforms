const fs = require('fs');
let data = fs.readFileSync('lib/site-data.ts', 'utf8');

if (!data.includes('description?: string;')) {
    data = data.replace(
      'features: { label: string; icon: string }[];',
      'features: { label: string; icon: string }[];\n  description?: string;\n  filledImage?: string;'
    );
}

data = data.replace(/note: "(.*?)"/g, (match, noteText) => {
  return `note: "${noteText}", filledImage: "/images/large_jar.jpg", description: "This premium PET container is manufactured with high precision to ensure maximum durability and a crystal-clear appearance. It is 100% food-grade and BPA-free, making it the perfect packaging solution to maintain the freshness, taste, and quality of your products. Specifically designed to be lightweight yet strong. ${noteText}."`;
});

fs.writeFileSync('lib/site-data.ts', data, 'utf8');
