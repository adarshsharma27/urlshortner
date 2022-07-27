import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";

function App() {
    return (
        <>
            <Menu />
            <Header heading="More than just shorter links" description="Build your brand’s recognition and get detailed insights on how your links are performing." btnText="Get Started" btnUrl="#" cImage="images/header.svg" />
            <Form />
            <Header heading="Short links, big results" description="A URL shortener built with powerful tools to help you grow and protect your brand." btnText="Get Started" btnUrl="#" cImage="images/header2.svg" />
            <Cards />
            <Intro />
            <Footer />
        </>
    );
}

export default App;
