import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
    return (
        <div className="filter">
            <h2>Filter Movies</h2>
            <div className="filter-inputs">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={titleFilter}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min rating"
                    min="0"
                    max="10"
                    step="0.5"
                    value={ratingFilter}
                    onChange={(e) => onRatingChange(parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Filter;