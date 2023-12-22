import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('testing login', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByPlaceholder('Email:').click();
  await page.getByPlaceholder('Email:').fill('dev31@example.com');
  await page.getByPlaceholder('Password:').click();
  await page.getByPlaceholder('Password:').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Developer Dashboard' }).click();
});