<template>
    <div>
        <ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media" v-for="item in data" :key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.url"/>
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
					    <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
    data(){
        return {
            newsList:[],
            data:''
        }
    },

    created(){
        this.getNewsList();
    },

    methods: {
        getNewsList(){//获取轮播图的方法
            
        }
    },
    mounted(){
        axios.get('/list').then((res) => {
                this.data=res.data.newslist
            })
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }

        .mui-ellipsis {
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
