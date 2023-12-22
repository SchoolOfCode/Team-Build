import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('test', async ({ page }) => {
  await page.goto('https://team-build.vercel.app/login');
  await page.getByPlaceholder('Email:').click();
  await page.getByPlaceholder('Email:').fill('user13@example.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Charity Dashboard' }).click();
  await page.getByText('Dashboard').click();
  //await expect(page.url()).toContain("/register");
});