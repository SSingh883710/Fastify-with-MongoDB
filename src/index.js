const fastify = require('fastify')({
    logger: true
});

// bring it the routes 
const routes = require("./routes");

// db 
const mongoose = require("mongoose");

// db connection
mongoose.connect("mongodb://localhost/fastifydemo")
    .then(() => console.log("Mongo is ready for the war."))
    .catch((err) => console.err(err));

// routes
fastify.get('/', async(request, reply) => {
    return { visitor: "google.co.in" }
});

routes.forEach((route, indeex) => {
    fastify.route(route);
});

// server
const start = async() => {
    try {
        await fastify.listen(3000);
        fastify.log.info(`We are up & running at 3000.`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();