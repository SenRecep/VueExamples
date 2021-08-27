<template>
  <div class="game-area">
    <h1 class="title">Poğaça <span>Nerede</span> <strong>?</strong></h1>
    <h4 class="description">
      Açık kartlardan birini seçtikten sonra, kapalı olan karta tıklayınız
    </h4>
    <transition-group name="rotate-all" class="container" appear>
      <card
        v-for="card in cards"
        :key="card.id"
        :data="card"
        :class="{ shadow: selectedCard != null && selectedCard == card }"
        @click.native="selectedCard = card"
      ></card>
    </transition-group>
    <div class="container">
      <transition name="rotate" mode="out-in">
        <component @click.native="showCard" :is="activeCard" :data="answer"> </component>
      </transition>
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
import DefaultCard from "./DefaultCard.vue";
export default {
  components: {
    card: Card,
    defaultCard: DefaultCard,
  },
  data() {
    return {
      answer: {},
      selectedCard: null,
      activeCard: "defaultCard",
      cards: [
        { id: 1, img: "/src/assets/card-1.jpg" },
        { id: 2, img: "/src/assets/card-2.jpg" },
        { id: 3, img: "/src/assets/card-3.jpg" },
        { id: 4, img: "/src/assets/card-4.jpg" },
        { id: 5, img: "/src/assets/card-5.jpg" },
      ],
    };
  },
  methods: {
    showCard() {
      if (!this.selectedCard) {
        alert("Önece Seçim Yapmalısınız");
        return;
      }
      this.activeCard = "card";
      setTimeout(
        () =>
          this.$emit(
            "pageNavigator",
            this.selectedCard == this.answer ? "celebrate" : "failure"
          ),
        1000
      );
    },
  },
  created() {
    const answer = Math.ceil(Math.random() * this.cards.length) - 1;
    this.answer = this.cards[answer];
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: rosybrown;
}
.title span {
  color: mediumpurple;
}
.title strong {
  color: darkred;
}

.description {
  text-align: center;
  color: grey;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.shadow {
  box-shadow: 0 5px 48px #30969f !important;
  transition: box-shadow 0.5s;
}

.rotate-all-enter-active {
  animation: rotate-all ease-in-out 2s forwards;
}

.rotate-enter-active {
  animation: rotate-in ease-in-out 0.5s forwards;
}
.rotate-leave-active {
  animation: rotate-out ease-in-out 0.5s forwards;
}

@keyframes rotate-all {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(calc(360deg * 3));
  }
}

@keyframes rotate-out {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes rotate-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0);
  }
} ;
</style>
