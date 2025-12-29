import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { HerbContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../../components/ScrollTop";

const AdminBeats = ({ isDarkMode }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { state, dispatchState } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState("");
  const [filter, setFilter] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiBase = baseUrl?.replace(/\/+$/, "") || "";

  const fetchBeats = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${apiBase}/beats/listBeats`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatchState({ type: "loadBeats", payload: res.data.beats });
      } else {
        setError("Failed to load beats");
      }
    } catch (err) {
      setError("Failed to load beats");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (beatId) => {
    if (!beatId) return;
    const confirmDelete = window.confirm("Delete this beat?");
    if (!confirmDelete) return;
    setDeletingId(beatId);
    setError("");
    try {
      const res = await axios.delete(`${apiBase}/beats/deleteBeat/${beatId}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        const updated = (state.beats || []).filter((b) => b._id !== beatId);
        dispatchState({ type: "loadBeats", payload: updated });
      } else {
        setError("Failed to delete beat");
      }
    } catch (err) {
      console.error("Delete beat failed", err);
      setError("Delete beat failed");
    } finally {
      setDeletingId("");
    }
  };

  useEffect(() => {
    if (!state.beats?.length) {
      fetchBeats();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredBeats = (state.beats || []).filter((beat) => {
    if (!filter.trim()) return true;
    const term = filter.toLowerCase();
    return (
      (beat.name || "").toLowerCase().includes(term) ||
      (beat.beatName || "").toLowerCase().includes(term) ||
      (beat.genre || "").toLowerCase().includes(term) ||
      (beat.category || "").toLowerCase().includes(term)
    );
  });

  return (
    <Box padding="10px" width="90%" margin="100px auto">
      <ScrollTop isDarkMode={isDarkMode} />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5">Beats (Admin)</Typography>
        <Box display="flex" gap={1}>
          <TextField
            size="small"
            placeholder="Filter by name/genre/category"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/add-beat")}
          >
            Add Beat
          </Button>
          <Button variant="outlined" onClick={fetchBeats} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </Button>
        </Box>
      </Box>
      {error && (
        <Typography color="error" mb={2}>
          {error}
        </Typography>
      )}
      {loading && !state.beats?.length ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Beat Name</TableCell>
                <TableCell>Genre</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBeats.map((beat) => (
                <TableRow key={beat._id}>
                  <TableCell>{beat.name || "-"}</TableCell>
                  <TableCell>{beat.beatName || "-"}</TableCell>
                  <TableCell>{beat.genre || "-"}</TableCell>
                  <TableCell>{beat.category || "-"}</TableCell>
                  <TableCell align="right">
                    <Box display="flex" gap={1} justifyContent="flex-end">
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => navigate(`/edit-beat/${beat._id}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        disabled={deletingId === beat._id}
                        onClick={() => handleDelete(beat._id)}
                      >
                        {deletingId === beat._id ? "Deleting..." : "Delete"}
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default AdminBeats;
