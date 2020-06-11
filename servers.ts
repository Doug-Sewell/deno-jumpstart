//http module {server}
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({port: 3000});
console.log('Listening for requests on port 3000');

for await(const req of server) {
    const url= req.url;
    req.respond({body: `Hello ninjas, you visited ${url}`});
}