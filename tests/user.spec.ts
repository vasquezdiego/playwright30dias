import { test, expect } from '@playwright/test'

test('obtener nombres de usuario', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

    await page.getByRole('link', { name: 'Admin' }).click()
    await page.getByRole('navigation', { name: 'Topbar menu' }).getByText('User Management').click()
    await page.getByRole('menuitem', { name: 'Users' }).click()

    const rows = page.getByRole('table').getByRole('row') // con esta sentencia se obtiene todas las filas de la tabla de usuarios y se almacena en la variable rows
    const usernames: String[] = [] // con esta sentencia se crea un array para almacenar los nombres de usuario que se obtendran de la tabla
    const rowCount = await rows.count() // con esta sentencia se obtiene el numero de filas que tiene la tabla de usuarios y se almacena en la variable rowCount

    for (let i=1 ; i <rowCount ; i++){
        const cell = rows.nth(i).getByRole('cell').nth(3) // con esta sentencia se obtiene la celda que contiene el nombre de usuario de cada fila y se almacena en la variable cell
        const username = await cell.textContent() // con esta sentencia se obtiene el texto de la celda que contiene el nombre de usuario y se almacena en la variable username
        if (username) { // con esta sentencia se valida que el nombre de usuario no sea nulo o indefinido
            usernames.push(username) // con esta sentencia se agrega el nombre de usuario al array de nombres de usuario despues de eliminar los espacios en blanco
        }
    }

    console.log(usernames) // con esta sentencia se imprime en la consola el array de nombres de usuario obtenidos de la tabla
})