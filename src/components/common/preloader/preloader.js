import React from "react";
import preloader from "../../../assets/images/preloader.svg";


let Preloader = (props) => {
    return (
        <div style={{margin: '150px auto', width: '100px'}}>
            <img src={preloader} alt='loading' />
        </div>
    )

}

export default Preloader;