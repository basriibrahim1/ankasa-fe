import Head from "next/head";
import Footer from "./footer";
import { UserNavbar } from "./navbar";


export default function Layout({ children }) {
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