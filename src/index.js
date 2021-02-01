// import React, { createElement } from 'react';

//starting with PROPS lession: add component into import instad of createElement
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
// to start app in browser, get into src folder for myapp and then type npm start into terminal
import Header from './components/header';
//after creating header.js can now import it as long as export statement in bottom of that file
//  import './styles/style.css'; if you wish to import from within components folder, but I preferred the import via link on html


import JSON from './styles/db.json';
//importing the json file to use the data
import NewsList from './components/news_list';
//importing the NewsList, also have to add tag below like we did with header

import Footer from './components/footer';


// const App = () => (
    // return(createElement('h1',{className:'title'}, React.createElement('div'))
    // return(
    //     <div>
    //         <h1>
    //             Hello
    //         </h1>
    //     </div>
        //in order to not get errors, must always return a single element
        //so if multiple h1 or h2 or things to return, wrap inside of a div
        //element and return that div wrapper
    
        // return(
        //         <div className="hey">
        //             //in jsx file you must not use class="blah" because it is not actually html
        //             //instead must use className= in place of class=
        //             <h1>
        //                 Hello
        //             </h1>
        //         </div>
    //    )

        // <React.Fragment>
        //     <h1>Hello</h1>
        //     <h2>hello</h2>
        // </React.Fragment>
        //React.Fragment allows for creating multiple elements without creating a surrounding div,
        

        //much like:
        // <>
        //     <h1>Hello</h1>
        //     <h2>hello</h2>
        // </>
        


        //once you  create and import header.js, you can now use this in the return statement of index
class App extends Component {

    state = {
        news: JSON,
        footerText: 'The footer has successfully been added to the state',
    }

    render(){
        console.log(this.state.news)
        //this will show you that you have indeed imported JSON file like you wanted.
        
        const {news, footerText} = this.state;
        //by creating this variable, you can not have to type this.state each time
        
        return(
            <>
                <Header/>
                <NewsList 
                    news={news}
                />
                <Footer footerText={footerText}/>
            </>
            )
        }
}
    

ReactDOM.render(<App/>, document.getElementById('root'))
//grabs whatever logic expressed as an app fuction (above) and put 
//that logic onto the index.html