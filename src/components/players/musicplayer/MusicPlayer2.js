import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  styled,
  Typography,
  Slider,
  Paper,
  Stack,
  useMediaQuery,
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

// Serve audio and cover from public to avoid build hash/caching issues.
const ItsBurning = "/music/ajani/track01-its-burning.mp3";
const JahOurRedeemer = "/music/ajani/track02-jah-our-redeemer.mp3";
const WeNeedAMoses = "/music/ajani/track03-we-need-a-moses.mp3";
const SatisfyMySoul = "/music/ajani/track04-satisfy-my-soul.mp3";
const PlasticSmile = "/music/ajani/track05-plastic-smile.mp3";
const SilentVoices = "/music/ajani/track06-silent-voices.mp3";
const SpecialInvitation = "/music/ajani/track07-special-invitation.mp3";
const EspeNkosi = "/music/ajani/track08-espe-nkosi.mp3";
const MySunshine = "/music/ajani/track09-my-sunshine.mp3";
const PickMyselfUp = "/music/ajani/track10-pick-myself-up.mp3";
const Junie = "/music/ajani/track11-junie.mp3";
const SilentPict = "/music/ajani/cover-silent-voices.jpg";

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
  background: "white",
};

function MusicPlayer2({ isDarkMode }) {
  const [playlist, setPlaylist] = useState([
    {
      src: ItsBurning,
      title: "It´s Burning",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: JahOurRedeemer,
      title: "Jah Our Redeemer",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: WeNeedAMoses,
      title: "We Need A Moses",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: SatisfyMySoul,
      title: "Satisfy My Soul",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: PlasticSmile,
      title: "Plastic Smile",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: SilentVoices,
      title: "Silent Voices",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: SpecialInvitation,
      title: "Special Invitation",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: EspeNkosi,
      title: "Espe´ Nkosi",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: MySunshine,
      title: "My Sunshine",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: PickMyselfUp,
      title: "Pick Myself Up",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
    },
    {
      src: Junie,
      title: "Junie",
      artist: "Ajani",
      genre: "Reggae",
      image: SilentPict,
      album: "Silent Voices",
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
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Add a state to keep track of the scrolling position
  const [scrollPosition, setScrollPosition] = useState(0);

  // State and Ref variables
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const animationRef = useRef(null);
  const currentIndexRef = useRef(0);
  const isIOS = /iPad|iPhone|iPod/.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  );

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
    console.debug("[MusicPlayer2] setCurrentSong", {
      index,
      src: playlist[index]?.src,
      length: playlist.length,
    });
    currentIndexRef.current = index;
  }, [index, playlist]);

// Load the current track into the audio element whenever the index changes,
// and auto-play if we were already playing.
useEffect(() => {
  const audio = audioPlayer.current;
  if (!audio || !playlist[index]) return;

  audio.src = playlist[index].src;
  audio.load();

  if (isPlaying) {
    audio
      .play()
      .then(() => {
        setDuration(audio.duration || 0);
      })
      .catch((err) => {
        console.error("Error playing audio:", err);
        setIsPlaying(false);
      });
  }
}, [index, isPlaying, playlist]);

const handleEnded = useCallback(() => {
  const nextIndex = (index + 1) % playlist.length;
  setIndex(nextIndex);
  // if you want to auto-continue play, you can also keep isPlaying true here, etc.
}, [index, playlist, setIndex]); // add deps as needed

  //     console.log("mediaElement", mediaElement);
  //     audioPlayer.current.volume = volume / 100;
  //     audioPlayer.current.src = playlist[index].src;
  //     setCurrentSong(playlist[index]);
  //     audioPlayer.current.load();
  //     audioPlayer.current.addEventListener("canplaythrough", () => {
  //       if (isPlaying) {
  //         audioPlayer.current.play();
  //       }
  //       setDuration(audioPlayer?.current?.duration);
  //       setIsLoaded(true);
  //     });

  //     audioPlayer.current.addEventListener("timeupdate", () => {
  //       setElapsed(audioPlayer?.current?.currentTime);
  //     });

  //     audioPlayer.current.addEventListener("ended", handleEnded);
  //     audioPlayer.current.addEventListener("volumechange", () => {
  //       setVolume(audioPlayer.current.volume * 100);
  //     });

  //     return () => {
  //       if (audioPlayer.current) {
  //         audioPlayer.current.removeEventListener("ended", handleEnded);
  //         audioPlayer.current.removeEventListener("canplaythrough", () => {});
  //         audioPlayer.current.removeEventListener("timeupdate", () => {});
  //         audioPlayer.current.removeEventListener("volumechange", () => {});
  //       }
  //     };
  //   }
  // }, [volume, playlist, index]);

  // useEffect(() => {
  //   if (!audioPlayer.current) return;
  //   const audio = audioPlayer.current;

  //   setMediaElement(audio);
  //   console.log("mediaElement", audio);
  //   audio.volume = volume / 100;
  //   audio.src = playlist[index].src;
  //   setCurrentSong(playlist[index]);
  //   audio.load();

  //   const handleCanPlayThrough = () => {
  //     if (isPlaying) {
  //       audio.play();
  //     }
  //     setDuration(audio.duration);
  //     setIsLoaded(true);
  //   };

  //   const handleTimeUpdate = () => {
  //     setElapsed(audio.currentTime);
  //   };

  //   const handleVolumeChange = () => {
  //     setVolume(audio.volume * 100);
  //   };

  //   const handleAudioEnded = handleEnded; // your function

  //   audio.addEventListener("canplaythrough", handleCanPlayThrough);
  //   audio.addEventListener("timeupdate", handleTimeUpdate);
  //   audio.addEventListener("volumechange", handleVolumeChange);
  //   audio.addEventListener("ended", handleAudioEnded);

  //   return () => {
  //     audio.removeEventListener("canplaythrough", handleCanPlayThrough);
  //     audio.removeEventListener("timeupdate", handleTimeUpdate);
  //     audio.removeEventListener("volumechange", handleVolumeChange);
  //     audio.removeEventListener("ended", handleAudioEnded);
  //   };
  // }, [volume, playlist, index, isPlaying, handleEnded]);
  // -----UseEffect-Functions

  // A-Load-A new Song
  useEffect(() => {
    if (!audioPlayer.current) return;
    const audio = audioPlayer.current;

    setMediaElement(audio);
    audio.volume = volume / 100;
    audio.src = playlist[index].src;
    setCurrentSong(playlist[index]);
    audio.load();

    const handleCanPlayThrough = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    const handleTimeUpdate = () => {
      setElapsed(audio.currentTime);
    };

    const handleAudioEnded = handleEnded; // useCallback above

    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, [playlist, index, handleEnded]);

  // Add Visualiser
  //   if (!audio) return;

  //   setMediaElement(audio);
  //   console.log("mediaElement", audio);
  //   audio.src = playlist[index].src;
  //   setCurrentSong(playlist[index]);
  //   audio.load();

  //   const handleCanPlayThrough = () => {
  //     if (isPlaying) {
  //       audio
  //         .play()
  //         .then(() => {
  //           drawVisualizer();
  //         })
  //         .catch((err) => {
  //           console.warn("Play error:", err);
  //         });
  //     }
  //     setDuration(audio.duration);
  //     setIsLoaded(true);
  //   };

  //   const handleTimeUpdate = () => {
  //     setElapsed(audio.currentTime);
  //   };

  //   const handleVolumeChange = () => {
  //     setVolume(audio.volume * 100);
  //   };

  //   const handleAudioEnded = handleEnded;

  //   audio.addEventListener("canplaythrough", handleCanPlayThrough);
  //   audio.addEventListener("timeupdate", handleTimeUpdate);
  //   audio.addEventListener("volumechange", handleVolumeChange);
  //   audio.addEventListener("ended", handleAudioEnded);

  //   return () => {
  //     // When unmounting, audio might already be null (StrictMode / ref cleared)
  //     if (!audio) return;

  //     audio.removeEventListener("canplaythrough", handleCanPlayThrough);
  //     audio.removeEventListener("timeupdate", handleTimeUpdate);
  //     audio.removeEventListener("volumechange", handleVolumeChange);
  //     audio.removeEventListener("ended", handleAudioEnded);
  //   };
  // }, [playlist, index, isPlaying, handleEnded, drawVisualizer]);

  // Play A Song

  // useEffect(() => {
  //   const audio = audioPlayer.current;
  //   if (!audio) return;

  //   if (isPlaying) {
  //     // if not ready yet, wait for canplaythrough once
  //     if (audio.readyState >= 2) {
  //       audio
  //         .play()
  //         .then(() => {
  //           console.log("Audio play successful");
  //           drawVisualizer();
  //         })
  //         .catch((error) => {
  //           console.error("Error playing audio:", error);
  //         });
  //     } else {
  //       const onCanPlay = () => {
  //         audio
  //           .play()
  //           .then(() => {
  //             console.log("Audio play successful (after canplaythrough)");
  //             drawVisualizer();
  //           })
  //           .catch((error) => {
  //             console.error("Error playing audio:", error);
  //           });
  //         audio.removeEventListener("canplaythrough", onCanPlay);
  //       };
  //       audio.addEventListener("canplaythrough", onCanPlay);
  //     }
  //   } else {
  //     if (!audio.paused) {
  //       audio.pause();
  //       console.log("Audio paused");
  //     }
  //   }
  // }, [isPlaying, drawVisualizer]);

  const setupAudioGraph = useCallback(() => {
    if (isIOS) return null; // skip Web Audio on iOS to avoid playback blocks
    const element = audioPlayer.current;
    if (!element) return null;

    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }

    const audioCtx = audioContextRef.current;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (!sourceNodeRef.current) {
      try {
        sourceNodeRef.current = audioCtx.createMediaElementSource(element);
      } catch (error) {
        console.error("Error creating media element source", error);
        return null;
      }
    }

    let analyser = analyserRef.current;
    try {
      if (!analyser) {
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;
      }

      sourceNodeRef.current.disconnect();
      analyser.disconnect();
      sourceNodeRef.current.connect(analyser);
      analyser.connect(audioCtx.destination);

      const bufferLength = analyser.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);

      return analyser;
    } catch (err) {
      console.error("Analyser setup failed, falling back to direct audio", err);
      try {
        sourceNodeRef.current.disconnect();
        sourceNodeRef.current.connect(audioCtx.destination);
      } catch (e) {
        console.error("Direct audio fallback failed", e);
      }
      return null;
    }
  }, []);

  const stopVisualizer = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const startVisualizer = useCallback(() => {
    const analyser = setupAudioGraph();
    const canvas = canvasRef.current;
    const dataArray = dataArrayRef.current;
    if (!analyser || !canvas || !dataArray) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!canvas.width) canvas.width = canvas.offsetWidth || 800;
    if (!canvas.height) canvas.height = canvas.offsetHeight || 200;

    const bufferLength = dataArray.length;
    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#b8f2e6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const hue = (i / bufferLength) * 360;

        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    stopVisualizer();
    draw();
  }, [setupAudioGraph, stopVisualizer]);

  useEffect(() => {
    return () => {
      stopVisualizer();
      if (sourceNodeRef.current) {
        try {
          sourceNodeRef.current.disconnect();
        } catch (e) {}
      }
      if (analyserRef.current) {
        try {
          analyserRef.current.disconnect();
        } catch (e) {}
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, [stopVisualizer]);

  useEffect(() => {
    const audio = audioPlayer.current;
    if (!audio) return;

    // On iOS, skip Web Audio graph and just play/pause directly
    if (isIOS) {
      if (isPlaying) {
        audio
          .play()
          .catch((error) => console.error("iOS play error:", error));
      } else if (!audio.paused) {
        audio.pause();
      }
      return;
    }

    if (!audioContextRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioCtx();
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume();
    }

    if (isPlaying) {
      if (audio.readyState >= 2) {
        audio
          .play()
          .then(() => {
            console.log("Audio play successful");
            startVisualizer();
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      } else {
        const onCanPlay = () => {
          audio
            .play()
            .then(() => {
              console.log("Audio play successful (after canplaythrough)");
              startVisualizer();
            })
            .catch((error) => {
              console.error("Error playing audio:", error);
            });
          audio.removeEventListener("canplaythrough", onCanPlay);
        };
        audio.addEventListener("canplaythrough", onCanPlay);
      }
    } else {
      if (!audio.paused) {
        audio.pause();
        console.log("Audio paused");
      }
      stopVisualizer();
    }
  }, [isPlaying, startVisualizer, stopVisualizer]);

  // Volune Function
  useEffect(() => {
    if (!audioPlayer.current) return;
    audioPlayer.current.volume = volume / 100;
    audioPlayer.current.muted = mute;
  }, [volume, mute]);
  // Time format Function
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
    const audio = audioPlayer.current;
    if (!audio) return;

    if (!audio.src) {
      audio.load();
    }

    if (!isIOS) {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
    }

    if (!isPlaying) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          if (!isIOS) startVisualizer();
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
      stopVisualizer();
    }
  };
  // const togglePlay = () => {
  //   const audio = audioPlayer.current;
  //   if (!audio) return;

  //   if (!isPlaying) {
  //     audio
  //       .play()
  //       .then(() => {
  //         console.log("Audio play successful");
  //         setIsPlaying(true);
  //         drawVisualizer(); // Call drawVisualizer when starting to play
  //       })
  //       .catch((error) => {
  //         console.error("Error playing audio:", error);
  //       });
  //   } else {
  //     audio.pause();
  //     setIsPlaying(false);
  //     console.log("Audio paused");
  //   }
  // };

  // iOS: render a minimal native player to avoid Web Audio/visualizer issues
  if (isIOS) {
    const iconColor = isDarkMode ? "white" : "black";
    const activeColor = "#ff4d4d";
    const playColor = isPlaying ? "#4caf50" : iconColor;

    return (
      <Div style={{ position: "relative", top: playerPosition.y }}>
        <CustomPaper elevation={5}>
          <Stack sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography
              sx={{ color: isDarkMode ? "white" : "black", textAlign: "center" }}
            >
              {currentSong?.title || "Track"}
            </Typography>
            <Typography
              sx={{ color: isDarkMode ? "white" : "black", textAlign: "center" }}
            >
              {currentSong?.artist || "Ajani"}
            </Typography>
          <img
            src={currentSong?.image || SilentPict}
            alt="Cover"
            style={{ width: 140, height: 140, borderRadius: "50%" }}
          />
          <Stack direction="row" spacing={2} justifyContent="center">
            <SkipPreviousIcon
              sx={{ color: iconColor, "&:active": { color: activeColor } }}
              fontSize="large"
              onClick={playPreviousSong}
            />
            {!isPlaying ? (
              <PlayArrowIcon
                sx={{ color: playColor, "&:active": { color: activeColor } }}
                fontSize="large"
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                sx={{ color: playColor, "&:active": { color: activeColor } }}
                fontSize="large"
                onClick={togglePlay}
              />
            )}
            <SkipNextIcon
              sx={{ color: iconColor, "&:active": { color: activeColor } }}
              fontSize="large"
              onClick={playNextSong}
            />
          </Stack>
            <audio
              key={currentSong?.src || index}
              ref={audioPlayer}
              src={currentSong?.src}
              preload="metadata"
              playsInline
              crossOrigin="anonymous"
              style={{ width: "100%", display: "none" }}
            />
          </Stack>
        </CustomPaper>
      </Div>
    );
  }

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
        startVisualizer(); // start visualizer when starting to play
      }
      // Remove the event listener to avoid multiple bindings
      audioPlayer.current.removeEventListener("canplaythrough", () => {});
    });
  };

  //   const nextIndex = (index + 1) % playlist.length;
  //   setIndex(nextIndex);
  //   audioPlayer.current.src = playlist[nextIndex].src;
  //   audioPlayer.current.play();
  //   setIsPlaying(true);
  // };

  // const playPreviousSong = () => {
  //   const nextIndex = index - 1 < 0 ? playlist.length - 1 : index - 1;
  //   setIndex(nextIndex);
  //   audioPlayer.current.src = playlist[nextIndex].src;
  //   audioPlayer.current.play();
  //   setIsPlaying(true);
  // };

  //  Analyser
  const playTrackAt = (target) => {
    if (!playlist.length) return;
    const len = playlist.length;
    const normalized = ((target % len) + len) % len;
    const nextSong = playlist[normalized];
    const audio = audioPlayer.current;

    console.debug("[MusicPlayer2] playTrackAt", {
      target,
      normalized,
      nextSrc: nextSong?.src,
      length: len,
      isIOS,
    });

    setIndex(normalized);
    setCurrentSong(nextSong);
    currentIndexRef.current = normalized;

    if (audio && nextSong) {
      audio.pause();
      audio.src = nextSong.src;
      audio.load();
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise && playPromise.then) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Play error:", err);
            setIsPlaying(false);
          });
      } else {
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(true);
    }
  };

  const playNextSong = () => playTrackAt(currentIndexRef.current + 1);
  const playPreviousSong = () => playTrackAt(currentIndexRef.current - 1);

  // JSX
  return (
    <Div style={{ position: "relative", top: playerPosition.y }}>
      {currentSong && (
        <audio
          src={currentSong.src}
          ref={audioPlayer}
          muted={mute}
          preload="metadata"
          playsInline
          crossOrigin="anonymous"
          crossOrigin="anonymous"
        />
      )}
      <CustomPaper elevation={5}>
        <Stack sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Display song title and artist with scrolling effect */}
          <Stack
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "20px",
              marginLeft: "50px",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                whiteSpace: "nowrap",
                color: isDarkMode ? "white" : "black",
                animation: "marquee 10s linear infinite", // Use CSS animation
                "@keyframes marquee": {
                  from: {
                    transform: "translateX(100%)", // Start offscreen to the right
                  },
                  to: {
                    transform: "translateX(-100%)", // Move offscreen to the left
                  },
                },
              }}
            >
              {currentSong?.title &&
                currentSong?.artist &&
                currentSong?.album &&
                `${currentSong.title} - ${currentSong.artist} - ${currentSong.album}`}
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
              justifyContent: "center",
              width: "100%",
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
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SkipPreviousIcon
              sx={{
                color: isDarkMode ? "red" : "black",
                "&:hover": { color: isDarkMode ? "white" : "red" },
              }}
              onClick={playPreviousSong}
              fontSize={"large"}
            />
            <FastRewindIcon
              sx={{
                color: isDarkMode ? "red" : "black",
                "&:hover": { color: isDarkMode ? "white" : "red" },
              }}
              onClick={toggleBackward}
            />
            {!isPlaying ? (
              <PlayArrowIcon
                fontSize={"large"}
                sx={{
                  color: isDarkMode ? "white" : "red",
                  "&:hover": { color: isDarkMode ? "red" : "lime" },
                }}
                onClick={togglePlay}
              />
            ) : (
              <PauseIcon
                fontSize={"large"}
                sx={{
                  color: isDarkMode ? "lime" : "red",
                  "&:hover": { color: isDarkMode ? "red" : "lime" },
                }}
                onClick={togglePlay}
              />
            )}
            <FastForwardIcon
              sx={{
                color: isDarkMode ? "red" : "black",
                "&:hover": { color: isDarkMode ? "white" : "red" },
              }}
              onClick={toggleForward}
            />
            <SkipNextIcon
              sx={{
                color: isDarkMode ? "red" : "black",
                "&:hover": { color: isDarkMode ? "white" : "red" },
              }}
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
          <Typography
            sx={{
              color: isDarkMode ? "white" : "black",
              "&:hover": { color: "red" },
            }}
          >
            {formatTime(elapsed)}
          </Typography>
          <PSlider thumbless="true" value={elapsed} max={duration} />
          <Typography
            sx={{
              color: isDarkMode ? "white" : "black",
              "&:hover": { color: "white" },
            }}
          >
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
        ></Stack>

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
              onMouseEnter={() => {
                if (isPlaying) startVisualizer();
              }}
            />
          </div>
        </Stack>
      </CustomPaper>
    </Div>
  );
}

export default MusicPlayer2;
