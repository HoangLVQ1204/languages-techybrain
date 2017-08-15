import App from './containers/App.jsx';
import Home from '../share/components/home/Home.jsx';
import Room from '../share/components/room/Room.jsx';

const Home1 = ({}) => (
  <div>
    <h2>Home1</h2>
  </div>
)

const routes = [
    {
        component: App,
        routes:[
            // {
            //     path:'/',
            //     exact:true,
            //     component: Home
            // },
            { 
                path: '/',
                exact:true,
                component: Room
            }
        ]
    }
]

export default routes;
