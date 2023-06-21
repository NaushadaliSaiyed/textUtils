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
        // const text = document.getElementById("myBox");
        // text.select();
        // if (text.value.length > 0) {
            navigator.clipboard.writeText(text)
            // document.getSelection().removeAllRanges();
            props.showAlert("Copy to Clipboard!", "success")
        // } else {
            // props.showAlert("please type something!", "warning")
        // }

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
        <div className='container my-2'>
            <div className='container' style={{ color: props.mode === "light" ? "black" : "white" }} >
                <h1 className='my-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "light" ? "black" : "white" }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </div>
    )
}
