import React, { useState, useContext, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import { HerbContext } from "../../../context/Context";
import { BsDisplayFill } from "react-icons/bs";
import { Typography, Stack } from "@mui/material";
import "./MusicModal.css";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

// ----------------------------------

export default function MusicModal({
  staticModal,
  setStaticModal,

  toggleShow,
  togglePlay,
  playlist,
  index,
  playPreviousSong,
  toggleBackward,
  toggleForward,
  playNextSong,
}) {
  const { state } = useContext(HerbContext);

  const currentSong = playlist && playlist.length > 0 ? playlist[index] : null;

  const [isPlaying, setIsPlaying] = useState(false); // add state variable
  useEffect(() => {
    setIsPlaying(state.isPlaying); // update state when player state changes
  }, [state.isPlaying]);

  // toggle isPlaying state when the play/pause button is clicked
  const handlePlayPause = () => {
    togglePlay();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <MDBModal
       
        staticBackdrop
  tabIndex="-1"
  show={staticModal}
  setShow={() => setStaticModal(!staticModal)}
  style={{ zIndex: 1000 }}  // Add a zIndex value
      >
        <MDBModalDialog size="xl">
          <MDBModalContent className="gradient-mod">
            <MDBModalHeader>
              <MDBModalTitle>SocialPlayer</MDBModalTitle>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                }}
                className="rotate-vert-center"
              >
                <Typography variant="h5">
                  {currentSong && currentSong?.album}
                </Typography>
              </div>

              <MDBBtn color="secondary" onClick={toggleShow}>
                <BsDisplayFill style={{ fontSize: "1rem" }} />
              </MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <img
                  src={currentSong && currentSong?.image}
                  alt=""
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  onClick={handlePlayPause} // use updated play/pause handler
                  className={isPlaying ? "rotate-image" : ""} // add class conditionally
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                <Typography variant="h5">
                  {currentSong && currentSong?.title}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <Typography variant="subtitle1">
                  {currentSong && currentSong?.artist.slice(0, -1)}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="subtitle2">
                  {currentSong && currentSong.genre}
                </Typography>
              </div>
            </MDBModalBody>
            <MDBModalFooter
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: "flex",
                  marginLeft: "8rem",
                  width: "20%",
                  alignItems: "center",
                }}
              >
                <SkipPreviousIcon
                  sx={{ color: "lime", "&:hover": { color: "white" } }}
                  onClick={playPreviousSong}
                />
                <FastRewindIcon
                  sx={{ color: "lime", "&:hover": { color: "white" } }}
                  onClick={toggleBackward}
                />

                <FastForwardIcon
                  sx={{ color: "lime", "&:hover": { color: "white" } }}
                  onClick={toggleForward}
                />
                <SkipNextIcon
                  sx={{ color: "lime", "&:hover": { color: "white" } }}
                  onClick={playNextSong}
                />
              </Stack>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
