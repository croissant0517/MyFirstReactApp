import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
    const [initialRobotList, setinitialRobotList] = useState([])
    const [robotList, setRobotList] = useState([])

    function handleUsers(users) {
        setinitialRobotList(users);
        setRobotList(users);
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => handleUsers(users))
    },[])

    function searchRobots(searchState) {
        setRobotList(() => {
            return initialRobotList.filter((robot) => {
                return robot.name.toLowerCase().includes(searchState.toLowerCase());
            })
        })
    }
    if(initialRobotList.length === 0) {
        return <h1>Loading...</h1>
    } else {
        return(
            <div className="tc" >
                <h1 className="f1" >RoboFriends</h1>
                <SearchBox onSearch={searchRobots} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robotsCard={robotList} />  
                    </ErrorBoundry>             
                </Scroll>
            </div>   
        );
    }  
}

export default App;


// function searchRobots(searchState) {
        
//     const newRobotList = robotList.filter((robot) => {
//         return robot.name.toLowerCase().includes(searchState.toLowerCase());
//     });
//     setRobotList(newRobotList)  
// }