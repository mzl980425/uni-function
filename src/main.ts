import handler from "./handler.ts";

Deno.serve((request) => {
  return handler(request);
});
