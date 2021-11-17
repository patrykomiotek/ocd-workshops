import { useState, useEffect } from 'react';

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
  useEffect(() => {
    fetch("https://api.airtable.com/v0/appqZMgZSoWjM7Lgs/posts?view=default", {
      headers: {
        Authorization: "Bearer key7v1yhHtBnsJkfD"
      }
    })
    .then(response => response.json())
    .then(data => setPosts(data.records));
  }, []);
  return (
    <div>
      <h1>My awesome blog</h1>
      <hr />
      {posts.map((elem) => (
        <BlogTile key={elem.id} alamaMaKota={elem.fields} />
      ))}
    </div>
  );
}

export { Blog };
