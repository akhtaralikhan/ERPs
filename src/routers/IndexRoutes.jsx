import NonAuthLayouts from "../Layouts/NonAuthLayouts";
import {publicRoutes,privateRoutes} from './Allroutes';
import ProtectedLayouts from "../Layouts/ProtectedLayouts";
import { Route,Routes } from "react-router-dom";

const IndexRouter = () => {
    return (
        <Routes>
            <Route element={<NonAuthLayouts/>}>
              {publicRoutes.map((route,idx)=>(
                <Route key={idx} path={route.path} element={route.component}/>
              ))}
            </Route>

            <Route element={<ProtectedLayouts/>}>
             {privateRoutes.map((route,idx)=>(
                <Route key={idx} path={route.path} element={route.component}/>
             ))}
            </Route>
        </Routes>
    )
}

export default IndexRouter;