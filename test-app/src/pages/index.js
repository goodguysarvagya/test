import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/global.css'
import Gallery from './gallery'
import Navbar from '@/components/navbar';

export default function GalleryPage() {
  return (
    <div>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
     <Head>
        <title>Image Gallery</title>
      </Head>  
      <Navbar />
      <Gallery />
    </div> 
  );
}
