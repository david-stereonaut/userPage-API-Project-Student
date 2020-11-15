const apiManager = new APIManager
const renderer = new Renderer


const capitalize = function(str) {
    return str[0].toUpperCase() + str.slice(1)
}

$("#load-api-btn").on("click", function() {
    apiManager.getData()
})

$("#display-btn").on("click", function() {
    renderer.render(apiManager.data)
})

$("#save-page").on("click", function() {
    let saveName = `${apiManager.data.user.name.first}-${apiManager.data.user.name.last}`
    let savedUsers = {}
    if (localStorage.savedUsers){
        savedUsers = JSON.parse(localStorage.savedUsers)
        savedUsers[saveName] = apiManager.data
        localStorage.savedUsers = JSON.stringify(savedUsers)
    } else {
        savedUsers[saveName] = apiManager.data
        localStorage.savedUsers = JSON.stringify(savedUsers)
    }
    renderer.renderSavedList()
})

$("#load-page").on("click", function() {
    renderer.renderSaved($("#saved-pages").val())
})