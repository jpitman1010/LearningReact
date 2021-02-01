import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
// to start app in browser, get into src folder for myapp and then type npm start into terminal
import Header from './components/header';
//after creating header.js can now import it as long as export statement in bottom of that file
//  import './styles/style.css'; if you wish to import from within components folder, but I preferred the import via link on html

const App = () => (
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
        <>
            <Header/>
        </>
 
        

   
)

ReactDOM.render(<App/>, document.getElementById('root'))
//grabs whatever logic expressed as an app fuction (above) and put 
//that logic onto the index.html