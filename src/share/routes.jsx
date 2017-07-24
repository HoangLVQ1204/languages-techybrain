import App from './containers/App.jsx';
import Home from '../share/components/home/Home.jsx';

const routes = [
    {
        component: App,
        routes:[
            {
                path:'/',
                exact:true,
                component: Home
            }
        ]
    }
]

export default routes;
