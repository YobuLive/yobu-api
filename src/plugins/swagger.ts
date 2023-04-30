import fp from "fastify-plugin";
import swagger, { SwaggerOptions } from "@fastify/swagger";

/**
 * This plugins adds the swagger plugin
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp<SwaggerOptions>(async (fastify) => {
  fastify.register(swagger);
});
