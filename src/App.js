import Step1Form from "./components/step1Form";
import Step2Form from "./components/step2Form";
import Step3Form from "./components/step3Form";
import {  Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      
        <Routes>
          <Route index element={<Step1Form />}/>
            <Route path="/stepForm2" element={<Step2Form />} />
            <Route path="/stepForm3" element={<Step3Form />} />
        </Routes>
    

    </div>
  );

}

export default App;
