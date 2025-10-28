import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/PersonCard";

function App() {
  return (
    <>
      <Header headertext="hrApp" />
      <div className="container">
        <Person
          name="Amy"
          title="CEO"
          salary="4000"
          phone="044 238 4535"
          email="amy.platt@hotmail.com"
          animal="Cat"
        />
        <Person
          name="Eliott"
          title="Boss"
          salary="4000"
          phone="+386 768 2389"
          email="eliott@french.com"
          animal="Cat and Dog"
        />
        <Person
          name="Nathaniel"
          title="Sales"
          salary="5000"
          phone="+687 888 4532"
          email="loverboy@wales.com"
          animal="Dogs"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
