import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import {
  styled,
  Typography,
  Slider,
  Paper,
  Stack,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { HerbContext } from "../../../context/Context";
import axios from "axios";
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

import ItsBurning from "../../../musicassets/ajani-mp3/01 - it´s burning 004.mp3";
import JahOurRedeemer from "../../../musicassets/ajani-mp3/02 - jah our redeemer 003.mp3";
import WeNeedAMoses from "../../../musicassets/ajani-mp3/03 - we need a moses 002.mp3";
import SatisfyMySoul from "../../../musicassets/ajani-mp3/04 - Satisfy My Soul 002.mp3";
import PlasticSmile from "../../../musicassets/ajani-mp3/05 - plastic smile 002.mp3";
import SilentVoices from "../../../musicassets/ajani-mp3/06 - silent voices 002.mp3";
import SpecialInvitation from "../../../musicassets/ajani-mp3/07 - special invitation003.mp3";
import EspeNkosi from "../../../musicassets/ajani-mp3/08 - Espe Nkosi 004.mp3";
import MySunshine from "../../../musicassets/ajani-mp3/09 - my sunshine 003.mp3";
import PickMyselfUp from "../../../musicassets/ajani-mp3/10 - pick myself up 004.mp3";
import Junie from "../../../musicassets/ajani-mp3/11 - junie 005.mp3";
import SilentPict from "../../../musicassets/ajani-mp3/silent voices cover.jpg";

// #region--------------STYLED COMPONENTS------------------------------
const Div = styled("div")(() => ({
  backgroundColor: "cec6c3",
  height: "auto",
  width: "100%",
  maxWidth: "420px",
  paddingTop: 4,
  display: "flex",
  justifyContent: "center",
  margin: "0 auto",
  borderRadius: "10px",
}));

const CustomPaper = styled(Paper)(({ ...props }) => ({
  marginLeft: 8,
  marginRight: 8,
  marginTop: 24,
  marginBottom: 10,
  padding: 24,
  width: "100%",
  maxWidth: "420px",
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
  height: "140px",
  display: "block",
  borderRadius: "8px",
  background: "black",
};

const fallbackPlaylist = [
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
];

function MusicPlayer2({ isDarkMode }) {
  const [playlist, setPlaylist] = useState(fallbackPlaylist);

  const [mediaElement, setMediaElement] = useState(null);
  const [staticModal, setStaticModal] = useState(false);

  const [index, setIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(10);
  const [mute, setMute] = useState(false);
  const audioPlayer = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const animationRef = useRef(null);
  const isIOS = /iPad|iPhone|iPod/.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  );

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { state, dispatchState, search } = useContext(HerbContext);
  const isDesktop = useMediaQuery("(min-width:1024px)");
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const normalizeMediaUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const trimmedBase = baseUrl?.endsWith("/")
      ? baseUrl.slice(0, -1)
      : baseUrl || "";
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return trimmedBase ? `${trimmedBase}${cleanPath}` : cleanPath;
  };

  useEffect(() => {
    if (state?.beats?.length) {
      const normalized = state.beats
        .map((beat) => {
          const audioPath = beat.beatAudio;
          const src = normalizeMediaUrl(audioPath);
          if (!src) return null;
          return {
            src,
            title: beat.beatName || beat.name || "Unknown Title",
            artist: beat.name || beat.beatName || "Unknown Artist",
            genre: beat.genre || "Unknown",
            image: normalizeMediaUrl(beat.beatImage) || SilentPict,
            album: beat.category || "Beats",
          };
        })
        .filter(Boolean);

      if (normalized.length) {
        setPlaylist(normalized);
        setIndex(0);
        return;
      }
    }
    setPlaylist(fallbackPlaylist);
    setIndex(0);
  }, [state?.beats, baseUrl]);

  useEffect(() => {
    const apiBase = baseUrl?.replace(/\/+$/, "") || "";

    async function fetchBeats(path) {
      try {
        const response = await axios.get(`${apiBase}${path}`);
        if (response.data.success) {
          dispatchState({
            type: "loadBeats",
            payload: response.data.beats,
          });
          return true;
        }
      } catch (error) {
        console.error(`Failed to load beats from ${path}`, error);
      }
      return false;
    }

    // Try plural endpoint first, then singular as fallback.
    fetchBeats("/beats/listBeats").then((ok) => {
      if (!ok) fetchBeats("/beats/listBeat");
    });
  }, [baseUrl, dispatchState, state?.beats?.length]);

  // Add a state to keep track of the scrolling position
  const [scrollPosition, setScrollPosition] = useState(0);

  // State and Ref variables

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

  // Keep canvas dimensions in sync with layout.
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = canvasRef.current.offsetWidth || 800;
      canvasRef.current.height = 140;
    }
  }, []);

  // Persist and restore simple preferences.
  useEffect(() => {
    const savedVolume = localStorage.getItem("musicPlayerVolume");
    const savedMute = localStorage.getItem("musicPlayerMute");
    const savedIndex = localStorage.getItem("musicPlayerIndex");
    if (savedVolume !== null) setVolume(Number(savedVolume));
    if (savedMute !== null) setMute(savedMute === "true");
    if (savedIndex !== null && playlist[savedIndex]) {
      setIndex(Number(savedIndex));
    }
  }, [playlist]);

  useEffect(() => {
    localStorage.setItem("musicPlayerVolume", String(volume));
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("musicPlayerMute", String(mute));
  }, [mute]);

  useEffect(() => {
    localStorage.setItem("musicPlayerIndex", String(index));
  }, [index]);

  const handleEnded = useCallback(() => {
    const nextIndex = (index + 1) % playlist.length;
    setIndex(nextIndex);
    // if you want to auto-continue play, you can also keep isPlaying true here, etc.
  }, [index, playlist, setIndex]); // add deps as needed

  // Simple preference persistence.
  useEffect(() => {
    const savedVolume = localStorage.getItem("musicPlayerVolume");
    const savedMute = localStorage.getItem("musicPlayerMute");
    const savedIndex = localStorage.getItem("musicPlayerIndex");
    if (savedVolume !== null) setVolume(Number(savedVolume));
    if (savedMute !== null) setMute(savedMute === "true");
    if (savedIndex !== null && playlist[savedIndex]) {
      setIndex(Number(savedIndex));
    }
  }, [playlist]);

  useEffect(() => {
    localStorage.setItem("musicPlayerVolume", String(volume));
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("musicPlayerMute", String(mute));
  }, [mute]);

  useEffect(() => {
    localStorage.setItem("musicPlayerIndex", String(index));
  }, [index]);

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
    if (!audioPlayer.current || !playlist[index]) return;
    const audio = audioPlayer.current;
    const newSrc = playlist[index].src;
    const currentSrc = audio.getAttribute("src") || audio.src || "";

    setMediaElement(audio);
    audio.volume = volume / 100;
    setCurrentSong(playlist[index]);

    // Avoid reloading the same source; iOS/Safari stalls if we keep resetting src.
    if (
      currentSrc === newSrc ||
      (audio.src && audio.src.endsWith(newSrc))
    ) {
      if (isPlaying && audio.paused) {
        audio.play().catch((e) => console.warn("Resume play error:", e));
      }
      return;
    }

    setIsLoading(true);
    setLoadError("");
    audio.src = newSrc;
    audio.load();

    const handleCanPlayThrough = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
      setIsLoading(false);
    };

    const handleLoadedData = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
      setIsLoading(false);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setElapsed(audio.currentTime);
    };

    const handlePlaying = () => {
      setIsLoading(false);
      setLoadError("");
    };

    const handleError = () => {
      setLoadError("Unable to load this track.");
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handleAudioEnded = handleEnded; // useCallback above

    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("ended", handleAudioEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("ended", handleAudioEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [playlist, index, handleEnded, isPlaying]);

  // Volune Function
  useEffect(() => {
    if (!audioPlayer.current) return;
    audioPlayer.current.volume = volume / 100;
    audioPlayer.current.muted = mute;
  }, [volume, mute]);

  // --- Audio analyser helpers ---
  const setupAudioGraph = useCallback(() => {
    if (isIOS) return null; // never build visualizer graph on iOS
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

      // wire up: source -> analyser -> destination
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
    if (isIOS) return; // skip visualizer entirely on iOS
    const analyser = setupAudioGraph();
    const canvas = canvasRef.current;
    const dataArray = dataArrayRef.current;
    if (!analyser || !canvas || !dataArray) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!canvas.width) canvas.width = canvas.offsetWidth || 800;
    if (!canvas.height) canvas.height = 140;

    const bufferLength = dataArray.length;
    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 0.6;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        const hue = (i / bufferLength) * 360;
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.6)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1.5;
      }
    };

    stopVisualizer();
    draw();
  }, [setupAudioGraph, stopVisualizer]);

  // Cleanup audio graph and animation on unmount.
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

    // Desktop: ensure audio context ready for visualizer. iOS: skip audio context entirely.
    if (!isIOS) {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }
    }

    audio.muted = mute;
    audio.volume = volume / 100;
    setLoadError("");
    const startPlayback = () => {
      setIsLoading(true);
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Play failed", err);
          setLoadError("Playback blocked or failed. Tap play again.");
          setIsPlaying(false);
          setIsLoading(false);
        });
    };

    if (audio.paused) {
      if (isIOS) {
        // iOS: force a fresh load, then play once ready
        const onCanPlay = () => {
          audio.removeEventListener("canplaythrough", onCanPlay);
          startPlayback();
        };
        audio.addEventListener("canplaythrough", onCanPlay, { once: true });
        audio.load();
      } else {
        if (audio.readyState < 2) {
          const onCanPlay = () => {
            audio.removeEventListener("canplaythrough", onCanPlay);
            startPlayback();
          };
          audio.addEventListener("canplaythrough", onCanPlay);
          audio.load();
        } else {
          startPlayback();
        }
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
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
      audioPlayer.current.currentTime = Math.max(
        0,
        audioPlayer.current.currentTime - 10
      );
    } else {
      handleLoadAndPlay();
    }
  };

  const toggleForward = () => {
    if (audioPlayer.current.readyState >= 2) {
      audioPlayer.current.currentTime = Math.min(
        duration,
        audioPlayer.current.currentTime + 10
      );
    } else {
      handleLoadAndPlay();
    }
  };

  // Keyboard shortcuts.
  useEffect(() => {
    const handler = (e) => {
      if (e.target && typeof e.target.tagName === "string") {
        const tag = e.target.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea") return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      if (e.code === "ArrowRight") {
        e.preventDefault();
        toggleForward();
      }
      if (e.code === "ArrowLeft") {
        e.preventDefault();
        toggleBackward();
      }
      if (e.code === "ArrowUp") {
        e.preventDefault();
        setVolume((v) => Math.min(100, v + 5));
      }
      if (e.code === "ArrowDown") {
        e.preventDefault();
        setVolume((v) => Math.max(0, v - 5));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [togglePlay, toggleForward, toggleBackward]);

  const handleLoadAndPlay = () => {
    const nextIndex = (index + 1) % playlist.length;
    setIndex(nextIndex);

    const isCurrentlyPlaying = isPlaying;

    audioPlayer.current.pause(); // Pause the current audio

    audioPlayer.current.src = playlist[nextIndex].src;
    audioPlayer.current.load(); // Load the new audio

    // Use the canplaythrough event to ensure the new audio is loaded before playing
    const onCanPlay = () => {
      if (isCurrentlyPlaying) {
        audioPlayer.current.play();
        setIsPlaying(true);
      }
      // Remove the event listener to avoid multiple bindings
      audioPlayer.current.removeEventListener("canplaythrough", onCanPlay);
    };

    audioPlayer.current.addEventListener("canplaythrough", onCanPlay);
  };

  const handleSeekChange = (e, value) => {
    setElapsed(value);
  };

  const handleSeekCommit = (e, value) => {
    if (audioPlayer.current && !Number.isNaN(value)) {
      audioPlayer.current.currentTime = value;
    }
  };

  useEffect(() => {
    const audio = audioPlayer.current;
    if (!audio) return;

    // On iOS skip AudioContext/visualizer entirely
    if (isIOS) {
      if (isPlaying) {
        audio.play().catch((err) => console.error("iOS play error:", err));
      } else if (!audio.paused) {
        audio.pause();
      }
      return;
    }

    // Ensure audio context is ready/resumed before playing (desktop)
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

  const playNextSong = () => {
    const nextIndex = (index + 1) % playlist.length;
    setIndex(nextIndex);
    setIsPlaying(true); // say "we WANT to be playing"
  };

  const playPreviousSong = () => {
    const prevIndex = index - 1 < 0 ? playlist.length - 1 : index - 1;
    setIndex(prevIndex);
    setIsPlaying(true);
  };

  const nextSong =
    playlist && playlist.length ? playlist[(index + 1) % playlist.length] : null;
  const prevSong =
    playlist && playlist.length
      ? playlist[index - 1 < 0 ? playlist.length - 1 : index - 1]
      : null;

  // JSX
  return (
    <Div style={{ position: "relative", top: playerPosition.y }}>
      {currentSong && (
        <audio
          src={currentSong.src}
          ref={audioPlayer}
          muted={mute}
          preload="auto"
          playsInline
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
              isLoading ? (
                <CircularProgress size={32} thickness={5} />
              ) : (
                <PlayArrowIcon
                  fontSize={"large"}
                  sx={{
                    color: isDarkMode ? "white" : "red",
                    "&:hover": { color: isDarkMode ? "red" : "lime" },
                  }}
                  onClick={togglePlay}
                />
              )
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

          {playlist.length > 1 && (
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                color: isDarkMode ? "white" : "black",
                fontSize: "12px",
                marginTop: "4px",
              }}
            >
              <Typography variant="caption">
                Prev: {prevSong?.title || prevSong?.name || "-"}
              </Typography>
              <Typography variant="caption">•</Typography>
              <Typography variant="caption">
                Next: {nextSong?.title || nextSong?.name || "-"}
              </Typography>
            </Stack>
          )}

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

        <Stack
          direction="row"
          spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
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
          <PSlider
            value={elapsed}
            max={duration || 0}
            min={0}
            step={0.1}
            onChange={handleSeekChange}
            onChangeCommitted={handleSeekCommit}
            valueLabelDisplay="auto"
            valueLabelFormat={(val) => formatTime(val)}
            disabled={!duration}
          />
            <Typography
              sx={{
                color: isDarkMode ? "white" : "black",
                "&:hover": { color: "white" },
              }}
            >
              {formatTime(duration - elapsed)}
            </Typography>
          </Stack>
          {loadError && (
            <Typography
              sx={{ color: "red", fontSize: "12px", marginTop: "4px" }}
            >
              {loadError}
            </Typography>
          )}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        ></Stack>

        {!isIOS && (
          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <canvas ref={canvasRef} style={canvasStyle} />
          </Stack>
        )}
      </CustomPaper>
    </Div>
  );
}

export default MusicPlayer2;
