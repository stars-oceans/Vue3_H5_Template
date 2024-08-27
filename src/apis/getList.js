import http from "@/utils/http";
import counter from "../constant/appId";

/**
 * 拿到 Token 和权限的地方
 * @param {*} query
 * @returns
 */
export function getUserAPI(query) {
  return http.get(
    `/ding/user/queryUserModule?authCode=${query.userid}&appId=${counter.appId}`
  );
}

export function getTest() {
  console.log('2222');
  
  return http.get("/test/getDeptList?appId=3208328122");
}
