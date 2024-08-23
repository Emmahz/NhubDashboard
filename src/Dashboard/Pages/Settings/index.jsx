import Layout from "../../Components/Layout"
import { Link } from "react-router-dom";

const Settings =() => {
    return(
        <Layout>
            <div className="flex flex-col p-9 h-[100vh] fixed bg-orange-100  gap-5">
<Link to="/personalinformation" className="active:">
    <h1>Personal Information</h1>
</Link>




<Link to="/notification">
<h1>Notification prefrence </h1>
</Link>

<Link to="/security">
<h1>security</h1>
</Link>
</div>
        </Layout>
    );
};

export default Settings;