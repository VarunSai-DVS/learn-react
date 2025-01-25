// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import GalleryProps from "./qcomps/gallery_props";
import Gallery from "./qcomps/gallery_props";
import List from "@/pages/qcomps/list_keys_id";
import RecipeList from "@/pages/qcomps/recipes";

export default function Home() {
  return (
    <RecipeList />
  )
}
