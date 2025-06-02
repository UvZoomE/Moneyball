import {useState} from "react";
import "./css/Admin.css";
import {
    RuxClock,
    RuxIcon,
    RuxTable,
    RuxTableBody,
    RuxTableCell,
    RuxTableHeader,
    RuxTableHeaderCell,
    RuxTableHeaderRow,
    RuxTableRow,
    RuxButton,
    RuxTabs, RuxTab
} from "@astrouxds/react";
import AdminDialog from "./AdminDialog.tsx";

const dummyAdminData = [{
    id: "12345",
    name: "John Doe",
    email: "johndoe@gmail.com",
}];

const roles = ["Admin", "User", "Viewer"];

const Admin = () => {

    const [adminData, setAdminData] = useState(dummyAdminData);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="admin-container">
            <div slot="header" className="admin-header">
                <h1 className="app-logo">LOGO</h1>
                <RuxClock className="app-clock"/>
                <RuxIcon icon="notifications" className="notification-icon" />
            </div>
            <div className="admin-body">
                <div slot="tab-bar" className="home-tabs">
                    <RuxTabs id="tab-set">
                        {
                            roles.map((role, index) => (
                                <RuxTab key={index} id={`tab-id-${index}`}>{role}</RuxTab>
                            ))
                        }
                    </RuxTabs>
                </div>

                <RuxButton style={{padding: "2%"}} className="add-button" onClick={() => setDialogOpen(true)}>Add Admin</RuxButton>
                <RuxTable className="admin-table">
                    <RuxTableHeader>
                        <RuxTableHeaderRow>
                            <RuxTableHeaderCell>Name</RuxTableHeaderCell>
                            <RuxTableHeaderCell>Email</RuxTableHeaderCell>
                            <RuxTableHeaderCell>Actions</RuxTableHeaderCell>
                        </RuxTableHeaderRow>
                    </RuxTableHeader>
                    <RuxTableBody>
                        {
                            adminData.map((admin, index) => (
                                <RuxTableRow className={"table-row"} key={index}>
                                    <RuxTableCell>{admin.name}</RuxTableCell>
                                    <RuxTableCell>{admin.email}</RuxTableCell>
                                    <RuxTableCell>
                                        <RuxButton className="delete-button" onClick={() => setAdminData(adminData.filter((ad) => admin.id !== ad.id))}>Delete</RuxButton>
                                    </RuxTableCell>
                                </RuxTableRow>
                            ))
                        }
                    </RuxTableBody>
                </RuxTable>
            </div>
            <AdminDialog setDialogOpen={setDialogOpen} open={dialogOpen} setUser={setAdminData} userInput={adminData}/>
        </div>
    );
}

export default Admin;
