import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";


const Layout = ({children}) => {

        <main>
            <Navbar />
            <Sidenav />
            {children}
        </main>
}

export default Layout;