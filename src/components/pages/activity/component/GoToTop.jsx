import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { btnJS } from "./btn";
import '../activities_components.css';

const GoToTop = () => {
    const [data, setdata] = useState([]);
  
    // useEffect(() => {
    //   getStore().then((result) => {
    //     setdata(result);
    //   });
    // }, []);
  
    useEffect(() => {
      btnJS(data);
    },[data]);
  
    return (
        <button  id="goTopBtn" title="Go to top">TOP</button>
    )
  }

export default GoToTop;