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
    RuxInput, RuxTabs, RuxTab, RuxDialog
} from "@astrouxds/react";

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

                <RuxButton className="add-button" onClick={() => setDialogOpen(true)}>Add Admin</RuxButton>
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
                                <RuxTableRow key={index}>
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
            <RuxDialog open={dialogOpen}>
                <span slot="header">Add User</span>
                <RuxInput label="name" placeholder="Enter Name" />
                <RuxInput label="email" placeholder="Enter Email" />
                <div slot="footer">
                    <RuxButton className="cancel-button" onClick={() => setDialogOpen(false)}>Cancel</RuxButton>
                    <RuxButton className="confirm-button" onClick={() => setDialogOpen(false)}>Confirm</RuxButton>
                </div>
            </RuxDialog>
        </div>
    );
}

export default Admin;
