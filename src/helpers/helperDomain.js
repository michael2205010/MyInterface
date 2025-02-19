
export default {
  cardType2Chinese : (type) => {
    switch (type) {
      case 1:
        return "悠遊卡";
      case 2:
        return "一卡通";
      case 3:
        return "iCash";
      default:
        return "";
    }
  }
}