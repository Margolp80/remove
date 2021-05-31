import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ReadFile from "./components/ReadFile";
import Output from "./components/output";
import Route from "./components/Route";

function App() {

    const [fileInfo, setFileInfo] = useState();



    return (
        <div className="App">
            <Route  path={'/read-file'}>
                <ReadFile setFileInfo={(val)=>setFileInfo(val)}/>
            </Route>
            <Route  path={'/output'}>
                <Output fileInfo={fileInfo}/>
            </Route>

        </div>
    );
}

export default App;
