<script>
export default {
  props: ["id"],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img height="300px" :src="ad.src"></v-img>
          <v-card-text>
            <h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="mdi-file-edit"
              variant="outlined"
              color="warning"
              >Edit</v-btn
            >
            <v-btn
              append-icon="mdi-cart-arrow-down"
              variant="outlined"
              color="success"
              >Buy</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
