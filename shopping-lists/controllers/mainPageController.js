import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as shoppingListServices from "../services/shoppingListServices.js";
import * as requestUtils from "../utils/requestUtils.js";
import * as individualShoppingListServices from "../services/individualShoppingListServices.js";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const viewMainPage = async (request) => {
    const data = {
      numberOfLists: await shoppingListServices.numberOfLists(),
      numberOfItems: await shoppingListServices.numberOfItems(),
    };
  
    return new Response(await renderFile("mainPage.eta", data), responseDetails);
  };

export {viewMainPage} ; 