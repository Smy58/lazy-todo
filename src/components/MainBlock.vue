<template>
    <main class="main">
        <div class="main__content">
            <h2 :class="'main__title ' + ( isLoader ? 'loading' : '')">{{isLoader ? "" : TODOITEM ? TODOITEM.activity : "What we need to do?"}}</h2>
            <div class="main__activity">
                <button :class="'main__btn ' + ( isLoader ? 'main__btn_dis' : '')" v-on:click="onButtonGenerate">Let's see something</button>
                <button :class="'main__btn main__btn-add ' + ( isAdded ? 'main__btn_dis' : '')" v-on:click="onAdd" :disabled="isAdded">ADD to list</button>
            </div>
            
        </div>
    </main>    
</template>

<script>
import { mapGetters,mapActions, mapMutations} from 'vuex';

export default {
    name: 'MainBlock',
    data(){
        return {
            isLoader: false
        }
    },
    computed: {
        ...mapGetters(['TODOITEM', 'TODOLIST']),
        isAdded() {
            var ch = false;
            this.TODOLIST.forEach(el => {
                // console.log(el)
                // console.log(this.TODOITEM.key)
                if (el.key == this.TODOITEM.key) {
                    ch = true;
                }
            });

            return ch;
        }
    },
    methods: {
        ...mapActions(['GET_ITEM_FROM_API']),
        ...mapMutations(['SET_NEW_ITEM', 'ADD_ITEM_TO_LIST']),
        onButtonGenerate() {
            this.isLoader = true;
            this.GET_ITEM_FROM_API()
                .then(() => {
                    this.isLoader = false;
                })
        },
        onAdd() {
            this.ADD_ITEM_TO_LIST(this.TODOITEM);
        }
    },
    created() {
        // console.log("store hui: ", await     this.$store.dispatch('GET_ITEM_FROM_API'));
        
        if(localStorage.getItem('todoItem')) {
            var oldItem = JSON.parse(localStorage.getItem('todoItem'));
            this.SET_NEW_ITEM(oldItem);
        } else {
            this.GET_ITEM_FROM_API();
        }
    }

}
</script>

<style lang="scss">
    .main {
        width: 100%;
        margin-top: 70px;
        margin-bottom: 60px;

        display: flex;
        flex-direction: column;
        align-items: center;

        &__content {
            width: 50%;

            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__title {
            font-size: 30px;
            line-height: 32px;
        }

        &__activity {
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            width: 100%;
        }

        &__btn {
            border-radius: 50px;
            background: #00c9b7;
            width: 180px;
            height: 50px;
            position: relative;
            color: #fff;
            font-size: 0.97em;
            letter-spacing: 0.094em;
            cursor: pointer;
            -webkit-box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);
            box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);
            text-align: center;
            -webkit-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
            text-transform: uppercase;

            transition: background-color 0.5s ease;

            border: 0;

            &-add {
                background-color: rgb(95, 251, 241);
                color: rgb(34, 34, 34);
            }

            &_dis {
                background-color: rgb(147, 174, 172);
                cursor: default;
                -webkit-box-shadow: none;
                box-shadow: none;
            }

            &:hover {
                -webkit-box-shadow: none;
                box-shadow: none;
            }
        }
    }

    .loading:after {
        content: ' .';
        animation: dots 1s steps(5, end) infinite;
    }

    @keyframes dots {
        0%, 20% {
            color: rgba(0,0,0,0);
            text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);
        }
        40% {
            color: black;
            text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);
        }
        60% {
            text-shadow:
            .25em 0 0 rgb(0, 0, 0),
            .5em 0 0 rgba(0,0,0,0);
        }
        80%, 100% {
            text-shadow:
            .25em 0 0 rgb(0, 0, 0),
            .5em 0 0 rgb(0, 0, 0);
        }
    }
</style>