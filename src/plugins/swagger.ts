import fp from "fastify-plugin";
import swagger, { SwaggerOptions } from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

/**
 * This plugins adds the swagger plugin
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp<SwaggerOptions>(async (fastify) => {
  fastify.register(swagger);
  fastify.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (_request: any, _reply: any, next: () => void) {
        next();
      },
      preHandler: function (_request: any, _reply: any, next: () => void) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header: any) => header,
    transformSpecification: (swaggerObject: any, _request: any, _reply: any) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
});
