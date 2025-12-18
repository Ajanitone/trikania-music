import axios from "axios";

// Thin client wrapper for the server WorkMail provisioning endpoint.
// Mirrors the server-side API signature so callers can simply pass the same fields.
const baseUrl = process.env.REACT_APP_BASE_URL;

export const provisionWorkMailUser = async ({
  username,
  password,
  email,
  displayName,
}) => {
  if (!baseUrl) {
    throw new Error("REACT_APP_BASE_URL is not configured");
  }

  const response = await axios.post(
    `${baseUrl}/workmail/provision`,
    { username, password, email, displayName },
    { withCredentials: true }
  );

  if (!response.data?.success) {
    const msg = response.data?.error || "WorkMail provisioning failed";
    throw new Error(msg);
  }

  return response.data;
};

export default { provisionWorkMailUser };
