// Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
}
wait(3000).then(() => console.log('monkey'));
wait(1000).then(() => console.log('banana'));
console.log("Hello");

const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${githubPAT}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};
lastCommit("danielfryar");