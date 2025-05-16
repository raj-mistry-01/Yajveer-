import Navbar from './navbar';
import Navbar2 from './navbar2';
import MainNav from './mainnav';
import Slider from './Home/silder';
import Footer from './Footer';
import Menu from './Home/Menu';
import Sidebar from './Home/sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home(){
    return(
        <>
            <Sidebar></Sidebar>
            <Navbar></Navbar>
            <Navbar2></Navbar2>
            <MainNav></MainNav>
            <Slider></Slider>
            <Menu></Menu>
            <Footer></Footer>
        </>
    )
};