import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends React.Component  {
  render() {
   return (
   	<MuiThemeProvider>
   		<div> 
   			<NavBar />
        <div className="hhh">
   			<Search />
        </div>
   		</div>


   	</MuiThemeProvider>

   	);
  }
}

export default App;
