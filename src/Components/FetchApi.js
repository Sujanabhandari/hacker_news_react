import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function HackerNewsPosts({ posts, count }) {
  // Loading Spinner
  if (posts.length === 0) {
    return <div><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" /></div>;
  }

  return (
    <>
    <h1>Hacker News - Top {count} Posts</h1>
      <table>
        <tbody>
        {posts.map((post, index) => {
          return (
            <tr key={post.id}>
              <td>
              {index+1}. <a href={post.url}>{post.title}</a> <br />
              {post.score} points by {post.by} {post.time} | hide | {post.descendants}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}

function FetchApi() {;
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(10);

  useEffect(() => {
    async function getTopStories() {

      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, count)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);

      } catch (err) {
        console.error(err);
      }
    }
    getTopStories();
  }, [count]);

  return (
    <div className="Container Posts">
      <HackerNewsPosts posts={posts} count={count}/>
      <button variant="dark" onClick={() => setCount((prev) => prev + 10 )}>Load more Posts</button>
    </div>
  );
}

export default FetchApi;
