mock = [{
    "id": 1,
    "by": {
        "userId": 20004,
        "name": "Eboldas"
    },
    "dateCreated": "12-07-2022T1200",
    "content": {
        "text": "some post text"
    }
}]

window.onload = function () {
    mock.forEach(renderPost)
};

function renderPost(post) {
    let posts = document.getElementById("postwindow");
    let div = document.createElement("div");
    let logo = document.createElement("h1");
    logo.innerHTML = '<a class="logo"><img src="Favicon.ico" width="32" height="32" alt=""></a>';
    let h2 = document.createElement("h2"); //date
    let p = document.createElement("p"); //text
    p.innerText = post.content.text
    //add damn pictures here
    let date = new Date(post.dateCreated.split('T')[0]);

    let date2 = date.toLocaleString('en-UK', { day : "2-digit", month: 'short', year: 'numeric'})

    h2.innerText = date2

    div.appendChild(logo)
    div.appendChild(h2)
    div.appendChild(p)
    posts.appendChild(div)
}