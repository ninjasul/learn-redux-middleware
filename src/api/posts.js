const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));

const posts = [
    {
        id: 1,
        title: 'redux-middleware',
        body: 'redux-middleware-body'
    },
    {
        id: 2,
        title: 'redux-thunk',
        body: 'redux-thunk-body'
    },
    {
        id: 3,
        title: 'redux-saga',
        body: 'redux-saga-body'
    },
];

export function getPosts() {
    sleep(500);
    return posts;
}

export function getPostById (id) {
    sleep(500);
    return posts.map(post => post.id === id);
}