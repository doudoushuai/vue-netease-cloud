<template>
<ListViewHeader></ListViewHeader>
    {{$route.query}}
</template>

<script>
    import ListViewHeader from "@/components/list-view/ListViewHeader";
    import {getPlayListDetail} from "@/api";
    export default {
        name: "ListView",
        components:{
            ListViewHeader
        },
        data(){
            return{
                aaa:[]
            }

        },
        created() {
            // console.log(this.$route.query.id)
            //通过id向后端传数据
            //收到数据后，更新自己的data
            this.getPlayListMusic()
        }
        ,methods:{
            async getPlayListMusic(){
                //使用this.$route.query来接受前端组件传来的参数
                //根据参数id向后台查找对应歌单里面的歌曲等数据信息
                const  res = await getPlayListDetail(this.$route.query.id)
                //要到数据后，更新自己的data
                console.log(res.data)
            }
        }
    }
</script>

<style scoped>

</style>