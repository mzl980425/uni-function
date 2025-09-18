#!/usr/bin/env deno run
import handler from "../src/handler.ts";

export default (request: Request) => {
  return handler(request);
};
