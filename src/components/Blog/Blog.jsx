const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
     intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
   }
 ];

function Blog() {
  return (
    <div>
      {posts.map((elem) => {
        return (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.intro}</p>
          </div>
        );
      })}
    </div>
  );
}

export { Blog };
