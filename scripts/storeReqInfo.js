const url = $request.url;
const headers = $request.headers;

// this is for 10010 中国联通
if (url.indexOf("10010") > -1) {
  // simplify cookie
  const cookie = headers["Cookie"].split("; ");
  const cookieValue =
    cookie.find((v) => v.indexOf("ecs_token") > -1) +
    ";" +
    cookie.find((v) => v.indexOf("ecs_acc") > -1) +
    ";";
  // validator the cookie
  // first check whether cookie is right
  if (cookieValue.indexOf("undefined") > -1) {
    $notify("中国联通Cookie获取失败（登录并打开联通App）😬", "", "");
    $done();
  } else {
    // second check whether cookie is exist
    if ($prefs.valueForKey("cookie_10010")) {
      // every time is differen, so don't update it
      // only when check is failed, update it by myself
      $done();
    } else {
      $prefs.setValueForKey(cookieValue, "cookie_10010");
      $prefs.setValueForKey(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148unicom",
        "user_agent_check"
      );
      $notify("中国联通Cookie首次写入成功🎉", "", "");
      $done();
    }
  }
}
