<template>
    <!-- 根div -->
    <div class="login_container">
        <!-- 登录表单 -->
        <div class="login_form">
            <h3 class="title">网站登录</h3>
            <el-form ref="formRef" :model="loginForm" label-width="auto"> 
                <!-- 用户名 -->
                <el-form-item>
                    <el-input v-model="loginForm.username" placeholder="请输入账号">
                        <template #prefix>
                            <el-icon class="el-input__icon"><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item>
                    <el-input v-model="loginForm.password" type="password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon class="el-input__icon"><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 记住我和忘记密码 --> 
                 <div class="rememberMe">
                    <el-checkbox v-model="loginForm.rememberMe" label="记住我" size="large" />
                    <el-text class="forgetPassword" type="primary">忘记密码？</el-text>
                 </div>
                <!-- 按钮 -->
                <el-button style="width: 100%;" type="primary" @click="handleLogin">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup>
    // 导入ref
    import { ref } from 'vue'
    //导入login
    import { login } from '@/api/auth/index.js'
    //导入token的工具类
    import { setToken } from '@/utils/token';
    //声明表单绑定的值
    //引入router
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const loginForm = ref({
        username: '',
        password: ''
    })

    // 声明登录方法
    function handleLogin(){
        //调用login方法
        login(loginForm.data).then((res) => {
            console.log("发送登录请求");
            if(res.status == 200){
                // 将token存储到本地缓存中
                setToken("token",res.data.data.token)
                // 然后进行重定向
                router.push("/index");
            }
        })
    };
</script>

<style lang="scss" scoped>
.login_container{
    //背景图
    background-image: url("../assets/bgimg/1.jpg");
    background-size: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    .login_form{
        display: flex;
        justify-content: center;
        align-items: center;
        // 设置换行
        flex-direction: column;
        width: 50%;
        border-color: white;
        .title{
            margin-bottom: 20px;
        }
        .rememberMe{
            display: flex;
            justify-content: space-between;
            align-items: center;

            .forgetPassword{
                cursor: pointer;
            }
        }
    }

}
</style>