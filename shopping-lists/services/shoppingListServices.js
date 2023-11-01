import { sql } from "../database/database.js";

const create = async (name) => {
  await sql`INSERT INTO shopping_lists (name) VALUES (${ name })`;
};

const findAllExistingItems = async () => {
  return await sql`SELECT * FROM shopping_lists WHERE active = true`;
};

const findById = async (id) => {
    const rows = await sql`SELECT * FROM shopping_lists WHERE id = ${ id }`;
  
    if (rows && rows.length > 0) {
      return rows[0];
    }
  
    return { id: 0, name: "Unknown" };
  };

const deActivateById = async (id) => {
  await sql`UPDATE shopping_lists SET active = false WHERE id = ${ id }`;
};

const numberOfLists = async () => {
  const result = await sql`SELECT COUNT(id) FROM shopping_lists`;
  return result[0].count; 
}

const numberOfItems = async () => {
  const result = await sql`SELECT COUNT(id) FROM shopping_list_items`;
  return result[0].count; 
}

export { findAllExistingItems, create, findById, deActivateById, numberOfItems, numberOfLists };