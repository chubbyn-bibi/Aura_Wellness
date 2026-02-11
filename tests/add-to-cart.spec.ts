import { test, expect } from '@playwright/test';

test.describe('SauceDemo Add to Cart', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    // Login
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Ensure logged in
    await expect(page).toHaveURL(/inventory.html/);
  });

  test('Add a product to cart and verify cart contents', async ({ page }) => {
    // Pick first product
    const firstProduct = page.locator('.inventory_item').first();

    // Extract name & price
    const name = await firstProduct.locator('.inventory_item_name').innerText();
    const price = await firstProduct.locator('.inventory_item_price').innerText();

    // Add to cart
    await firstProduct.locator('button').click();

    // Go to cart
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    await page.click('[data-test="shopping-cart-link"]');
    await expect(page).toHaveURL(/cart.html/);

    // Verify cart contents
    const cartItem = page.locator('.cart_item').first();
    await expect(cartItem.locator('.inventory_item_name')).toHaveText(name);
    await expect(cartItem.locator('.inventory_item_price')).toHaveText(price);

    // Verify quantity = 1
    await expect(cartItem.locator('.cart_quantity')).toHaveText('1');
  });
});
