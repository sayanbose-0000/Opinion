import { NextRequest } from "next/server";

const isAuthenticated = (request: NextRequest) => {
  const userExists = request.cookies.get("authjs.callback-url")?.value || request.cookies.get("authjs.csrf-token")?.value;
  return userExists;
};

export { isAuthenticated };