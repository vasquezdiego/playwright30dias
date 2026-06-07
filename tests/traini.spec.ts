import {test} from '@playwright/test'

/* esta es la estructura que se realiza para todos los test
 el objeto "page", es creado por playwright con este podemos manipular l apagina
 page se cononce como fixture */

test('login sause demo', async({page}) =>{ //primero recibe los nombres de los test, esta es la estructura para el caso de prueba

await page.goto('https://www.saucedemo.com/') // con este comando abrimos la pagina
/* con este comando "getByRole" localizamos el  objeto con el que vamos a interactuar en la pagina web
   con la acción fill ingresamos datos */
await page.getByRole('textbox',{name: 'Username'}).fill('standard_user') 
//
await page.getByRole('textbox',{name:'Password'}).fill('secret_sauce')
await page.getByRole('button',{name: 'Login'}).click()
})
