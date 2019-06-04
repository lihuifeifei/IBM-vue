<template>
        <div class="login_box">
            <div class="login_l_img"><img src="@/assets/images/login-img.png" /></div>
            <div class="login" style="background-color: #93defe">
                <div class="login_logo"><a href="#"><img src="@/assets/images/login_logo.png" /></a></div>
                <div class="login_name">
                    <p style="font-weight: bold;font-size: 25px">系统登录</p>
                </div>
                <form>
                    <input name="username" type="text" placeholder="用户名" v-model.lazy.trim="username">
                    <input name="password" type="password" id="password" placeholder="密码" v-model.lazy.trim="password"/>
                    <input value="登录" style="width:100%;" type="submit" @click="submitForm">
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <a style="display: block;float: right;font-size: 16px" >没有账号？点击<a style="color: red;cursor:pointer;font-size: 16px" @click="toRegister">注册</a>>>></a>
                </form>
            </div>
        </div>
</template>
<script>
    export default {
        data(){
            return{
                username:'',
                password:''
            }
        },
        methods:{
            submitForm(e){
                var  username = this.username;
                var  password = this.password;
                // 阻止页面刷新,取消默认行为
                e.preventDefault();

                if(!username){
                    this.$alert('请输入用户名','提示',{
                        confirmButtonText:'确定',
                        type:"warning",
                    });
                    return false;
                }

                if (username&&!password){
                    this.$alert('请输入密码','提示',{
                        confirmButtonText:'确定',
                        type:"warning",
                    });
                    return false;
                }


                console.log(`username:${username}`);
                console.log(`password:${password}`);

                var formData = new FormData();
                formData.append('username',this.username);
                formData.append('password',this.password);


                this.$axios.post('http://129.211.64.25:8090/login',
                    formData
                )
                    .then((res)=>{
                        console.log(res.data);
                        if (res.data.status == 200){
                            this.$message({
                                duration:1000,
                                showClose:true,
                                message:'登录成功',
                                type:'success'
                            });
                            this.$router.push({path: '/home'});
                        }else if(res.data.msg == 'error username'){
                           this.$confirm('用户名不存在，请先注册','提示',{
                               confirmButtonText:'确定',
                               cancelButtonText:'取消',
                               type:"warning",
                           })
                               .then(()=>{
                               this.$router.push({path:'/register'});
                           });

                        }else if(res.data.msg == 'error password'){
                            this.$alert('密码错误，请重新输入密码','提示',{
                                confirmButtonText:'确定',
                                type:"error",
                            });
                        }
                    })
                    .catch((error)=>{
                        console.log(error);
                    });
            },
            toRegister(){
                this.$router.push({path:'/register'});
            }
        }
    }

</script>

<style rel="stylesheet/scss"  scoped>
    /* CSS Document */

    * {
        font: 13px/1.5 '微软雅黑';
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    img {
        border: none;
    }

    .login_box {
        width: 1100px;
        margin: 120px auto 0;
    }

    .login_box .login_l_img {
        float: left;
        width: 432px;
        height: 440px;
        margin-left: 50px;
    }

    .login_box .login_l_img img {
        width: 500px;
        height: 440px;
    }

    .login {
        height: 400px;
        width: 400px;
        padding: 50px;
        background-color: #ffffff;
        border-radius: 6px;
        box-sizing: border-box;
        float: right;
        margin-right: 50px;
        position: relative;
        margin-top: 50px;
    }

    .login_logo {
        width: 120px;
        height: 120px;
        border: 5px solid #93defe;
        border-radius: 100px;
        background: #fff;
        text-align: center;
        line-height: 110px;
        position: absolute;
        top: -60px;
        right: 140px;
    }

    .login_name {
        width: 100%;
        float: left;
        text-align: center;
        margin-top: 20px;
    }

    .login_name p {
        width: 100%;
        text-align: center;
        font-size: 18px;
        color: #444;
        padding: 10px 0 20px;
    }

    .login_logo img {
        width: 60px;
        height: 60px;
        display: inline-block;
        vertical-align: middle;
    }

    input[type=text], input[type=file], input[type=password], input[type=email], select {
        border: 1px solid #DCDEE0;
        vertical-align: middle;
        border-radius: 3px;
        height: 50px;
        padding: 0px 16px;
        font-size: 14px;
        color: #555555;
        outline: none;
        width: 100%;
        margin-bottom: 15px;
        line-height: 50px;
        color: #888;
    }

    input[type=text]:focus, input[type=file]:focus, input[type=password]:focus, input[type=email]:focus, select:focus {
        border: 1px solid ;
    }

    input[type=submit], input[type=button] {
        display: inline-block;
        vertical-align: middle;
        padding: 12px 24px;
        margin: 0px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        color: #ffffff;
        background-color: #27A9E3;
        border-radius: 3px;
        border: none;
        -webkit-appearance: none;
        outline: none;
        width: 100%;
    }

    #password_text {
        border: 1px solid #DCDEE0;
        vertical-align: middle;
        border-radius: 3px;
        height: 50px;
        padding: 0px 16px;
        font-size: 14px;
        color: #888;
        outline: none;
        width: 100%;
        margin-bottom: 15px;
        display: block;
        line-height: 50px;
    }
</style>