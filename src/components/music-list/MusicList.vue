<template>
    <h2>发现好歌单
        <button>产看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in musicList">
                <router-link :to="{path:'/list-view' ,query:{id:item.id}} ">
                    <img :src="item.picUrl" alt="">
                    <span>{{item.playCount>100000000?(item.playCount/100000000).toFixed(2)+'亿'
                    :(item.playCount/10000).toFixed(1)+'万'}}</span>
                    <!--改成万制-->
                    <!--如果过亿的话-->
                    <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'
    import {getMusicList} from "@/api";

    export default {
        name: "MusicList",
        data() {
            return {
                musicList: []
            }
        },
        created() {
            this.getMusicListData()//调用
        },
        updated() {
            const mySwiper = new Swiper('.swiper-music-list', {
                slidesPerView: 3,
                spaceBetween: 20,
            })

        },
        methods: {
            async getMusicListData() {
                const res = await getMusicList()
                this.musicList = res.data.result
                console.log(this.musicList)
            }
        }
    }
</script>

<style scoped lang="less">

    button {
        float: right;
        width: 80px;
        height: 20px;
        background: #fff;
        border-radius: 15px;
        border: 1px solid #ebebeb;
    }
    .swiper-slide {
        width: 30vw;
        /*height: 37vw;*/
        /*text-align: center;*/
        font-size: 12px;

        img {
            width: 100%;
        }

        span {
            position: absolute;
            top: 0;
            right: 10px;
            color: #fff;
        }

        p {
            margin: 0
        }
    }
</style>