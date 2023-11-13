import {Elysia} from "elysia";
import {html} from "@elysiajs/html"

const app = new Elysia().use(html())
.get("/",({html}) => html(baseHTML)).listen(3000);
console.log(`Server running at http://${app.server?.hostname}:${app.server?.port}`)

const baseHTML =  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
  </head>
  <body>
    <main>
        <h1>Welcome to My Website</h1>  
    </main>
  </body>
</html>

`