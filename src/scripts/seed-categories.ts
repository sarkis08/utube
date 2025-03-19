// TODO: Create a script to seed categories

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Cars and vehicles",
  "Comedy",
  "Education",
  "Entertainment",
  "Gaming",
  "Health and fitness",
  "Music",
  "News and politics",
  "Sports",
  "Technology",
  "Travel",
  "Travel and events",
  "How-to and style",
  "People and blogs",
  "Pets and animals",
  "Science and technology",
  "Self-improvement",
  "Wildlife",
  "World news",
  "Business and finance",
  "Parenting and teaching",
  "Relationships and love",
  "Religion and spirituality",
  "Science and nature",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videoes related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);

    console.log("Categories seeded successfully");
  } catch (error) {
    console.error("Error seeding categories:", error);
    process.exit(1);
  }
}

main();
