import { Route, Switch } from "react-router-dom"
import LandingPage from "../pages/landingPage"


const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
        </Switch>
    )
}

export default Routes