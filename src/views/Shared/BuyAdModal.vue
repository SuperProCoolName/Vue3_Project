<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
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
            <h1 class="text--primary">Buy</h1>
          </v-card-title>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-card-text>Temporarily unavailable</v-card-text>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn>Cancel</v-btn>
            <v-btn color="success">Buy</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
