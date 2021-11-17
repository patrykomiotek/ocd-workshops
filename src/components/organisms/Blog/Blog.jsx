import { useState, useEffect } from 'react';

import { fetchPosts } from 'services/posts';
// const posts = [
//   { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
//   { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
//   { id: 3, title: 'Adam Małysz Zgolił wąs',
//      intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
//    }
//  ];

// const func = () => ({ a: 5 })
// const func = () => { 
//   return { a: 5 };
// };
function BlogTile(props) {
  const { alamaMaKota } = props;
  return (
    <div>
      <h2>{alamaMaKota.title}</h2>
      <p>{alamaMaKota.intro}</p>
    </div>
  );
}

function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("")

  // Method 1
  // useEffect(() => {
  //   fetch("https://api.airtable.com/v0/appqZMgZSoWjM7Lgs/posts?view=default", {
  //     headers: {
  //       Authorization: "Bearer key7v1yhHtBnsJkfD"
  //     }
  //   })
  //   .then((response, error) => {
  //     if (error) {
  //       setError('Server fail');
  //     }
  //     response.json()
  //   }) // (response) => response.json(), (response, error) => response.json()
  //   .then((data, error) => {
  //     if (error) {
  //       setError('Server response format fail');
  //     }
  //     setPosts(data.records)
  //   })
  //   // .catch(error => console.error(error)) // catch for all Promises
  // }, []);
  // END: Method 1

  // Method 2
  // aync/await
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://api.airtable.com/v0/appqZMgZSoWjM7Lgs/posts?view=default", {
  //       headers: {
  //         Authorization: "Bearer key7v1yhHtBnsJkfD"
  //       }
  //     });

  //     const data = await response.json(); // Promise
  //     setPosts(data.records);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // END: Method 2

  // Method 3
  useEffect(() => {
    fetchPosts()
    .then(data => setPosts(data.records))
    .catch(() => setError("Try again later"))
  }, []);
  // END: Method 3

  // useEffect(() => {
  //   // body

  //   return () => Pomise
  // }, []);

  return (
    <div>
      <h1>My awesome blog</h1>
      <hr />
      {error && <p>{error}</p>}
      {posts.map((elem) => (
        <BlogTile key={elem.id} alamaMaKota={elem.fields} />
      ))}
    </div>
  );
}

export { Blog };
