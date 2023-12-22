import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});


test('testing voting', async({page}) => {
    await page.goto('https://team-build.vercel.app/developers/dashboard');
    await page.getByRole('button', { name: 'Vote Up New Projects' }).click();
    await page.locator('li').filter({ hasText: 'United Hearts' }).getByRole('button').first().click();
    await page.locator('li').filter({ hasText: 'Serenity Support' }).getByRole('button').nth(1).click();
    await page.goto('https://team-build.vercel.app/developers/dashboard');

})