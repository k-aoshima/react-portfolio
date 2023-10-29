import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Box } from '@mui/material';
import React, { useState } from 'react';
import { forwardRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

const Transition = forwardRef(function Transition(props, ref){
    return <Slide direction='up' ref={ref} {...props} />;
})

const ProductItem = ({ data }) =>{
    const dialogData = data['product-dialog'];

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div style={{ display: "block" }}>
            <img 
                src={data.url} 
                alt='' 
                style={{ maxWidth: "300px" }} 
                onClick={handleClickOpen}
            />
            <div style={{ textAlign: "center" }}>
                <h2 className='title-font' style={{ margin: "10px 0 5px 0", fontWeight: "bold", fontSize: "25px" }}>{data.title}</h2>
                <div style={{ fontSize: "15px" }}>{data.subtitle}</div>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="xl"
                fullWidth={true}
            >
                <DialogTitle sx={{ textAlign: "center" }}>
                    <Box className='title-font' style={{ fontWeight: "bold", fontSize: "25px"}}>
                        {data.title}
                    </Box>
                    <Box className='text-font' style={{ fontSize: "16px" }}>
                        {data.subtitle}
                    </Box>
                </DialogTitle>
                <DialogContent sx={{ textAlign: "center" }}>
                    <img src={`${process.env.PUBLIC_URL}/img/${ dialogData.img }`} alt="" style={{width: "60vw", maxWidth: "550px", paddingBottom: "20px"}} ></img>
                    <div style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <DialogContentText className='text-font' id="alert-dialog-slide-description" sx={{ paddingBottom: " 20px", maxWidth: "620px"}}>
                            {dialogData.explanation}
                        </DialogContentText>
                        <DialogContentText className='text-font'  id="alert-dialog-slide-description" sx={{ paddingBottom: "20px" }}>
                            { dialogData.diagramImg ? "ーシステム相関図ー" : "" }
                        </DialogContentText>
                        { dialogData.diagramImg ? <img src={`${process.env.PUBLIC_URL}/img/${ dialogData.diagramImg }` } alt='' style={{width: "60vw", maxWidth: "600px", paddingBottom: "20px"}}></img> : "" }
                        <DialogContentText className='text-font' id="alert-dialog-slide-description">
                            ー使用言語などー
                        </DialogContentText>
                        <DialogContentText className='text-font' id="alert-dialog-slide-description" sx={{ paddingBottom: "30px" }}>
                            { dialogData.useSkill }
                        </DialogContentText>
                        <a href={dialogData.githubUrl}>
                            <GitHubIcon />
                            <div className='text-font'>
                                GitHub    
                            </div>
                        </a>
                    </div>                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close Project</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default ProductItem;