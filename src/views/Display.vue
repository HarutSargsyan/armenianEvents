<template>
  <div>
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="3">
        <v-progress-circular indeterminate :size="70" :width="7" color="purple darken-4"></v-progress-circular>
      </v-col>
    </v-row>
    <v-card v-if="!loading" class="pa-5">
      <v-card-text>
        <v-row align="end" class="text-center">
          <v-col cols="12" md="6">
            <h1>{{ eventInfo.topic }}</h1>
          </v-col>
          <v-col cols="12" md="6">
            <h3>Event by: {{ eventInfo.host }}</h3>
          </v-col>
        </v-row>
        <v-divider />
        <v-row class="text-center" justify="space-around">
          <v-col cols="10" md="2">
            <v-icon>mdi-clock</v-icon>
            <br />
            <div>{{ formatTime(eventInfo.time) }}</div>
          </v-col>
          <v-col cols="10" md="2">
            <v-icon>mdi-account</v-icon>
            <br />
            <div>Guests: {{ guests }}</div>
          </v-col>
          <v-col cols="10" md="2">
            <v-icon>mdi-map-marker</v-icon>
            <br />
            <div>Located at: {{ eventInfo.position }}</div>
          </v-col>
        </v-row>
        <v-divider />
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="font-weight-light" style="margin-bottom:10px">About this Event:</h1>
            <p class="display-1">{{ eventInfo.description }}</p>
          </v-col>
          <v-divider />
          <v-col cols="12" md="5">
            <v-img :src="eventInfo.img" aspect-ratio="1" max-height="300"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
      <div class="text-center">
        <v-btn
          :disabled="dialog || clicked"
          :loading="dialog"
          class="white--text"
          color="purple darken-4"
          @click="dialog = true; clicked = true; checkIn()"
        >Check In</v-btn>
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="purple darken-4" dark>
            <v-card-text>
              Checking In...
              <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </v-card>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "About",
  data: () => ({
    dialog: false,
    eventInfo: null,
    guests: null,
    loading: true,
    clicked: false
  }),
  watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
    },
  methods: {
    checkIn: function () {
      this.guests++
    },
    formatTime: function(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return (
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        "  " +
        strTime
      );
    },
    getEventInfo: async function() {
      const params = {
        id: this.$route.params.id
      };
      let response = await axios.get(
        "https://armenian-events.herokuapp.com/getEventInfo/",
        { params }
      );
      this.eventInfo = response.data["eventInfo"];
      this.eventInfo.time = new Date(this.eventInfo.time);
      this.guests = this.eventInfo.guests
      this.loading = false;
    }
  },
  created() {
    this.getEventInfo();
  }
};
</script>