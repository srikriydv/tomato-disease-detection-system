import "./App.css";
import SortableList from "./components/SortableList";
import DragDropFiles from "./components/DragDropFiles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Prediction from "./components/Prediction";

const App = () => {
    return (
        <div>
            <Header />
        <div className="container">
            <DragDropFiles />
            <Prediction />
        </div>
            <Footer />
        </div>
    )
};

export default App;