import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Login from './Features/auth/pages/Login';
import Register from './Features/auth/pages/Register';
import Home from './Features/home/pages/Home';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}
