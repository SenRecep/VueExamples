export const filterProduct = {
    data() {
        return {
            searchText: "",
            products: ["klavye", "mouse", "mouse pad", "monitor", "leptop"],
        };
    },
    computed: {
        searched() {
            return this.products.filter((val) => val.match(this.searchText));
        },
    },
}