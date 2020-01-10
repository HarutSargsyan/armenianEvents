<template>
  <div>
      <h1 class="text-center font-italic font-weight-medium mb-4 black--text">Our Mission</h1>
    <p class="mt-10 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic, laborum ducimus totam dolorem voluptatem magni rerum labore provident, consequuntur ipsa nesciunt ab quas quae expedita! Ad doloribus eius consectetur.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut incidunt voluptatum possimus mollitia modi nesciunt omnis, voluptas facilis in? Temporibus necessitatibus inventore iure possimus, beatae aut est ducimus molestiae minus!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus ab cum fugit optio, aperiam quasi ipsam pariatur dolores. Maxime corrupti suscipit tempora, beatae soluta modi veniam eaque minima excepturi.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repellendus error quae distinctio. Distinctio, tempore natus sed aperiam ullam perspiciatis placeat eum voluptatibus quod illum voluptates cumque alias ut magnam?
    </p>
    <v-parallax dark height="600" src="https://cdn.hipwallpaper.com/i/29/62/ISWR7o.jpg">
      <v-row align="center" justify="center"></v-row>
    </v-parallax>

    <h2 class="mt-12 mb-6 display-1 text-center font-italic font-weight-medium mb-4 black--text">Meet our team</h2>
    <v-row align="center" justify="center">
      <v-col cols="sm-and-up-4 xs-12">
        <v-hover v-slot:default="{ hover }">
          <v-card dark color="purple darken-4" :elevation="hover ? 12 : 2" class="mx-auto" max-width="350">
            <v-img  height="200px" src="https://scontent.fevn1-4.fna.fbcdn.net/v/t1.0-9/80647115_977394329301631_9000118459987656704_n.jpg?_nc_cat=102&_nc_ohc=QgGvWBJJ_6wAQkY6AdfpG6UVWn86Cwb2MExaH9W109HhOGRvdeAxjyevg&_nc_ht=scontent.fevn1-4.fna&oh=8b53a29a24e8993af8f1d8001a315774&oe=5EDBAD74">
              <v-card-title>Harut Sargsyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Full-stack developper</v-card-subtitle>

            <v-card-text  class=" white--text">
              <div>Hi I'm Harut and i'm 14. I participated so many workshops in TUMO get so interseting 
                and usefull knowledge about Robotics, Web Development and of course Javascript. I like Js so much, and I built this project with one of best JS frameworks Vue.js. </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="sm-and-up-4 xs-12">
        <v-hover v-slot:default="{ hover }">
          <v-card  dark color="purple darken-4" :elevation="hover ? 12 : 2" class="mx-auto" max-width="350">
            <v-img height="200px" src="../../public/arman.jpg">
              <v-card-title>Arman Khandanyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Back-end developer</v-card-subtitle>

            <v-card-text class="white--text">
              <div>Hi I'm Arman and i'm 13. Although that I participated to few workshops in TUMO I get so interseting 
                and usefull knowledge about Javascript. I like Js so much, and I built this project with one of best JS frameworks Vue.js. I attend TUMO 1 year. </div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="sm-and-up-4 xs-12">
        <v-hover v-slot:default="{ hover }">
          <v-card dark color="purple darken-4"  :elevation="hover ? 12 : 2" class="mx-auto" max-width="350">
            <v-img
              height="200px"
             src="../../public/Karine.jpg"
            >
              <v-card-title>Karine Ter-Minasyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Front-end developer</v-card-subtitle>

            <v-card-text class=" white--text ">
              <div> Hi I'm Karine and i'm 20. I participated so many workshops in TUMO get so interseting 
                and usefull knowledge about Robotics, Graphic design and of course Javascript. I like Js so much, and I built this project with one of best JS frameworks Vue.js. I'm TUMO alumni !!!</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
 
 
<script>
// @ is an alias to /src

export default {
  name: "About",
  components: {}
};
</script>
 

