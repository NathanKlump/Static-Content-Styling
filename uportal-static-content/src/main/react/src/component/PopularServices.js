import React from 'react'
import '../App.css'
import { Typography } from '@mui/material'

export default function PopularServices() {

    return (
        <div>
            <div className="App">
            <div className="App-icons">

                <div id="webmail-icon"></div>

                <div id="moodle-icon"></div>

                <div id="sail-icon"></div>

                <div id="handshake-icon"></div>

                <div id="ebill-icon"></div>
                
                <div id="financial-aid-icon"></div>

            </div>
            <div className="App-text">
                <div id="webmail-text">
                    <Typography>Webmail</Typography>
                </div>
                <div id="moodle-text">
                    <Typography>Moodle</Typography>
                </div>
                <div id="sail-text">
                    <Typography>Sail</Typography>
                </div>
                <div id="handshake-text">
                    <Typography>Handshake</Typography>
                </div>
                <div id="ebill-text">
                    <Typography>eBill</Typography>
                </div>
                <div id="financial-aid-text">
                    <Typography>Financial Aid</Typography>
                </div>
            </div>
            </div>
        </div>
    )
}








