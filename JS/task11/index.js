// 10 JavaScript Exercises with fetch (Promises + Chaining)
//https://docs.google.com/document/d/115gyMYu1zcOHJercVbpxi7mUh93PVx_V-liLvhc_k5o/edit?usp=sharing

//חסר לי את 9+10

function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json());
}

getUser(1).then(user => {
    console.log(`User's name: ${user.name}`);
}).catch(err => console.log(err));


function getPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
}

getPost(1).then(post => {
    console.log(`Post title: ${post.title}`);
}).catch(err => console.log(err));

function getUserEmail(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json().then(user => user.email))
}

getUserEmail(1).then(email => {
    console.log(`User's email: ${email}`);
});

function listUserTodos(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        .then(res => res.json().then(user => user.length))
}

listUserTodos(1).then(todo => {
    console.log(`User 1 has ${todo} todos`);
});

function checkPostExists(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Post not found");
            }
            return response.json();
        })
        .then(() => "Post exists")
        .catch(() => "Post not found");
}

checkPostExists(101).then(result => {
    console.log(result);
});

function fetchWithDelay(url, delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    })
        .then(() => fetch(url))
        .then(response => response.text())
        .then(text => text.substring(0, 50));
}

fetchWithDelay("https://jsonplaceholder.typicode.com/posts/1", 3000)
    .then(result => {
        console.log(`First 50 chars: ${result}`);
    }
    );

function showKeys(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => Object.keys(data));
}

showKeys("https://jsonplaceholder.typicode.com/todos/1")
    .then(keys => {
        console.log("Keys:", keys);
    }
    );

function getUserFirstPost(userId){
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json());
    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(res=>res.json())
        .then(posts => posts[0]);
    Promise.all([userPromise, postPromise])
        .then(([user, firstPost]) => {
            console.log(`User: ${user.name}`);
            console.log(`First post title: ${firstPost.title}`);
        })
}

getUserFirstPost(1);

function getPostCommentsCount(postId){

}

function todoAndUser(todoId) {
     
}

