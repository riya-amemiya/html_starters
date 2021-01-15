import { execSync } from "child_process"
import webpack from "./modules/webpack"
import figlet from "figlet"
import clear from "clear"
import { check, read } from "./modules/fs"
import babel from "./modules/babel"
import readline from "readline"
import path from "path"
import pack from "./modules/package"
import * as type from "./type/type"
import template_hello from "./modules/template/hello"
import template_typescript from "./modules/template/typescript"
clear()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// const hasos = {
//     is_windows: process.platform === 'win32',
//     is_mac: process.platform === 'darwin',
//     is_linux: process.platform === 'linux'
// }
const config: type.RootObject = JSON.parse(read("html_starters.config.json"))
const fortnite = config?.DuildFileType || ["js", "html", "css", "img"]
const mode = config?.mode || "hello"
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
        webpack(file, mode)
        execSync(`mkdir ${file}/src`)
        if (mode === "hello") template_hello(fortnite, file)
        if (mode === "typescript") template_typescript(fortnite, file)
        babel(file, mode)
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
