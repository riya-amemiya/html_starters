import { exec } from "child_process"
function babel(mode: string)
{
    if (mode === "typescript")
    {
        mode = `'@babel/preset-typescript',`
    } else
    {
        mode = ""
    }
    return `
module.exports = {
    presets: [
        ${mode}
        [
            '@babel/preset-env',
            {
                'modules': 'false',
                'useBuiltIns': 'usage',
                'targets': '> 0.25%, not dead',
            }
        ]
    ],
};
`;
}
export default (push: string, mode: string) =>
{
    let t = babel(mode)
    exec(`echo "${t}" >> ${push}/babel.config.js`, (error, stdout, stderr): void =>
    {
        if (error)
        {
            console.log(stderr);
            return
        }
        console.log(stdout);
    })
}