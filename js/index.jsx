import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return<ul>
            Employees list
        </ul>
    }
}


document.addEventListener('DOMContentLoaded', () =>{
    ReactDOM.render(
        <List/>,
        document.getElementById('root')
    );
});