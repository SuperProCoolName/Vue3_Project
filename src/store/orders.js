export default {
  state: {},
  mutations: {},
  actions: {
    async createOrder({ commit }, { name, phone, adId, userId }) {
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
  getters: {},
};
