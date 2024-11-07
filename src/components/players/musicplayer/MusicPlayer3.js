import React, { useState, useEffect, useRef } from "react";
import {
  styled,
  Typography,
  Slider,
  Paper,
  Stack,useMediaQuery

} from "@mui/material";



//#region-------------Icons-------------
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
// ----------------------------------------------
import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
//#region-------------------Tracks----------------------




import DanceInTheMoonlight from "../../../musicassets/kaya-t-mp3/01 - Kaya T - Dance in the Moonlight 03.mp3"
import Music from "../../../musicassets/kaya-t-mp3/02 - Kaya T - Music 03.mp3"
import Questions from "../../../musicassets/kaya-t-mp3/03 - Kaya T - Questions 03.mp3"
import NeverLetYouGo from "../../../musicassets/kaya-t-mp3/04 - Kaya T - Never Let You Go 03.mp3"
import RunAwayFromYou from "../../../musicassets/kaya-t-mp3/05 - Kaya T - Runaway 03.mp3"
import How from "../../../musicassets/kaya-t-mp3/06 - Kaya T - How 03.mp3"
import Why from "../../../musicassets/kaya-t-mp3/07 - Kaya T - Why 03.mp3"
import ShowALikkle from "../../../musicassets/kaya-t-mp3/08 - Kaya T - Show A Likkle 03.mp3"
import Mj from "../../../musicassets/kaya-t-mp3/09 - Kaya T - MJ 03.mp3"
import InLine from "../../../musicassets/kaya-t-mp3/10 - Kaya T - In Line 03.mp3"
import Wednesday from "../../../musicassets/kaya-t-mp3/11 - Kaya T - Wednesday 03.mp3"
import KayaTPict from "../../../musicassets/kaya-t-mp3/kaya-t.png";
// #region--------------STYLED COMPONENTS------------------------------
const Div = styled("div")(() => ({
  backgroundColor: "cec6c3",
  height: "40vh",
  width: "50%",
  paddingTop: 4,
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  borderRadius: "10px",
}));

const CustomPaper = styled(Paper)(({ ...props }) => ({
  marginLeft: 8,
  marginRight: 8,
  marginTop: 50,
  marginBottom: 10,
  padding: 40,
  width: "75vw",
  borderRadius: "10px",
  background: "hsla(0, 0%, 100%, 0.1)",
  backdropFilter: "blur(30px)",
}));

const PSlider = styled(Slider)(({ ...props }) => ({
  color: "lime",
  height: 2,
  "&:hover": { cursor: "auto" },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));

const canvasStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0, 
};



