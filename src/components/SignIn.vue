<template>
         <v-container>
         <h1>Sign in</h1>
    <v-form ref="form" @submit.prevent="submit">
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              label="Email"
              required
            ></v-text-field>
          </v-col>
      <v-col cols="12">
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1" 
            label="password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        </v-row>
       <v-row align="center">
    <v-col class="text-center" cols="12" sm="4">
      <div class="my-2">
        <v-card-actions>
                <v-btn color="purple darken-4" dark >Submit</v-btn>
              </v-card-actions>
      </div>
      </v-col>
      </v-row>
      </v-form>
      </v-container>
</template>

<script>
export default {
  name:"SignIn",
  data () {
    return {
      show1: false,
      password: null,
      rules: {
        required: value => !!value || 'Required.',
        min: v => (v && v.length >= 8) || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  }
}
</script>