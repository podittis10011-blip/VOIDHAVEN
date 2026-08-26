import { expect, test } from '@playwright/test';

test('home page and fallback route can be opened', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/VOIDHAVEN/);
  await expect(page.getByRole('heading', { name: /求索袋底洞/i })).toBeVisible();

  await page.goto('/route-that-does-not-exist');
  await expect(page.getByRole('heading', { name: '页面不存在' })).toBeVisible();
  await expect(page.getByRole('link', { name: '返回首页' })).toBeVisible();
});
