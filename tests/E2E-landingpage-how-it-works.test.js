// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://team-build.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Build/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://team-build.vercel.app/");

  // Click the get started link.
  await page.getByRole("link", { name: "Find out more" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "How it works" })
  ).toBeVisible();
});
