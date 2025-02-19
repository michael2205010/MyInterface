import axios from "@/axios";
import AxiosMockAdapter from "axios-mock-adapter";
import mockDataBackManagement from "./mockDataBackManagement";

const mock = new AxiosMockAdapter(axios, { delayResponse: 100 });

mock.onGet("/News").reply(200, [
  {
    id: "170a58be-8b8c-45e5-9e69-f1a2c79f84a2",
    title:
      "TPASS 2.0新制2月起上路最高回饋40% 與原優惠有何差異？回饋方式如何計算？",
    createTime: "2025-01-15T12:00:00.000Z",
    category: "最新消息",
  },
  {
    id: "b70a58be-8b8c-45e5-9e69-f1a2c79f84a2",
    title: "TPASS 2.0常客優惠登錄就可用！！2月起月搭11次享回饋15%",
    createTime: "2025-01-14T07:00:00.000Z",
    category: "最新消息",
  },
]);

mock.onGet("/News/b70a58be-8b8c-45e5-9e69-f1a2c79f84a2").reply(200, {
  id: "b70a58be-8b8c-45e5-9e69-f1a2c79f84a2",
  title: "TPASS 2.0常客優惠登錄就可用！2月起月搭11次享回饋15%",
  text: "![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)\n\n# Awesome Editor!\n\n## h2\n\n### h3\n\nIt has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.\n\n## Create Instance\n\nYou can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).\n\n```js\nconst editor = new Editor(options);\n```\n\n> See the table below for default options\n> > More API information can be found in the document\n\n| name | type | description |\n| --- | --- | --- |\n| el | `HTMLElement` | container element |\n\n## Features\n\n* CommonMark + GFM Specifications\n   * Live Preview\n   * Scroll Sync\n   * Auto Indent\n   * Syntax Highlight\n        1. Markdown\n        2. Preview\n\n## Support Wrappers\n\n> * Wrappers\n>    1. [x] React\n>    2. [x] Vue\n>    3. [ ] Ember`12312323123`\n\n```\n\ncodeblock\n\n```\n\n23123\n\n```",
  createTime: "2025-01-14T07:00:00.000Z",
  category: "最新消息",
});

mock.onGet("/News/170a58be-8b8c-45e5-9e69-f1a2c79f84a2").reply(200, {
  id: "170a58be-8b8c-45e5-9e69-f1a2c79f84a2",
  title:
    "TPASS 2.0新制2月起上路最高回饋40% 與原優惠有何差異？回饋方式如何計算？",
  text: "交通部14日宣布，TPASS 2.0公共運輸常客優惠即起開放記名登錄，並於2月起正式上路。新制主要針對每月搭乘公共運輸達11次以上之民眾提供回饋優惠，搭乘國道客運、公路客運、市區公車達單月31次以上，更可獲30%回饋。另外若購買新發行的TPASS 2.0票卡，可再加碼回饋10%乘車金額",
  createTime: "2025-01-15T12:00:00.000Z",
  category: "最新消息",
});

