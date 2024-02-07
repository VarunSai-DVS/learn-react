// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile_props.js'
import MyComp from './qcomps/firstcomp.js'
import Bio from "@/pages/qcomps/bios";
import TodoList from "@/pages/qcomps/todos";
import Holder from "@/pages/components/square";
import PackingList from "@/pages/qcomps/props_item";

export default function Home() {
  return (
    <div className={styles.main}>
        {/*<MyComp />*/}
        {/*<Profile></Profile>*/}
        {/*<Bio></Bio>*/}
        {/*<TodoList></TodoList>*/}
        {/*<Holder></Holder>*/}
        <PackingList></PackingList>
    </div>
  )
}
