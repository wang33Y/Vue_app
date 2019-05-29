<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newsinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsinfo.add_time | dateFormat('YYYY-MM-DD')}}</span>
            <span>点击：{{newsinfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>
            
        <!-- 评论区子组件 -->
        <comment-box :id="this.id"></comment-box>

    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue'
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            id: this.$route.params.id,//将url地址中传递过来的id值，挂载到data上，方便以后调用
            newsinfo:{}
        }
    },

    created(){
        this.getNewsInfo();
    },

    methods: {
        getNewsInfo(){//获取新闻详情
            this.$http.get('api/getnew/'+this.id).then(res => {
                if(res.body.status ===0 ){
                    this.newsinfo = res.body.message[0];
                }else {
                    Toast('加载失败');
                }
            })
        }
    },

    components: {// 用来注册子组件
        "comment-box": comment
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

    .content {
        width: 100%;
        font-size: 14px;
        color: gray;
    }
}
</style>
