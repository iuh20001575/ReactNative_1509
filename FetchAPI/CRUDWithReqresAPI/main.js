const ENDPOINT = 'https://reqres.in/api';

const getUser = (id) => {
    const xhr = new XMLHttpRequest();
    const url = `${ENDPOINT}/users/${id}`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        const user = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == '200') {
            console.log(user.data);
        } else {
            console.error(user);
        }
    };

    xhr.send(null);
};

// getUser(2);

const getUsers = (page) => {
    const xhr = new XMLHttpRequest();
    const url = `${ENDPOINT}/users?page=${page}`;

    xhr.open('GET', url, true);

    xhr.onload = function () {
        const user = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == '200') {
            console.table(user.data);
        } else {
            console.error(user);
        }
    };

    xhr.send(null);
};

// getUsers(1);

const postUser = (data) => {
    const url = `${ENDPOINT}/users`;

    const json = JSON.stringify(data);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onload = function () {
        const user = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == '201') {
            console.log(user);
        } else {
            console.error(user);
        }
    };

    xhr.send(json);
};

// postUser({
//     name: 'Hà Anh Thảo',
//     job: 'Web Dev',
// });

const putUser = (id, data) => {
    const url = `${ENDPOINT}/users/${id}`;
    const json = JSON.stringify(data);
    const xhr = new XMLHttpRequest();

    xhr.open('PUT', url, true);

    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');

    xhr.onload = function () {
        const user = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == '200') {
            console.log(user);
        } else {
            console.error(user);
        }
    };

    xhr.send(json);
};

// putUser(2, {
//     name: 'Morpheus',
//     job: 'Fullstack Developer',
// });

const patchUser = (id, data) => {
    const url = `${ENDPOINT}/users/${id}`;
    const json = JSON.stringify(data);
    const xhr = new XMLHttpRequest();

    xhr.open('PATCH', url, true);

    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');

    xhr.onload = function () {
        const user = JSON.parse(xhr.responseText);

        if (xhr.readyState == 4 && xhr.status == '200') {
            console.log(user);
        } else {
            console.error(user);
        }
    };

    xhr.send(json);
};

// patchUser(2, {
//     job: 'Backend Developer',
// });

const deleteUser = (id) => {
    const url = `${ENDPOINT}/users/${id}`;
    const xhr = new XMLHttpRequest();

    xhr.open('DELETE', url, true);

    xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == '204') {
            console.log('Delete user successfully!');
        } else {
            console.error('Delete user fail.');
        }
    };

    xhr.send();
};

// deleteUser(2);
