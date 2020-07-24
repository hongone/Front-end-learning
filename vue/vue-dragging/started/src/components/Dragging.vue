<script>
export default {
  data () {
    return {
        colors: [{
            text: "Aquamarine"
        }, {
            text: "Hotpink"
        }, {
            text: "Gold"
        }, {
            text: "Crimson"
        }, {
            text: "Blueviolet"
        }, {
            text: "Lightblue"
        }, {
            text: "Cornflowerblue"
        }, {
            text: "Skyblue"
        }, {
            text: "Burlywood"
        }],
        collapses:[
            {   
                title: '一致性 Consistency',
                row1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
                row2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
                name: 1
            },
            {   
                title: '反馈 Feedback',
                row1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
                row2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
                name: 2
            },
            {   
                title: '效率 Efficiency',
                row1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
                row2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
                name: 3
            },
            {   
                title: '可控 Controllability',
                row1: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；',
                row2: '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。',
                name: 4
            }
        ],
        activeNames : 1

    }
  },
  /* if your need multi drag
  mounted: function() {
      this.colors.forEach((item) => {
          Vue.set(item, 'isComb', false)
      })
  } */
}
</script>

<template>
  <div class="color-list">
      <div
          class="color-item"
          v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
          :key="color.text"
      >{{color.text}}</div>
      <el-collapse v-model="activeNames"  @change="handleChange">
        <el-collapse-item v-for="collapse in collapses" v-dragging="{ item: collapse, list: collapses, group: 'collapse' }" :title="collapse.title" :name="collapse.name" :key="collapse.title">
            <div>{{ collapse.row1 }}</div>
            <div>{{ collapse.row2 }}</div>
        </el-collapse-item>
        
        </el-collapse>
  </div>
</template>