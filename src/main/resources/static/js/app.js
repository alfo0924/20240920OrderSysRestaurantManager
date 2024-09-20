const App = {
    template: `
    <div id="app">
        <component :is="currentView" @switch-to-register="currentView = 'register'" @switch-to-login="currentView = 'login'"></component>
    </div>
    `,
    data() {
        return {
            currentView: 'login'
        }
    },
    components: {
        'login': Login,
        'register': Register
    }
};