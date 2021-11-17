// function sum(a, b) {
//   return a + b;
// }
// sum(1, 2) -> 3
// sum("2", 2) -> "22"

const apiBaseUrl = "https://api.airtable.com/v0/appqZMgZSoWjM7Lgs";

export const apiConfig = {
  postsList: `${apiBaseUrl}/posts?view=default`,
  postsDetail: (id) => `${apiBaseUrl}/posts/${id}`,
}

export const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
};

// apiConfig.postsList -> https://api.airtable.com/v0/appqZMgZSoWjM7Lgs/posts?view=default
// apiConfig.postsDetail("abc") -> https://api.airtable.com/v0/appqZMgZSoWjM7Lgs/posts/abc