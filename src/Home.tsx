import "./css/Home.css";
import {RuxClock, RuxContainer, RuxIcon, RuxTab, RuxTabs} from "@astrouxds/react";

const Home = () => {
    return (
        <div className="home-container">
            <div slot="header" className="home-header">
               <h1 className="app-logo">LOGO</h1>
               <RuxClock className="app-clock"/>
               <RuxIcon icon="notifications" className="notification-icon" />
            </div>
            <div slot="tab-bar" className="home-tabs">
                <RuxTabs id="tab-set-id-1">
                    <RuxTab id="tab-id-1">Home</RuxTab>
                    <RuxTab id="tab-id-2">Create Schedule</RuxTab>
                    <RuxTab id="tab-id-3">Settings</RuxTab>
                </RuxTabs>
            </div>
            <div className="home-body">
                <h1>COMING SOON</h1>
            </div>
            <div slot="footer" className="home-footer">
                <h1>footer</h1>
            </div>
        </div>
    )
}

export default Home;