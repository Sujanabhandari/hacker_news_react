import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import SearchBar from "./SearchBar";
import Page from './Pagination'

function HackerNewsPosts({ posts, count }) {
  // Loading Spinner
  // if (posts.length === 0) {
  //   // return <div><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" /></div>;
  //   return <div className="text-center mt-3"><img src={require('./404page.png')} /></div>;
  // }

  return (
    <>
    <div className="justify-content-center"><h2 className="text-center m-2">Hacker News - Top {count} Posts</h2></div>
      <table>
        <tbody>
        {posts.map((post, index) => {
          return (
            <tr key={post.id}>
              <td>
              {index+1}. <strong><a href={post.url}>{post.title}</a></strong> <br />
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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

    //Get current post 
  const indexOfLastPost =  currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)


  return (
    <div className="Container Posts">
      <SearchBar post={posts} setPosts={setPosts}/>
      <HackerNewsPosts posts={posts} count={count}/>
      <div className="text-center m-2">
        <button variant="dark" onClick={() => setCount((prev) => prev + 10 )}>Load more Posts</button>
      </div>
      <Page/>
    </div>
  );
}

export default FetchApi;
