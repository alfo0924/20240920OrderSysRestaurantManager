const Register = {
    template: `
    <div class="auth-container">
        <h2>註冊</h2>
        <form @submit.prevent="register">
            <input v-model="username" type="text" placeholder="用戶名" required>
            <input v-model="email" type="email" placeholder="電子郵件" required>
            <input v-model="password" type="password" placeholder="密碼" required>
            <select v-model="role" required>
                <option value="">請選擇角色</option>
                <option value="ROLE_RESTAURANT_MANAGER">餐廳管理者</option>
                <option value="ROLE_RESTAURANT_STAFF">餐廳員工</option>
            </select>
            <button type="submit">註冊</button>
        </form>
        <p><a href="#" @click="$emit('switch-to-login')">返回登入</a></p>
    </div>
    `,
    data() {
        return {
            username: '',
            email: '',
            password: '',
            role: ''
        }
    },
    methods: {
        register() {
            axios.post('/api/users/register', {
                username: this.username,
                email: this.email,
                password: this.password,
                role: this.role
            })
                .then(response => {
                    alert('註冊成功');
                    this.$emit('switch-to-login');
                })
                .catch(error => {
                    alert('註冊失敗: ' + error.response.data);
                });
        }
    }
};
