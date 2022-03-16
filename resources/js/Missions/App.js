import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import MissionEditForm from './MissionEditForm'
import MissionList from './MissionList'
import Register from './Register'



const App = () => {

    const [user, setUser] = useState(null);

    const getUserInfo = async () => {
        try {
            const { data } = await axios.get('api/user');
            console.log(data);

            setUser(data);
            console.log('User is logged in!');
        } catch (error) {

            setUser(null);
            console.log('User is not logged in!');
            
        }
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <Router>
            <nav>
                <Link to="/missions">List of missions</Link>
                &nbsp;
                <Link to="/missions/create">Create a new mission</Link>
                &nbsp;
                { user ? '' : <Link to="/missions/Register">Register to become an MI6 operative</Link> }
            </nav>
                
            <Routes>
                <Route exact path="/missions" element={<MissionList />} />
                
                <Route exact path="/missions/create" element={<MissionEditForm />} />
                
                { user ? '' : <Route exact path="/missions/register" element={<Register getUserInfo={ getUserInfo }/>} />}
            </Routes>
            
        </Router>
        
  )
}

export default App