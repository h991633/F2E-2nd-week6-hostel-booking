import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import Reserve from './Reserve'
import NotFound from './NotFound'
export default function Router() {
    return (
        // <Switch>
        //     <Route exact path="/F2E-2nd-week6-hostel-booking/" component={Homepage}/>
        //     <Route path="/F2E-2nd-week6-hostel-booking/reserve/:id" component={Reserve}/>
        //     <Route component={NotFound}/>
        // </Switch>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/reserve/:id" component={Reserve} />
            <Route component={NotFound} />
        </Switch>
    )
}
