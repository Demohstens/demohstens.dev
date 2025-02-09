import Casual from "./casual";
import ChooseBanner from "./ChooseBanner";
import Professional from "./professional";

function Home() {
    return ( 
        <div className="h-screen w-screen">
            <Professional />
            <Casual/>
            <ChooseBanner />
        </div>
     );
}

export default Home;