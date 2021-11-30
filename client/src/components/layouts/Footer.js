import React, {useEffect} from "react";

const RED = "#ff0000"; 
const BLUE = "#0000ff"; 
const GRAY = "#678c89"; 

function Footer (props) {

    const submitThemeColor = color => { 
        // lưu giá trị mã màu theme vào Store - redux 
        // Xử lý sau 
        if (color) {
            console.log('handleChangeTheme');
            props.saveColorTheme(color);
        }
    };

    // Same as getDerivedStateFromProps lifecycle
    useEffect(() => {
        console.log('getDerivedStateFromProps: ' + JSON.stringify(props)) 
                document 
                    .documentElement 
                    .style 
                    .setProperty("--main-color", props.themeColor.color); 
    }, [ props ]);

    return (
        <div className="footer"> 
            <div className="vertical-center"> 
                <span>Choose Theme </span>
                <button onClick={() => submitThemeColor(RED)} className="dot red"/> 
                <button onClick={() => submitThemeColor(BLUE)} className="dot blue"/> 
                <button onClick={() => submitThemeColor(GRAY)} className="dot gray"/> 
            </div> 
        </div> 
    )
}

export default Footer;