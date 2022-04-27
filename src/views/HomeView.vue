<template>
    <HeaderCom/>
    <SwiperCom></SwiperCom>
<!--    <IconList/>-->
    <MusicList/>
</template>

<script>
    import HeaderCom from "@/components/header/HeaderCom";
    import SwiperCom from "@/components/swiper/SwiperCom";
    import IconList from "@/components/icon-list/lconList"
    import MusicList from "@/components/music-list/MusicList";

    export default {
        name: 'HomeView',
        components: {
            SwiperCom,
            IconList,
            MusicList,
            HeaderCom
        }
    }
</script>
