<template>
    <footer>
        <div class="footer-first">
            <div class="footer-first-left">
                <svg t="1650954561653" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="7391" width="40" height="40">
                    <path d="M435.2 665.6V358.4l256 153.6z" p-id="7392"></path>
                    <path d="M512 204.8c168.96 0 307.2 138.24 307.2 307.2s-138.24 307.2-307.2 307.2-307.2-138.24-307.2-307.2 138.24-307.2 307.2-307.2m0-51.2c-199.68 0-358.4 158.72-358.4 358.4s158.72 358.4 358.4 358.4 358.4-158.72 358.4-358.4-158.72-358.4-358.4-358.4z"
                          p-id="7393"></path>
                </svg>
                <p class="footer-first-left-one">播放全部</p>
                <span class="footer-first-left-two">共{{obj.tracksLength}}首</span>
            </div>

            <div class="footer-first-right">
                <p class="footer-first-right-one">+收藏</p>
            </div>
        </div>
        <div class="footer-second" v-for="(item,index) in obj.tracks">
            <span class="footer-second-one">{{index+1}}</span>
            <p class="footer-second-two" title="{{item.name}}"> {{item.name}}</p>
            <!--            歌曲名-->
            <p class="footer-second-three" :title="item.al.name">{{item.al.name}}</p>
            <!--            简介-->

            <div class="footer-thirds">
                <svg  style="margin-top: 4px" t="1651045252084" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6881" width="25" height="25">
                    <path d="M384 628.130909m-372.363636 0a372.363636 372.363636 0 1 0 744.727272 0 372.363636 372.363636 0 1 0-744.727272 0Z"
                          fill="#EDF6FF" p-id="6882"></path>
                    <path d="M283.694545 279.272727v36.305455q14.894545-10.24 30.72-19.083637a230.167273 230.167273 0 0 1-30.72-17.221818z"
                          fill="#FFFFFF" p-id="6883"></path>
                    <path d="M866.443636 608.116364v14.429091c0-4.887273 0.232727-9.541818 0-14.429091z" fill="#EDF6FF"
                          p-id="6884"></path>
                    <path d="M354.443636 434.501818h46.545455v96.116364h-46.545455zM855.272727 530.385455h11.170909v-95.883637h-46.545454v95.883637h35.374545z"
                          fill="#040405" p-id="6885"></path>
                    <path d="M541.323636 611.374545l164.072728-105.192727-164.072728-104.96v210.152727z" fill="#2394FB"
                          p-id="6886"></path>
                    <path  d="M981.876364 207.592727c0-55.854545-67.723636-95.650909-162.909091-118.458182v188.509091a746.123636 746.123636 0 0 1-139.636364 23.272728c-23.272727 1.629091-46.545455 2.56-69.818182 2.56a821.992727 821.992727 0 0 1-209.454545-24.436364V88.669091c-94.72 23.272727-162.909091 62.370909-162.909091 118.225454V653.963636L349.090909 691.2a825.250909 825.250909 0 0 0 260.654546 42.123636A826.181818 826.181818 0 0 0 861.090909 693.992727l10.007273-2.792727 111.709091-37.236364V207.592727z m-628.363637-55.621818v111.243636c-46.545455-17.687273-69.818182-38.4-69.818182-55.621818s25.134545-37.934545 70.749091-55.621818z m581.818182 468.48l-69.818182 23.272727v-69.818181h-46.545454v83.083636a783.127273 783.127273 0 0 1-418.909091 0v-83.781818h-46.545455v69.818182l-69.818182-23.272728V279.272727a230.167273 230.167273 0 0 0 30.72 17.221818 368.64 368.64 0 0 0 40.029091 16.058182v77.730909h46.545455V325.818182a916.712727 916.712727 0 0 0 209.454545 23.272727 1002.589091 1002.589091 0 0 0 128.232728-8.378182 768 768 0 0 0 81.221818-14.894545v64.698182h46.545454v-77.963637a292.072727 292.072727 0 0 0 69.818182-32.814545z m-69.818182-357.934545V152.669091c44.218182 17.454545 69.818182 37.934545 69.818182 54.923636s-24.669091 37.469091-68.887273 54.923637z"
                          fill="#040405" p-id="6887"></path>
                </svg >
                &nbsp;
                <svg t="1651038569118" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     p-id="7901" width="20" height="20">
                    <path d="M98.357122 818.73194c-14.213723 0-25.764803 11.532661-25.764803 25.76071 0 14.233166 11.55108 25.770943 25.764803 25.770943M922.866648 818.73194 98.128925 818.73194c-14.21884 0-25.770943 11.532661-25.770943 25.76071 0 14.233166 11.552104 25.770943 25.770943 25.770943l824.737724 0c14.213723 0 25.764803-11.538801 25.764803-25.770943C948.633498 830.262554 937.081395 818.73194 922.866648 818.73194zM98.357122 483.770052c-14.213723 0-25.764803 11.537777-25.764803 25.76992 0 14.229073 11.55108 25.764803 25.764803 25.764803M922.866648 483.770052 98.128925 483.770052c-14.21884 0-25.770943 11.537777-25.770943 25.76992 0 14.229073 11.552104 25.764803 25.770943 25.764803l824.737724 0c14.213723 0 25.764803-11.537777 25.764803-25.764803C948.633498 495.307829 937.081395 483.770052 922.866648 483.770052zM98.357122 148.815327c-14.213723 0-25.764803 11.539824-25.764803 25.768897 0 14.227026 11.55108 25.76378 25.764803 25.76378M98.128925 200.346981l824.737724 0c14.213723 0 25.764803-11.536754 25.764803-25.76378 0-14.229073-11.55108-25.768897-25.764803-25.768897L98.128925 148.814304c-14.21884 0-25.770943 11.539824-25.770943 25.768897C72.359005 188.81125 83.911108 200.346981 98.128925 200.346981z"
                          p-id="7902"></path>
                </svg>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "ListViewBottom",
        props: ['obj'],
    }
