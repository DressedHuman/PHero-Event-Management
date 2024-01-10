import { useLoaderData } from "react-router-dom";
import PackageCard from "../components/PackageCard";
import { Typography } from "@mui/material";
import Banner from "../components/Banner";

const Home = () => {
    const packs = useLoaderData();

    return (
        <div>
            <Banner />
            <Typography gutterBottom color={'GrayText'} variant="h5" sx={{textAlign: 'center'}}>Services We Provide</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* <MuiTimeLine packages={packs.data}/> */}
                {
                    packs.data.map(pack => <PackageCard key={pack.id} packageData={pack} />)
                }
            </div>
        </div>
    );
};

export default Home;