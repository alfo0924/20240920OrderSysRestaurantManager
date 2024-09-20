const Register = {
    template: `
    <div class="auth-container">
        <h2>註冊</h2>
        <form @submit.prevent="register">
            <input v-model="username" type="text" placeholder="用戶名" required>
            <input v-model="email" type="email" placeholder="電子郵件" required>
            <input v-model="password" type="password" placeholder="密碼" required>
            <button type="submit">註冊</button>
        </form>
        <p><a href="#" @click="$emit('switch-to-login')">返回登入</a></p>
    </div>
    `,
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            // 實現註冊邏輯
            console.log('註冊', this.username, this.email, this.password);
        }
    }
};