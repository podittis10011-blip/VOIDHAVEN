import { expect, test } from '@playwright/test';

test('home page renders Mock information and fallback route works', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/VOIDHAVEN/);
  await expect(page.getByRole('heading', { name: 'A haven for seekers.' })).toBeVisible();

  await expect(page.getByText('2026 全国大学生数学建模竞赛')).toBeVisible();
  await expect(page.getByText('团队找成员 · 开放中')).toBeVisible();

  await expect(page.getByRole('link', { name: '查看全部竞赛' })).toHaveAttribute(
    'href',
    '/competitions',
  );

  await page.goto('/route-that-does-not-exist');

  await expect(page.getByRole('heading', { name: '页面不存在' })).toBeVisible();
  await expect(page.getByRole('link', { name: '返回首页' })).toBeVisible();
});

test('mobile navigation can be opened and used', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium', '此用例只在移动端浏览器项目中运行。');

  await page.goto('/');

  await page.getByRole('button', { name: '打开主导航' }).click();

  const navigation = page.getByRole('navigation', { name: '主导航' });

  await expect(navigation.getByRole('link', { name: '竞赛' })).toBeVisible();
  await expect(navigation.getByRole('link', { name: '组队' })).toBeVisible();

  await navigation.getByRole('link', { name: '竞赛' }).click();

  await expect(page.getByRole('heading', { name: '竞赛' })).toBeVisible();
});
