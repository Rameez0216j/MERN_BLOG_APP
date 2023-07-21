import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (
        <div>
            <Header />
            <div className="mt-[100px] flex flex-row items-center gap-3">
                <button onClick={() => navigation(-1)} 
                    className="border-2 px-3 py-1 rounded-sm hover:bg-blue-600 hover:text-white"
                >Back</button>
                <h2>
                    Blogs Tagged with <span className="font-bold text-blue-600">#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    );
};

export default TagPage;
