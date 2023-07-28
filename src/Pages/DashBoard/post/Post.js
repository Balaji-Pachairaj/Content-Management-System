import React from "react";

import BlogTemplate from "../../../components/dashboard/template/BlogTemplate";
import PostHeader from "../../../components/dashboard/Posts/PostHeader";
import ListHeader from "../../../components/dashboard/Posts/ListHeader";

const Post = () => {
     return (
          <BlogTemplate>
               <div className="flex flex-col">
                    <PostHeader />
                    <div className=" flex flex-col ">
                         <ListHeader />
                    
                    </div>
               </div>
          </BlogTemplate>
     );
};

export default Post;
