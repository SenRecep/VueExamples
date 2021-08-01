export const odev11 = {
    data() {
        return {
            mail: "me@senrecep.com",
        };
    },
    computed: {
        mirorText() {
            return this.mail.split("").reverse().join("");
        },
        countText() {
            return `${this.mail} (${this.mail.length})`;
        },
    },
    filters: {
        mirror(value) {
            return value.split("").reverse().join("");
        },
        count(value) {
            return `${value} (${value.length})`;
        },
    },
};