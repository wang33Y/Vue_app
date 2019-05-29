<template>
    <div class="photoinfo-constainer">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击：{{photoinfo.click}}次</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <vue-preview :slides="list"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 评论子组件 -->
        <cmt-box :id="id"></cmt-box>

    </div>
</template>

<script>
import { Toast } from 'mint-ui'
// 导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id: this.$route.params.id,// 从路由中获取的图片id
            photoinfo: {}, // 图片详情
            list: [] // 缩略图数组
        }
    },

    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },

    methods:{
        getPhotoInfo(){// 获取图片详情
            this.$http.get('api/getimageInfo/'+this.id).then(res => {
                if(res.body.status === 0){
                    this.photoinfo = res.body.message[0];
                }else {
                    Toast('获取图片失败')
                }
            })
        },

        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(res => {
                if(res.body.status === 0){
                    // 循环每个图片数据，补全图片宽高
                    res.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                        item.msrc = item.src;
                    })
                    this.list = res.body.message
                }else {
                    Toast('加载图片失败')
                }
            })
        }
    },

    components: {
        'cmt-box':comment
    }
    
}
</script>

<style lang="scss" scoped>
.photoinfo-constainer {
    padding: 3px;

    h3 {
        color: #26a2FF;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }

    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }


    .content {
        font-size: 13px;
        line-height: 30px;
    }
}
</style>

<style lang="scss">
.thumbs {
  .my-gallery {
    display: flex;
    flex-wrap: wrap;
  }
  figure {
    width: 100px;
    height: 100px;
    margin: 10px;
    box-shadow: 0 0 8px #999;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

