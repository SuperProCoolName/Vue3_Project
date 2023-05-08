<script>
export default {
  data() {
    return {
      valid: false,
      title: "",
      description: "",
      promo: false,
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          desc: this.description,
          promo: this.promo,
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        };
        this.$store
          .dispatch("createAd", ad)
          .then(() => {
            this.$router.push("/list");
          })
          .catch((err) => {
            console.log(err);
          });

        console.log(ad);
      }
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <h1 class="text--secondary mb-3 mt-3">Добавить</h1>
        <v-form v-model="valid" ref="form" validation>
          <v-text-field
            name="title"
            label="Заголовок"
            type="text"
            v-model="title"
            :rules="[(v) => !!v || 'Заполните!']"
          >
          </v-text-field>
          <v-textarea
            name="description"
            label="Описание"
            type="text"
            v-model="description"
            :rules="[(v) => !!v || 'Опишите!']"
            class="mb-3"
          ></v-textarea>
        </v-form>
        <v-row>
          <v-col cols="8">
            <v-btn class="mt-3" color="warning">
              Загрузить
              <v-icon right dark>mdi-cloud- upload</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <img
              src="https://fb.ru/misc/i/gallery/47201/3002819.jpg"
              height="150"
              class="mt-3"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-switch v-model="promo" label="Ad to Promo?"></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click="createAd"
              :loading="loading"
              :disabled="!valid || loading"
              >Create Ad</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
