export default {
    methods: {
        newGame() {
          this.$emit("pageNavigator", "gameCards");
        },
      },
}