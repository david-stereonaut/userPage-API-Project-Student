
class Renderer {
    constructor() {
        this.userTemplate = Handlebars.compile($("#user-template").html())
        this.quoteTemplate = Handlebars.compile($("#quote-template").html())
        this.pokeTemplate = Handlebars.compile($("#pokemon-template").html())
        this.meatTemplate = Handlebars.compile($("#meat-template").html())
        this.friendsTemplate = Handlebars.compile($("#friends-template").html())
    }

    renderUser(data) {
        $(".user-container").empty()
        let userHTML = this.userTemplate({
            userImgUrl: data.user.picture.thumbnail,
            userName: `${data.user.name.first} ${data.user.name.last}`,
            userAddress: `${data.user.location.city}, ${data.user.location.state}`
        })
        $(".user-container").append(userHTML)
    }

    renderQuote(data) {
        $(".quote-container").empty()
        let quoteHTML = this.quoteTemplate({ quote: data.quote })
        $(".quote-container").append(quoteHTML)
    }

    renderPokemon(data) {
        $(".pokemon-container").empty()
        let pokeHTML = this.pokeTemplate({
            pokeURL: data.pokemon.sprites.front_shiny,
            pokemon: capitalize(data.pokemon.name)
        })
        $(".pokemon-container").append(pokeHTML)
    }

    renderMeat(data) {
        $(".meat-container").empty()
        let meatHTML = this.meatTemplate({ meatText: data.meat })
        $(".meat-container").append(meatHTML)
    }

    renderFriends(data) {
        $(".friends-container").empty()
        let friendsHTML = this.friendsTemplate(data)
        $(".friends-container").append(friendsHTML)
    }

    renderSavedList() {
        $("#saved-pages").empty()
        if (localStorage.savedUsers){
            for (let key in JSON.parse(localStorage.savedUsers)){
                $("#saved-pages").append(`<option value=${key}>${key.replace("-", " ")}</option>`)
            }
        }
    }

    render(data) {
        this.renderUser(data)
        this.renderQuote(data)
        this.renderPokemon(data)
        this.renderMeat(data)
        this.renderFriends(data)
        this.renderSavedList()
    }

    renderSaved(savedName) {
        let newData = JSON.parse(localStorage.savedUsers)
        this.render(newData[savedName])
    }
}