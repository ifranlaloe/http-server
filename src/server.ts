import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  const url = new URL(req.url);
  if (url.pathname === "/v1/throw" && req.method === "POST") {
    const body = await req.text();
    console.log("Incoming body message:", body);
    return new Response("Received", { status: 200 });
  }
  return new Response("Not Found", { status: 404 });
}, { port: 3000 });

console.log("HTTP server running on http://localhost:3000/v1/throw");
