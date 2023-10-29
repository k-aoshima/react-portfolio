import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import ConstructionIcon from '@mui/icons-material/Construction';

function ListItems() {
  return (
    <Box>
        <AnchorLink href="#about-me" offset="120">
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                            <PersonIcon sx={{color: 'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="ABOUTME" />
                </ListItemButton>
            </ListItem>
        </AnchorLink>
        <AnchorLink href="#skill-sheet" offset="50">
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                            <ConstructionIcon sx={{color: 'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="SKILLSHEET" />
                </ListItemButton>
            </ListItem>
        </AnchorLink>
        <AnchorLink href="#product" offset="90">
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                            <AppsIcon sx={{color: 'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="PRODUCT" />
                </ListItemButton>
            </ListItem>
        </AnchorLink>
    </Box>
  )
}

export default ListItems