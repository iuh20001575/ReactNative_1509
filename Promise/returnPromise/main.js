new Promise((res) => res(1))
    .then((data) => new Promise((res) => res(data + 1)))
    .then((data) => console.log(data))
    .then(() => console.log('Chain promise'));
