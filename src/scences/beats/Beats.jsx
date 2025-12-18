import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Avatar,
} from "@mui/material";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

import ScrollTop from "../../components/ScrollTop";

import axios from "axios";

import MusicPlayer6 from "../../components/players/musicplayer/MusicPlayer6";
/**
 *
 */

const Beats = ({ isDarkMode }) => {
  // const [isHovered, setIsHovered] = useState(false);

  // Define a styled component with custom CSS

  const backgroundColor = isDarkMode ? "#000000" : "none";
  const [staticModal, setStaticModal] = useState(false); // Add modal state
  const { state, dispatchState } = useContext(HerbContext);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const apiBase = baseUrl?.replace(/\/+$/, "") || "";
  const [selectedBeatId, setSelectedBeatId] = useState("");
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [loadingComments, setLoadingComments] = useState(false);
  const [postingComment, setPostingComment] = useState(false);
  const [commentError, setCommentError] = useState("");

  const navigate = useNavigate();
  // const isNonMobile = useMediaQuery("(min-width:600px)");

  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // console.log("products", state.products);

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

    fetchBeats("/beats/listBeats").then((ok) => {
      if (!ok) fetchBeats("/beats/listBeat");
    });
  }, [baseUrl, dispatchState]);

  useEffect(() => {
    if (state.beats?.length && !selectedBeatId) {
      const firstBeatWithId = state.beats.find((b) => b._id);
      if (firstBeatWithId) setSelectedBeatId(firstBeatWithId._id);
    }
  }, [state.beats, selectedBeatId]);

  const fetchComments = async (beatId) => {
    if (!beatId) return;
    setLoadingComments(true);
    setCommentError("");
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiBase}/comment/listComment`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        withCredentials: true,
      });
      const all = res.data?.comments || [];
      const filtered = all.filter((c) => {
        const id =
          c.beatId?._id ||
          c.beatId ||
          c.BeatId?._id ||
          c.BeatId ||
          c.beat?.id;
        return id?.toString() === beatId;
      });
      setComments(filtered);
    } catch (error) {
      console.error("Failed to load comments", error);
      setCommentError("Failed to load comments.");
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    if (selectedBeatId) {
      fetchComments(selectedBeatId);
    }
  }, [selectedBeatId]);

  const handleSubmitComment = async () => {
    if (!commentText.trim()) {
      setCommentError("Please enter a comment.");
      return;
    }
    if (!state.user?._id) {
      setCommentError("You need to be logged in to comment.");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      setCommentError("Missing auth token. Please log in again.");
      return;
    }

    setPostingComment(true);
    setCommentError("");
    try {
      await axios.post(
        `${apiBase}/comment/addComment`,
        { text: commentText.trim(), beatId: selectedBeatId },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      setCommentText("");
      fetchComments(selectedBeatId);
    } catch (error) {
      console.error("Failed to post comment", error);
      setCommentError("Failed to post comment. Please try again.");
    } finally {
      setPostingComment(false);
    }
  };

  return (
    <Box
      className={`home ${isDarkMode ? "dark-mode" : ""}`}
      padding="20px"
      width="85%"
      margin="100px auto"
      textAlign="center"
      sx={{
        minHeight: "100vh",
        background: "hsla(0, 0%, 100%, 0.55)",
        backdropFilter: "blur(30px)",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
        border: "none",
        position: "relative",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ScrollTop isDarkMode={isDarkMode} />

      <Box margin="50px auto" title="beats-header">
        {/* Header */}
        <Box>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "24px", // Specify your desired font size
              "&:hover": { cursor: "pointer", color: "lime" },
              marginTop: "10px",
              color: isDarkMode ? "white" : "red",
            }}
          >
            Trikania Beats
          </Typography>
          <Box
            mt="10px"
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "24px",
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                whiteSpace: "nowrap",
                fontSize: "16px",
                color: isDarkMode ? "white" : "black",
                animation: "beatsMarquee 12s linear infinite",
                "@keyframes beatsMarquee": {
                  from: { transform: "translateX(100%)" },
                  to: { transform: "translateX(-100%)" },
                },
              }}
            >
              Vibes that inspire creativity and elevate your music to new
              heights.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        padding="30px"
        width="100%"
        margin="30px auto 10px auto"
        textAlign="center"
        title="music-player-6"
      >
        <MusicPlayer6
          isDarkMode={isDarkMode}
          staticModal={staticModal}
          setStaticModal={setStaticModal}
        />
      </Box>

      <Box
        padding="16px"
        width="100%"
        maxWidth="520px"
        margin="0 auto 20px auto"
        textAlign="left"
        sx={{
          background: "hsla(0, 0%, 100%, 0.35)",
          backdropFilter: "blur(24px)",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <Stack spacing={2}>
          <Typography
            fontWeight="600"
            sx={{ color: isDarkMode ? "white" : "black" }}
          >
            Comments
          </Typography>
          {state.beats?.length > 1 && (
            <FormControl size="small" fullWidth>
              <InputLabel id="beat-select-label">Select Beat</InputLabel>
              <Select
                labelId="beat-select-label"
                label="Select Beat"
                value={selectedBeatId}
                onChange={(e) => setSelectedBeatId(e.target.value)}
              >
                {state.beats
                  .filter((b) => b._id)
                  .map((beat) => (
                    <MenuItem key={beat._id} value={beat._id}>
                      {beat.beatName || beat.name || "Untitled Beat"}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          )}

          {loadingComments ? (
            <Stack alignItems="center">
              <CircularProgress size={28} />
            </Stack>
          ) : comments.length ? (
            <Stack spacing={1}>
              {comments.map((c) => (
                <Box
                  key={c._id}
                  sx={{
                    padding: "8px 10px",
                    borderRadius: "8px",
                    backgroundColor: isDarkMode ? "#111" : "#f4f4f4",
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar
                      sx={{ width: 28, height: 28 }}
                      src={
                        c.author?.profileImage ||
                        c.author?.image ||
                        c.author?.profileImageURL
                      }
                    >
                      {(c.author?.username || "A").slice(0, 1).toUpperCase()}
                    </Avatar>
                    <Stack spacing={0.5}>
                      <Typography
                        variant="body2"
                        sx={{ color: isDarkMode ? "white" : "black" }}
                      >
                        {c.text}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: isDarkMode ? "#ccc" : "#555" }}
                      >
                        {c.author?.username || "Anonymous"} •{" "}
                        {c.createdAt
                          ? new Date(c.createdAt).toLocaleString()
                          : ""}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: isDarkMode ? "#ccc" : "#555" }}
            >
              No comments yet.
            </Typography>
          )}

          {commentError && (
            <Typography sx={{ color: "red", fontSize: "12px" }}>
              {commentError}
            </Typography>
          )}

          <TextField
            label="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            multiline
            minRows={2}
            fullWidth
            size="small"
            disabled={!selectedBeatId}
            InputLabelProps={{
              style: { color: isDarkMode ? "#ccc" : undefined },
            }}
            sx={{
              "& .MuiInputBase-input": { color: isDarkMode ? "white" : "black" },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmitComment}
            disabled={!selectedBeatId || postingComment}
            sx={{
              backgroundColor: isDarkMode ? "red" : "black",
              "&:hover": {
                backgroundColor: isDarkMode ? "#ff4d4d" : "#333",
              },
              alignSelf: "flex-end",
            }}
          >
            {postingComment ? "Posting..." : "Post Comment"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Beats;
