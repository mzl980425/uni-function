import handler from "../src/handler.ts";

export default (request: Request) => {
  return handler(request);
};

export const config = { path: "/*" };
