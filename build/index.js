"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    cross_fetch_1.default(url).then(function (response) { return response.json(); }).then(function (data) { return data.map(function (el) {
        var name = getUser(el.username);
        var post = getPosts(el.mail);
        var users = new User("" + name, ["" + post]);
        users.post.push(addPosts('A eto napisal ya'));
        console.log(users);
    }); });
};
getData('https://jsonplaceholder.typicode.com/users');
