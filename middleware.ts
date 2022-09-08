import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Base64 } from "js-base64";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("auth");
  if (!req.cookies.get("auth") || req.cookies.get("auth") == "") {
    return NextResponse.redirect(new URL('/', req.url))
  } else {
    try {
      const base64Url = token!.split(".")[1];
      const base64t = base64Url.replace("-", "+").replace("_", "/");
      JSON.parse(Base64.decode(base64t));
      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}

export const config = {
  matcher: ['/chat/:path*'],
}
