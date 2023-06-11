import { redirect } from "next/navigation";

export async function GET(request) {
  console.log("GET /api/route.js ", request);
  redirect("/");
}
