import handler from "../src/handler.ts";

export default function onRequest(context: { request: Request }) {
  return handler(context.request);
}
