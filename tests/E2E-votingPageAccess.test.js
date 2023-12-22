import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://team-build.vercel.app/login');
  await page.getByPlaceholder('Email:').click();
  await page.getByPlaceholder('Email:').fill('dev43@example.com');
  await expect(page.locator('form')).toContainText('Login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('body')).toContainText('How does voting work?');
  await expect(page.locator('body')).toContainText('Vote Up New Projects');
  await page.getByRole('link', { name: 'Vote Up New Projects' }).click();
  await expect(page.locator('body')).toContainText('Cast your Votes for your favorite new projects!');
  await expect(page.locator('body')).toContainText('Return to Dashboard');
  await page.getByRole('button', { name: 'Return to Dashboard' }).click();
});