import { exec } from "child_process"
const babel = `
module.exports = {
    presets: [
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
`
export default (push: string) =>
{
    exec(`echo "${babel}" >> ${push}/babel.config.js`, (error, stdout, stderr): void =>
    {
        if (error)
        {
            console.log(stderr);
            return
        }
        console.log(stdout);
    })
}