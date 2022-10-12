import React from "react";
import './spinner.css'

export default function Spinner() {
  return (
    <div className="spinner-box"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
  )
}