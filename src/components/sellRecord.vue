<template>
    <div class="sell-record">
        <div class="date-wrap">
            <span>设置筛选日期:</span>
            <input type="text">
            <span>至</span>
            <input type="text">
            <button>确定</button>
        </div>
        <ul>
            <li v-for="item in 6">
                <div class="consumer-phone">
                    <div class="consumer">
                        消费者: <span>唐先生</span>
                    </div>
                    <div class="phone-num">
                        联系电话: <span>18943433232</span>
                    </div>
                </div>
                <div class="buy-data">
                    <div class="goods">
                        购买系列: <span>听风细雨</span>
                    </div>
                    <div class="date">
                        <span>2018-07-11</span>
                        <span>13:25:04</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
.sell-record {
    .date-wrap {
        border-bottom:1px solid #ccc;
        input {
            width:80px;
        }
        button {
           border-radius: 8px; 
        }
    }
    ul {
        li {
            display:flex;
            border-bottom:1px solid #ccc;
            .buy-data {
                width: 150px;
                border:1px solid red;
                .goods,.date {
                    font-size: 12px;
                }
            }
            .consumer-phone {
                flex: 1;
            }
        }
    }
}
</style>

