<template>
    <div class="login">
        <header class="header">
            <img src="/static/img/logo.png" alt="">
        </header>
        <div class="login-main">
            <div class="login-box">
                <div class="login-title">核销端</div>
                <div class="login-control">
                    <div class="user-id">
                        <span class="icon">
                            <img src="/static/img/账号@2x.png" alt="">
                        </span>
                        <input type="text" v-model="id" placeholder="请输入管理员账号">
                    </div>
                    <div class="user-pw">
                        <span class="icon">
                            <img src="/static/img/密码@2x.png" alt="">
                        </span>
                        <input type="password" v-model="ps" placeholder="请输入管理员密码">
                    </div>
                    <div class="login-btn" @click="login">登录</div>
                </div>
            </div>
        </div>
        <div class="login-error">
            <v-loginError></v-loginError>
        </div>
    </div>
</template>
<script>
import router from '../router/index'
import axios from 'axios'
import loginError from '../plugin/loginError'
export default {
    data() {
        return {
            id: '',
            ps: '',
            userInfo: null
        }
    },
    methods: {
        login() {
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                let account = this.id
                let passWord = this.ps
                axios.post('/user/loginByEmployee',{
                    account,
                    passWord
                }).then((res) => {
                    //有数据的话进行跳转，没有的话弹出弹框
                    if(res.data.code === 0) {
                        router.push({
                            name: 'sellMod',
                            // params: {
                            //     shopName
                            // }
                        })
                    }else if(res.data.code === 1) {

                    }
                })
            }, 250);
        }
    },
    components: {
        'v-loginError':loginError 
    }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url("/static/img/背景@2x.png");
  background-size: cover;
  .header {
    margin-top: 72px;
    img {
      display: block;
      margin: 0 auto;
      width: 340px;
    }
  }
  .login-main {
    flex-grow: 1;
    position: relative;
    .login-box {
      position: absolute;
      width: 230px;
      left: 50%;
      margin-top: 40px;
      transform: translateX(-50%);
      .login-title {
        margin: 0 auto;
        font-size: 20px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        width: 150px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background: #fff;
      }
      .login-control {
        background: #fff;
        border-radius: 15px;
        width: 100%;
        height: 165px;
        padding: 20px 25px 0 25px;
        box-sizing: border-box;
        .user-id,
        .user-pw {
          height: 30px;
          width: 100%;
          position: relative;
          border-bottom: 1px solid #ccc;
          .icon {
            position: absolute;
            display: inline-block;
            top: 7px;
            width: 18px;
            height: 18px;
            img {
              height: 100%;
            }
          }
          input {
            margin-top: 5px;
            height: 23px;
            width: 100%;
            padding-left: 28px;
            box-sizing: border-box;
            border: 0;
            outline: none;
            color: #8e8e8e;
          }
        }
        .user-pw {
          margin-top: 10px;
        }
        .login-btn {
          margin: 0 auto;
          margin-top: 15px;
          width: 148px;
          height: 37px;
          text-align: center;
          line-height: 37px;
          border-radius: 10px;
          background: linear-gradient(to bottom, #eab578, #c79c69);
          color:#fff;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
