import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [numberofPages, setNumberOfPages] = useState();
  const fecthFun = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setUsers(data);
    let pages = data?.length / 10;
    let pageArray = Array(pages).fill(1);
    setNumberOfPages(pageArray);
  };

  useEffect(() => {
    fecthFun();
  }, []);

  console.log("startpage=>", page * 10);

  return (
    <div className="App">
      {users?.slice(page * 10 - 10, page * 10)?.map((user, index, arr) => {
        return (
          <div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              {user?.userId}.. {user?.title}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: "10px" }}>
        <button type="button">Pre</button>
        {numberofPages?.map((page, index, arr) => {
          return (
            <button type="button" onClick={() => setPage(index + 1)}>
              {index + 1}
            </button>
          );
        })}
        <button type="button">Next</button>
      </div>
    </div>
  );
}
