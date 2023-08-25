import { createClient } from "pexels";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./PhotoList.css";

const PEXELS_API = "xYoQJtvHaXbtfnN4koNk7aPxuYTjY5eWAWlFcLsmC2gaR5qNBBzLSsSO";
const client = createClient(PEXELS_API);

export default function PhotoList({ query }) {
  const [photosArr, setPhotosArr] = useState([]);
  
  useEffect(() => {
    const fetchPhotos = async () => {
      const result = await client.photos.search({ query, per_page: 10 });
      setPhotosArr(result.photos);
    };
    fetchPhotos();
  }, [query]);

  return (
    <Box sx={{ width: 500 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {photosArr.length > 0 ? (
          photosArr.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.src.small}?w=164&h=164&fit=crop&auto=format`}
                alt={item.alt}
                loading="lazy"
              />
            </ImageListItem>
          ))
        ) : (
          <p>No Images Found</p>
        )}
      </ImageList>
    </Box>
  );
}
