import { execSync, exec } from "child_process";
export default (fortnite: string[], file: string): void =>
{
    let template: string[] = ["", ""];
    for (const iterator of fortnite)
    {
        if (iterator !== "img")
        {
            if (iterator === "html")
            {
                template[0] = `
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello</title>
</head>

<body>
    <h1>Hello</h1>
</body>

</html>`
                template[1] = "html"
            }
            else if (iterator === "js")
            {
                template[0] = `
import '../css/index.css'
console.log('Hello')`
                template[1] = "ts"
            }
            else if (iterator === "css")
            {
                template[0] = `
body {
    text-align: center;
}`
                template[1] = "css"
            }
            execSync(`mkdir ${file}/src/${template[1] || iterator}`)
            exec(`echo "${template[0]}" >> ${file}/src/${template[1] || iterator}/index.${template[1] || iterator}`)
        }
    }
};
