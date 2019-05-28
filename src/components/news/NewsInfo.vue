<template>
    <div class="newsinfo-container">
        <h3 class="title">{{}}</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content">

        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
    data(){
        return {
            id: $route.params.id,// 将url地址中传递过来的id值挂载到data上
            newsinfo:{},
            data:''
        }
    },

    created(){
        this.getNewsInfo();
    },

    methods: {
        getNewsInfo(){//获取轮播图的方法
            
        }
    },
    mounted(){
        axios.get('/list').then((res) => {
            // this.newsinfo=res.data.newslist[newsinfo]
            console.log(res.data.newslist[newsinfo])
        })
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }

    .subtitle {
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>