function MusicPlayer2({isDarkMode}) {
  const [playlist, setPlaylist] = useState([
    {
      src: DanceInTheMoonlight,
      title: "Dance In The Moonlight",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict,
      album:"Kaya-T"
    },
    {
      src: Music,
      title: "Music",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: Questions,
      title: "Questions",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: NeverLetYouGo,
      title: "Never let You Go",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src:RunAwayFromYou,
      title: "Run Away From You",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: How,
      title: "How",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: Why,
      title: "Why",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: ShowALikkle,
      title: "Show A Likkle",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"

    },
    {
      src:Mj,
      title: "Mj",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: InLine,
      title: "In Line",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
    {
      src: Wednesday,
      title: "Wednesday",
      artist: "Kaya-T",
      genre: "Reggae",
      image: KayaTPict, album:"Kaya-T"
    },
  ]);

  const [mediaElement, setMediaElement] = useState(null);
  const [staticModal, setStaticModal] = useState(false);

  const [index, setIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(10);
  const [mute, setMute] = useState(false);
  const audioPlayer = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });


  const isNonMobile = useMediaQuery("(min-width:600px)");

  const isDesktop = useMediaQuery("(min-width:1024px)");
const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));


    // Add a state to keep track of the scrolling position
    const [scrollPosition, setScrollPosition] = useState(0);

  // State and Ref variables
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [analyser, setAnalyser] = useState(null);
  const [visualizerOn, setVisualizerOn] = useState(false);






  // Modify the handleEnded function


   // Use useEffect to update the scrolling position periodically
   useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => prevPosition + 1);
    }, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    setCurrentSong(playlist[index]);
  }, [index, playlist]);

  useEffect(() => {
    if (audioPlayer.current) {
      setMediaElement(audioPlayer.current);
      console.log("mediaElement", mediaElement);
      audioPlayer.current.volume = volume / 100;
      audioPlayer.current.src = playlist[index].src;
      setCurrentSong(playlist[index]);
      audioPlayer.current.load();
      audioPlayer.current.addEventListener("canplaythrough", () => {
        if (isPlaying) {
          audioPlayer.current.play();
        }
        setDuration(audioPlayer?.current?.duration);
        setIsLoaded(true);
      });

      audioPlayer.current.addEventListener("timeupdate", () => {
        setElapsed(audioPlayer?.current?.currentTime);
      });

      audioPlayer.current.addEventListener("ended", handleEnded);
      audioPlayer.current.addEventListener("volumechange", () => {
        setVolume(audioPlayer.current.volume * 100);
      });
 

      return () => {
        if (audioPlayer.current) {
          audioPlayer.current.removeEventListener("ended", handleEnded);
          audioPlayer.current.removeEventListener("canplaythrough", () => {});
          audioPlayer.current.removeEventListener("timeupdate", () => {});
          audioPlayer.current.removeEventListener("volumechange", () => {});
        }
      };
    }
  }, [volume, playlist, index]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  // ---PLAY

const togglePlay = () => {
  if (!isPlaying) {
    if (isLoaded && audioPlayer.current.readyState >= 2) {
      audioPlayer.current.play().then(() => {
        console.log("Audio play successful");
        setIsPlaying(true);
        drawVisualizer(); // Call drawVisualizer when starting to play
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    } else {
      console.log("Audio not loaded or ready. Waiting for canplaythrough event.");
      // You can optionally add a loading indicator or handle this case differently.
    }
  } else {
    audioPlayer.current.pause();
    setIsPlaying(false);
    console.log("Audio paused");
  }
};


const handleEnded = () => {
  const nextIndex = (index + 1) % playlist.length;
  setIndex(nextIndex);

  // Set a flag to check whether the audio is currently playing
  const isCurrentlyPlaying = isPlaying;

  audioPlayer.current.pause(); // Pause the current audio

  audioPlayer.current.src = playlist[nextIndex].src;
  audioPlayer.current.load(); // Load the new audio

  // Use the canplaythrough event to ensure the new audio is loaded before playing
  audioPlayer.current.addEventListener("canplaythrough", () => {
    if (isCurrentlyPlaying) {
      audioPlayer.current.play();
      setIsPlaying(true);
    }
    // Remove the event listener to avoid multiple bindings
    audioPlayer.current.removeEventListener("canplaythrough", () => {});
  });
};



  function VolumeBtns() {
    return mute ? (
      <VolumeOffIcon
        sx={{ color: "black", "&:hover": { color: "red" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 20 ? (
      <VolumeMuteIcon
        sx={{ color: "black", "&:hover": { color: "red" } }}
        onClick={() => setMute(!mute)}
      />
    ) : volume <= 75 ? (
      <VolumeDownIcon
        sx={{ color: "black", "&:hover": { color: "red" } }}
        onClick={() => setMute(!mute)}
      />
    ) : (
      <VolumeUpIcon
        sx={{ color: "black", "&:hover": { color: "red" } }}
        onClick={() => setMute(!mute)}
      />
    );
  }

  const toggleBackward = () => {
    if (audioPlayer.current.readyState >= 2) {
      audioPlayer.current.currentTime -= 10;
    } else {
      handleLoadAndPlay();
    }
  };
  
  const toggleForward = () => {
    if (audioPlayer.current.readyState >= 2) {
      audioPlayer.current.currentTime += 10;
    } else {
      handleLoadAndPlay();
    }
  };
  
  const handleLoadAndPlay = () => {
    const nextIndex = (index + 1) % playlist.length;
    setIndex(nextIndex);
  
    const isCurrentlyPlaying = isPlaying;
  
    audioPlayer.current.pause(); // Pause the current audio
  
    audioPlayer.current.src = playlist[nextIndex].src;
    audioPlayer.current.load(); // Load the new audio
  
    // Use the canplaythrough event to ensure the new audio is loaded before playing
    audioPlayer.current.addEventListener("canplaythrough", () => {
      if (isCurrentlyPlaying) {
        audioPlayer.current.play();
        setIsPlaying(true);
        drawVisualizer(); // Call drawVisualizer when starting to play
      }
      // Remove the event listener to avoid multiple bindings
      audioPlayer.current.removeEventListener("canplaythrough", () => {});
    });
  };
  

  const playNextSong = () => {
    const nextIndex = (index + 1) % playlist.length;
    setIndex(nextIndex);
    audioPlayer.current.src = playlist[nextIndex].src;
    audioPlayer.current.play();
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    const nextIndex = index - 1 < 0 ? playlist.length - 1 : index - 1;
    setIndex(nextIndex);
    audioPlayer.current.src = playlist[nextIndex].src;
    audioPlayer.current.play();
    setIsPlaying(true);
  };



  //  Analyser
 

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.addEventListener("canplaythrough", () => {
        setupAnalyser();
        if (isPlaying) {
          audioPlayer.current.play();
        }
      });
  
      return () => {
        audioPlayer.current.removeEventListener("canplaythrough", () => {});
      };
    }
  }, [audioPlayer, isPlaying]);
  
  // function setupAnalyser() {
  //   // Check if analyser is already set up
  //   if (analyser) {
  //     return;
  //   }
  
  //   const audioContext = new AudioContext();
  
  //   // Check if the audio player is already connected to a source node
  //   if (audioPlayer.current.srcObject) {
  //     const sourceNode = audioContext.createMediaElementSource(audioPlayer.current);
  //     const analyserNode = audioContext.createAnalyser();
  //     analyserNode.fftSize = 256;
  
  //     // Connect the source node to the analyser only if it's not already connected
  //     if (!sourceNode.connect(analyserNode)) {
  //       sourceNode.disconnect();
  //       sourceNode.connect(analyserNode);
  //     }
  
  //     analyserNode.connect(audioContext.destination);
  //     setAnalyser(analyserNode);
  
  //     // Start the visualizer when the audio starts playing
  //     drawVisualizer();
  //   }
  // }
  function setupAnalyser() {
    // Check if analyser is already set up
    if (analyser) {
      return;
    }
  
    const audioContext = new AudioContext();
  
    // Check if the audio player is already connected to a source node
    if (audioPlayer.current && audioPlayer.current.src) {
      try {
        // Try to create a new source node
        const sourceNode = audioContext.createMediaElementSource(audioPlayer.current);
        const analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 256;
  
        // Connect the source node to the analyser
        sourceNode.connect(analyserNode);
        analyserNode.connect(audioContext.destination);
        setAnalyser(analyserNode);
  
        // Start the visualizer when the audio starts playing
        drawVisualizer();
      } catch (error) {
        // If an error occurs, it means the audio player is already connected
        console.error("Error creating source node:", error);
  
        // You can add additional handling here if needed
      }
    }
  }
  
  
  
  

  function drawVisualizer() {


    if (!analyser) {
      console.error("Analyser not set up");
      return;
    }
  const canvas = canvasRef.current;
  const canvasCtx = canvas.getContext("2d");
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  

  function draw() {
    animationRef.current = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);

    // Clear the canvas only once
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    canvasCtx.fillStyle = "#b8f2e6";
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i];
      const hue = (i / bufferLength) * 360; // Map the frequency index to a color

      canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
      canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }

  draw();
}

// function drawVisualizer() {
//   const canvas = canvasRef.current;
//   const canvasCtx = canvas.getContext("2d");
//   const bufferLength = analyser.frequencyBinCount;
//   const dataArray = new Uint8Array(bufferLength);

//   function draw() {
//     animationRef.current = requestAnimationFrame(draw);
//     analyser.getByteFrequencyData(dataArray);

//     // Clear the canvas only once
//     canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
//     canvasCtx.fillStyle = "#b8f2e6";
//     canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

//     const angleIncrement = (2 * Math.PI) / bufferLength;
//     const radius = 100;

//     for (let i = 0; i < bufferLength; i++) {
//       const amplitude = dataArray[i] / 2; // Adjust amplitude for better visualization
//       const angle = i * angleIncrement;
//       const x = canvas.width / 2 + radius * Math.cos(angle) * amplitude;
//       const y = canvas.height / 2 + radius * Math.sin(angle) * amplitude;

//       const hue = (i / bufferLength) * 360; // Map the frequency index to a color
//       canvasCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;

//       canvasCtx.beginPath();
//       canvasCtx.arc(x, y, amplitude, 0, 2 * Math.PI);
//       canvasCtx.fill();
//     }
//   }

//   draw();
// }





  // Effect Hooks



  useEffect(() => {
    if (analyser && visualizerOn) {
      drawVisualizer();
    } else {
      cancelAnimationFrame(animationRef.current);
    }
  }, [analyser, visualizerOn]);

  // JSX
  return (
    <Div style={{ position: "relative", top: playerPosition.y }}>
    
      {currentSong && (
        <audio src={currentSong.src} ref={audioPlayer} muted={false} />
      )}
      <CustomPaper elevation={5}>
        <Stack sx={{ display: "flex", justifyContent: "space-between" }}>

          {/* Display song title and artist with scrolling effect */}
          <Stack sx={{ position: "relative", overflow: "hidden", height: "20px", marginLeft:"50px"}}>
          <Typography
      sx={{
        position: "absolute",
        whiteSpace: "nowrap", color: isDarkMode ? "white" :"black",
        animation: "marquee 10s linear infinite", // Use CSS animation
        '@keyframes marquee': {
          from: {
            transform: 'translateX(100%)', // Start offscreen to the right
          },
          to: {
            transform: 'translateX(-100%)', // Move offscreen to the left
          },
        },
      }}
    >
      {currentSong?.title && currentSong?.artist && currentSong?.album &&`${currentSong.title} - ${currentSong.artist} - ${currentSong.album}`}
    </Typography>
        </Stack>

                       {/* Album Cover */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5px",
              
            }}
          >
            <img
              src={currentSong?.image} // Use the image property from the current song
              alt="Album Cover"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          </Stack>
                      {/* Volume-Slider */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              width: "25%",
              alignItems: "center",
            }}
          >
            <VolumeBtns />
            <PSlider
              min={0}
              max={100}
              value={volume}
              onChange={(e, v) => setVolume(v)}
            />
          </Stack>
                       {/* Controls */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              width: "40%",
              alignItems: "center",marginLeft:isNonMobile ?(isDesktop ? "130px": "140px")  : "80px",
            }}
          >
            <SkipPreviousIcon
              sx={{ color: isDarkMode ? "red" : "black", "&:hover": { color:isDarkMode ? "white": "red" } }}
              onClick={playPreviousSong}
              fontSize={"large"}
            />
            <FastRewindIcon
              sx={{color: isDarkMode ? "red" : "black", "&:hover": { color: isDarkMode ? "white": "red" } }}
              onClick={toggleBackward}
            />
            {!isPlaying ? (
              <PlayArrowIcon
                fontSize={"large"}
                sx={{ color: isDarkMode ?"white":"red", "&:hover": { color:isDarkMode ? "red" :"lime" } }}
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                fontSize={"large"}
                sx={{color: isDarkMode ?"lime":"red", "&:hover": {color:isDarkMode ? "red" :"lime" } }}
                onClick={togglePlay}
              />
            )}
            <FastForwardIcon
              sx={{color: isDarkMode ? "red" : "black", "&:hover": { color: isDarkMode ? "white": "red"  } }}
              onClick={toggleForward}
            />
            <SkipNextIcon
              sx={{ color: isDarkMode ? "red" : "black", "&:hover": {color: isDarkMode ? "white": "red"  } }}
              onClick={playNextSong}
              fontSize={"large"}
            />
          </Stack>

                        {/* Timebar */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </Stack>

                        {/* Visualiser */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color:isDarkMode ? "white" :"black", "&:hover": { color: "red" } }}>
            {formatTime(elapsed)}
          </Typography>
          <PSlider thumbless="true" value={elapsed} max={duration} />
          <Typography sx={{ color:isDarkMode ? "white" :"black", "&:hover": { color: "white" } }}>
            {formatTime(duration - elapsed)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
       
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "5px",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "black ",
              width: "400px",
              height: "200px",
            }}
          >
            <canvas
              style={canvasStyle}
              ref={canvasRef}
              onMouseEnter={() => setVisualizerOn(true)}
              // onMouseLeave={() => setVisualizerOn(false)} 
            
            />
          </div>
        </Stack>
      </CustomPaper>
    </Div>
  );
}

export default MusicPlayer2
