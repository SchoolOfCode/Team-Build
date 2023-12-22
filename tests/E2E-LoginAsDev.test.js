import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('testing login', async ({ page }) => {
  await page.goto('https://team-build.vercel.app/login');
  await page.getByPlaceholder('Email:').click();
  await page.getByPlaceholder('Email:').fill('dev31@example.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Developer Dashboard' }).click();
});