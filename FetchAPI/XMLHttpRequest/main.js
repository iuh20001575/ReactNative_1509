const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchAPI = url => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = function() {
        const users = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }

    xhr.send(null);
}

// fetchAPI(url)

const postAPI = data => {
    var url = 'https://jsonplaceholder.typicode.com/posts';

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = function() {
        var users = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
        } else {
            console.error(users);
        }
    }

    xhr.send(json)
}

// postAPI({
//     "userId": 7,
//     "id": 101,
//     "title": "This is my title",
//     "body": "Lap trinh mobile voi ReactNative"
// })

const putPost = (id, data) => {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();

    xhr.open("PUT", url + `/${id}`, true);

    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');

    xhr.onload = function() {
        var users = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }

    }

    xhr.send(json);
}

// putPost(1, {
//     "userId": 7,
//     "id": 1,
//     "title": "This is my new title",
//     "body": "Lap trinh mobile voi ReactNative"
// })

const deletePost = (id) => {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open("DELETE", url + `/${id}`, true);

    xhr.onload = function() {
        var users = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log("Delete post successfully!");
        } else {
            console.error("Delete post fail.");
        }

    }

    xhr.send(null);
}

deletePost(1)