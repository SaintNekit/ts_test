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
    const name = getUser(el.username);
    const post = getPosts(el.mail);
    const users = new User(`${name}`, [`${post}`]);
    users.post.push(addPosts('A eto napisal ya'));
    console.log(users)
  }));
}

getData('https://jsonplaceholder.typicode.com/users');
