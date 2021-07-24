const HEAL = {
    MIN: 0,
    MAX: 100
}

new Vue({
    el: "#app",
    data: {
        playerHealth: HEAL.MAX,
        monsterHealth: HEAL.MAX,
        gameIsOn: false,
        logId:0,
        logs:[],
        logText:{
            playerAttack:"OYUNCU ATAĞI ",
            monsterAttack:"CANAVAR ATAĞI ",
            healUp:"İLK YARDIM ",
            giveUp:"OYUNCU PES ETTI!!!",
        },
        multiple:{
            normalAttack:10,
            specialAttack:25,
            monsterAttack:15,
            healUp:20
        }
    },
    methods: {
        startGame: function () {
            this.playerHealth = this.monsterHealth = HEAL.MAX;
            this.logs=[];
            this.logId=0;
            this.gameIsOn = true;
        },
        attack: function () {
           this.playerAttack();
        },
        specialAttack: function () {
            this.playerAttack(this.multiple.specialAttack);
        },
        healUp: function () {
            const point = this.randomPoint(this.multiple.healUp);
            this.playerHealth += point;
            this.addToLog(true,`${this.logText.healUp} (${point})`);
            this.monsterAttack();
        },
        giveUp: function () {
            this.addToLog(true,this.logText.giveUp);
            this.playerHealth = 0;

        },
        monsterAttack: function () {
            const point = this.randomPoint(this.multiple.monsterAttack);
            this.addToLog(false,`${this.logText.monsterAttack} (${point})`);
            this.playerHealth -= point;
        },
        playerAttack:function(pointCoefficient=this.multiple.normalAttack){
            const point = this.randomPoint(pointCoefficient);
            this.monsterHealth -= point;
            this.addToLog(true,`${this.logText.playerAttack} (${point})`);
            this.monsterAttack();
        },
        randomPoint: function (pointCoefficient = this.multiple.normalAttack) {
            return Math.ceil(Math.random() * pointCoefficient);
        },
        healMap: function (value) {
            return value < HEAL.MIN ? HEAL.MIN : (value > HEAL.MAX ? HEAL.MAX : value);
        },
        addToLog:function(turn,text){
            this.logs.push({
                id:++this.logId,
                turn:turn,
                text:text
            });
        },
        chackGame: function () {
            if (
                (this.playerHealth == HEAL.MIN && confirm("Oyunu KAYBETTIN! Tekrar denemek ister misin?")) ||
                (this.monsterHealth == HEAL.MIN && confirm("Oyunu KAZANDIN! Tekrar denemek ister misin?")))
                this.startGame();
        }
    },
    watch: {
        playerHealth: function (value) {
            this.playerHealth = this.healMap(value);
            this.chackGame();
        },
        monsterHealth: function (value) {
            this.monsterHealth = this.healMap(value);
            this.chackGame();
        }
    },
    computed:{
        playerProgress:function(){
            return {
                width:`${this.playerHealth}%`
            };
        },
        monsterProgress:function(){
            return {
                width:`${this.monsterHealth}%`
            };
        }
    }
});
