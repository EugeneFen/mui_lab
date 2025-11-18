import Navbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import BuildPage from "./components/BuildPage";

function Building() {
    const { id } = useParams();
    const buildingId = parseInt(id || '0', 10);

    return (
        <div>
            <Navbar active="0" />
            <BuildPage index={buildingId} />
            <Footer />
        </div>
    );
}
export default Building;