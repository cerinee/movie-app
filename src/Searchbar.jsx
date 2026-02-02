import React, { useState } from "react";

function Searchbar() {
    const array = ["Analytics Pro (Software)", "Data Hub (hardware)", "Insight Tool (Software)",];

    const [filteredArray, setFilteredArray] = useState(array);

    const filter = (elm) => {
        const query = elm.target.value.toLowerCase();
        const filtered = array.filter((item) =>
            item.toLowerCase().startsWith(query)
        );

        setFilteredArray(filtered);
    };

    return (
        <div className="container">
            <input
                type="text" onChange={filter} placeholder="Search..."/>
                <ul>
                    {filteredArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
        </div>
    );
}

export default Searchbar;
