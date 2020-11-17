import React from 'react';
import './App.css';
import { Divider } from '@material-ui/core';
import SocialMedia from './components/SocialMedia';
import LoginNav from './components/Login';
import LanguageMenu from './components/LanguageMenu';
import { IUserInput } from "./components/Interface";
import PostGrid from "./components/PostGrid_comp";
import AddPost from "./components/AddPost";
import { useTranslation } from "react-i18next";
import "./components/I18n";

function App() {

  const [UserInput, setUserInput] = React.useState<IUserInput>({
    SearchQuery: "adventure",
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);
  }

  const { t, i18n } = useTranslation();
  
  return (
    <div className="App">
      <LoginNav />
      <LanguageMenu />
      <header className="App-header">
        <h3>
          {t("Welcome1")}
          <br />
          {t("Welcome2")}
        </h3>
      </header>
      <Divider variant="middle" />
      <div className="Add">
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
