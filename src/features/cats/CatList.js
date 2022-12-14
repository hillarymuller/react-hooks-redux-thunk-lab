import React from 'react';

function CatList({ cats = [] }) {
    const catPics = cats.map((cat) => {
        return (<img key={cat.id} alt="cat" src={cat.url}></img>)
    });
    console.log(catPics);
    return (
        <div>
        {catPics}
        </div>
    )
}

export default CatList;