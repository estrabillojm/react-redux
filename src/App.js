import { connect, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { useDispatch } from 'react-redux'
import { setUserInfo } from './redux/actions/users';
import { deleteUser } from "./redux/actions/users";
import { useState } from "react";

const App = () =>{
    const users = useSelector(state => state.users)
    // state is in the store.js
    
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const dispatch = useDispatch()
    const data =  { nameThree: name, nameTwo: name, nameOne: name}
    const handleClick = (type) =>{
        if(type === 'name'){
            dispatch(setUserInfo({ name: data}))
            return true
        }
        if(type === 'age'){
            dispatch(setUserInfo({ age: 27}))
            console.log(users)
            return true
        }
        dispatch(setUserInfo({ gender: "Male"}))
    }
    console.log("USERS", users)
    const handleGetId = async ()=>{
        dispatch(deleteUser({id: id}))
        console.log(users)
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={() => handleClick('name')}>Name</button>
            <button onClick={() => handleClick('age')}>Age</button>
            <button onClick={() => handleClick('gender')}>Gender</button>
        
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={handleGetId}>Get ID</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setUserInfo
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App)