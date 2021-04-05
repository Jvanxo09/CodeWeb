var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue',
        sum: 3 + 6,
    }
    computed: {
        // a computed getter
        reversedMessage: function() {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
});