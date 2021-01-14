import fs from 'fs';
import path from "path"
function read(file: string): string
{
    file = path.resolve(file)
    if (check(file))
    {
        return fs.readFileSync(file, 'utf8');
    }
    return "";
}
function check(file: string): boolean
{
    file = path.resolve(file)
    let hasfaile = false;
    try
    {
        fs.statSync(file);
        hasfaile = true;
    } catch (err)
    {
        hasfaile = false;
    }
    return hasfaile;
}
export
{
    read,
    check
}