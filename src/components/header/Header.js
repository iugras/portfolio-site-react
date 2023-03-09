import BtnGitHub from "./../../components/btnGitHub/BtnGitHub";
import "./style.css";

const Header = () => {
    return (  
        
        <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, I am <em>IULIIA GRAS</em></strong><br/>
             IT Developer
        </h1>
        <div className="header__text">
            <p>with passion for learning and creating.</p>
        </div>
      <div className="btnGit"><BtnGitHub target = "_blank" rel="noreferrer" link = "https://github.com/gras2015"/></div>
        
    </div>
</header>);
}
 
export default Header;