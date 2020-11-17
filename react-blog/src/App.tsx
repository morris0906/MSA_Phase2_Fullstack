import React from 'react';
import './App.css';
import { Divider } from '@material-ui/core';
import SocialMedia from './components/SocialMedia';
import LoginNav from './components/Login';
import LanguageMenu from './components/LanguageMenu_comp';
import { IUserInput } from "./components/Interface";
import PostGrid from "./components/PostGrid_comp";
import AddPost from "./components/AddPost";

function App() {
  const [UserInput, setUserInput] = React.useState<IUserInput>({
    SearchQuery: "adventure",
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }
  return (
    <div className="App">
      <LoginNav />
      <LanguageMenu />
      <header className="App-header">
        <h1>
          Hi, welcome to this demo website!
        </h1>
      </header>
      <Divider variant="middle" />
      <div className="add">
        <AddPost SetUserInput={(a: IUserInput) => SetUserInput(a)} />
      </div>
      <PostGrid SearchQuery={UserInput.SearchQuery} />
      <Divider />
      <div className="Share">
        <SocialMedia />
      </div>
    </div>
  );
}

export default App;
