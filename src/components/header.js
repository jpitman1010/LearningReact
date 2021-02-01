// import React from 'react';


// const Header = () => {
//     return <div>Header says...</div>
// }



// export default Header;
// //exports this to allow you to import onto index.js file

// import React from 'react';


// const Header = () => {

//     const getTheYear = () => {
//         const newDate = new Date();
//         return newDate.getFullYear();
//     }


//     return(
//         <div>
//             The date is { getTheYear()}
//         </div>
//     )
// }



// export default Header;


// import React from 'react';

// // classes are not functions, so they do not need  = () =>
// // in order to extend React components, must add verbiage below.
// class Header extends React.Component {
    
//     // in order to have a method within the class
//     // you must use render() {method(just like in python is a function 
//     // that lives within a class)}
    
//     render() {
    
//     return (
//         <header style={styles.header}>
//             <div style={styles.logo}>
//                 Logo
//             </div>
//             <input/>
//         </header>
//     )
// }

// }

// let styles = { 
//     header:{
//         background: "#03a9fa"
//     },
//     logo:{
//         color:'#fff',
//         fontFamily:'Roboto',
//         textAlign:'center',
//         fontSize:'60px'
//     }
// }


// export default Header;



// instead of using React versoin of css, can create css file like normal and just add stylings through there:


import React, { Component } from 'react';

// classes are not functions, so they do not need  = () =>
// in order to extend React components, must add verbiage below.
class Header extends Component {
    
    // in order to have a method within the class
    // you must use render() {method(just like in python is a function 
    // that lives within a class)}
    
    render() {
    
    return (
        <header>
            <div className="logo">
                Logo
            </div>
            <input/>
        </header>
    )
}

}




export default Header;
