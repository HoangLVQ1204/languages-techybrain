import App from './containers/App.jsx';
import TrackList from '../share/components/TrackList.jsx';

const routes = [
    {
        component: App,
        routes:[
            {
                path:'/',
                exact:true,
                component: TrackList
            }
        ]
    }
]

export default routes;
