import Header from "../Header.jsx";  
import Main from "../Mainf.jsx";  
import travelData from "../data.jsx";

export default function TravelTime() {
    console.log("Travel Data:", travelData);

    return (
        <div className="travel">
            <Header/>
            <div className="container">
                {travelData.map((travel) => (
                    <Main
                    key={travel.id}    
                    {...travel}
                    />
                ))}
            </div>
        </div>
    );
}

