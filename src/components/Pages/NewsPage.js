import React from "react";
import Categories from "../atoms/Categories";
import NewsList from "../atoms/NewsList";

const NewsPage = ({match}) => {
    const category = match.params.category || 'all';

    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    );
}

export default NewsPage;