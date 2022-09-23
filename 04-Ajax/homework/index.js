function cleaContainers(){
    $("#lista").empty()
    $("#friend").empty()
}

function cleanInputs(){
    $("#input").val("")
    $("#inputDelete").val("")
}

function showFriends(){
    $.ajax({
        url: `http://localhost:5000/amigos`,
        type: "get",
        success: (info) => {
            info.forEach(function(friend){
                let ul = document.getElementById("lista")
                let newLi = document.createElement("li")
                newLi.innerHTML = `ID: ${friend.id} Nombre: ${friend.name}`
                newLi.id = friend.id
                ul.appendChild(newLi)
            })
        }
    })
}

function searchFriends(id){
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "get",
        success: (info)  => {
            $("#friend").append(`<p> ${info.name} </p>`)
            $("#friend").append(`<p> ${info.email} </p>`)
            cleanInputs()
            showFriends()
        },
        error: (error) => {
            if(error){
                alert("El id no existe")
                cleanInputs()
            }
        }
    })
}

function deleteFriend(id){
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "delete",
        success: (info)  => {
            alert("Amig@ eliminad@")
            cleanInputs()
            showFriends()
        },
        error: (error) => {
            if(error){
                alert("El id no existe")
                cleanInputs()
                showFriends()
            }
        }
    })
}

$("#boton").click( () => {
    cleaContainers()
    showFriends()
})

$("#search").click(() => {
    let id = $("#input").val()
    if(!id) return alert("el campo esta vacio")
    cleaContainers()
    searchFriends(id)   
})

$("#delete").click(() => {
    let id = $("#inputDelete").val()
    if(!id) return alert("el campo esta vacio")
    deleteFriend(id)
    cleanInputs()
    showFriends()
})