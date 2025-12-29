import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Popover,
} from "@mui/material";
import axios from "axios";
import { HerbContext } from "../../context/Context";
import { shades } from "../../theme";
import Logo from "../../logo/TRI_Logo_Herbs_RedBlack+Face.png";
import ScrollTop from "../../components/ScrollTop";

const EditBeat = ({ isDarkMode }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState } = useContext(HerbContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };

  const [fileData, setFiledata] = useState({ url: "", file: null });
  const [audioData, setAudioData] = useState({ url: "", file: null });

  const [data, setData] = useState({
    _id: "",
    name: "",
    description: "",
    category: "",
    beatName: "",
    genre: "",
    beatImage: "",
    beatAudio: "",
  });

  useEffect(() => {
    if (!state.user.isAdmin) navigate("/");
  }, [navigate, state.user.isAdmin]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`${baseUrl}/beats/findbeat?_id=${id}`, {
          withCredentials: true,
        });
        if (response.data.success && response.data.beat) {
          const beat = response.data.beat;
          setData(beat);
          if (beat.beatImage) setFiledata((prev) => ({ ...prev, url: beat.beatImage }));
          if (beat.beatAudio) setAudioData((prev) => ({ ...prev, url: beat.beatAudio }));
        }
      } catch (error) {
        console.error("Failed to load beat", error);
        setErrorMessage("Failed to load beat");
        setErrorPopoverOpen(true);
      }
    }
    getData();
  }, [baseUrl, id]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFiledata({ url: URL.createObjectURL(file), file });
  };

  const handleAudioChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAudioData({ url: URL.createObjectURL(file), file });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSave = async () => {
    setLoading(true);
    const formdata = new FormData();
    formdata.set("_id", data._id || id);
    formdata.set("name", data.name);
    formdata.set("description", data.description);
    formdata.set("category", data.category);
    formdata.set("beatName", data.beatName);
    formdata.set("genre", data.genre);
    if (fileData.file) formdata.set("image", fileData.file, "beatImage");
    if (audioData.file) formdata.set("audio", audioData.file, "beatAudio");

    const config = {
      headers: { "content-type": "multipart/form-data" },
      withCredentials: true,
    };

    try {
      const response = await axios.post(`${baseUrl}/beats/edit`, formdata, config);
      if (response.data.success) {
        const updatedBeat = response.data.beat;
        const updatedList = (state.beats || []).map((b) =>
          b._id === updatedBeat._id ? updatedBeat : b
        );
        dispatchState({ type: "loadBeats", payload: updatedList });
        setErrorMessage("Beat updated");
        setErrorPopoverOpen(true);
        navigate("/beats");
      } else {
        setErrorMessage("Failed to update beat");
        setErrorPopoverOpen(true);
      }
    } catch (error) {
      console.error("Beat update failed", error);
      setErrorMessage("Beat update failed");
      setErrorPopoverOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <ScrollTop isDarkMode={isDarkMode} />
      <Box
        padding="10px"
        width="80%"
        margin="100px auto"
        textAlign="center"
        sx={{
          background: "hsla(0, 0%, 100%, 0.55)",
          backdropFilter: "blur(30px)",
          backgroundColor: "rgba(242, 38, 19, 0.4)",
          borderRadius: "10px",
          boxShadow: "0 2px 4px rgba(1, 1, 1, 0.1)",
          border: "none",
          position: "relative",
          overflow: "hidden",
        }}
        ref={errorPopoverAnchorRef}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={-1}
          sx={{
            content: '""',
            position: "absolute",
            background:
              "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />
        <IconButton>
          <img
            src={Logo}
            alt="web-logo"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
        </IconButton>
        <Typography variant="h3">Edit Beat</Typography>

        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          sx={{ borderRadius: "5px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="name"
            id="form1"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            title="beat-name"
          />
        </Box>

        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          sx={{ borderRadius: "5px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="beat name"
            id="form1"
            type="text"
            name="beatName"
            value={data.beatName}
            onChange={handleChange}
            title="beat-name"
          />
        </Box>

        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          sx={{ borderRadius: "5px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="description"
            id="form1"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            title="beat-description"
          />
        </Box>

        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          sx={{ borderRadius: "5px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="category"
            id="form1"
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
            title="beat-category"
          />
        </Box>

        <Box
          p="2px 4px"
          m="15px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          sx={{ borderRadius: "5px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="genre"
            id="form1"
            type="text"
            name="genre"
            value={data.genre}
            onChange={handleChange}
            title="beat-genre"
          />
        </Box>

        <Box mt="20px">
          <Typography>Upload Beat Image</Typography>
        </Box>
        <Button
          sx={{ backgroundColor: shades.primary[300], color: "white" }}
          component="label"
        >
          Upload file
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={handleImageChange}
          />
        </Button>
        <Box mt="20px">
          <img
            src={fileData?.url || data.beatImage || Logo}
            alt="beat"
            style={{ width: "100px", borderRadius: "10px" }}
          />
        </Box>

        <Box mt="20px">
          <Typography>Upload Beat Audio</Typography>
        </Box>
        <Button
          sx={{ backgroundColor: shades.primary[300], color: "white" }}
          component="label"
        >
          Upload file
          <input hidden accept="audio/*" multiple type="file" onChange={handleAudioChange} />
        </Button>
        {audioData?.url && (
          <Box mt="20px">
            <audio controls src={audioData.url} style={{ width: "100%" }} />
          </Box>
        )}

        <Button
          onClick={handleSave}
          disabled={loading}
          sx={{
            backgroundColor: shades.primary[300],
            color: "white",
            marginTop: "10px",
            "&:hover": { color: "red" },
          }}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </Box>
      {errorPopoverOpen && (
        <Popover
          open={errorPopoverOpen}
          anchorEl={errorPopoverAnchorRef.current}
          onClose={() => setErrorPopoverOpen(false)}
          anchorReference="anchorEl"
          anchorPosition={
            (errorPopoverAnchorRef.current &&
              getAnchorPosition(errorPopoverAnchorRef.current)) || {
              top: 100,
              left: 400,
            }
          }
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <div style={{ padding: "20px" }}>{errorMessage}</div>
        </Popover>
      )}
    </Box>
  );
};

export default EditBeat;
