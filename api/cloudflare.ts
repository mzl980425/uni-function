import handler from "../src/handler.ts";

export default {
  fetch(request: Request) {
    return handler(request);
  },
};
