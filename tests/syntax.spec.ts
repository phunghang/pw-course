import { test } from '@playwright/test';



test('basic action', async ({ page }) => {
    // navigate
    await page.goto("https://material.playwrightvn.com/018-mouse.html");
    // single click
    await page.locator("//div[@id='topLeft']").click();
    // double click
    await page.locator("//div[@id='clickArea']").dblclick();
    // right click
    await page.locator("//div[@id='topRight']").click({
        button: "right"
    });
    // click chuột kèm phím khác
    await page.locator("//div[@id='topLeft']").click({
        modifiers: ['Shift']
    })
});

test('input action', async ({ page }) => {
    // navigate
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // Điền đồng thời giống như copy rồi paste giá trị vào
    //    await page.locator("//input[@id='username']").fill("phunghang");

    // Điền từ từ, gõ 1 ký tự chờ 100ms rồi mới gõ tiếp ký tự tiếp theo
    await page.locator("//input[@id='username']").pressSequentially("phunghang", {
        delay: 100
    });
});

test('radio_checkbox', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");

    // radio
    await page.locator("//input[@id='male']").check();
    // checkbox
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='traveling']").check();

    // Kiểm tra trạng thái
    var isCheck = await page.locator("//input[@id='traveling']").isChecked();
    console.log(isCheck);
    if (isCheck == true) {
        await page.locator("//input[@id='traveling']").uncheck();
    }

});
