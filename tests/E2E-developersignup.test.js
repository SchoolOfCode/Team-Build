import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://team-build.vercel.app/");
  await page.getByRole("link", { name: "LOG IN / SIGN UP" }).click();
  await page.getByRole("button", { name: "Developer" }).click();
  await page.getByPlaceholder("First Name:").click();
  await page.getByPlaceholder("First Name:").fill("John");
  await page.getByPlaceholder("Last Name:").click();
  await page.getByPlaceholder("Last Name:").fill("Smith");
  await page.getByPlaceholder("Contact Number:").click();
  await page.getByPlaceholder("Contact Number:").fill("012345678910");
  await page.getByPlaceholder("Technical Background:").click();
  await page
    .getByPlaceholder("Technical Background:")
    .fill("6 months as a Junior Developer");
  await page.getByPlaceholder("Email:").click();
  await page.getByPlaceholder("Email:").fill("Johnsmith123@test.com");
  await page.getByPlaceholder("Password:", { exact: true }).click();
  await page.getByPlaceholder("Password:", { exact: true }).fill("Password123");
  await page.getByPlaceholder("Confirm Password:").click();
  await page.getByPlaceholder("Confirm Password:").fill("Password123@");
  await page.getByRole("button", { name: "Show Password" }).click();
  await page.getByRole("button", { name: "Hide Password" }).click();
  await page.getByPlaceholder("Password:", { exact: true }).click();
  await page
    .getByPlaceholder("Password:", { exact: true })
    .fill("Password123@");
  await page.getByRole("combobox").selectOption("4");
  await page.getByText("Are you willing to commit to").click();
  await page.locator('input[name="possible_mentor"]').check();
  await page.getByText("I agree to the Terms and").click();
  await page.locator('[id="terms\\&conditions"]').check();
  await page.getByRole("button", { name: "Submit Form" }).click();
});
