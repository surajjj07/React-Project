import React, { useContext } from 'react'
import { songsData } from '../songs'
import { MdPlaylistAdd } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { datacontext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { Addsong, RemoveSong } from '../redux/PlaylistSlice';
import { MdPlaylistRemove } from "react-icons/md";
import { DislikedSong, Likedsong } from '../redux/LikedSlice';
import { IoHeartSharp } from "react-icons/io5";


function Card({ image, name, singer, songIndex }) {

  let dispatch = useDispatch()
  let Gaana = useSelector(state => state.playlist)
  const songExistInPlaylist = Gaana.some((song) => (song.songIndex == songIndex))
  let likedSongs = useSelector(state => state.liked)
  const songExistInLiked = likedSongs.some((song) => (song.songIndex == songIndex))
  let { playSong, index, setIndex } = useContext(datacontext)
  return (
    <div className='w-[90%] bg-gray-800 h-[70px] md:h-[120px] flex rounded-lg p-[5px] md:p-[10px] hover:bg-gray-600 transition-all'>
      <div className='flex justify-start items-center gap-[20px] w-[70%] h-[100%] cursor-pointer' onClick={() => {
        setIndex(songIndex)
        playSong()
      }} >
        <div className=''>
          <img src={image} alt="" className='w-[60px] max-h-[60px] md:max-h-[100px] md:w-[100px] rounded-lg' />
        </div>
        <div className='text-[16px] md:text-[25px] text-white'>
          <div className='text-[1em] font-semibold text-center'>{name}</div>
          <div className='text-gray-300 text-[0.6em] text-center'>{singer}</div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-[20px] w-[30%] h-[100%]'>
        <div className='text-[16px] md:text-[25px] text-white flex gap-[10px]'>

          {!songExistInPlaylist && (<div onClick={() => {
            dispatch(Addsong({ name: name, image: image, singer: singer, songIndex: songIndex }))
          }}>
            <MdPlaylistAdd className='text-[1.7em] cursor-pointer hover:text-gray-400 transition-all' />
          </div>)}
          {songExistInPlaylist && (<div onClick={() => {
            dispatch(RemoveSong(songIndex))
          }}>
            <MdPlaylistRemove className='text-[1.7em] cursor-pointer hover:text-gray-400 transition-all' />
          </div>)}

          {!songExistInLiked && <><div onClick={() => {
            dispatch(Likedsong({ name: name, image: image, singer: singer, songIndex: songIndex }))
          }}>
            <IoHeartOutline className='text-[1.5em] cursor-pointer hover:text-gray-400 transition-all' />
          </div></>}
          {songExistInLiked && <><div onClick={() => {
            dispatch(DislikedSong(songIndex))
          }}>
            <IoHeartSharp className='text-[1.5em] cursor-pointer hover:text-gray-400 transition-all' />
          </div></>}
        </div>
      </div>
    </div>
  )
}

export default Card
