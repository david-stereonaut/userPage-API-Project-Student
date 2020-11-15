//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getData() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: (data) => {
                this.data.user = data.results[0]
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })

        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: (data) => {
                this.data.quote = data.quote
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })

        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}/`,
            success: (data) => {
                this.data.pokemon = data
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })

        $.ajax({
            method: "GET",
            url: "https://baconipsum.com/api/?type=meat-and-filler",
            success: (data) => {
                this.data.meat = data[0]
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })

        $.ajax({
            url: 'https://randomuser.me/api/?results=6',
            dataType: 'json',
            success: (data) => {
                let friendArr = []
                data.results.forEach(r => friendArr.push({ name: `${r.name.first} ${r.name.last}`}))
                this.data.friends = friendArr
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }
}
