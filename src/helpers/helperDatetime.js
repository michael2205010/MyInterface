import dayjs from "dayjs";
import "dayjs/locale/zh-tw";
dayjs.locale("zh-tw"); // use locale globally

export default {
  dayjs: (value) => dayjs(value),
}