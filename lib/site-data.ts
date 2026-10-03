export type ProductRange = {
  neck: string;
  weights: string[];
  name: string;
  kind: "Bottle preform" | "Jar preform";
  note?: string;
};

export const productRanges: ProductRange[] = [
  { neck: "28mm", weights: ["23gm"], name: "Long PCO", kind: "Bottle preform", note: "Long PCO neck finish" },
  { neck: "32mm", weights: ["10gm"], name: "32mm Series", kind: "Bottle preform" },
  { neck: "53mm", weights: ["11gm", "14gm", "21gm", "25gm"], name: "53mm Series", kind: "Jar preform" },
  { neck: "60mm", weights: ["30gm", "63gm"], name: "60mm Series", kind: "Jar preform" },
  { neck: "63mm", weights: ["19gm", "21gm", "30gm"], name: "63mm Series", kind: "Jar preform" },
  { neck: "73mm", weights: ["27gm", "30gm", "35gm"], name: "73mm Series", kind: "Jar preform" },
  { neck: "83mm", weights: ["45gm", "50gm"], name: "83mm Series", kind: "Jar preform" },
  { neck: "96mm", weights: ["45gm", "50gm"], name: "96mm Light Series", kind: "Jar preform" },
  { neck: "96mm", weights: ["60gm", "65gm", "70gm"], name: "96mm Heavy Series", kind: "Jar preform" },
  { neck: "120mm", weights: ["102gm", "130gm", "140gm"], name: "120mm Series", kind: "Jar preform" },
];

export const contact = {
  name: "Sejal Patel",
  phones: ["+91 99256 83344", "+91 91068 04501"],
  phoneLinks: ["+919925683344", "+919106804501"],
  email: "revapetpreforms@gmail.com",
  address: "LS No. 1852, Plot No. 27/4, Navkar Estate, Santej–Khatraj Road, Near Rajnagar, Taluka Kalol, District Gandhinagar, Gujarat, India",
};
