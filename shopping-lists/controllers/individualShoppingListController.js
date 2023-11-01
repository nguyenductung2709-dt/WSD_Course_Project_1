import { renderFile } from "https://deno.land/x/eta@v2.2.0/mod.ts";
import * as individualShoppingListServices from "../services/individualShoppingListServices.js";
import * as requestUtils from "../utils/requestUtils.js";

const responseDetails = {
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  };

const addItemToList = async (request) => {
  const url = new URL(request.url);
  const urlParts = url.pathname.split("/");
  const formData = await request.formData();
  const name = formData.get("name");
  await individualShoppingListServices.create(name, urlParts[2]);
  return requestUtils.redirectTo(`/lists/${urlParts[2]}`);
};

const collectItem = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await individualShoppingListServices.collectedById(urlParts[4]);
    return await requestUtils.redirectTo(`/lists/${urlParts[2]}`);
  };

export { addItemToList, collectItem };