//Reading fields


//The following code is a way of using a text decoder to read text files.

/*
const decoder = new TextDecoder('utf-8');

const data = await Deno.readFile('readme.txt');
console.log(decoder.decode(data));
*/

//The following code is an easier way of reading files if you're reading a standard txt file.
const data = await Deno.readTextFile('readme.txt');
console.log(data);

//Writing files
const encoder = new TextEncoder();
const text = encoder.encode('Hello there!');

await Deno.writeFile('readme.txt', text);

//Renaming and removing files

await Deno.rename('readme.txt','deleteme.txt');
await Deno.remove('deleteme.txt');