import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/Head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SeaTask</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
