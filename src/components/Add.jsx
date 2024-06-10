import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Add = () => {
    const [friend,setData]=useState(
        {
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":" "
        }
    )
    const inputHandler=(event)=>{
        setData({...friend,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(friend)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",friend).then(
            (response)=>{

                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully added")
                    
                } else {
                    alert("error")
                    
                }

            }
        ).catch()
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={friend.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FriendName</label>
                            <input type="text" className="form-control" name='friendName' value={friend.friendName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NickName</label>
                            <input type="text" className="form-control" name='friendNickName' value={friend.friendNickName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" name='DescribeYourFriend' value={friend.DescribeYourFriend} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-info" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add