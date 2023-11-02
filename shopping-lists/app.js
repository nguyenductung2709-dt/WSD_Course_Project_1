import { serve } from "https://deno.land/std@0.202.0/http/server.ts";
import { configure } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as shoppingListController from "./controllers/shoppingListController.js";
import * as individualShoppingListController from "./controllers/individualShoppingListController.js";
import * as mainPageController from "./controllers/mainPageController.js";

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/" && request.method === "GET") {
    return await mainPageController.viewMainPage(request);
  } else if (url.pathname === "/lists" && request.method === "POST") {
    return await shoppingListController.addItem(request);
  } else if (url.pathname === "/lists" && request.method === "GET") {
    return await shoppingListController.viewLists(request);
  }
    else if (url.pathname.match("lists/[0-9]+/deactivate") && request.method === "POST") {
      return await shoppingListController.deActivateItem(request);
    }
    else if (url.pathname.match("lists/[0-9]+/items/[0-9]+/collect") && request.method === "POST") {
      return await individualShoppingListController.collectItem(request);
    }
    else if (url.pathname.match("lists/[0-9]+/items") && request.method === "POST") {
      return await individualShoppingListController.addItemToList(request);
    }
    else if (url.pathname.match("lists/[0-9]+") && request.method === "GET") {
      return await shoppingListController.viewList(request);
    }

   else {
    return new Response("Not found", { status: 404 });
  }
};

serve(handleRequest, { port: 7777 });