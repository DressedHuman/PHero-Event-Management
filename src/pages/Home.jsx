import { useLoaderData } from "react-router-dom";
import PackageCard from "../components/PackageCard";
// import MuiTimeLine from "../components/MuiTimeLine";

const Home = () => {
    const packs = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* <MuiTimeLine packages={packs.data}/> */}
            {
                packs.data.map(pack => <PackageCard key={pack.id} packageData={pack} />)
            }
        </div>
    );
};

export default Home;