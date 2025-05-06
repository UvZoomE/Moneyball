import "./css/Home.css";
import {RuxClock, RuxIcon, RuxTab, RuxTable, RuxTableBody, RuxTableCell, RuxTableHeader, RuxTableHeaderCell, RuxTableHeaderRow, RuxTableRow, RuxTabs} from "@astrouxds/react";

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
                    <RuxTab id="tab-id-1" selected>Home</RuxTab>
                    <RuxTab id="tab-id-2">Create Schedule</RuxTab>
                    <RuxTab id="tab-id-3">Settings</RuxTab>
                </RuxTabs>
            </div>
            <div className="home-body">
                <h1>No Schedule Planned</h1>
            </div>
            <div slot="footer" className="home-footer">
            <h1 className="legend">Legend</h1>
            <RuxTable className="legend-table">
                    <RuxTableBody>
                        <RuxTableRow>
                            <RuxTableCell>AFE = Aircrew Flight Equipment</RuxTableCell>
                            <RuxTableCell>P = Pitting</RuxTableCell>
                            <RuxTableCell>SI = Special Inspection</RuxTableCell>
                            <RuxTableCell>* = Reconfiguration</RuxTableCell>
                            <RuxTableCell>90D = 90DAY BUNDLE</RuxTableCell>
                            <RuxTableCell className="orange-background-cell">ADCC = Advanced Dedicated</RuxTableCell>
                            <RuxTableCell className="blue-background-cell">DD = Delayed</RuxTableCell>
                            <RuxTableCell className="lightblue-background-cell">DEPOT STATUS</RuxTableCell>
                        </RuxTableRow>
                        <RuxTableRow>
                            <RuxTableCell>DR = Document Review</RuxTableCell>
                            <RuxTableCell>PD = Post Dock</RuxTableCell>
                            <RuxTableCell>SP = Spare</RuxTableCell>
                            <RuxTableCell>RWR = Radar Threat Warning System</RuxTableCell>
                            <RuxTableCell>180D = 180DAY BUNDLE</RuxTableCell>
                            <RuxTableCell className="orange-background-cell">Crew Chief</RuxTableCell>
                            <RuxTableCell className="blue-background-cell">Discrepancy</RuxTableCell>
                            <RuxTableCell className="green-background-cell">IMPOUND</RuxTableCell>
                        </RuxTableRow>
                        <RuxTableRow>
                            <RuxTableCell>F = Flyer</RuxTableCell>
                            <RuxTableCell>PR = Pre Dock</RuxTableCell>
                            <RuxTableCell>TCI = Time Change Item</RuxTableCell>
                            <RuxTableCell>$ = PACER</RuxTableCell>
                            <RuxTableCell> </RuxTableCell>
                            <RuxTableCell className="orange-background-cell">FTD = Flight Training Detachment</RuxTableCell>
                            <RuxTableCell className="blue-background-cell">WA = Walsh</RuxTableCell>
                            <RuxTableCell className="red-background-cell">XCD = Cross Country Departure</RuxTableCell>
                        </RuxTableRow>
                        <RuxTableRow>
                            <RuxTableCell>FCF = Functional Check Flight</RuxTableCell>
                            <RuxTableCell>PTM = Phase Time Management</RuxTableCell>
                            <RuxTableCell>TCTO = Time Compliance Technical</RuxTableCell>
                            <RuxTableCell>! = Luna Canopy</RuxTableCell>
                            <RuxTableCell> </RuxTableCell>
                            <RuxTableCell className="orange-background-cell">HP = Hot Pits</RuxTableCell>
                            <RuxTableCell className="blue-background-cell">W&B = Weight & Balance</RuxTableCell>
                            <RuxTableCell className="red-background-cell">XCR = Cross Country Return</RuxTableCell>
                        </RuxTableRow>
                        <RuxTableRow>
                            <RuxTableCell>ICT = Integrated Combat Turn</RuxTableCell>
                            <RuxTableCell>Q = Quick Turn</RuxTableCell>
                            <RuxTableCell>Order</RuxTableCell>
                            <RuxTableCell>^ = AESA PCW</RuxTableCell>
                            <RuxTableCell> </RuxTableCell>
                            <RuxTableCell className="orange-background-cell">MTS = Training Course</RuxTableCell>
                            <RuxTableCell className="blue-background-cell">MX = Major Maintenance</RuxTableCell>
                            <RuxTableCell className="red-background-cell">GSP = Ground Spare</RuxTableCell>
                        </RuxTableRow>
                        <RuxTableRow>
                            <RuxTableCell>O&B = Out Back</RuxTableCell>
                            <RuxTableCell>RCS = Rapid Crew Swap</RuxTableCell>
                            <RuxTableCell>USM = Unscheduled MX</RuxTableCell>
                            <RuxTableCell># = EGI TCTO CW</RuxTableCell>
                            <RuxTableCell> </RuxTableCell>
                            <RuxTableCell className="orange-background-cell">SD = Static Display</RuxTableCell>
                            <RuxTableCell className="blue-background-cell"> </RuxTableCell>
                            <RuxTableCell className="red-background-cell">ASP = Air Spare</RuxTableCell>
                        </RuxTableRow>
                        <RuxTableRow>
                            <RuxTableCell>& = AESA</RuxTableCell>
                            <RuxTableCell>OCF = Operational Check Flight</RuxTableCell>
                            <RuxTableCell>X = Turn</RuxTableCell>
                            <RuxTableCell>60D = 60DAY BUNDLE</RuxTableCell>
                            <RuxTableCell> </RuxTableCell>
                            <RuxTableCell className="orange-background-cell">WLT = Weapons Load Training</RuxTableCell>
                            <RuxTableCell className="blue-background-cell"> </RuxTableCell>
                            <RuxTableCell className="purple-background-cell">CANN = Cannibalization</RuxTableCell>
                        </RuxTableRow>
                    </RuxTableBody>
                </RuxTable>
            </div>
        </div>
    )
}

export default Home;