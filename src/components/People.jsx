import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

const People = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    const fetching = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetching.json();
    setUsers(res);
  };

  const fetchMoreUser = async () => {
    const fetching = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await fetching.json();
    setUsers(res.concat(users));
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
      <div className="flex flex-wrap ">
        <InfiniteScroll
          dataLength={users.length} //This is important field to render the next data
          next={fetchMoreUser}
          hasMore={true}
          loader={
            <div className="flex justify-center">
              <Loading />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap ">
            {users.map((user) => {
              return (
                <div className="border mx-3 px-6 mb-10  py-4" key={user.id}>
                  <img
                    className="h-20 mx-auto"
                    loading="lazy"
                    src={`https://avatars.dicebear.com/api/human/${Math.floor(
                      Math.random() * 90000
                    )}.svg`}
                    alt="avatar"
                  />
                  <div>
                    <h1>Name: {user.name}</h1>
                    <p>UserName: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                    <p>Phone number: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default People;
