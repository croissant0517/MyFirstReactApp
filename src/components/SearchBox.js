import React, { useState } from "react";

function SearchBox(props) {
    const [searchState, setSearchState] = useState("");

    function handelChange(e) {
        setSearchState(e.target.value);
        props.onSearch(e.target.value);
    }
    return(
        <div className="pa2">
            <input
                onChange={handelChange}
                value={searchState}
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Robo" 
            />

        </div>
        
    );
}

export default SearchBox;