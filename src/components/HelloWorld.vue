<template>
  <v-container>
    
      <v-card>
        <v-card-title class="headline font-weight-regular grey white--text">Search</v-card-title>
        <v-card-text>
          <v-autocomplete
            v-model="model"
            :items="titles"
            :label="'Research'"
            persistent-hint
          >
            <v-slide-x-reverse-transition
              slot="append-outer"
              mode="out-in"
            >
            </v-slide-x-reverse-transition>
          </v-autocomplete>
        </v-card-text>
        <v-list two-line>
          <v-list-tile v-for="(item) in articles" :key="item">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{ item.desc }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.link }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-card>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        isEditing: false,
        model: null,
        articles: [],
        titles: []
      }
    },

    created(){
      this.getData()
    },

    methods:{
      async getData(){
        const {
          data: [field,name,desc,link]} = await this.$http('https://en.wikipedia.org/w/api.php?action=opensearch&search=mariano&namespace=0&format=json&origin=*')
        this.name = name
        this.desc = desc
        // console.log("name", JSON.parse(JSON.stringify(name)))
        // console.log("desc", JSON.parse(JSON.stringify(desc)))
        this.titles = name
        for(var j=0; j< name.length; j++){
          this.articles.push({name: name[j], desc: desc[j], link: link[j]})
        }
      }
    }
  }
</script>
