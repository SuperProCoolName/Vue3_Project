<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    },
  },
};
</script>

<template>
  <v-container>
    <h1 class="text--secondary mb-3 mt-3">My ads</h1>
    <v-card
      v-for="ad in myAds"
      :key="ad.id"
      class="elevation-10 bm-5"
      max-width="1000"
    >
      <v-row>
        <v-col xs="4">
          <v-img :src="ad.src" height="175px" cover></v-img>
          <v-spacer></v-spacer>
        </v-col>
        <v-col xs="8">
          <h2 class="text--primary">{{ ad.title }}</h2>
          <p style="height: 85px; overflow: hidden; text-overflow: ellipsis">
            {{ ad.desc }}
          </p>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
              Open
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
