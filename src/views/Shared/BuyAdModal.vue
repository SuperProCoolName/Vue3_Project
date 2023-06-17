<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      name: "",
      phone: "",
    };
  },
};
</script>

<template>
  <v-dialog v-model="modal" width="400px">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" color="warning">Buy</v-btn></template
    >
    <v-card class="pa-3">
      <v-row justify="center">
        <v-col cols="12">
          <v-card-title>
            <h1 class="text--primary">Do you want to buy it?</h1>
          </v-card-title>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-card-text>
            <v-text-field
              name="name"
              label="Your name"
              type="text"
              v-model="name"
            >
            </v-text-field>
            <v-text-field
              name="phone"
              label="Your phone number"
              type="text"
              v-model="phone"
            >
            </v-text-field>
          </v-card-text>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Close</v-btn>
            <v-btn color="success">Buy it!</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
