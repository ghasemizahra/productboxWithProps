// import '../Navbar/Nav.css'
import './Pernav.css'
export default function PersionNavbar(){
    return(
        <div>

            <div className="nav-background">
                <div className="nav-content">
                    <header className="nav-header">

            <h1><a className="nav-logo">سبز</a></h1>

               </header>
               <nav>
               <ul className="nav-ul" >
                <li><a href="#" className="nav-link navactive">خانه</a></li>
                <li><a href="#" className="nav-link">تماس با ما</a></li>
                <li><a href="#" className="nav-link">درباره ما</a></li>
                <li><a href="#" className="nav-link">پشتیبانی</a></li>

               </ul>
               </nav>
                </div>
            </div>

        </div>
    )
}