<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <img :src="item.pic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'
    export default {
        name: "SwiperCom",
        data(){
            return{
                imgs:[//这个用法不标准，网页上的图片不应该是前端本地的图片
                    {pic:require('../../assets/swiper1.jpg'),id:0},
                    {pic:require('../../assets/swiper2.jpg'),id:1},
                    {pic:require('../../assets/swiper3.png'),id:2}
                ]
            }
        },
        created() {
            // 通过axios像后端要数据，其中包含swiper中的图片路径，吧图片路径修改this.imgs
        },

        mounted() {
            // 以下代码，要操作dom
            // mounted 挂载之后(vue实例挂载到dom对象上)
            var  mySwiper = new  Swiper('.swiper-home',{//<div class="swiper-container swiper-home"> 名字一致

                loop:true,
                //挂载上
                autoplay:true
            })
        }
    }
</script>

<style scoped>
.swiper-container>img{
    width: 100%;
}
</style>