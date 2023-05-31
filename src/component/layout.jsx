import Head from "next/head";
import UserNavbar from "./navbar";
import Footer from "./footer";



const Layout = ({ children }) => {
  return (
    <>
      <UserNavbar/>
        <Head>
            <title>Ankasa Flight</title>
        </Head>
        {children}
        <Footer/>
    </>
  );
}

export default Layout