import { useLoaderData } from "react-router-dom";
import PackageCard from "../components/PackageCard";

const Home = () => {
    const packs = useLoaderData();
    
    return (
        <div>
            {
                packs.data.map(pack => <PackageCard key={pack.id} packageData={pack} />)
            }
        </div>
    );
};

export default Home;