import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";

function App() {
  return (
    <>
      <Header />
      <Person
        name="Amy"
        title="CEO"
        salary="4000"
        phone="044 238 4535"
        animal="Cat"
      />
      <Footer />
    </>
  );
}

export default App;
