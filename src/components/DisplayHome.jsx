import React from "react";
import NavBar from "./NavBar";
import { albumsData, songsData } from "../assets/assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
const DisplayHome = () => {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Featured Charts</h1>
        <div className="flex overflow-x-auto ">
          {albumsData.map((album, index) => (
            <AlbumItem
              key={index}
              image={album.image}
              name={album.name}
              desc={album.desc}
              id={album.id}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl ">Today's biggest hits</h1>
        <div className="flex overflow-x-auto ">
          {songsData.map((song, index) => (
            <SongItem
              key={index}
              image={song.image}
              name={song.name}
              desc={song.desc}
              id={song.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
