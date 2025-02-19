import { authentication } from "@/requests/requests.js";

export function analysisJwt(token) {
  return JSON.parse(
    decodeURIComponent(
      atob(
        token
          .split(".")[1]
          .replace(/-/g, "+")
          .replace(/_/g, "/")
      )
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    )
  );
}
export function refreshToken() {
  var date = parseInt(localStorage.getItem("token.expire"), 10);
  if (!date && date != null) return;
  var jwtTimeout = setTimeout(() => {
    authentication.refreshJWT().then((a) => {
      let exp = analysisJwt(a.data).exp * 1000;
      localStorage.setItem("token", a.data);
      localStorage.setItem("token.expire", exp);
      refreshToken();
    });
  }, date - new Date() - 10000); //提前10秒更新
}