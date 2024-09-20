const Login = {
    template: `
    <div class="auth-container">
        <h2>登入</h2>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="用戶名" required>
            <input v-model="password" type="password" placeholder="密碼" required>
            <select v-model="role" required>
                <option value="">請選擇角色</option>
                <option value="ROLE_RESTAURANT_MANAGER">餐廳管理者</option>
                <option value="ROLE_RESTAURANT_STAFF">餐廳員工</option>
            </select>
            <button type="submit">登入</button>
        </form>
        <p>還沒有帳號? <a href="#" @click="$emit('switch-to-register')">註冊</a></p>
    </div>
    `,
    data() {
        return {
            username: '',
            password: '',
            role: ''
        }
    },
    methods: {
        login() {
            axios.post('/api/users/login', {
                username: this.username,
                password: this.password,
                role: this.role
            })
                .then(response => {
                    // 保存用戶信息和token
                    localStorage.setItem('user', JSON.stringify(response.data));
                    // 根據用戶角色跳轉到相應的儀表板
                    if (response.data.role === 'ROLE_RESTAURANT_MANAGER') {
                        this.$router.push('/manager-dashboard');
                    } else if (response.data.role === 'ROLE_RESTAURANT_STAFF') {
                        this.$router.push('/staff-dashboard');
                    }
                })
                .catch(error => {
                    console.error('登入失敗:', error);
                    alert('登入失敗: ' + (error.response ? error.response.data : '未知錯誤'));
                });
        }
    }
};