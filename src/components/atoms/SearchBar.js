import React from "react";
import "../atoms/SearchBar.css"
import {BiSearchAlt2} from "react-icons/bi";

function SearchBar({onChange}) {
    return (
    <form className="search">
        <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="search_bar"
            name="searchText"
            onChange={onChange}
        />
        <input type="submit" value="검색" className="search_button"/>
    </form>
    );
}

export default SearchBar;