import React, { useState } from 'react';
import './Flights.css';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function TravelRequest() {
    const [showReturn, setShowReturn] = useState(false);
  return (
    <>
    <div className='flight_booking_form'>
        <div className="booking-form-layouts">
        <form onSubmit={() => alert('You have successfully submitted the form')}>
            <h2 className="sub-heading-agileits">Flight Booking Details</h2>
            <div className="main-flex-lgls-sectns">
                <div className="field-agileinfo-spc form-lg-agile-text1">
                    <select className="form-control">
                    <option>From</option>
                        <option>Mumbai</option>
                        <option>Chennai International Airport</option>
                    </select>
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text2">
                    <select className="form-control">
                    <option>To</option>
                    <option>Mumbai</option>
                    <option>Chennai International Airport</option>
                    </select>
                </div>
            </div>
            <div className="main-flex-lgls-sectns">
                <div className="field-agileinfo-spc form-lg-agile-text1">
                    <select className="form-control">
                    <option>Preferred Airline</option>
                    <option value="American Airline">American Airline</option>
                    <option value="Delta Airlines">Delta Airlines</option>
                    <option value="Frontier Airline">Frontier Airline</option>
                    <option value="Jet Blue">Jet Blue</option>
                    <option value="Southwest Airlines">Southwest Airlines</option>
                    </select>
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text2">
                    <select className="form-control">
                    <option>Preferred Seating</option>
                    <option value="Window">Window</option>
                    <option value="Aisle">Aisle</option>
                    <option value="Special">Special (Request note below)</option>
                    </select>
                </div>
            </div>
            <div className="main-flex-lgls-sectns">
                <div className="field-agileinfo-spc form-lg-agile-text1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Departure Date" />
                </DemoContainer>
                </LocalizationProvider>
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Departure Time" />
                </DemoContainer>
                </LocalizationProvider>
                </div>
            </div>
            <div className="triple-wthree">
                <div className="field-agileinfo-spc form-lg-agile-text11">
                    <select className="form-control">
                    <option>Adult(12+ Yrs)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                    </select>
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text22">
                    <select className="form-control">
                    <option>Children(2-11 Yrs)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                    </select>
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text33">
                    <select className="form-control">
                    <option>Infant(under 2Yrs)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                    </select>
                </div>
            </div>
            <div className="radio-section">
                <h6>Select your Fare</h6>
                <ul className="radio-buttons-lg-agileits">
                    <li>
                    <input onClick={() => setShowReturn(false)} type="radio" id="a-option" name="selector1" />
                    <label onClick={() => setShowReturn(false)} htmlFor="a-option">One Way</label>
                    <div className="check"></div>
                    </li>
                    <li>
                    <input onClick={() => setShowReturn(true)} type="radio" id="b-option" name="selector1" />
                    <label onClick={() => setShowReturn(true)} htmlFor="b-option">Round-Trip</label>
                    <div className="check">
                        <div className="inside"></div>
                    </div>
                    </li>
                </ul>
                <div className="clear"></div>
            </div>
            {showReturn && (
            <div className="main-flex-lgls-sectns">
                <div className="field-agileinfo-spc form-lg-agile-text1">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Return Date" />
                </DemoContainer>
                </LocalizationProvider>
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                    <TimePicker label="Return Time" />
                </DemoContainer>
                </LocalizationProvider>
                </div>
            </div>
            )}
            <div className="field-agileinfo-spc form-lg-agile-text">
                <textarea name="Message" placeholder="Any Message..."></textarea>
            </div>
            <h3 className="sub-heading-agileits">Personal Details</h3>
            <div className="main-flex-lgls-sectns">
                <div className="field-agileinfo-spc form-lg-agile-text1">
                    <input type="text" name="Name" placeholder="Full Name" required="" />
                </div>
                <div className="field-agileinfo-spc form-lg-agile-text2">
                    <input type="text" name="Phone no" placeholder="Phone Number" required="" />
                </div>
            </div>
            <div className="field-agileinfo-spc form-lg-agile-text">
                <input type="email" name="Email" placeholder="Email" required="" />
            </div>
            <div className="clear"></div>
            <input className='form_submit_button' type="submit" value="Submit" />
            <input className='form_reset_button' type="reset" value="Clear Form" />
            <div className="clear"></div>
        </form>
        </div>
    </div>
    </>
  )
}

export default TravelRequest;