mock.onGet("/Faq").reply(200, [
  {
    title: "實施日期",
    text: "114年2月1日起至114年12月31日止。",
  },
  {
    title: "回饋對象",
    text: "1. 持電子票證(含虛擬及實體)至各票證公司網站公共運輸常客優惠回饋專區完成記名程序，並同意個資使用聲明後，可登錄參與及符合回饋資格(每人最多可同時登錄5張電子票證)。\n 2. 符合回饋資格者，單月持登錄參與回饋之電子票證(含虛擬及實體)搭乘公共運輸達11次以上，即可享有常客優惠回饋。",
  },
  {
    title: "常客優惠回饋條件及計算方式",
    text: "# 每月計算期間：每月1日至月底	\n\n+ 回饋金額計算方式：\n\n(一) 114年2月1日起，搭乘紀錄自完成登錄次日起算，並以單張電子票證認定。\n\n(二) 回饋金額採「當月份搭乘總金額×回饋比例」方式計算；如遇小數位數，採無條件進位至整數方式計算。\n\n(三) 前揭搭乘金額以電子錢包實際交易扣款金額認定(如遇轉乘或其他優惠，則以優惠後金額納入計算)。\n\n(四) 使用TPASS月票搭乘紀錄(含次數及金額)，皆不會納入常客優惠回饋條件計算。",
  },
  {
    title: "其他注意事項",
    text: "如已登錄參與回饋之電子票證發生退卡、故障及掛失情形，先前月份尚未領取之回饋金可併同電子錢包餘額退還；另當月回饋金將依該票卡已累計搭乘紀錄對應之回饋條件計算，並於次月退還。 \n- 於票證公司網頁之公共運輸常客優惠回饋專區勾選同意個資使用聲明，並完成記名登錄程序後，即已同意主辦單位(交通部公路局)、主辦單位委託之各執行單位及電子支付機構得於本活動範圍及執行期間內，進行蒐集、處理、利用個人資料。\n- 本措施回饋金額計算之有效交易紀錄(包含搭乘次數及金額)，均依電子票證之紀錄與認定為準。\n- 主辦單位保有修改、變更本措施之權利；另如本措施及注意事項如有未盡事宜，主辦單位得隨時補充、修正或變更，且以主辦單位官網[(https://tpass.thb.gov.tw)](https://tpass.thb.gov.tw)最新公告為主。\n- 如針對本措施執行內容或回饋金額計算有疑義，可致電主辦單位或票證公司客服專線 **「交通部公路局：0800-231-035」",
  },
]);

mock.onGet("/RegularCustomerDiscount").reply(200, [
  {
    title: "1. 我要怎麼參加常客回饋？",
    text: "至各票證公司網站公共運輸常客回饋專區完成記名並同意個資使用聲明後，即可符合常客回饋資格。",
  },
  {
    title: "2. 我要使用哪些電子票證才能參與常客回饋？",
    text: "持用三大票證公司發行之電子票證(包含具備電子票證功能之聯名卡)均可參與。",
  },
  {
    title: "3. 記名程序要輸入哪些資料？",
    text: "電子票證外觀號碼、姓名、出生年月日、手機號碼、身分證件相關資訊(身分證字號、換證日期、發證地點、換補別)",
  },
  {
    title: "4. 我已有完成記名的電子票證，這次還要記名登錄才能參與常客回饋嗎？",
    text: "曾記名的電子票證仍需在公共運輸常客回饋專區完成登錄才能參與回饋，但記名過程中如勾選「同意移轉記名資料」選項，系統將自動帶入先前記名資料。",
  },
]);

mock.onGet("/News").reply(200, [
  {
    id: "170a58be-8b8c-45e5-9e69-f1a2c79f84a2",
    title:
      "TPASS 2.0新制2月起上路最高回饋40% 與原優惠有何差異？回饋方式如何計算？",
    text: "這是一個最新消息範例22222222222222222",
    createTime: "2025-01-15T12:00:00.000Z",
    category: "最新消息",
  },
  {
    id: "b70a58be-8b8c-45e5-9e69-f1a2c79f84a2",
    title: "TPASS 2.0常客優惠登錄就可用！！2月起月搭11次享回饋15%",
    text: "這是一個最新消息範例",
    createTime: "2025-01-14T07:00:00.000Z",
    category: "最新消息",
  },
]);

mock
  .onPost("/Authentication/SignIn")
  .reply(
    200,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJ1aWQiOiI3ZGZmMzMwYy04ODY5LTRiODQtODEwYi02MDZlN2MxMDk0ZGYiLCJqdGkiOiI4MDFiY2ExMS1iNjI4LTQ4YWQtYWNlNC1jYTRhNDdkOWU5MzUiLCJuaWNrbmFtZSI6Iuezu-e1seeuoeeQhuWToSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Iuezu-e1seeuoeeQhuWToSIsImF1dGhlbnRpY2F0b3IiOiJVbnZlcmlmaWVkIiwiZXhwIjoxNzk5NTIyNzQ2LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3QvIn0.lbnybDWEAnutk8avrjD6tMr7-6etLewDH20UZ1Lkqwc",
  );

mockDataBackManagement(mock);
mock.onAny().passThrough();

export default axios;
