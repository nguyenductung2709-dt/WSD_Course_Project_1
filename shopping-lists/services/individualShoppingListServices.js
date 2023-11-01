import { sql } from "../database/database.js";

const create = async (name, shopping_list_id) => {
    await sql`INSERT INTO shopping_list_items(name, shopping_list_id) VALUES (${ name }, ${shopping_list_id})`;
  };
  
const findCurrentShoppingList = async (shopping_list_id) => {
  return await sql`SELECT * FROM shopping_list_items
    WHERE shopping_list_id = ${ shopping_list_id }
    ORDER BY name` ;
  };
  
const collectedById = async (id) => {
  await sql`UPDATE shopping_list_items SET collected = true WHERE id = ${ id }`;
};

  export { create, findCurrentShoppingList, collectedById };