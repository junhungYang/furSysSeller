<template>
    <div class="sell-record">
        <div class="date-wrap">
            <span>设置筛选日期 :</span>
            <input type="text">
            <span>至</span>
            <input type="text">
            <div class="button">确定</div>
        </div>
        <ul>
            <li v-for="item in 6">
                <div class="consumer-phone">
                    <div class="consumer">
                        消费者: 唐先生
                    </div>
                    <div class="phone-num">
                        联系电话: 18943433232
                    </div>
                </div>
                <div class="buy-data">
                    <div class="goods">
                        购买系列: <span>听风细雨</span>
                    </div>
                    <div class="date">
                       <span>2018-07-11 13:25:04</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
.sell-record {
  height: 100%;
  display: flex;
  flex-direction: column;
  .date-wrap {
    height: 37px;
    border-bottom: 1px solid #ccc;
    line-height: 37px;
    font-size: 12px;
    padding: 0 13px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.116);
    color:#353535;
    input {
      margin: 5px;
      width: 83px;
    }
    @media screen and (max-width: 330px) {
      input {
        margin: 0;
        width: 65px;
      }
      & {
        padding: 0 13px;
      }
    }
    @media screen and (min-width: 410px) {
      input {
        width: 100px !important;
      }
    }
    .button {
      position: absolute;
      right: 13px;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 43px;
      height: 20px;
      border-radius: 8px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      background: linear-gradient(to bottom, #ecb678, #c59a68);
    }
  }
  ul {
    flex: 1;
    li {
      padding: 18px 13px 18px 13px;
      height: 38px;
      display: flex;
      border-bottom: 1px solid #e9e9e9;
      .buy-data {
        margin-left:20px;
        width: 150px;
        .goods,
        .date {
          text-align: right;
        }
        .goods {
            color:#353535;
            span {
                color:#c59a68;
            }
        }
        .date {
            margin-top: 10px !important;
            span {
                display: block;
                font-size: 20px !important;
                color:#8e8e8e;
                transform: scale(0.5);
                float: left;
            }
        }
      }
      .consumer-phone {
        flex: 1;
        color:#353535;
      }
      .consumer-phone,
      .buy-data {
        font-size: 14px;
        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        div:nth-of-type(2) {
          margin-top: 13px;
        }
      }
    }
  }
}
</style>

