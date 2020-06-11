import { v4 } from "https://deno.land/std/uuid/mod.ts";

//uuid module
const uid = v4.generate();
console.log(uid);

//fs module
import { readJson, writeJson } from "https://deno.land/std/fs/mod.ts";

const jsonObj = await readJson('ninjas.json');
console.log(jsonObj);

const books = [
    {title: 'the way of kings', author: 'brandon sanderson'},
    {title: 'name of the wind', author: 'patrick rothfuss'}
];

await writeJson('books.json', books, {spaces: 2});
console.log('created books.json');

/*
To get this program to run properly, 
not only do you need the --allow-read and --allow-write flags,
but at the time of writing, you need to use the --unstable
flag because this module isn't complete yet and may have bugs.
*/