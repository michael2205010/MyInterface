import axios from "@/axios";

export let news = {
  async getList() {
    return await axios.get("/News");
  },
  async getDetail(id) {
    return await axios.get(`/News/${id}`);
  },
};

export let regularCustomerDiscount = {
  async getList() {
    return await axios.get("/RegularCustomerDiscount");
  },
  async getDetail(id) {
    return await axios.get(`/RegularCustomerDiscount/${id}`);
  },
};

export let faq = {
  async getList() {
    return await axios.get("/Faq");
  },
  async getDetail(id) {
    return await axios.get(`/Faq/${id}`);
  },
};

export let rideHistory = {
  async getMonth(id, year, month) {
    return await axios.get(`/RideHistory/${id}/Month/${year}/${month}`);
  },
  async getYear(id, year) {
    return await axios.get(`/RideHistory/${id}/Year/${year}`);
  }
}

export let myCard = {
  async getMyCard() {
    return await axios.get("/MyCard");
  },
  async createMyCard(data) {
    return await axios.post("/MyCard", data);
  },
  async updateMyCard(data) {
    return await axios.post("/MyCard/Update", data);
  },
  async deleteMyCard(id) {
    return await axios.delete(`/MyCard/${id}`);
  },
};

export let authentication = {
  async signIn(data) {
    return await axios.post("/Authentication/SignIn", data);
  },
  async signOut() {
    return await axios.get("/Authentication/SignOut");
  },
  async forgetPwVerifyCode(email) {
    return await axios.get("/Authentication/ForgetPwVerifyCode/" + email);
  },
  async forgetPwCodeCheck(email, code) {
    return await axios.get("/Authentication/ForgetPwCodeCheck/" + email + "/" + code);
  },
  async forgetPw(data) {
    return await axios.post("/Authentication/ForgetPw", data);
  },
  async refreshJWT() {
    return await axios.get("/Authentication/Refresh");
  },
  async getSignInTimes() {
    return await axios.get("/Authentication/SignInTimes");
  },
}

export let registration = {
  async getEmailVerifyCode(email) {
    return await axios.get("/Registration/EmailVerifyCode/" + email);
  },
  async getPhoneVerifyCode(phone) {
    return await axios.get("/Registration/PhoneVerifyCode/" + phone);
  },
  async register(data) {
    return await axios.post("/Registration", data);
  },
}

export let user = {
  async getUser() {
    return await axios.get("/Users");
  },
  async updateUser(data) {
    return await axios.post("/Users", data);
  },
  async getEmailVerifyCode(email) {
    return await axios.get("/Users/EditEmailVerifyCode/" + email);
  },
  async getPhoneVerifyCode(phone) {
    return await axios.get("/Users/EditPhoneVerifyCode/" + phone);
  },
}