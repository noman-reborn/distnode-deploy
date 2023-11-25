import fastify from "fastify";
const server = fastify();

import Recipe from './recipe.mjs';

server.get('/', async (req, reply) => {
    return 'Hello from the Distributed Node.js'
})

server.get('/recipes/:id', async (req, reply) => {
    const recipe = new Recipe(req.params.id);
    await recipe.hydrate()
    return recipe;
})

server.listen({port: 8000},{host: '127.0.0.1'}, (err, address) => {
    if(err) console.log(err)
    console.log(`Server Running on ${address}`)
})