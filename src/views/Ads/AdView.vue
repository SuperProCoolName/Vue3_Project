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
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quisquam. Velit rem sed expedita doloribus. Blanditiis dicta necessitatibus maiores ipsam voluptates quod a iste, quia quo. Esse sint repellendus aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quisquam. Velit rem sed expedita doloribus. Blanditiis dicta necessitatibus maiores ipsam voluptates quod a iste, quia quo. Esse sint repellendus aperiam?",
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
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img
            height="400px"
            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            cover
          ></v-img>
          <v-card-text>
            <h1 class="text--primary mb-3">Lorem Ipsum</h1>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
