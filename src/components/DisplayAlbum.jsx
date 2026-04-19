import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  console.log(id);

  const albumData = albumsData[id];
  console.log(albumData);
  return (
    <>
      <NavBar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt={albumData.name}
        />

        <div className="flex flex-col">
          <h1>Playlist</h1>
          <h2 className="text-5xl  font-bold mb-4 md:text-7xl ">
            {albumData.name}
          </h2>
          <p>{albumData.description}</p>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            .123,323,23 likes . <b>50 songs,</b>
            about 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3  sm:grid-cols-4 mt-10 mb-4 ml-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4 ">#</b>
          Title
        </p>

        <p>Album</p>
        <p className="hidden sm:block">Date Added </p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>

      <hr />
      {songsData.map((song, index) => (
        <div
          key={index}
          className="grid grid-cols-3  sm:grid-cols-4 gap-2   mb-4 ml-2 items-center rounded text-[#a7a7a7]  hover:bg-[#ffffff2b] p-2 "
        >
          <p className="text-white ">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline w-10 mr-5" src={song.image} alt="" />
            <p>{song.name}</p>
          </p>
          <p className="text-[15px] ">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{song.duration}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
