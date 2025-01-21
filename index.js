const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainer = document.getElementById("posts")

if(posts){
    renderPosts(posts)
}

function renderPosts(posts){
    let postsHTML = ""
    for(let [id,post] of posts.entries()){
        postsHTML += `
        <div class="container mb-10">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.name}" class="avartar">
                <div class="user-info">
                    <p class="name">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <div class="post-image">
                <img ondblclick="addlike(${id})" src="${post.post}" alt="post-image" class="post">
            </div>
            <div class="post-footer">
                <i onclick="addlike(${id})"  class="fa-regular fa-heart icon" id="heart-icon"></i>
                <i class="fa-regular fa-comment icon"></i>
                <i class="fa-regular fa-paper-plane icon"></i>
                <p class="post-likes"><span>${post.likes}</span> likes</p>
                <p><span class="username">${post.username}</span>${post.comment}</p>
            </div>
        </div>
        `
    }
    postsContainer.innerHTML = postsHTML
}

function addlike(id){
    posts[id].likes++
    renderPosts(posts)  
}
