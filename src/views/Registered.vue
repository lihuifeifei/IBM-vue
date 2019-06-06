<template>
    <div class="main" style="background-color: #CCFFFF">
        <div class="login" style="background-color: #CCCCFF">
            <div class="login_logo"><a href="#"><img src="@/assets/images/login_logo.png" /></a></div>
            <div class="login_name">
                <p style="font-size: 25px;font-weight: bold">系统注册</p>
            </div>
            <form>
                <input name="username" type="text" placeholder="用户名"  v-model.lazy.trim="username">
                <input name="password" type="password" id="password1" placeholder="密码" v-model.lazy.trim="password1"/>
                <input name="password" type="password" id="password2" placeholder="确认密码" v-model.lazy.trim="password2"/>
                <input value="注册" style="width:100%;" type="submit" @click="submitForm">
                <hr/>
                <a style="display: block;float: right;" >已有账号，点击<span style="color: red;cursor:pointer" @click="toLogin" >登录</span>>>></a>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username:'',
                password1:'',
                password2:'',
            };
        },
        methods: {
            submitForm(e){
                var username = this.username;
                var password1 = this.password1;
                var password2 = this.password2;

                // 阻止页面刷新,取消默认行为
                e.preventDefault();
                //验证表单信息
                if(!(username&&password1&&password2)){
                    this.$alert('请输入完整信息','提示',{
                        confirmButtonText:'确定',
                        type:"warning",
                    });
                    return false;
                }
                if(!(password1 == password2)){
                    this.$alert('两次密码不一致，请重新输入','提示',{
                        confirmButtonText:'确定',
                        type:"error",
                    });
                    return false;
                }
                // 显示loading动画
                let loader = this.$loading.show({
                    // 动画参数配置
                    loader:'bars',
                    width:120,
                    height:80,
                    color:'#ff2121',
                    opacity:0.5,
                });
                var formData = new FormData();
                formData.append('username',this.username);
                formData.append('password',this.password2);

                this.$axios.post('/register',
                    formData
                )
                    .then((res)=>{
                        console.log(res);
                        //根据返回数据，给出不同的反应
                        if(res.data.status == 200){
                            this.$message({
                                duration:2000,
                                showClose:true,
                                message:'注册成功,请登录',
                                type:'success'
                            });
                            //隐藏loading动画
                            loader.hide();
                            this.$router.push({path: '/login'});
                        }else if(res.data.msg == 'error'){
                            this.$confirm('用户名已存在，请重新注册','提示',{
                                confirmButtonText:'确定',
                                cancelButtonText:'取消',
                                type:"error",
                            });
                            //隐藏loading动画
                            loader.hide();
                        }
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },
            toLogin(){
                this.$router.push({path:'/login'});
            }
        }
    }
</script>
<style rel="stylesheet/scss"  scoped>
    .login {
        height: 480px;
        width: 400px;
        padding: 50px;
        background-color: #ffffff;
        border-radius: 10px;
        box-sizing: border-box;
        margin: 0 auto;
        position: relative;
        margin-top: 70px;
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
        padding: 5px 0 10px;
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
        border-radius: 5px;
        height: 50px;
        padding: 0px 0px;
        font-size: 14px;
        color: #555555;
        outline: none;
        width: 100%;
        margin-bottom: 15px;
        line-height: 50px;
        text-align: center;
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

</style>