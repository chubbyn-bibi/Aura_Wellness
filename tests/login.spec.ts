import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login', () => {
  test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    // Fill login form
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Assert redirect to products page
    await expect(page).toHaveURL(/inventory.html/);

    // Assert product page visible
    await expect(page.getByText('Products')).toBeVisible();
  });
});

