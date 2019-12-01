<template>
    <div class="footer">
        <h1 @click="onHandleClick" >页脚</h1>       
    </div>
</template>

<style scoped>
    .footer {
        background: yellowgreen;
    }
</style>
<script>
export default {
    methods: {
        onHandleClick() {
            alert('foot')
        }
    }
}
</script>