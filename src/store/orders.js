export default {
  state: {},
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload);
    },
  },
  actions: {
    async createOrder({ commit }, { name, phone, adId, userId }) {
      let payload = new Order(name, phone, adId, userId, false, Math.random());
      console.log(name);
      console.log(phone);
      console.log(adId);
      console.log(userId);
      commit("clearError");
      //Заглушка запроса
      let isRequestOk = true;
      let promise = new Promise(function (resolve) {
        setTimeout(() => resolve("Done"), 3000);
      });
      if (isRequestOk) {
        await promise.then(() => {
          commit("createOrder", payload);
          //Здесь вызовем commit для добавления заказа
        });
      } else {
        await promise.then(() => {
          commit("setError", "Error of creating order");
          throw "Oops... Error of creating order";
        });
      }
    },
  },
  getters: {
    orders(state, getters) {
      if (getters.user == null) return [];
      return state.orders.filter((order) => order.userId == getters.user.id);
    },
  },
};

class Order {
  constructor(name, phone, adId, userId, done = false, id = null) {
    this.name = name;
    this.phone = phone;
    this.adId = adId;
    this.userId = userId;
    this.done = done;
    this.id = id;
  }
}
