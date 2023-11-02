const { test, expect } = require("@playwright/test");

test("Main page has expected title and list.", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Shared shopping lists");
  await expect(page.locator("h1")).toHaveText("Lists");
});

test("Can create a list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit][value='Add a list']").click();
  await expect(page.locator(`a >> text='${listName}'`)).toHaveText(listName);
});

test("Can open a list page.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit][value='Add a list']").click();
  await page.locator(`a >> text='${listName}'`).click();
  await expect(page.locator("h1")).toHaveText(listName);
});

test("Can create an individual list page.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit][value='Add a list']").click();
  await page.locator(`a >> text='${listName}'`).click();

  const itemName = `My item: ${Math.random()}`; 
  await page.locator("input[type=text]").type(itemName);
  await page.locator("input[type=submit][value='Add an item']").click();
  await expect(page.locator(`span >> text='${itemName}'`)).toHaveText(itemName);
});


test("Can delete item in individual list.", async ({ page }) => {
  await page.goto("/lists");
  const listName = `My list: ${Math.random()}`;
  await page.locator("input[type=text]").type(listName);
  await page.locator("input[type=submit][value='Add a list']").click();
  await page.locator(`a >> text='${listName}'`).click();

  const itemName = `My item: ${Math.random()}`; 
  await page.locator("input[type=text]").type(itemName);
  await page.locator("input[type=submit][value='Add an item']").click();
  await page.locator("input[type=submit][value='Mark collected!']").click();
  await expect(page.locator(`del >> text='${itemName}'`)).toHaveText(itemName);
});