</script>

<style scoped lang="less">
    footer {
        width: 300px;
        margin: 0 auto;
        height: 500px;
        /*border: blue 1px solid;*/

        .footer-first {
            width: 300px;
            height: 40px;
            /*border: #59ff00 1px solid;*/
            margin: 0 auto;
            list-style: none;

            .footer-first-left {
                width: 180px;
                height: 40px;
                position: relative;
                /*border: orange 1px solid;*/
                display: inline-block;

                .footer-first-left-one {
                    font-size: 18px;;
                    font-weight: bold;
                    display: inline-block;
                    position: absolute;
                    top: -10px;
                }

                .footer-first-left-two {
                    font-weight: lighter;
                    position: absolute;
                    display: inline-block;
                    top: 10px;
                    left: 120px;
                }
            }

            .footer-first-right {
                width: 80px;
                height: 80%;
                background: #ef3a07;
                border-radius: 15px;
                display: inline-block;
                float: right;
                top: 5px;
            }

            .footer-first-right-one {
                font-size: 14px;
                color: #e7e1e1;
                font-weight: bold;
                margin-top: 5px;
                margin-left: 5px;
            }
        }

        .footer-second {
            list-style: none;
            /*border: 1px salmon solid;*/
            padding-top: 10px;


            .footer-second-one {
                /*border: 1px seagreen solid;*/
                display: inline-block;
                margin-top: 18px;
                height: 18px;
                width: 10px;
            }

            .footer-second-two {
                /*border: 1px #24096c solid;*/
                height: 18px;
                font-size: 14px;
                width: 70%;
                overflow: hidden;
                /*margin:0 auto;*/
                font-weight: bold;
                margin-top: -28px;
                margin-left: 22px;
            }

            .footer-second-three {
                /*border: 1px #790961 solid;*/
                font-size: 12px;
                font-weight: lighter;
                width: 70%;
                overflow: hidden;
                margin-top: -14px;
                margin-left: 22px;
            }


            .footer-thirds {
                width: 60px;
                /*border: 1px solid red;*/
                height: 50px;
                display: inline-block;
                float: right;
                margin-top: -50px;
            }
        }
    }
</style>