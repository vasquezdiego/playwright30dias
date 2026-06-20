import{test, expect} from '@playwright/test'

test('chequear menu lateral de navegacion', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible()

    const leftMenuItems = page.getByLabel('Sidepanel').getByRole('listitem') // con esta sentencia se obtiene todos los elementos de la lista del menu lateral de navegacion y se almacena en la variable leftMenuItems
    const conteoItemsMenu = await leftMenuItems.count() // con esta sentencia se obtiene el numero de elementos que tiene el menu lateral de navegacion y se almacena en la variable conteoItemsMenu
    console.log('conteo de items del menu lateral de navegacion: ' , conteoItemsMenu) // con esta sentencia se imprime en la consola el numero de elementos que tiene el menu lateral de navegacion

    const currentMenuItms: String[] = [] // con esta sentencia se crea un array para almacenar los nombres de los items del menu lateral de navegacion
    for (let i=0 ; i < conteoItemsMenu ; i++){
         const menuText = await leftMenuItems.nth(i).innerText() // con esta sentencia se obtiene el texto de cada elemento del menu lateral de navegacion y se almacena en la variable menuText
         currentMenuItms.push(menuText) // con esta sentencia se agrega el texto de cada elemento del menu lateral de navegacion al array de nombres de los items del menu lateral de navegacion
    }

    console.log(currentMenuItms) // con esta sentencia se imprime en la consola el array de nombres de los items del menu lateral de navegacion

    const expectedMenuItems = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'] // con esta sentencia se crea un array con los nombres de los items del menu lateral de navegacion que se esperan encontrar
    expect(currentMenuItms).toEqual(expectedMenuItems) // con esta sentencia se valida que el array de nombres de los items del menu lateral de navegacion obtenidos sea igual al array de nombres de los items del menu lateral de navegacion que se esperan encontrar 
    
    //Aqui esta el reto 3, se pide validar que el primer elemento del array de nombres de los items del menu lateral de navegacion obtenidos sea igual al primer elemento del array de nombres de los items del menu lateral de navegacion que se esperan encontrar
    expect(currentMenuItms[0]).toEqual(expectedMenuItems[0]) // con esta sentencia se valida que el primer elemento del array de nombres de los items del menu lateral de navegacion obtenidos sea igual al primer elemento del array de nombres de los items del menu lateral de navegacion que se esperan encontrar

})