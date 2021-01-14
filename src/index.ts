import { execSync, exec } from "child_process"
import webpack from "./modules/webpack"
const figlet = require("figlet")
const clear = require("clear")
import { check } from "./modules/fs"
import babel from "./modules/babel"
import readline from "readline"
import path from "path"
import pack from "./modules/package"
clear()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const fortnite = ["js", "html", "css", "img"]
let template: string = ""
rl.question("プロジェクトの名前を入力してください:", (a: string): void =>
{
    console.log(`Thank you!! start ${a}`)
    if (!check(a))
    {
        figlet("HTMLSTARTER", (err: any, data: any): void =>
        {
            if (err)
                console.log(err); console.log(data)
        })
        execSync(`mkdir ${a}`)
        const file = path.resolve(a)
        pack(file, a)
        webpack(file)
        execSync(`mkdir ${file}/src`)
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
                    template = "console.log('Hello')"
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
        babel(file)
        console.log(`cd ${a}\nnpm run demo`);
    }
    else if (check(a))
    {
        try
        {
            throw "すでに存在しています"
        } catch (error)
        {
            console.log(error)
        }
    }
    else if (a)
    {
        try
        {
            throw "フォルダ名を指定してください"
        } catch (error)
        {
            console.log(error)
        }
    }
    rl.close()
})