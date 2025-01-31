// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import GalleryProps from "./qcomps/gallery_props";
import Gallery from "./qcomps/gallery_props";
// import List from "@/pages/components/artistsArr";
import RecipeList from "@/pages/qcomps/recipes";
import Form from "@/pages/components/updObjects";
import Scoreboard from "@/pages/qcomps/updObjectsForm";
import List from "@/pages/qcomps/artistsRemoveArr";
import BucketList from "@/pages/qcomps/arrObj";

export default function Home() {
  return (
    <BucketList />
  )
}
