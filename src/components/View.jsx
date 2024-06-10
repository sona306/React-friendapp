import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const[friend,setData]=useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                console.log(response.data)
                setData(response.data)
            }
        ).catch()

    }

    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {friend.map(
                            (value,index)=>
                            {
                                return <tr>
                                <th>{value.name}</th>
                                <td>{value.friendName}</td>
                                <td>{value.friendNickName}</td>
                                <td>{value.DescribeYourFriend}</td>
                                </tr> 
                            }
                        )

                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}


export default View