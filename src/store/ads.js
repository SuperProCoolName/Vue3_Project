export default {
  state: {
    ads: [
      {
        title: "First",
        desc: "First Desc",
        promo: false,
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "1",
      },
      {
        title: "Second",
        desc: "Second Desc",
        promo: false,
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "2",
      },
      {
        title: "Third",
        desc: "Third Desc",
        promo: false,
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "3",
      },
      {
        title: "Fourth",
        desc: "Fourth Desc",
        promo: false,
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        id: "4",
      },
      {
        title: "Loshara",
        desc: "Osman районе",
        promo: true,
        src: "https://avatars.githubusercontent.com/u/95274766?v=4",
        id: "5",
      },
      {
        title: "Qrüş",
        desc: "Eta qrüşevka",
        promo: true,
        src: "https://i.ytimg.com/vi/_VPtnhbqXdA/maxresdefault.jpg",
        id: "6",
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter((ad) => {
        return ad.promo;
      });
    },
    myAds(state) {
      return state.ads;
    },
  },
};
