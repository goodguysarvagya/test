import { promises as fs } from 'fs';

const getImages = async (req, res) => {
  try {
    const images = [];
    const files = await fs.readdir('./public/images');

    for (const file of files) {
      images.push({
        src: `/images/${file}`,
        alt: file,
      });
    }

    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getImages;