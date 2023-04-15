<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1",
        },
        {
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2",
        },
        {
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3",
        },
        {
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4",
        },
        {
          title: "Loshara",
          desc: "Osman районе",
          promo: false,
          src: "https://avatars.githubusercontent.com/u/95274766?v=4",
          id: "5",
        },
      ],
    };
  },
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.src" cover>
            <div class="ad-link">
              <v-btn class="error" :to="'/ad/' + ad.id">
                {{ ad.title }}
              </v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container grid-list-lg>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" xs="12" v-for="ad in ads" :key="ad.id">
        <v-card>
          <v-img :src="ad.src" height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb0">{{ ad.title }}</h3>
              <div>{{ ad.desc }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="mdi-vuetify"
              variant="text"
              :to="'/ad/' + ad.id"
              >Open</v-btn
            >
            <v-btn append-icon="mdi-vuetify" raised color="primary">
              Buy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
