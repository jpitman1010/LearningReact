// import React from 'react';

// const NewsList = (props) => {
    
//     console.log(props)

//     const news =    props.news.map((item) =>(
//         <div key={item.id}>
//             <h3>{item.title}</h3>
//            <div >
//                {item.feed}
//            //map is a fcn within React, allows you to loop through the dict object
//            </div>
//         </div>
//     )

//     )

//     return (
//         <>
//         { news }
//         </>
//     )
// }


// export default NewsList;


import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    
    console.log(props)

    const news = props.news.map((item) =>(
        <NewsItem item={item} key={item.id}/>
                       
    ))
    return (
        <>
        { news }
        </>
    )
}

export default NewsList;