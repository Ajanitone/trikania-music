import React, { useState, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  IconButton,
  Button,
  Typography,
  InputBase,
  useMediaQuery,
  Popover,
  Menu,
  MenuItem,
  Drawer,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import { SearchOutlined, Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";
import ThemeButton from "../../components/ThemeButton";
import { HerbContext } from "../../context/Context";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import PopOver2 from "../../components/popover/PopOver2";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { dispatchState, state } = useContext(HerbContext);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const wishList = state.user.wishlist;
  // ---POPUP----DROPDOWN-----MENUState--
  const [success, setSuccess] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountAnchor, setAccountAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const [searchValue, setSearchValue] = useState({ name: "" });
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [errorMessage, setErrorMessage] = useState("");

  const [errorPopoverOpen, setErrorPopoverOpen] = useState(false);
  const errorPopoverAnchorRef = useRef(null);
  const getAnchorPosition = (anchorEl) => {
    const rect = anchorEl.getBoundingClientRect();
    return { top: rect.top, left: rect.left };
  };
  const handleSearch = async () => {
    if (searchValue.name.trim() === "") {
      // If searchValue is empty or contains only whitespace, return or display an error message
      return;
    }
    if (!baseUrl) {
      setErrorMessage("Server base URL is not configured.");
      setErrorPopoverOpen(true);
      return;
    }
    setLoading(true);
    const response = await axios.get(
      baseUrl + `/products/searchProduct/${searchValue.name.trim()}`,
      {
        withCredentials: true,
      }
    );

    console.log("search getData", response);

    if (response.data.success) {
      dispatchState({
        type: "loadProducts",
        payload: response.data.products,
      });
    }
    navigate(`/search-product`);
    setSearchValue({ name: "" });
    setLoading(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submitButtonRef = React.createRef();

  const handleClick = () => {
    setAnchorEl(submitButtonRef.current);
  };
  React.useEffect(() => {
    handleClick();
  }, []);

  const handleLogOut = async () => {
    if (!baseUrl) {
      setErrorMessage("Server base URL is not configured.");
      setErrorPopoverOpen(true);
      return;
    }
    setLoading(true);
    const response = await axios.get(baseUrl + "/users/logout", {
      withCredentials: true,
    });

    if (response.status === 200) {
      // alert("You are logged out");
      setErrorMessage("Logout  successfully");
      setErrorPopoverOpen(true); // Open the error Popover

      setSuccess(true);
      handleClick();
      dispatchState({
        type: "logout",
      });
      setLoading(false);
    } else {
      console.log("error logging in");
    }
  };

  const navButtonSx = {
    color: isDarkMode ? "white" : "black",
    fontSize: "0.8rem",
    padding: "3px 6px",
    minWidth: "0",
    "&:hover": {
      backgroundColor: shades.secondary[500],
      color: shades.primary[100],
    },
  };

  const mobileButtonSx = {
    ...navButtonSx,
    width: "100%",
    justifyContent: "flex-start",
    padding: "8px 12px",
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);
  const accountMenuOpen = Boolean(accountAnchor);
  const closeAccountMenu = () => setAccountAnchor(null);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255,255,255,0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      sx={{
        "&:hover": { cursor: "pointer", color: shades.secondary[500] },
        display: isNonMobile ? "flex" : "block",
      }}
      ref={errorPopoverAnchorRef}
    >
      <Box display="flex" alignItems="center" flex="1" gap={1} px={1}>
        {!isNonMobile && (
          <IconButton
            onClick={toggleMobileMenu}
            sx={{
              color: isDarkMode ? "white" : "black",
              "&:hover": { color: shades.secondary[500] },
            }}
            title="Menu"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box
          sx={{
            "&:hover": { cursor: "pointer", color: shades.secondary[500] },
            display: isNonMobile ? "block" : "none",
          }}
          color={!isDarkMode ? shades.primary[500] : undefined}
          title="username"
        >
          <Typography variant="h7">Hi, {state.user.username}</Typography>
        </Box>
      </Box>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={`home ${isDarkMode ? "dark-mode" : ""}`}
        padding="10px"
        borderRadius="10px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap={isNonMobile ? "20px" : "10px"}
          zIndex="2"
          sx={{ display: isNonMobile ? "flex" : "none" }}
        >
          {/* Artist */}
          <Button
            sx={navButtonSx}
            onClick={() => navigate("/artists")}
            title="Artists"
          >
            Artists
          </Button>

          {/* Profile */}
          <Button
            sx={{ ...navButtonSx, display: state.user._id ? "flex" : "none" }}
            onClick={() => navigate("/userprofile")}
            title="Profile"
          >
            Profile
          </Button>

          {/* Videos */}
          <Button
            sx={navButtonSx}
            onClick={() => navigate("/videos")}
            title="Videos"
          >
            Videos
          </Button>

          {/* Releases */}
          <Button
            sx={navButtonSx}
            onClick={() => navigate("/releases")}
            title="Releases"
          >
            Releases
          </Button>

          {/* Shopping-cart */}
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "&.MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <Button
              sx={navButtonSx}
              onClick={() => dispatch(setIsCartOpen({}))}
              title="Shop"
            >
              Shop
            </Button>
          </Badge>

          {/* References */}
          <Badge
            badgeContent={wishList?.length}
            color="secondary"
            invisible={wishList?.length === 0}
            sx={{
              "&.MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <Button
              sx={navButtonSx}
              onClick={() => navigate("/references")}
              title="References"
            >
              References
            </Button>
          </Badge>

          {/* Discography */}
          <Badge
            badgeContent={wishList?.length}
            color="secondary"
            invisible={wishList?.length === 0}
            sx={{
              "&.MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <Button
              sx={navButtonSx}
              onClick={() => navigate("/discography")}
              title="Discography"
            >
              Discography
            </Button>
          </Badge>

          {/* Beats */}
          <Badge
            badgeContent={wishList?.length}
            color="secondary"
            invisible={wishList?.length === 0}
            sx={{
              "&.MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <Button
              sx={navButtonSx}
              onClick={() => navigate("/beats")}
              title="Beats"
            >
              Beats
            </Button>
          </Badge>

          {/* Herbs */}
          <Badge
            badgeContent={wishList?.length}
            color="secondary"
            invisible={wishList?.length === 0}
            sx={{
              "&.MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <Button
              sx={navButtonSx}
              onClick={() => navigate("/herb-info")}
              title="trikania-herbs"
          >
            Trikania-Herbs
          </Button>
          </Badge>

          {/* Account dropdown */}
          <Button
            sx={navButtonSx}
            onClick={(e) => setAccountAnchor(e.currentTarget)}
            title="Account"
          >
            Account
          </Button>

          {/* Theme-button */}
          <ThemeButton
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            title="toggle-theme"
          />

          {/* Administration */}

          {state.user.isAdmin ? (
            <>
            </>
          ) : (
            ""
          )}
        </Box>
      </Box>
      {/* Search Input */}
      <Box
        display="flex"
        alignItems="center"
        bgcolor="white"
        borderRadius="5px"
        padding="2px 4px"
        sx={{ ml: isNonMobile ? 0 : 1 }}
      >
        <InputBase
          placeholder="Search"
          value={searchValue.name}
          onChange={(e) => setSearchValue({ name: e.target.value })}
          sx={{ ml: 2, flex: 1 }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          title="search"
        />
        <IconButton
          onClick={handleSearch}
          sx={{
            p: "10px",
            color: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? shades.primary[700] : "",
            "&:hover": {
              backgroundColor: shades.secondary[500],
              color: shades.primary[100],
            },
          }}
        >
          <SearchOutlined />
        </IconButton>
      </Box>

      {/* Account Menu */}
      <Menu
        anchorEl={accountAnchor}
        open={accountMenuOpen}
        onClose={closeAccountMenu}
        keepMounted
      >
        {!state.user._id && (
          <MenuItem
            onClick={() => {
              closeAccountMenu();
              navigate("/register");
            }}
          >
            Register
          </MenuItem>
        )}
        {state.user._id ? (
          <MenuItem
            onClick={() => {
              closeAccountMenu();
              handleLogOut();
            }}
          >
            Logout
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              closeAccountMenu();
              navigate("/login");
            }}
          >
            Login
          </MenuItem>
        )}
        {state.user.isAdmin && (
          <>
            <MenuItem
              onClick={() => {
                closeAccountMenu();
                navigate("/settings");
              }}
            >
              Admin
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeAccountMenu();
                navigate("/workmail");
              }}
            >
              WorkMail
            </MenuItem>
            <MenuItem
              onClick={() => {
                closeAccountMenu();
                navigate("/admin-beats");
              }}
            >
              Admin Beats
            </MenuItem>
          </>
        )}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={closeMobileMenu}>
        <Box sx={{ width: 240, p: 1 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/artists"); closeMobileMenu(); }}>
                Artists
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button
                sx={{ ...mobileButtonSx, display: state.user._id ? "flex" : "none" }}
                onClick={() => { navigate("/userprofile"); closeMobileMenu(); }}
              >
                Profile
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/videos"); closeMobileMenu(); }}>
                Videos
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/releases"); closeMobileMenu(); }}>
                Releases
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { dispatch(setIsCartOpen({})); closeMobileMenu(); }}>
                Shop ({cart.length})
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/references"); closeMobileMenu(); }}>
                References ({wishList?.length || 0})
              </Button>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/discography"); closeMobileMenu(); }}>
                Discography
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/beats"); closeMobileMenu(); }}>
                Beats
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/herb-info"); closeMobileMenu(); }}>
                Trikania-Herbs
              </Button>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <ListItem disablePadding>
              <Button sx={mobileButtonSx} onClick={() => { navigate("/register"); closeMobileMenu(); }}>
                Register
              </Button>
            </ListItem>
            <ListItem disablePadding>
              {state.user._id ? (
                <Button
                  sx={mobileButtonSx}
                  onClick={() => {
                    handleLogOut();
                    closeMobileMenu();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  sx={mobileButtonSx}
                  onClick={() => {
                    navigate("/login");
                    closeMobileMenu();
                  }}
                >
                  Login
                </Button>
              )}
            </ListItem>
            {state.user.isAdmin && (
              <>
                <Divider sx={{ my: 1 }} />
                <ListItem disablePadding>
                  <Button sx={mobileButtonSx} onClick={() => { navigate("/settings"); closeMobileMenu(); }}>
                    Admin
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button sx={mobileButtonSx} onClick={() => { navigate("/workmail"); closeMobileMenu(); }}>
                    WorkMail
                  </Button>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>

      {/* Pop-over */}

      {success && (
        <PopOver2
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
          handleClose={handleClose}
        />
      )}

      {/* Loader-1 */}
      {success && loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}

      {/* Loader-2 */}
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}

      {/* Pop-over-2 */}
      <Popover
        open={errorPopoverOpen}
        anchorEl={errorPopoverAnchorRef.current}
        onClose={() => setErrorPopoverOpen(false)}
        anchorReference="anchorEl"
        // anchorPosition={{ top: 100, left: 400 }}
        anchorPosition={
          (errorPopoverAnchorRef.current &&
            getAnchorPosition(errorPopoverAnchorRef.current)) || {
            top: 100,
            left: 400,
          }
        }
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div style={{ padding: "20px" }}>{errorMessage}</div>
      </Popover>
    </Box>
  );
};

export default Navbar;
