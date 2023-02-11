import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Gallery from './gallery'
import Navbar from '@/components/navbar';

export default function GalleryPage() {
  return (
    <div>
     <Head>
        <title>Image Gallery</title>
      </Head>  
      <Navbar />
      <Gallery />
    </div>
  );
}
