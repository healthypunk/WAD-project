mock = [{
    "id": 1,
    "by":{
      "userId": 20004,
      "name": "Evaldas"
    },
    "dateCreated": "2022-10-25T12:00:00+2:00",
    "content": [
      {
        "type": "pic",
        "value": "pics/pen.jpg"
      },
      {
        "type": "text",
        "value": "Who left a pen in the audience?"
      }
    ]
  }]

window.onload = function () {
    mock.forEach(renderPost)
};

function renderPost(post) {
    let posts = document.getElementById("postwindow");
    let div = document.createElement("div");
    let logo = document.createElement("h1");
    logo.innerHTML = '<a class="logo"><img src="pics/ico.png" width="32" height="32" alt=""></a>';
    let h2 = document.createElement("h2"); //date
    let p = document.createElement("p"); //text
    let a = document.createElement("a")
    a.className = 'pic1'
    let img = document.createElement("img")
    // p.innerText = post.content.text
    let date = new Date(post.dateCreated.split('T')[0]);
    let date2 = date.toLocaleString('en-UK', { day : "2-digit", month: 'short', year: 'numeric'})
    //console.log(post.content)
    for (let object of post.content){
        if (object.type == "pic"){
            img.src = object.value
            img.style.width = "445px"
            img.style.length = "280px"
            a.appendChild(img)

        }
        if (object.type == "text"){
            p.innerText = object.value
        }
    }
    h2.innerText = date2

    div.appendChild(logo)
    div.appendChild(h2)
    div.appendChild(a)
    div.appendChild(p)
    posts.appendChild(div)
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// var drop_img = document.getElementById("pics/ico.png");
// drop_img.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }