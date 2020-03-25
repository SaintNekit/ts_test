// import { getFullName } from './function_list';
import fetch from 'cross-fetch';

class User {
  name: string;
  post: string[];
  constructor(theName: string, thePost: string[]) {
    this.name = theName;
    this.post = thePost;
  }
}

interface fetcher {
  (userName?: string, posts?: string);
};

const getUser: fetcher = (userName: string) : string => {
  return `User name is ${userName}`;
}

const getPosts: fetcher = (posts: string) : string => {
  return `He write about ${posts}`;
}

const addPosts = (post: string) : string => {
  return post;
}

const getData = (url: string) => {
  fetch(url).then(response => response.json()).then(data => data.map(el => {
    // console.log(`${getUser(el.username)} and ${getPosts(el.email)}`);
    const users = new User(`${getUser(el.username)}`, [`${getPosts(el.email)}`]);
    users.post.push(addPosts('A eto napisal ya'));
    // User.name = el.username;
    // User.posts = el.email;
    console.log(users)
  }));
}
// User.posts.push(addPosts('vsem zdarova'));
// User.posts.push(addPosts('kak krasivo'));
let a = getData('https://jsonplaceholder.typicode.com/users');
// console.log(User)
