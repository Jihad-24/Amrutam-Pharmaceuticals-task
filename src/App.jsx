import Banner from "./components/Banner/Banner";
import Consultations from "./components/Consultations/Consultations";
import Harmony from "./components/Harmony/Harmony";
import Magic from "./components/Magic/Magic";

function App() {
  return (
    <div className="max-w-7xl mx-auto mb-20 ">
     <Banner/>
     <Magic/>
     <Consultations/>
     <Harmony/>
    </div>
  );
}

export default App;
