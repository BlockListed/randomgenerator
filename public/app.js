const app = new Vue({
    el: "#app",
    data: {
        "min": "undefined",
        "max": "undefined",
        "rand": 0,
        "res": false
    },
    methods: {
        async getRand() {
            var resp = await fetch(`/api/rand?min=${this.min}&max=${this.max}`)
            var data = await resp.json()
            this.res = true
            this.rand = data.ran
        }
    }
})