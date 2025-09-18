export default function handler(request: Request) {
  return new Response(`${request.method}: ${request.url}`, { status: 200 });
}
