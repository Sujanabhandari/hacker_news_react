import React from "react";
// import { Link } from "react-router-dom";
import "../Styles/navbar.css";
const NavBar = () => {
  return (
    <div className="NavBar">
      <table>
        <tr>
          <td className="Y">Y</td>
          <td className="hacker_news">Hacker News</td>
          <td className="new">new</td>
          <td>past |</td>
          <td>comments |</td>
          <td>ask |</td>
          <td>show |</td>
          <td>jobs |</td>
          <td>submit</td>
          <td className="login">login</td>
        </tr>
      </table>
    </div>
  );
};
export default NavBar;
