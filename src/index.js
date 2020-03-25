"use strict";
exports.__esModule = true;
// import { getFullName } from './function_list';
var cross_fetch_1 = require("cross-fetch");
var User = /** @class */ (function () {
    function User(theName, thePost) {
        this.name = theName;
        this.post = thePost;
    }
    return User;
}());
;
var getUser = function (userName) {
    return "User name is " + userName;
};
var getPosts = function (posts) {
    return "He write about " + posts;
};
var addPosts = function (post) {
    return post;
};
var getData = function (url) {
    cross_fetch_1["default"](url).then(function (response) { return response.json(); }).then(function (data) { return data.map(function (el) {
        // console.log(`${getUser(el.username)} and ${getPosts(el.email)}`);
        var users = new User("" + getUser(el.username), ["" + getPosts(el.email)]);
        users.post.push(addPosts('A eto napisal ya'));
        // User.name = el.username;
        // User.posts = el.email;
        console.log(users);
    }); });
};
// User.posts.push(addPosts('vsem zdarova'));
// User.posts.push(addPosts('kak krasivo'));
var a = getData('https://jsonplaceholder.typicode.com/users');
// console.log(User)
