<template>
    <div class="newsinfo-container">
        <li v-for="(item,index) in data" :key="index">
            <h3 class="title">{{ item.title }}</h3>
            <p class="subtitle">
                <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                <span>点击：{{item.click}}次</span>
            </p>
            <hr>
            <div class="content">
                {{item.newsinfo.content}}
            </div>
            
            <!-- 评论区子组件 -->
            <comment-box></comment-box>
        </li>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
    data(){
        return {
            id: this.$route.params.id,
            newsinfo:[],
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
            this.data=res.data.newslist
            // console.log(res)
        })
    },

    components: {// 用来注册子组件
        "comment-box": comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
    padding: 0 4px;
    li {
        list-style: none;
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

        .content {
            width: 100%;
            font-size: 14px;
            color: gray;
        }
    }
}
</style>
