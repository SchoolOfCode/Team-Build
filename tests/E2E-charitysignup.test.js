import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://team-build.vercel.app/");
  await page.getByRole("link", { name: "LOG IN / SIGN UP" }).click();
  await page.getByRole("button", { name: "Charity" }).click();
  await page.getByPlaceholder("First Name:").click();
  await page.getByPlaceholder("First Name:").fill("John ");
  await page.getByPlaceholder("Last Name:").click();
  await page.getByPlaceholder("Last Name:").fill("Smith");
  await page.getByPlaceholder("Contact Number:").click();
  await page.getByPlaceholder("Contact Number:").fill("12345678910");
  await page.getByPlaceholder("Email:").click();
  await page.getByPlaceholder("Email:").fill("Johnsmith12345@test.com");
  await page.getByPlaceholder("Organisation Name:").click();
  await page
    .getByPlaceholder("Organisation Name:")
    .fill("John Smith Foundation");
  await page.getByPlaceholder("Charity Registration Number").click();
  await page.getByPlaceholder("Charity Registration Number").fill("012345");
  await page.getByPlaceholder("Password:", { exact: true }).click();
  await page
    .getByPlaceholder("Password:", { exact: true })
    .fill("Password123@");
  await page.getByPlaceholder("Confirm Password:").click();
  await page.getByPlaceholder("Confirm Password:").fill("Password123@");
  await page.getByRole("button", { name: "Show Password" }).click();
  await page.getByRole("button", { name: "Hide Password" }).click();
  await page.getByText("Click here to agree to the").click();
  await page.locator('[id="terms\\&conditions"]').check();
  await page.getByRole("button", { name: "Submit Form" }).click();
});


await page.getByText('Thank you for your submission!').click();
await page.getByRole('heading', { name: 'Register as a Charity' }).click();
await page.locator('div').filter({ hasText: 'Register as a CharityThank' }).nth(2).click();
await page.getByText('Thank you for your submission!').click();
});