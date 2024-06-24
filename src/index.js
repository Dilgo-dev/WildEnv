import { config } from "dotenv";

config();

const { name, city, language } = process.env;

console.log(`I am ${name}, wilder in ${city}, and I love ${language} 🔥`)