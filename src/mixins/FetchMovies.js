export default {
    data: function () {
        return {
          movie: null,
          video: null,
        };
      },
    methods: {
        MovieVideofetch: function(){
            fetch(
                `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=15eb3458877c356fb0e0ddb7075d8f9f&language=fr-FR`
              )
                .then((response) => response.json())
                .then((response) => {
                  // console.log(response);
                  this.movie = response;
                });
              fetch(
                `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=15eb3458877c356fb0e0ddb7075d8f9f&language=fr-FR`
              )
                .then((response) => response.json())
                .then((response) => {
                  // console.log(response);
                  this.video = response;
                });
        }
      }
    }
