import Header from "./../components/header/Header";

const Home = () => {
    return (  
<>
<Header/>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p> WordPress, Figma</p>
                        <p>HTML5/CSS3, JavaScript, jQuery, React.js</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>PHP, C#, Python, MySQL, Microsoft SQL Server </p>
                    </li>
                </ul>

        </div>
    </main>
</>

    );
}
 
export default Home;