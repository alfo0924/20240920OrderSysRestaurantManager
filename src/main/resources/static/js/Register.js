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
        <p v-if="message" :class="{ 'error': isError }">{{ message }}</p>
    </div>
    `,
    data() {
        return {
            username: '',
            email: '',
            password: '',
            role: '',
            message: '',
            isError: false
        }
    },
    methods: {
        register() {
            this.message = '';
            this.isError = false;

            console.log('Attempting to register with:', { username: this.username, email: this.email, role: this.role });

            axios.post('/api/users/register', {
                username: this.username,
                email: this.email,
                password: this.password,
                role: this.role
            })
                .then(response => {
                    console.log('Registration successful:', response.data);
                    this.message = '註冊成功';
                    setTimeout(() => {
                        this.$emit('switch-to-login');
                    }, 2000);
                })
                .catch(error => {
                    console.error('Registration failed:', error);
                    this.isError = true;
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        this.message = '註冊失敗: ' + error.response.data;
                        console.error('Error data:', error.response.data);
                        console.error('Error status:', error.response.status);
                        console.error('Error headers:', error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        this.message = '註冊失敗: 無法連接到伺服器';
                        console.error('Error request:', error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        this.message = '註冊失敗: ' + error.message;
                        console.error('Error message:', error.message);
                    }
                });
        }
    }
};