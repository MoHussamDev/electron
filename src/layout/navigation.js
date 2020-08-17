import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
const { ipcRenderer } = window.require('electron');
  
const Navigation = (props)=> {
    const [screenheight , setScreenHeight] = useState()
    useEffect(()=>{
        ipcRenderer.send('connect');
        ipcRenderer.on('connect', (event, arg) => {
            console.log(arg.height);
            setScreenHeight(arg.height);
          });

          return ()=> ipcRenderer.removeAllListeners('connect');

        
    },[])
 
    const instyle={
        height:screenheight - 105 + 'px'
    }
    return (
        <div className="sidebarme" style={instyle} >
            <div className="upperNavigation">
                <i className="fas fa-poll-h"></i>
                <p>
                الخدمات
                </p>
            </div>
            <div className="choices">
            <ul>

                <li><Link to="/"> <p>الرئيسية<i className="fas fa-poll-h"></i></p></Link></li>
                <li><Link to="/allproducts"> <p> المنتجات<i className="fas fa-poll-h"></i></p></Link></li>
                <li><Link to="/addnewproduct"> <p> الكاشير<i className="fas fa-poll-h"></i></p></Link></li>
                <li><Link to="/addproduct"> <p> الأحصائيات و التقارير <i className="fas fa-poll-h"></i></p></Link></li>
            </ul>
            </div>
        </div>
    );
}

export default Navigation ;