'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { User } from "./types/user.type";
import { Paginate } from "./types/paginate";
import axios from "axios";
export default function Home() {
  const router = useRouter()
  const [users, setUsers] = useState<User[]>([])
  const [paginate, setpaginate] = useState<Paginate>({
    limit: 5
  })  
  useEffect(()=>{
    let authed;
    authed = localStorage.getItem("authed")  || false;
    if (!authed) {
        router.push('login');
    }
  },[])
  const fetchUsers = () => {
    const res =  axios.post('http://localhost:3000/users', paginate);
  }
  const getRows = () => {
    return (
      <>
        {users &&
          users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.isActive? 'Yes' : 'No'}</td>
            </tr>
          ))}
      </>
    );
  };
  
  return (
   <>
   <section className="container">
      <h1>Home</h1>
      <table className="table">
  <thead>
    <tr>
      <th>name</th>
      <th>address</th>
      <th>email</th>
      <th>active</th>
    </tr>
  </thead>
  <tbody>
   {getRows()}
  </tbody>
</table>
   </section>
   </>
  );
}
