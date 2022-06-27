import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { ToggleButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Cart from "../cart/Cart";

function CartDrawer({ showDrawer, setShowDrawer }) {
  return (
    <Drawer
      anchor="left"
      open={showDrawer}
      onClose={() => setShowDrawer(false)}
    >
      <Cart></Cart>
    </Drawer>
  );
}

export default CartDrawer;
