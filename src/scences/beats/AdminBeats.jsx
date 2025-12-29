import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
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

  useEffect(() => {
    if (!state.beats?.length) {
      fetchBeats();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
              {(state.beats || []).map((beat) => (
                <TableRow key={beat._id}>
                  <TableCell>{beat.name || "-"}</TableCell>
                  <TableCell>{beat.beatName || "-"}</TableCell>
                  <TableCell>{beat.genre || "-"}</TableCell>
                  <TableCell>{beat.category || "-"}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => navigate(`/edit-beat/${beat._id}`)}
                    >
                      Edit
                    </Button>
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
