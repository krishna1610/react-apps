import React, { useEffect, useState } from "react";

const userUrl = "https://jsonplaceholder.typicode.com/users";

const DisplayUsers = () => {
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch(userUrl)
        .then(response=>response.json())
        .then((data)=>{
            setUsers(data);
        })
    },[]);

    const handleOnClick = async (id) => {
       const url =  `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
       const response = await fetch(url);
       const comments = await response.json();
       setComments(comments);
    }

    return (<div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>{
                    return (<tr key={user.id} onClick={()=>handleOnClick(user.id)}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address.city}, {user.address.zipcode}</td>
                        <td>{`${user.company.name} - ${user.company.catchPhrase}`}</td>
                    </tr>)
                })}
            </tbody>
            <tbody></tbody>
        </table>
        <div>
        {comments.map((comment)=>{
            return <div key={comment.id} className="comment-div">
                <div>{comment.name}</div>
                <div>{comment.body}</div>
            </div>
        })}
        </div>  
    </div>)
};

export default DisplayUsers;