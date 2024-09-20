const Login = {
    template: `
    <div class="auth-container">
        <h2>登入</h2>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="用戶名" required>
            <input v-model="password" type="password" placeholder="密碼" required>
            <button type="submit">登入</button>
        </form>
        <p>還沒有帳號? <a href="#" @click="$emit('switch-to-register')">註冊</a></p>
    </div>
    `,
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            // 實現登入邏輯
            console.log('登入', this.username, this.password);
        }
    }
};