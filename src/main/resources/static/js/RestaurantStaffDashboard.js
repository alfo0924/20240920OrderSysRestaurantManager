const RestaurantStaffDashboard = {
    template: `
    <div class="dashboard">
        <h1>餐廳員工儀表板</h1>
        <div class="dashboard-content">
            <div class="dashboard-section">
                <h2>訂單處理</h2>
                <button @click="viewOrders">查看訂單</button>
                <button @click="processOrders">處理訂單</button>
            </div>
            <div class="dashboard-section">
                <h2>菜單查看</h2>
                <button @click="viewMenu">查看菜單</button>
            </div>
            <div class="dashboard-section">
                <h2>庫存查詢</h2>
                <button @click="checkInventory">查看庫存</button>
            </div>
        </div>
    </div>
    `,
    methods: {
        viewOrders() {
            console.log("查看訂單");
            // 實現查看訂單的邏輯
        },
        processOrders() {
            console.log("處理訂單");
            // 實現處理訂單的邏輯
        },
        viewMenu() {
            console.log("查看菜單");
            // 實現查看菜單的邏輯
        },
        checkInventory() {
            console.log("查看庫存");
            // 實現查看庫存的邏輯
        }
    }
};