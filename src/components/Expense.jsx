import React from 'react';
import styled from 'styled-components';
import { MdOutlineAdd } from 'react-icons/md';
import { AiOutlineArrowUp } from 'react-icons/ai'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Expense = () => {
    
        const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
        });

        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {
        setOpen(true);
        };

        const handleClose = () => {
        setOpen(false);
        };

    return (
        <Section>
            <div className='expense'>
                <div>
                    <p>My Wallet</p>
                </div>
                <div className='cashbalance'>
                    <h2>KES 12,000</h2>
                    <span>Cash Balance</span>
                </div>
                <div className='owner'>
                    <div>
                        <p>Ronald</p>
                    </div>
                    <div>
                        <p>Business Owner</p>
                    </div>
                </div>
                <div className='expenseButtons'>
                    <div>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Cash In &nbsp; <MdOutlineAdd />
                        </Button>
                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                        >
                            <AppBar sx={{ position: 'relative' }}>
                                <Toolbar>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={handleClose}
                                        aria-label="close"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                        Cash In
                                    </Typography>
                                    <Button autoFocus color="inherit" onClick={handleClose}>
                                        save
                                    </Button>
                                </Toolbar>
                            </AppBar>
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText
                                        primary="Default notification ringtone"
                                        secondary="Tethys"
                                    />
                                </ListItem>
                            </List>
                        </Dialog>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Cash Out &nbsp; <AiOutlineArrowUp />
                        </Button>
                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                        >
                            <AppBar sx={{ position: 'relative' }}>
                                <Toolbar>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        onClick={handleClose}
                                        aria-label="close"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                        Cash Out
                                    </Typography>
                                    <Button autoFocus color="inherit" onClick={handleClose}>
                                        save
                                    </Button>
                                </Toolbar>
                            </AppBar>
                            <List>
                                <ListItem button>
                                    <ListItemText primary="Phone ringtone" secondary="Titania" />
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText
                                        primary="Default notification ringtone"
                                        secondary="Tethys"
                                    />
                                </ListItem>
                            </List>
                        </Dialog>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Expense
const Section = styled.section`
.expense {
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    border-radius: 1rem;
    color: white;
    background-color: #5f7482;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
        background-color: #172144;
        color: white;
    }
    .cashbalance{
        margin-top: 15px;
        margin-bottom: 20px;
        text-align: center;
        span{
            font-size: 10px;
        }
    }
    .owner {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left:5px;
        margin-right:5px;
        font-size:12px;
    }
    .expenseButtons {
        display: flex;
        justify-content: space-between;
        margin: 10px  5px;
        button{
            padding: 10px 15px;
            border-radius: 5px;
            border:none;
            background-color: #dfe5ea;
            font-weight: bold;
            cursor:pointer;
            color: black;
        }
    }
}
`;