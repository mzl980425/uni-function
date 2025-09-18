import handler from "../src/handler.ts";

Deno.serve((request: Request) => {
  return handler(request);
});
