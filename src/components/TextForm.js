import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        if (text.length > 0) {
            setText(newText)
            props.showAlert("Connverted to uppercase!", "success")
        } else {
            props.showAlert("please type something!", "warning")
        }
        // if(text)
    }
    const handleLoClick = () => {
        const newText = text.toLowerCase();
        if (text.length > 0) {
            setText(newText)
            props.showAlert("Connverted to lowercase!", "success")
        } else {
            props.showAlert("please type something!", "warning")
        }

    }

    const handleExtraSpaceClick = () => {
        const newText = text.split(/[  ]+/)
        if (text.length > 0) {
            setText(newText.join(" "))
            props.showAlert("Extra spaces removed!", "success")
        } else {
            props.showAlert("please type something!", "warning")
        }

    }

    const handleCopyClick = () => {
        const text = document.getElementById("myBox");
        text.select();
        if (text.value.length > 0) {
            navigator.clipboard.writeText(text.value)
            props.showAlert("Copy to Clipboard!", "success")
        } else {
            props.showAlert("please type something!", "warning")
        }

    }

    const handleClearClick = () => {
        const newText = "";
        if (text.length > 0) {
            setText(newText)
            props.showAlert("Text Cleared!", "success")
        } else {
            props.showAlert("please type something!", "warning")
        }

    }

    return (
        <div className='container my-3'>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }} >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "gray", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-2" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary m-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your text summary</h1>
                <p>{text.replace(/ /g, '').length > 0 ? text.trim().split(" ").length : 0} Words and {text.replace(/ /g, '').length} characters</p>
                <p>{text.replace(/ /g, '').length > 0 ? 0.008 * text.trim().split(" ").length : 0} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
            </div>
        </div>
    )
}
