<template>
    <div class="header">
       <h1 @click="onHandleClick">页头</h1>
       <h2>异步Ajax数据：</h2>
       <span>{{ msg }}</span>
    </div>
</template>

<style scoped>
    .header {
        background: green;
    }
</style>

<script>

const fetchInitialdData = ({ store }) => {
    store.dispatch('fetchBar');
}

export default {
    asyncData: fetchInitialdDatam,
    methods: {
        onHandleDClick() {
            alert('bar');
        }
    },
    mounted() {
        let store = this.$store.bar;
        fetchInitialdData({ store });
    },
    computed: {
        msg() {
            return this.$store.state.bar;
        }
    }
}
</script>