const fs = require('fs');
let data = fs.readFileSync('lib/site-data.ts', 'utf8');

// Replace large jars
data = data.replace(/slug: "96mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/large_jar.jpg'));
data = data.replace(/slug: "120mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/large_jar.jpg'));
data = data.replace(/slug: "73mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/large_jar.jpg'));
data = data.replace(/slug: "83mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/large_jar.jpg'));

// Replace small jars
data = data.replace(/slug: "53mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/small_jar.jpg'));
data = data.replace(/slug: "60mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/small_jar.jpg'));
data = data.replace(/slug: "63mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/small_jar.jpg'));

// Replace pump bottles
data = data.replace(/slug: "28mm-handwash.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/pump_bottle.jpg'));
data = data.replace(/slug: "28mm-shampoo.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/pump_bottle.jpg'));
data = data.replace(/slug: "32mm-sauce.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/pump_bottle.jpg'));
data = data.replace(/slug: "32mm-syrups.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/pump_bottle.jpg'));

// Replace remaining bottles (water/juice/travel)
data = data.replace(/slug: "28mm.*?image: "\/images\/preform-hero.png"/gs, match => match.replace('/images/preform-hero.png', '/images/water_bottle.jpg'));

fs.writeFileSync('lib/site-data.ts', data, 'utf8');
