<template>
    <div class="shopcar-container">
        <div class="goods-list">
            <!-- 商品列表区域 -->
            <div class="mui-card">
			    <div class="mui-card-content">
				    <div class="mui-card-content-inner">
					    <mt-switch></mt-switch>
                        <img src="http://img4.imgtn.bdimg.com/it/u=1258316194,557026968&fm=26&gp=0.jpg" alt="">
                        <dir class="info">
                            <h1>aaaaaaaaa</h1>
                            <p>
                                <span class="price">￥2199</span>
                                <numbox></numbox>
                                <a href="#">删除</a>
                            </p>
                        </dir>
                    </div>
			    </div>
		    </div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
				</div>
			</div>
		</div>
    </div>

    
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
    background-color: #eee;
    overflow: hidden;

    .goods-list {
        .mui-card-content-inner {
            display: flex;
            align-items: center;
        }
        img {
            width: 60px;
            height: 60px;
        }

        h1 {
            font-size: 13px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price {
                color: red;
                font-weight: bold;
            }
        }
    }
}
</style>


