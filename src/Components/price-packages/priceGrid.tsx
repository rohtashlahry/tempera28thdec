import React, { useState } from 'react';
import './pricegrid.css';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import TempSwitch from '../reusable-components/tempToggle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const PriceGrid = () => {
    const [toggleChecked, setToogleChecked] = useState(false)
    const [platinumPrice, setPlatinumPrice] = useState("599")
    const [silverPrice, setSilverPrice] = useState("399")
    const [goldPrice, setGoldPrice] = useState("499")

    const handleToggle = () => {
        console.log("clicked")
        setToogleChecked(!toggleChecked)
        setPlatinumPrice(!toggleChecked ? "3999" : "599");
        setGoldPrice(!toggleChecked ? "2999": "499");
        setSilverPrice(!toggleChecked ? "1999" : "399");
    }

  return (
        <>
            <div className='price_grid_container'>
                <div className='price_grid_heading'>
                    <p>Offering budget friendly pricing <br/>
                        solutions for your business</p>
                </div>
                <div className='price_grid_btn'>
                    <div className='price_grid_btn_inner'>
                        <label style={toggleChecked ? { color: "#000" } : {color: "#fd6219" }}>Monthly</label>
                        <TempSwitch 
                            onChange={handleToggle}
                            defaultChecked={toggleChecked}                    
                        />
                        <label style={toggleChecked ? { color: "#fd6219" } : {color: "#000" }}>Yearly</label>                    
                    </div>
                </div>
                <div className='price_grid_pckg'>
                    <div className='price_grid_pckg_box'>
                        <p>Silver</p>
                        <h3 style={{fontSize: 30, color: "#fd6219"}}>{silverPrice} <span style={{fontSize: 16}}>{ !toggleChecked ? "/monthly" : "/yearly"}</span></h3>
                        <p style={{color: "#a3a3a3", paddingTop: 20}}>Control your choices for effective business growth and more customers.</p>
                        <p style={{borderBottom: "1px solid #a3a3a3", marginBottom: "30px", marginTop: "30px"}}></p>
                        <div className='price_grid_pckg_box_li'>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                        </div>
                        <button className='button-39' style={{width: "100%"}}>Choose Package</button>
                    </div>

                    <div className='price_grid_pckg_box'>
                        <p>Gold</p>
                        <h3 style={{fontSize: 30, color: "#fd6219"}}>{goldPrice} <span style={{fontSize: 16}}>{ !toggleChecked ? "/monthly" : "/yearly"}</span></h3>
                        <p style={{color: "#a3a3a3", paddingTop: 20}}>Control your choices for effective business growth and more customers.</p>
                        <p style={{borderBottom: "1px solid #a3a3a3", marginBottom: "30px", marginTop: "30px"}}></p>
                        <div className='price_grid_pckg_box_li'>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                        </div>
                        <button className='button-39' style={{width: "100%"}}>Choose Package</button>
                    </div>

                    <div className='price_grid_pckg_box'>
                        <p>Platinum</p>
                        <h3 style={{fontSize: 30, color: "#fd6219"}}>{platinumPrice} <span style={{fontSize: 16}}>{ !toggleChecked ? "/monthly" : "/yearly"}</span></h3>
                        <p style={{color: "#a3a3a3", paddingTop: 20}}>Control your choices for effective business growth and more customers.</p>
                        <p style={{borderBottom: "1px solid #a3a3a3", marginBottom: "30px", marginTop: "30px"}}></p>
                        <div className='price_grid_pckg_box_li'>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                            <p style={{paddingBottom: 10, fontSize: 20, alignItems: "center"}}><CheckCircleIcon style={{padding: 0, marginRight: 10, alignItems: "center"}}/>Limited content</p>
                        </div>
                        <button className='button-39' style={{width: "100%"}}>Choose Package</button>
                    </div>
                    
                </div>
            </div>
        </>
  )
}

export default PriceGrid;