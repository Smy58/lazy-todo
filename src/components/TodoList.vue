<template>
    <ul class="list" >
        <ListItem v-for="item in TODOLIST" :item="item" @handleDel="handleDel"  :key="item.key"/>
    </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ListItem from '@/components/ListItem.vue'

export default {
    name: 'TodoList',
    components: {
        ListItem
    },
    props: {

    },
    computed: {
        ...mapGetters(['TODOLIST']),
    },
    methods: {
        ...mapMutations(['SET_LIST', 'DEL_ITEM_FROM_LIST']),
        handleDel(val) {
            console.log(val)
            const {item, el} = val
            console.log(item)
            console.log(el)
            el.classList.add('hidden');
            setTimeout(() => {
                this.DEL_ITEM_FROM_LIST(item)
            }, 600)
        }
    },
    created() {
        if(localStorage.getItem('todoList')) {
            var oldItem = JSON.parse(localStorage.getItem('todoList'));
            this.SET_LIST(oldItem);
        }

        console.log(this.TODOLIST)
    }
}
</script>

<style lang="scss">
    .list {
        width: 60%;
        list-style-type: none;
        margin-bottom: 50px;
        border: 1px solid #fff;
        border-radius: 25px;
        padding: 15px 15px;


    }
</style>