import { execSync, exec } from "child_process";
export default (fortnite: string[], file: string): void =>
{
    let template: string = "";
    for (const iterator of fortnite)
    {
        execSync(`mkdir ${file}/src/${iterator}`)
        if (iterator !== "img")
        {
            if (iterator === "html")
            {
                template = `
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
            }
            else if (iterator === "js")
            {
                template = `
import '../css/index.css'
import { execSync } from 'child_process';
console.log('Hello')`
            }
            else if (iterator === "css")
            {
                template = `
body {
    text-align: center;
}`
            }
            exec(`echo "${template}" >> ${file}/src/${iterator}/index.${iterator}`)
        }
    }
};
