import { Outlet} from "react-router-dom";
import HomeNav from "../../components/navigation/home-nav/HomeNav";

export default function ProductLayout () {
    return (
        <div className="layout">
            <HomeNav />
            <Outlet />
        </div>
    )
}