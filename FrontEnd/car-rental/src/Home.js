import * as React from 'react';
import Button from '@mui/material/Button';

const Home = () =>{
    var username = sessionStorage.getItem('username');
    const Search = () =>{
        var color = sessionStorage.getItem('color');
        var type= sessionStorage.getItem('type');
        var region = sessionStorage.getItem('region');
        var price= sessionStorage.getItem('price');
       var startDate = sessionStorage.getItem('startDate');
        var endDate = sessionStorage.getItem('endDate');    
       console.log(startDate);
        console.log(endDate);
        console.log(color);
        console.log(type);
        console.log(region);
        console.log(price);

    }
    return(
        <div className="container7">
            <Button variant="contained" onClick={Search}>Search</Button>
             <div className="home">
        </div>
        </div>
        
    );
} 

export default Home;