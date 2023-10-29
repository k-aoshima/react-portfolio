import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import UseWindowSize from './UseWindowSize';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const AccordionMenu = () => {
  const [isAccordionOpen, setIsAccordionOpen] = React.useState(false);

  const handleClick = () =>{
    setIsAccordionOpen(!isAccordionOpen);
  }

  return(
    <Accordion sx={{width: "100%", position: "fixed", backgroundColor: "#212529"}}
      square={true}
      expanded={isAccordionOpen}
      onChange={(_event, expanded) =>{ setIsAccordionOpen(expanded)}}
     >
      <AccordionSummary expandIcon={<MenuOpenIcon style={{ color: "white" }}/>}>
        <Typography sx={{ color: "white" }}>Ao-Lab</Typography>
      </AccordionSummary>
      <AccordionDetails onClick={handleClick}>
        <HeaderMenu style={{ display: "flex", flexDirection: "column" }}/>
      </AccordionDetails>
    </Accordion>
  )
}

const HeaderMenu = ({ style }) =>{
  return(
      <div style={ style }>
        <AnchorLink href="#about-me" offset="120" style={{ paddingRight: " 30px", paddingBottom: "15px", color: "white", textDecoration:"none"}}>
          ABOUTME
        </AnchorLink>
        <AnchorLink href="#skill-sheet" offset="50" style={{ paddingRight: " 30px", paddingBottom: "15px", color: "white", textDecoration:"none"}}>
          SKILLSHEET
        </AnchorLink>
        <AnchorLink href="#product" offset="75" style={{ color: "white", paddingBottom: "15px", textDecoration:"none"}}>
          PRODUCT
        </AnchorLink>
      </div>
  )
}

const AppBarComponent = () => {
  return(
    <Box sx={{ flexGrow: 1, position: "fixed", width:"100%"}}>
      <AppBar position="static" style={{ height: "48px" }}>
        <Toolbar sx={{ backgroundColor: "#212529"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ao-Lab
          </Typography>
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const Header = () => {
  const width = UseWindowSize();

  return (
    <>
      { width <= 600 ? <AccordionMenu /> : <AppBarComponent/>}
    </>
    
  );
}

export default Header;