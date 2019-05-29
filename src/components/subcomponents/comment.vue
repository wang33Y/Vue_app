<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入你想说的话（最多120字）" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.add_time">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content === 'undefined' ? '默认好评' : item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            pageIndex: 1, // 默认展示第一页数据
            comments: [], // 所有的评论数据
            msg: '' // 评论输入的内容
        }
    },

    created(){
        this.getComments();
    },

    methods:{
        getComments(){// 获取评论
            this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(res => {
                if(res.body.status === 0){
                    // this.comments = res.body.message;
                    // 获取新评论时不会把老数据清空覆盖
                    this.comments = this.comments.concat(res.body.message);
                }else {
                    Toast('获取评论失败');
                }
            })
        },

        getMore(){// 加载更多
            this.pageIndex++;
            this.getComments();
        },

        postComment(){// 发表评论

            // 校验是否为空内容
            if(this.msg.trim().length === 0){
                return Toast('评论内容不能为空!');
            }
            
            this.$http.post("api/postcomment/" + this.$route.params.id,{content:this.msg.trim()}).then(function(res) {
                if(res.body.status === 0){
                    var cmt = {user_name: '匿名用户', add_time: Date.now(), content: this.msg.trim()};
                    this.comments.unshift(cmt);
                    this.msg = "";
                }
            })
        }
    },

    props: ['id']
}
</script>

<style lang="scss" scoped>
.cmt-container {
    h3 {
        font-size: 18px;
    }

    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }

            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>
