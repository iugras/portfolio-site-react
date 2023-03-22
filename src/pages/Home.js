import Header from "./../components/header/Header";

const Home = () => {
    return (  
<>
<Header/>

    <main className="section">
        <div className="container">

                <ul className="content-list">
                <li className="content-list__item">
                        <h2 className="title-2">No-code et graphic design</h2>
                        <p> Webflow, WordPress, UML, Figma, Adobe XD</p>
                 </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        
                        <p>HTML5/CSS3, JavaScript, jQuery, React.js</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>PHP, Symfony, C#.NET, VB.NET, ASP.NET, Node.js, Python, SQL </p>
                    </li>
                </ul>

        </div>
    </main>
</>

    );
}
 
export default Home;