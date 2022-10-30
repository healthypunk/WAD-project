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

//window.onload = function () {
//    mock.forEach(renderPost)
//};

window.onload = function () {
    fetchLocal()
}

function fetchLocal() {
    const url = "./json/content.json"
    fetch(url)
        .then(res => {return res.json()})
        .then(json => {
            json.results.forEach(renderPost)
        })
        .catch(error => console.log(error))
}

function fetchRemote() {
    const url = "https://api.jsonbin.io/v3/b/635e7dcd0e6a79321e394afa"
    const masterKey = "$2b$10$G3PTuY1X1TSPRBY58WDJoO1ngDItsWQEnrTM.PGLhWawWCpz6YiRa"

    const params = {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            "X-MASTER-KEY": masterKey
        },
        method: "GET"
    }
    fetch(url, params)
        .then(result => {return result.json()})
        .then(res => {
            const posts = res.record.results
            posts.forEach(renderPost)
        })
        .catch(error => console.log(error))

}

function renderPost(post) {
    const posts = document.getElementById("postwindow");
    const div = document.createElement("div");
    const logo = document.createElement("h1");
    logo.innerHTML = '<a class="logo"><img src="pics/ico.png" width="32" height="32" alt=""></a>';
    const h2 = document.createElement("h2"); //date
    const p = document.createElement("p"); //text
    const a = document.createElement("a")
    a.className = 'pic1'
    const img = document.createElement("img")
    // p.innerText = post.content.text
    const date = new Date(post.dateCreated.split('T')[0]);
    const date2 = date.toLocaleString('en-UK', { day : "2-digit", month: 'short', year: 'numeric'})
    //console.log(post.content)
    for (let object of post.content){
        if (object.type === "pic"){
            img.src = object.value
            img.style.width = "445px"
            img.style.length = "280px"
            a.appendChild(img)

        }
        if (object.type === "text"){
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