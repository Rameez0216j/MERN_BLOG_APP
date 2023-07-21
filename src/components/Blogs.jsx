import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
    const { posts, loading } = useContext(AppContext);

    return (
        <div className="flex flex-col gap-y-10 my-4 items-center">
            {loading ? (
                <div className="min-h-[80vh] flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">Loading</p>
                </div>
            ) : posts.length === 0 ? (
                <div className="min-h-[80vh] flex justify-center items-center">
                    <p className="text-center font-bold text-3xl">
                        No Blogs Found !
                    </p>
                </div>
            ) : (
              <div className="w-11/12 mt-[50px] mb-[50px]">
                {
                  posts.map((post) => <BlogDetails key={post.id} post={post} />)
                }
              </div>
            )}
        </div>
    );
}
