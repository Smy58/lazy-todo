<template>
    <li class="list-item hidden">
        {{ item.activity }}
        <button class="list-item__del" v-on:click="onDel($event.target)">Del</button>
    </li>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        item: {
            type: Object, 
            default: () => {
                return {};
            }
        }
    },
    methods: {
        onDel(el) {
            this.$emit('handleDel', { item: this.item, el: el.parentNode})
        }
    },
    mounted() {
        console.log(this.$el);
        setTimeout(() => {
            this.$el.classList.remove('hidden')
        }, 600)
    }

}
</script>

<style lang="scss">
    .list-item {
        background: #fff;
        border-radius: 30px;
        height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 40px;
        align-items: center;

        margin-bottom: 15px;
        overflow: hidden;
        opacity: 1;

        transition: height 0.5s ease, margin 0.5s ease, padding 0.5s ease;

        &.hidden {
            opacity: 0;
            height: 0;
            margin: 0;
            padding-top: 0;
            padding-bottom: 0;
        }

        &__del {
            border-radius: 20px;
            background-color: rgb(209, 107, 165);
            width: 80px;
            height: 30px;
            position: relative;
            color: #fff;
            font-size: 14px;
            letter-spacing: 0.094em;
            cursor: pointer;
            -webkit-box-shadow: none;
            box-shadow: none;
            
            text-align: center;
            -webkit-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;
            text-transform: uppercase;

            border: 0;

            &:hover {
                -webkit-box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);
                box-shadow: 10px 10px 14px 1px rgba(00,00,00,0.2);
            }
        }
        
    }
</style>