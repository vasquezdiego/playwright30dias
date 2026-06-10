import {test, expect} from '@playwright/test'

test('login orange', async({page}) =>{ 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button',{name: 'Login'}).click()

    await expect(page.getByRole('link',{name:'Admin'})).toBeVisible()
    await page.pause() 
})

test('test negative login', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin1')
    await page.getByRole('textbox',{name:'Password'}).fill('admin12345')
    await page.getByRole('button',{name:'Login'}).click()

    await expect(page.getByRole('alert')).toBeVisible() // con esta sentencia se valida que el mensaje de error sea visible en la pagina
    await expect(page.getByRole('alert')).toHaveText('Invalid credentials') // con esta sentencia se valida que el mensaje de error sea el esperado
    await page.pause()

})