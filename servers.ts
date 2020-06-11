//http module {server}
/*
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({port: 3000});
console.log('Listening for requests on port 3000');

for await(const req of server) {
    console.log('request made');
    const url= req.url;
    req.respond({body: `Hello again ninjas, you visited ${url}`});
}
*/


import { camelCase, paramCase, pascalCase, snakeCase } from "https://deno.land/x/case/mod.ts";

const text = 'Hello again ninjas';

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.log(camel,param,pascal,snake);