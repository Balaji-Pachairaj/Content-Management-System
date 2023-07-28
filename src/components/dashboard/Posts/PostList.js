import React from "react";
import IndivPost from "./IndivPost";

const obj = {
     name: "Lorem ipsum dolor sit amet, consectetur",
     id: "asdffdsa ",
     overall: "Rachel Hubrecht",
     comments: "10000",
     date: {
          day: "24",
          month: "04",
          year: "2003",
     },
     category: "Sports",
     status: "Published",
};

const PostList = () => {
    // data have to be fetched from backend 
     return (
          <div className=" flex w-full h-max flex-col">
               <IndivPost postData={obj} />
               <IndivPost postData={obj} />
               <IndivPost postData={obj} />
               <IndivPost postData={obj} />
               <IndivPost postData={obj} />
               <IndivPost postData={obj} />
          </div>
     );
};

export default PostList;
