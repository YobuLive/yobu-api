import fp from "fastify-plugin";
import swagger, { SwaggerOptions } from "@fastify/swagger";

/**
 * This plugin adds swagger API documentation
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp<SwaggerOptions>(async (fastify) => {
  fastify.register(swagger, {
    swagger: {
      info: {
        title: "Swagger API",
        description: "Yobu API",
        version: "0.1.0",
      },
    },
  });
});
