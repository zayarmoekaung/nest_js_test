'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    let authed;
    authed = localStorage.getItem("authed")  || false;
    if (!authed) {
        router.push('login');
    }
  },[])
  return (
   <>
   <section className="container">
      <h1>Home</h1>
   </section>
   </>
  );
}
