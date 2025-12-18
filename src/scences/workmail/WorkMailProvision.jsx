import React, { useState } from "react";
import { Box, Typography, InputBase, Button, Alert } from "@mui/material";
import { ColorRing } from "react-loader-spinner";
import { provisionWorkMailUser } from "../../api/workmail";

// Admin-only form to provision a WorkMail user via the server API
const WorkMailProvision = ({ isDarkMode }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    displayName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await provisionWorkMailUser(form);
      setSuccess(
        `Provisioned WorkMail user. Email: ${response.email || form.email}`
      );
    } catch (err) {
      setError(err?.message || "Failed to provision WorkMail user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      padding="10px"
      width="80%"
      margin="80px auto"
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
        color: isDarkMode ? "#f5f5f5" : "#111",
      }}
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
      <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
        Provision WorkMail User
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Create and register a mailbox through your server's WorkMail endpoint.
      </Typography>

      {["username", "email", "displayName", "password"].map((field) => (
        <Box
          key={field}
          p="2px 4px"
          m="10px auto"
          display="flex"
          alignItems="center"
          width="75%"
          backgroundColor="#F2F2F2"
          sx={{ borderRadius: "5px" }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={field === "displayName" ? "Display name" : field}
            type={field === "password" ? "password" : "text"}
            name={field}
            value={form[field]}
            onChange={handleChange}
          />
        </Box>
      ))}

      {error && (
        <Alert severity="error" sx={{ width: "75%", margin: "10px auto" }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ width: "75%", margin: "10px auto" }}>
          {success}
        </Alert>
      )}

      <Box m="15px auto">
        {loading ? (
          <ColorRing />
        ) : (
          <Button
            size="md"
            onClick={handleSubmit}
            sx={{
              width: "75%",
              background:
                "linear-gradient(to right, rgba(207, 9, 9, 0.2), #f5f3f4)",
              marginTop: "10px",
            }}
          >
            Provision
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default WorkMailProvision;
