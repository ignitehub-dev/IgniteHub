"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SelectContent from "./SelectHubs";
import MenuContent from "./MenuContent";
// import CardAlert from "./CardAlert";
// import OptionsMenu from "./OptionsMenu";
import OrgContent from "./OrgMenu";
import UserMenu from "./userMenu";
import SelectHubs from "./SelectHubs";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
	width: drawerWidth,
	flexShrink: 0,
	boxSizing: "border-box",
	mt: 10,
	[`& .${drawerClasses.paper}`]: {
		width: drawerWidth,
		boxSizing: "border-box"
	}
});

export default function SideMenu() {
	return (
		<Drawer
			variant="permanent"
			sx={{
				display: { xs: "none", md: "block" },
				[`& .${drawerClasses.paper}`]: {
					backgroundColor: "background.paper"
				}
			}}>
			<Box
				sx={{
					display: "flex",
					mt: "calc(var(--template-frame-height, 0px) + 4px)",
					p: 1.5
				}}>
				<OrgContent />
			</Box>
			<Divider />
			<Box
				sx={{
					display: "flex",
					mt: "calc(var(--template-frame-height, 0px) + 4px)",
					p: 1.5
				}}>
				<SelectHubs />
			</Box>
			<Divider />
			<Box
				sx={{
					overflow: "auto",
					height: "100%",
					display: "flex",
					flexDirection: "column"
				}}>
				<MenuContent />
				{/* <CardAlert /> */}
			</Box>
			<UserMenu />
		</Drawer>
	);
}
