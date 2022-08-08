import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from "./LoginPage"
import SignUpPage from "./SignUp"
import Today from "./Today"
import HistoryPage from "./HistoryPage";
import HabitsPage from "./HabitsPage"

import UserContext from "../Contexts/UserContext";


export default function App(){
    const[users, setUsers]=useState()
    const[numberOfHabits, setNumberOfHabits] = useState(0);
    const[completedHabits, setCompletedHabits] = useState(0);
    const[progress, setProgress] = useState(0)
    
    
    return(
        <UserContext.Provider value={{
            users, setUsers, 
            numberOfHabits, setNumberOfHabits, 
            completedHabits, setCompletedHabits,
            progress, setProgress,
            }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />}  />
                <Route path="/hoje" element={<Today />} />
                <Route path="/historico" element={<HistoryPage />}/>
                <Route path="/habitos" element={<HabitsPage />}/>
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    )
}