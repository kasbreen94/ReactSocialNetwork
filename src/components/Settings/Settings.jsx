import React from 'react';
import axios from "axios";


const Settings = (props) => {

    //var#1

    // const postData = async () => {
    //     try {
    //         const res_1 = await axios.post(`https://random-name-challenge.weblab.technology`);
    //         const name_1 =  res_1.data.name;
    //         const res_2 = await axios.post(`https://random-name-challenge.weblab.technology`);
    //         const name_2 = res_2.data.name;
    //         const allData = await Promise.all([name_1, name_2]);
    //         console.log(allData);
    //     } catch {
    //         postData();
    //     }
    //
    // }

    //var#2

    // const postData = async () => {
    //     try {
    //         const [name_1, name_2] = await Promise.all([
    //             axios.post(`https://random-name-challenge.weblab.technology`)
    //                 .then(name_1 => name_1.data.name),
    //             axios.post(`https://random-name-challenge.weblab.technology`)
    //                 .then(name_2 => name_2.data.name)
    //         ]);
    //         return console.log([name_1, name_2]);
    //     } catch {
    //         setTimeout(() => {
    //             postData();
    //         }, 1000)
    //     }
    // }

    // const postData = async () => {
    //     try {
    //         const res = await fetch (`https://random-name-challenge.weblab.technology`, {method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             }})
    //         let json = await res.json()
    //         let data = json.data
    //         let name = data.name
    //             console.log(name)
    //
    //         // const [name_1] = await Promise.all([
    //         //     name_1(console.log(data.data.name)),
    //
    //             // fetch (`https://random-name-challenge.weblab.technology`, {'method': 'POST'})
    //             //     .then(res => res.json()).then(name_2 => name_2.data.name)
    //         // ]);
    //         // return console.log([name_1]);
    //     } catch {
    //         setTimeout(() => {
    //             postData();
    //         }, 1000)
    //     }
    // }
    //
    // postData();

    return (
        <div>

        </div>
    )
}

export default Settings;