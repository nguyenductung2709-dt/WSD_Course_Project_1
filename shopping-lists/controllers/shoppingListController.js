import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as shoppingListServices from "../services/shoppingListServices.js";
import * as requestUtils from "../utils/requestUtils.js";
import * as individualShoppingListServices from "../services/individualShoppingListServices.js";


const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const addItem = async (request) => {
  const formData = await request.formData();
  const name = formData.get("name");

  await shoppingListServices.create(name);

  return requestUtils.redirectTo("/lists");
};

const viewLists = async (request) => {
  const data = {
    lists: await shoppingListServices.findAllExistingItems(),
  };

  return new Response(await renderFile("lists.eta", data), responseDetails);
};

const viewList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  
  const data = {
    listName: await shoppingListServices.findById(urlParts[2]),
    list: await shoppingListServices.findById(urlParts[2]),
    currentShoppingList: await individualShoppingListServices.findCurrentShoppingList(urlParts[2]),
  };
  return new Response(await renderFile("individualLists.eta", data), responseDetails);
};

const deActivateItem = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await shoppingListServices.deActivateById(urlParts[2]);
    return await requestUtils.redirectTo("/lists");
  };

export { addItem, viewLists, deActivateItem, viewList};