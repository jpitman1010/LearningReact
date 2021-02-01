import React from 'react';
import NewsList from './news_list';



const NewsItem = ({item}) => {
    //change item to props and then use props.item.title etc... if you want to get more 
    //than just the item (like if there are more components, currently we only want to see item)
    
    return (
        <div className='news_item'>
            <h3>{item.title}</h3>
            <div>
                {item.feed}
            </div>
        </div>
    )
}

export default NewsItem;