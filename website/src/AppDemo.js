import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CustomSection from "./components/CustomSection";
import LineSection from "./components/LineSection";
import ExploreMore from "./components/ExploreMore";
import FindProduct from "./components/FindProduct";
import Footer from "./components/Footer";
// import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Navbar />

      <CustomSection />
      <LineSection />
      <ExploreMore />
      <FindProduct />
      {/* <ContactForm/> */}
      <Footer />
    </>

    // <>
    //      <div style={{width: 1425, height: 4008, position: 'relative'}}>
    //   <div style={{width: 1425, height: 4008, left: 0, top: 0, position: 'absolute', background: 'white'}}>
    //     <div style={{width: 1728, height: 116, paddingLeft: 105, paddingRight: 105, paddingTop: 37, paddingBottom: 37, left: -100, top: 701, position: 'absolute', background: '#F0F0F0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    //       <div style={{width: 1458, justifyContent: 'flex-start', alignItems: 'center', gap: 28, display: 'inline-flex'}}>
    //         <div style={{width: 317}}><span style="color: '#023B3B', fontSize: 21, fontFamily: 'Montserrat', fontWeight: '500', textTransform: 'capitalize', lineHeight: 28, wordWrap: 'break-word'">OUR PARTERS IN </span><span style="color: '#A6CE39', fontSize: 21, fontFamily: 'Montserrat', fontWeight: '500', textTransform: 'capitalize', lineHeight: 28, wordWrap: 'break-word'">CHEMICALS</span></div>
    //         <div style={{width: 1410.17, height: 161, position: 'relative'}}>
    //           <div style={{width: 1386, height: 80, left: 0, top: 40.50, position: 'absolute', background: 'linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, #D9D9D9 50%, rgba(217, 217, 217, 0) 100%)'}} />
    //           <div style={{width: 158.33, height: 81.56, left: -24.17, top: 39.72, position: 'absolute'}}>
    //             <div style={{width: 31.90, height: 40, left: 0, top: 0, position: 'absolute', background: '#141414'}}></div>
    //             <img style={{width: 104, height: 81, left: 54.33, top: 0.56, position: 'absolute'}} src="https://via.placeholder.com/104x81" />
    //           </div>
    //           <img style={{width: 120, height: 91, left: 198.17, top: 35, position: 'absolute'}} src="https://via.placeholder.com/120x91" />
    //           <img style={{width: 178, height: 136, left: 382.17, top: 12.50, position: 'absolute'}} src="https://via.placeholder.com/178x136" />
    //           <img style={{width: 210, height: 161, left: 624.17, top: 0, position: 'absolute'}} src="https://via.placeholder.com/210x161" />
    //           <img style={{width: 154, height: 118, left: 898.17, top: 21.50, position: 'absolute'}} src="https://via.placeholder.com/154x118" />
    //           <img style={{width: 122, height: 93, left: 1116.17, top: 34, position: 'absolute'}} src="https://via.placeholder.com/122x93" />
    //           <img style={{width: 108, height: 82, left: 1302.17, top: 39.50, position: 'absolute'}} src="https://via.placeholder.com/108x82" />
    //         </div>
    //       </div>
    //     </div>
    //     <div style={{width: 1425, height: 816, left: 0, top: 2710, position: 'absolute', background: '#023B3B'}}>
    //       <div style={{width: 1425, height: 816, left: -2.25, top: -7.58, position: 'absolute', background: '#023B3B'}}>
    //         <img style={{width: 1534.62, height: 1022.33, left: -54.54, top: -103.18, position: 'absolute'}} src="https://via.placeholder.com/1535x1022" />
    //         <div style={{width: 1172, height: 716, left: 126.50, top: 50, position: 'absolute'}}>
    //           <div style={{width: 753.51, height: 27, left: 216.40, top: 0.01, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Albert Sans', fontWeight: '700', lineHeight: 36.44, wordWrap: 'break-word'}}>ICG SPECIALITY Chemicals Stock</div>
    //           <div style={{width: 456.33, height: 605, left: 16, top: 79, position: 'absolute', border: '1px white solid'}}>
    //             <div style={{width: 237.65, height: 25.82, left: 50.50, top: 43.09, position: 'absolute', color: 'white', fontSize: 29.05, fontFamily: 'Albert Sans', fontWeight: '700', lineHeight: 29.41, wordWrap: 'break-word'}}>Currently in stock</div>
    //             <div style={{width: 354.33, height: 423, left: 51, top: 114.60, position: 'absolute', borderTop: '1px #D9D9D9 solid', borderBottom: '1px #D9D9D9 solid'}}>
    //               <div style={{width: 354.33, height: 1345, left: 0, top: 25, position: 'absolute'}}>
    //                 <div style={{width: 157.09, height: 38, left: 0, top: 0, position: 'absolute'}}>
    //                   <div style={{width: 147.65, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>CDT ABP – 68515-40-2</div>
    //                   <div style={{width: 145.06, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe - 23kg in stock</div>
    //                 </div>
    //                 <div style={{width: 245.14, height: 38, left: 0, top: 50, position: 'absolute'}}>
    //                   <div style={{width: 237.15, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab LS 123 – CAS: 129757-67-1</div>
    //                   <div style={{width: 125.72, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.56, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China, USA</div>
    //                 </div>
    //                 <div style={{width: 327.36, height: 38, left: 0, top: 100, position: 'absolute'}}>
    //                   <div style={{width: 319.74, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab LS 292 – CAS: 41556-26-7 & 82919-37-7</div>
    //                   <div style={{width: 125.72, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.56, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China, USA</div>
    //                 </div>
    //                 <div style={{width: 244.47, height: 38, left: 0, top: 150, position: 'absolute'}}>
    //                   <div style={{width: 235.20, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab LS 622 – CAS: 65447-77-0</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 244.17, height: 38, left: 0, top: 200, position: 'absolute'}}>
    //                   <div style={{width: 234.90, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab LS 770 – CAS: 52829-07-9</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 354.33, height: 57, left: 0, top: 250, position: 'absolute'}}>
    //                   <div style={{width: 315.82, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab LS 944 – CAS: 71878-19-8 / 70624-18-9</div>
    //                   <div style={{width: 28.58, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>(US)</div>
    //                   <div style={{width: 80.75, height: 19, left: 0, top: 38, position: 'absolute', color: 'white', fontSize: 13.56, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, USA</div>
    //                 </div>
    //                 <div style={{width: 354.33, height: 57, left: 0, top: 319, position: 'absolute'}}>
    //                   <div style={{width: 324.40, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab LS B 783 – CAS: 65447-77-0 & 71878-19-</div>
    //                   <div style={{width: 116.91, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>8/70624-18-9 (US)</div>
    //                   <div style={{width: 39.08, height: 19, left: 0, top: 38, position: 'absolute', color: 'white', fontSize: 13.89, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>China</div>
    //                 </div>
    //                 <div style={{width: 230.42, height: 38, left: 0, top: 388, position: 'absolute'}}>
    //                   <div style={{width: 221.68, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 1 – CAS: 57834-33-0</div>
    //                   <div style={{width: 80.75, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.56, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, USA</div>
    //                 </div>
    //                 <div style={{width: 235.75, height: 38, left: 0, top: 438, position: 'absolute'}}>
    //                   <div style={{width: 227.95, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 326 – CAS: 3896-11-5</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 262.67, height: 38, left: 0, top: 488, position: 'absolute'}}>
    //                   <div style={{width: 254.97, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 384-2 – CAS: 127519-17-9</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 252.61, height: 38, left: 0, top: 538, position: 'absolute'}}>
    //                   <div style={{width: 244.37, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 400 – CAS: 153519-44-9</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 271.95, height: 38, left: 0, top: 588, position: 'absolute'}}>
    //                   <div style={{width: 264.70, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 1084 NQ – CAS: 14516-71-3</div>
    //                   <div style={{width: 39.08, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.89, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>China</div>
    //                 </div>
    //                 <div style={{width: 354.33, height: 57, left: 0, top: 638, position: 'absolute'}}>
    //                   <div style={{width: 341.31, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 1130 – CAS: 104810-48-2 & 104810-47-1</div>
    //                   <div style={{width: 84.82, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>& 25322-68-3</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 38, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 256.52, height: 38, left: 0, top: 707, position: 'absolute'}}>
    //                   <div style={{width: 248.91, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 1577 – CAS: 147315-50-2</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 246.56, height: 38, left: 0, top: 757, position: 'absolute'}}>
    //                   <div style={{width: 238.04, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV 3039 – CAS: 6197-30-4</div>
    //                   <div style={{width: 91.11, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China</div>
    //                 </div>
    //                 <div style={{width: 305.77, height: 38, left: 0, top: 807, position: 'absolute'}}>
    //                   <div style={{width: 300.72, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV BP 12 (UV 531) – CAS: 1843-05-6</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 227.19, height: 38, left: 0, top: 857, position: 'absolute'}}>
    //                   <div style={{width: 218.40, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV P – CAS: 2440-22-4</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 294.50, height: 38, left: 0, top: 907, position: 'absolute'}}>
    //                   <div style={{width: 286.99, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab UV Octocrylene – CAS: 6197-30-4</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 245.41, height: 38, left: 0, top: 957, position: 'absolute'}}>
    //                   <div style={{width: 236.70, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab AN 168 – CAS: 31570-04-4</div>
    //                   <div style={{width: 91.11, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China</div>
    //                 </div>
    //                 <div style={{width: 249.11, height: 38, left: 0, top: 1007, position: 'absolute'}}>
    //                   <div style={{width: 239.71, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab AN 245 – CAS: 36443-68-2</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 243.22, height: 38, left: 0, top: 1057, position: 'absolute'}}>
    //                   <div style={{width: 235.02, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab AN 1010 – CAS: 6683-19-8</div>
    //                   <div style={{width: 204.29, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.56, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China - 1000kg in stock</div>
    //                 </div>
    //                 <div style={{width: 210.17, height: 38, left: 0, top: 1107, position: 'absolute'}}>
    //                   <div style={{width: 200.83, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab OB – CAS: 7128-64-5</div>
    //                   <div style={{width: 91.11, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China</div>
    //                 </div>
    //                 <div style={{width: 218.33, height: 38, left: 0, top: 1157, position: 'absolute'}}>
    //                   <div style={{width: 209.74, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab OB 1 – CAS: 1533-45-5</div>
    //                   <div style={{width: 91.11, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China</div>
    //                 </div>
    //                 <div style={{width: 325.48, height: 38, left: 0, top: 1207, position: 'absolute'}}>
    //                   <div style={{width: 319.17, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Omnistab OB CBS 351 (CBS-X) – CAS: 27344-41-8</div>
    //                   <div style={{width: 91.11, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe, China</div>
    //                 </div>
    //                 <div style={{width: 58.66, height: 38, left: 0, top: 1257, position: 'absolute'}}>
    //                   <div style={{width: 47.86, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>PE1002</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //                 <div style={{width: 57.94, height: 38, left: 0, top: 1307, position: 'absolute'}}>
    //                   <div style={{width: 41.77, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>PVML</div>
    //                   <div style={{width: 46.14, height: 19, left: 0, top: 19, position: 'absolute', color: 'white', fontSize: 13.67, fontFamily: 'Roboto Slab', fontWeight: '600', wordWrap: 'break-word'}}>Europe</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div style={{width: 651.66, height: 605, left: 504.34, top: 79, position: 'absolute', background: '#F8F8F8'}}>
    //             <div style={{width: 551.66, height: 43.19, left: 50, top: 60, position: 'absolute'}}>
    //               <div style={{width: 485.37, height: 43.38, left: 0, top: -15.89, position: 'absolute', color: '#023B3B', fontSize: 29.14, fontFamily: 'Albert Sans', fontWeight: '700', lineHeight: 29.50, wordWrap: 'break-word'}}>Request a quote for available stock<br/>items</div>
    //             </div>
    //             <div style={{width: 332.62, height: 24, left: 50, top: 123.19, position: 'absolute', color: 'rgba(43, 49, 71, 0.60)', fontSize: 16, fontFamily: 'Roboto Slab', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>You will receive your quote within 24 hours.</div>
    //             <div style={{width: 551.66, height: 322, left: 50, top: 171.19, position: 'absolute'}}>
    //               <div style={{width: 267.83, height: 55, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 2, border: '1px #D7D7D7 solid'}}>
    //                 <div style={{width: 233.83, height: 20, left: 17, top: 18, position: 'absolute'}}>
    //                   <div style={{width: 49.65, height: 20, left: 0, top: 0, position: 'absolute', color: '#ABAEBA', fontSize: 15.20, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>Name*</div>
    //                 </div>
    //               </div>
    //               <div style={{width: 267.83, height: 55, left: 283.83, top: 0, position: 'absolute', background: 'white', borderRadius: 2, border: '1px #D7D7D7 solid'}}>
    //                 <div style={{width: 233.83, height: 20, left: 17, top: 18, position: 'absolute'}}>
    //                   <div style={{width: 54.92, height: 20, left: 0, top: 0, position: 'absolute', color: '#ABAEBA', fontSize: 15.20, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>E-mail*</div>
    //                 </div>
    //               </div>
    //               <div style={{width: 267.83, height: 55, left: 0, top: 71, position: 'absolute', background: 'white', borderRadius: 2, border: '1px #D7D7D7 solid'}}>
    //                 <div style={{width: 233.83, height: 20, left: 17, top: 18, position: 'absolute'}}>
    //                   <div style={{width: 150.98, height: 20, left: 0, top: 0, position: 'absolute', color: '#ABAEBA', fontSize: 15.20, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>Required volume (kg)</div>
    //                 </div>
    //               </div>
    //               <div style={{width: 267.83, height: 55, left: 283.83, top: 71, position: 'absolute', background: 'white', borderRadius: 2, border: '1px #D7D7D7 solid'}}>
    //                 <div style={{width: 233.83, height: 20, left: 17, top: 18, position: 'absolute'}}>
    //                   <div style={{width: 114.76, height: 20, left: 0, top: 0, position: 'absolute', color: '#ABAEBA', fontSize: 15.20, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>City of delivery*</div>
    //                 </div>
    //               </div>
    //               <div style={{width: 267.83, height: 160, left: 0, top: 142, position: 'absolute', background: 'white', borderRadius: 2, overflow: 'hidden', border: '1px #D7D7D7 solid'}}>
    //                 <div style={{width: 233, left: 16.82, top: 16.82, position: 'absolute', color: '#ABAEBA', fontSize: 15.20, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>Add here your special product requirements, packaging and volume per product.</div>
    //               </div>
    //               <div style={{width: 267.83, height: 160, left: 283.83, top: 142, position: 'absolute', background: 'white', borderRadius: 2, overflow: 'hidden', border: '1px #D7D7D7 solid'}}>
    //                 <div style={{width: 242, left: 16.99, top: 19.82, position: 'absolute', color: '#ABAEBA', fontSize: 15.20, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '300', wordWrap: 'break-word'}}>Control Question 12+1=?</div>
    //               </div>
    //             </div>
    //             <div style={{width: 157, height: 62, left: 49.82, top: 493.01, position: 'absolute'}}>
    //               <div style={{width: 157, height: 62, left: 0, top: 0, position: 'absolute', background: '#A6CE39', boxShadow: '0px 8.248608589172363px 29.878292083740234px rgba(162.16, 198.26, 63.77, 0.33)', borderRadius: 6.42}} />
    //               <div style={{left: 38, top: 17.74, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 23.89, fontFamily: 'Ubuntu', fontWeight: '400', letterSpacing: 0.48, wordWrap: 'break-word'}}>Submit</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div style={{width: 1425, height: 593, left: 0, top: 108, position: 'absolute', background: '#090A08'}}>
    //       <div style={{width: 1425, height: 609, left: 0, top: -16, position: 'absolute', background: 'linear-gradient(0deg, rgba(2, 59, 59, 0.49) 0%, rgba(2, 59, 59, 0.49) 100%)'}} />
    //       <div style={{width: 1425, height: 315.79, left: 0, top: -65, position: 'absolute'}}>
    //         <div style={{width: 1903, height: 550, left: 359, top: -132, position: 'absolute'}}>
    //           <div style={{width: 1903, height: 550, left: 0, top: 0, position: 'absolute', background: 'rgba(166, 206, 57, 0.35)'}}></div>
    //         </div>
    //         <div style={{width: 1903, height: 550, left: 127.50, top: -92, position: 'absolute'}}></div>
    //         <div style={{width: 664.71, height: 243.37, left: 380.15, top: 214.63, position: 'absolute', borderRadius: 14, border: '3px solid', backdropFilter: 'blur(13.30px)'}} />
    //       </div>
    //       <div style={{width: 1903, height: 550, left: -835, top: 916, position: 'absolute'}}>
    //         <div style={{width: 1903, height: 550, left: 0, top: 0, position: 'absolute', background: 'rgba(166, 206, 57, 0.35)'}}></div>
    //       </div>
    //       <div style={{height: 305, left: 410, top: 170, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
    //         <div style={{height: 206, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 6, display: 'flex'}}>
    //           <div style={{width: 455, textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Albert Sans', fontWeight: '900', textTransform: 'uppercase', lineHeight: 61, wordWrap: 'break-word'}}>Serving<br/>chemicals</div>
    //           <div style={{width: 538, textAlign: 'center', color: 'white', fontSize: 16.10, fontFamily: 'Inter', fontWeight: '600', lineHeight: 26, wordWrap: 'break-word'}}>AT ICG SPECIALTY CHEMICALS FZCO We Aim To Improve The<br/>Quality & Duration Of Your Products By Providing Environmentally<br/>Friendly Serving Chemicals </div>
    //         </div>
    //         <div style={{width: 667, height: 75, position: 'relative'}}>
    //           <div style={{width: 667, height: 75, left: 0, top: 0, position: 'absolute'}}>
    //             <div style={{width: 667, height: 75, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 73.05}} />
    //             <div style={{left: 47, top: 28, position: 'absolute', color: '#D9D9D9', fontSize: 21.56, fontFamily: 'Roboto Slab', fontWeight: '400', lineHeight: 18.87, wordWrap: 'break-word'}}>Search for CAS no. or Product name</div>
    //           </div>
    //           <div style={{width: 60, height: 62.54, left: 598, top: 6, position: 'absolute', background: '#A6CE39', borderRadius: 86.20}}>
    //             <div style={{width: 28, height: 28, left: 16, top: 17.27, position: 'absolute'}}>
    //               <div style={{width: 28, height: 28, left: 0, top: 0, position: 'absolute', background: 'white'}}></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 307, height: 53, left: 1100, top: 540, position: 'absolute', background: '#A6CE39', borderTopLeftRadius: 16, borderTopRightRadius: 16}} />
    //       <div style={{left: 1126, top: 557, position: 'absolute', color: 'white', fontSize: 16.46, fontFamily: 'Inter', fontWeight: '700', textTransform: 'capitalize', lineHeight: 22.40, letterSpacing: 0.63, wordWrap: 'break-word'}}>Chat With us</div>
    //     </div>
    //     <div style={{width: 1425, height: 108, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 4px 32.5px rgba(48, 49, 51, 0.95)'}}>
    //       <div style={{width: 1, height: 1, left: 87.50, top: 36, position: 'absolute'}}>
    //         <div style={{left: 0, top: 0, position: 'absolute', color: '#E53E30', fontSize: 16.10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}}>Header Logo</div>
    //       </div>
    //       <div style={{width: 16, height: 16, paddingBottom: 15, left: 1321.50, top: 27, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
    //         <div style={{width: 16, height: 16, position: 'relative'}} />
    //         <div style={{width: 1, height: 1, position: 'relative'}}>
    //           <div style={{left: 0, top: -0.80, position: 'absolute', color: '#E53E30', fontSize: 16.10, fontFamily: 'Inter', fontWeight: '400', lineHeight: 25.60, wordWrap: 'break-word'}}>Toggle Search</div>
    //         </div>
    //       </div>
    //       <img style={{width: 62, height: 76, left: 38, top: 16, position: 'absolute'}} src="https://via.placeholder.com/62x76" />
    //       <div style={{left: 164, top: 34.27, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 17.61, display: 'inline-flex'}}>
    //         <div style={{paddingTop: 10.16, paddingBottom: 10.16, justifyContent: 'flex-start', alignItems: 'center', gap: 1.02, display: 'flex'}}>
    //           <div style={{width: 125.63, height: 19.30, textAlign: 'center', color: '#023B3B', fontSize: 18.53, fontFamily: 'Roboto', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Our Company</div>
    //           <div style={{width: 11.18, height: 22.35, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
    //             <div style={{width: 8.33, height: 15.14, left: 9.77, top: 18.75, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#A6CE39'}}></div>
    //           </div>
    //         </div>
    //         <div style={{paddingTop: 10.16, paddingBottom: 10.16, justifyContent: 'flex-start', alignItems: 'center', gap: 1.02, display: 'flex'}}>
    //           <div style={{width: 193.37, textAlign: 'center', color: '#023B3B', fontSize: 18.53, fontFamily: 'Roboto', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Products & Solutions</div>
    //           <div style={{width: 11.18, height: 22.35, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
    //             <div style={{width: 8.33, height: 15.14, left: 9.77, top: 18.75, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#A6CE39'}}></div>
    //           </div>
    //         </div>
    //         <div style={{paddingTop: 10.16, paddingBottom: 10.16, justifyContent: 'flex-start', alignItems: 'center', gap: 1.02, display: 'flex'}}>
    //           <div style={{width: 115.61, height: 19.46, textAlign: 'center', color: '#023B3B', fontSize: 18.53, fontFamily: 'Roboto', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>sustainability</div>
    //           <div style={{width: 11.18, height: 22.35, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
    //             <div style={{width: 8.33, height: 15.14, left: 9.77, top: 18.75, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#A6CE39'}}></div>
    //           </div>
    //         </div>
    //         <div style={{paddingTop: 10.16, paddingBottom: 10.16, justifyContent: 'flex-start', alignItems: 'center', gap: 1.02, display: 'flex'}}>
    //           <div style={{width: 57.29, textAlign: 'center', color: '#023B3B', fontSize: 18.53, fontFamily: 'Roboto', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Media</div>
    //           <div style={{width: 11.18, height: 22.35, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
    //             <div style={{width: 8.33, height: 15.14, left: 9.77, top: 18.75, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#A6CE39'}}></div>
    //           </div>
    //         </div>
    //         <div style={{paddingTop: 10.16, paddingBottom: 10.16, justifyContent: 'flex-start', alignItems: 'center', gap: 1.02, display: 'flex'}}>
    //           <div style={{width: 61.39, textAlign: 'center', color: '#023B3B', fontSize: 18.53, fontFamily: 'Roboto', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Career</div>
    //           <div style={{width: 11.18, height: 22.35, position: 'relative', transform: 'rotate(90deg)', transformOrigin: '0 0'}}>
    //             <div style={{width: 8.33, height: 15.14, left: 9.77, top: 18.75, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#A6CE39'}}></div>
    //           </div>
    //         </div>
    //         <div style={{paddingTop: 10.16, paddingBottom: 10.16, justifyContent: 'flex-start', alignItems: 'center', gap: 1.02, display: 'flex'}}>
    //           <div style={{width: 72.64, textAlign: 'center', color: '#023B3B', fontSize: 18.53, fontFamily: 'Roboto', fontWeight: '600', textTransform: 'capitalize', wordWrap: 'break-word'}}>Contact</div>
    //         </div>
    //       </div>
    //       <div style={{paddingTop: 10.41, paddingBottom: 12.31, paddingLeft: 22.72, paddingRight: 22.72, left: 1228, top: 33.14, position: 'absolute', background: '#A6CE38', boxShadow: '0px 7.537184715270996px 27.30135726928711px rgba(162.16, 198.26, 63.77, 0.33)', borderRadius: 5.86, justifyContent: 'center', alignItems: 'center', gap: 7.57, display: 'inline-flex'}}>
    //         <div style={{color: 'white', fontSize: 15.15, fontFamily: 'Plus Jakarta Sans', fontWeight: '500', lineHeight: 18.93, wordWrap: 'break-word'}}>Available stocks</div>
    //       </div>
    //       <div style={{left: 1098, top: 40, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 18, display: 'inline-flex'}}>
    //         <div style={{width: 26, height: 26, position: 'relative'}}>
    //           <div style={{width: 22, height: 22, left: 2, top: 2, position: 'absolute', background: '#A6CE38'}}></div>
    //         </div>
    //         <div style={{width: 23, height: 22, background: '#A6CE38'}}></div>
    //         <div style={{width: 22, height: 22, position: 'relative'}}>
    //           <div style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute', background: '#A6CE38'}}></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div style={{width: 1440, height: 482, left: -7.70, top: 3526, position: 'absolute', background: '#023B3B'}}>
    //       <div style={{width: 102.06, height: 125.18, left: 64.68, top: 73, position: 'absolute'}}>
    //         <img style={{width: 102.06, height: 125.18, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/102x125" />
    //         <div style={{width: 315.80, height: 361.32, left: -123.01, top: -59.75, position: 'absolute', background: 'white'}} />
    //       </div>
    //       <div style={{width: 202, left: 77, top: 241, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Follow Us:</div>
    //       <div style={{width: 32, height: 26, left: 383, top: 331, position: 'absolute'}} />
    //       <div style={{left: 71, top: 418, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
    //         <div style={{width: 1140, height: 0, border: '1px rgba(127, 151, 185, 0.10) solid'}}></div>
    //         <div style={{width: 1142, justifyContent: 'space-between', alignItems: 'flex-end', display: 'inline-flex'}}>
    //           <div style={{color: 'rgba(255, 255, 255, 0.80)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>©2024 Powered By Strings Technologies</div>
    //           <div style={{justifyContent: 'flex-end', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
    //             <div style={{color: 'rgba(255, 255, 255, 0.80)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Privacy Policy</div>
    //             <div style={{color: 'rgba(255, 255, 255, 0.80)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Terms of Use</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 1455.41, height: 317.11, left: 372, top: 70, position: 'absolute'}}>
    //         <div style={{width: 253.40, height: 287.40, left: 0, top: 0, position: 'absolute'}}>
    //           <div style={{width: 97.51, height: 21.61, left: 0, top: 1.08, position: 'absolute'}}>
    //             <div style={{width: 139, height: 22, left: 0, top: -0.08, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 24.31, wordWrap: 'break-word'}}>Our Company</div>
    //           </div>
    //           <div style={{width: 237.19, height: 258.77, left: 0, top: 28.63, position: 'absolute'}}>
    //             <div style={{width: 111.20, height: 19.45, left: 0, top: 13.32, position: 'absolute'}}>
    //               <div style={{width: 128, height: 19, left: 0, top: 9.05, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Who we Are </div>
    //             </div>
    //             <div style={{width: 131, height: 19, left: 0, top: 52.37, position: 'absolute'}}>
    //               <div style={{width: 157, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>What we do</div>
    //             </div>
    //             <div style={{width: 224, height: 41, left: 0, top: 81.37, position: 'absolute'}}>
    //               <div style={{width: 268, height: 29.77, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Why Choose Us</div>
    //             </div>
    //             <div style={{width: 210, height: 20, left: 0, top: 132.37, position: 'absolute'}} />
    //             <div style={{width: 187, height: 19, left: 0, top: 162.37, position: 'absolute'}} />
    //             <div style={{width: 84, height: 19, left: 0, top: 192.37, position: 'absolute'}} />
    //             <div style={{width: 74, height: 20, left: 0, top: 221.37, position: 'absolute'}} />
    //             <div style={{width: 70, height: 19, left: 0, top: 251.37, position: 'absolute'}} />
    //             <div style={{width: 55, height: 0, left: 2, top: 4.37, position: 'absolute', border: '2px white solid'}}></div>
    //           </div>
    //         </div>
    //         <div style={{width: 253.40, height: 147.48, left: 240.41, top: 0, position: 'absolute'}}>
    //           <div style={{width: 98.53, height: 21.61, left: 0, top: 1.08, position: 'absolute'}}>
    //             <div style={{width: 141, height: 22, left: -0.41, top: -0.08, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 24.31, wordWrap: 'break-word'}}>Most Sold </div>
    //           </div>
    //           <div style={{width: 237.19, height: 118.85, left: 0, top: 28.63, position: 'absolute'}}>
    //             <div style={{width: 66.65, height: 19.45, left: 0, top: 13.32, position: 'absolute'}}>
    //               <div style={{width: 105.54, height: 19, left: -0.41, top: 9.05, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Uv Absorbers</div>
    //             </div>
    //             <div style={{width: 71, height: 19, left: -0.41, top: 52.37, position: 'absolute'}}>
    //               <div style={{width: 179.34, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Light Stabilizers (HALS)</div>
    //             </div>
    //             <div style={{width: 72, height: 20, left: -0.41, top: 81.37, position: 'absolute'}}>
    //               <div style={{width: 134, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Optical Brighteners</div>
    //             </div>
    //             <div style={{width: 112, height: 20, left: -0.41, top: 111.37, position: 'absolute'}}>
    //               <div style={{width: 209, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Our Products</div>
    //             </div>
    //             <div style={{width: 56, height: 0, left: -0.41, top: 4.37, position: 'absolute', border: '2px white solid'}}></div>
    //           </div>
    //         </div>
    //         <div style={{width: 253.40, height: 308.47, left: 480.80, top: 0, position: 'absolute'}}>
    //           <div style={{width: 237.19, height: 279.84, left: 0, top: 28.63, position: 'absolute'}} />
    //           <div style={{width: 124.05, height: 21.61, left: 2.66, top: 1.08, position: 'absolute'}}>
    //             <div style={{width: 177, height: 22, left: -0.20, top: -0.08, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 24.31, wordWrap: 'break-word'}}>Media & Events</div>
    //           </div>
    //         </div>
    //         <div style={{width: 253.40, height: 147.48, left: 721.20, top: 0, position: 'absolute'}}>
    //           <div style={{width: 237.19, height: 118.85, left: 0, top: 28.63, position: 'absolute'}}>
    //             <div style={{width: 36.10, height: 19.45, left: -237.74, top: 13.32, position: 'absolute'}}>
    //               <div style={{width: 72, height: 19, left: -0.20, top: 9.05, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>News</div>
    //             </div>
    //             <div style={{width: 36.10, height: 19.45, left: -13.70, top: 13.32, position: 'absolute'}}>
    //               <div style={{width: 147.43, height: 19, left: -0.20, top: 9.05, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Worldwide Offices</div>
    //             </div>
    //             <div style={{width: 51, height: 19, left: -237.95, top: 52.37, position: 'absolute'}} />
    //             <div style={{width: 51, height: 19, left: -13.91, top: 52.37, position: 'absolute'}}>
    //               <div style={{width: 206.84, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>00971 4887 6111</div>
    //             </div>
    //             <div style={{width: 50, height: 20, left: -237.95, top: 52.37, position: 'absolute'}}>
    //               <div style={{width: 75, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Events</div>
    //             </div>
    //             <div style={{width: 50, height: 20, left: -13.91, top: 81.37, position: 'absolute'}}>
    //               <div style={{width: 183.33, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>info@icgchemicals.com</div>
    //             </div>
    //             <div style={{width: 44, height: 20, left: -237.95, top: 82.37, position: 'absolute'}}>
    //               <div style={{width: 66, height: 19, left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 14.05, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 21.07, wordWrap: 'break-word'}}>Social</div>
    //             </div>
    //             <div style={{width: 44, height: 20, left: -13.91, top: 111.37, position: 'absolute'}} />
    //             <div style={{width: 49, height: 0, left: -235.95, top: 4.37, position: 'absolute', border: '2px white solid'}}></div>
    //             <div style={{width: 49, height: 0, left: -11.91, top: 4.37, position: 'absolute', border: '2px white solid'}}></div>
    //             <div style={{width: 124.05, height: 21.61, left: -13.70, top: -27.55, position: 'absolute'}}>
    //               <div style={{width: 177, height: 22, left: -0.20, top: -0.08, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 24.31, wordWrap: 'break-word'}}>Contact us</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{left: 77, top: 277.43, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex'}}>
    //         <div style={{width: 33.15, height: 33.15, paddingLeft: 9.60, paddingRight: 9.60, paddingTop: 4.36, paddingBottom: 4.36, background: 'white', borderRadius: 1.74, justifyContent: 'flex-start', alignItems: 'center', gap: 8.72, display: 'flex'}}>
    //           <div style={{width: 12.68, height: 23.24, background: '#023B3B'}}></div>
    //         </div>
    //         <div style={{width: 33.15, height: 33.15, paddingLeft: 4.36, paddingRight: 4.36, paddingTop: 6.98, paddingBottom: 6.98, background: 'white', borderRadius: 1.74, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8.72, display: 'inline-flex'}}>
    //           <div style={{width: 20.94, height: 20.94, left: 6.10, top: 6.98, position: 'absolute'}}>
    //             <div style={{width: 20.94, height: 18.92, left: 0, top: 1.01, position: 'absolute', background: '#023B3B'}}></div>
    //           </div>
    //         </div>
    //         <div style={{width: 33.15, height: 33.15, padding: 4.36, background: 'white', borderRadius: 1.74, justifyContent: 'flex-start', alignItems: 'center', gap: 8.72, display: 'flex'}}>
    //           <img style={{width: 23.24, height: 23.24}} src="https://via.placeholder.com/23x23" />
    //         </div>
    //         <div style={{width: 33.15, height: 33.15, paddingLeft: 4.36, paddingRight: 4.36, paddingTop: 5.23, paddingBottom: 5.23, background: 'white', borderRadius: 1.74, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8.72, display: 'inline-flex'}}>
    //           <div style={{width: 23.24, height: 22.14, position: 'relative'}}>
    //             <div style={{width: 23.24, height: 22.14, left: 0, top: 0, position: 'absolute', background: '#023B3B'}}></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div style={{width: 76, height: 0, left: 379, top: 717, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '0.46px #717171 solid'}}></div>
    //     <div style={{width: 1427, height: 541.18, left: -1, top: 2111, position: 'absolute'}}>
    //       <div style={{width: 1427, height: 429.19, left: 0, top: 0, position: 'absolute'}}>
    //         <div style={{width: 1427, height: 427, left: 0, top: 2.19, position: 'absolute', background: '#A6CE38'}} />
    //         <img style={{width: 1427, height: 429.19, left: 0, top: 0, position: 'absolute', mixBlendMode: 'multiply'}} src="https://via.placeholder.com/1427x429" />
    //       </div>
    //       <div style={{width: 1043, height: 541, left: 193, top: 0.18, position: 'absolute', background: 'white', boxShadow: '0px 9px 21.200000762939453px rgba(0, 0, 0, 0.07)', borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
    //         <div style={{width: 804.99, height: 470.40, left: 120, top: 33.99, position: 'absolute'}}>
    //           <div style={{width: 295.75, height: 47.66, left: 254.72, top: 0, position: 'absolute', textAlign: 'center', color: '#023B3B', fontSize: 40, fontFamily: 'Albert Sans', fontWeight: '700', lineHeight: 36.44, wordWrap: 'break-word'}}>Find a Product</div>
    //           <div style={{width: 802.77, height: 76.48, left: 1.11, top: 183.32, position: 'absolute'}}>
    //             <div style={{width: 690.25, height: 59.85, left: 0, top: 16.63, position: 'absolute', background: 'white', borderTopLeftRadius: 2.22, borderTopRightRadius: 2.22, borderBottom: '1.11px #CCCCCC solid'}}>
    //               <div style={{width: 617.09, height: 21.06, left: 53.20, top: 18.29, position: 'absolute'}}>
    //                 <div style={{width: 268.11, height: 21.06, left: 0, top: 0, position: 'absolute', color: '#5B6670', fontSize: 15.52, fontFamily: 'Noto Sans', fontWeight: '400', wordWrap: 'break-word'}}>Search for products, grades or codes</div>
    //               </div>
    //             </div>
    //             <div style={{height: 59.85, paddingTop: 11.54, paddingBottom: 13.64, paddingLeft: 25.18, paddingRight: 25.18, left: 706.75, top: 16.19, position: 'absolute', background: '#A6CE38', boxShadow: '0px 8.354364395141602px 30.261363983154297px rgba(162.16, 198.26, 63.77, 0.33)', borderRadius: 6.50, justifyContent: 'center', alignItems: 'center', gap: 8.39, display: 'inline-flex'}}>
    //               <div style={{width: 48.17, height: 21.06, textAlign: 'center', color: 'white', fontSize: 15.52, fontFamily: 'Noto Sans', fontWeight: '500', lineHeight: 19.40, wordWrap: 'break-word'}}>Search</div>
    //             </div>
    //             <div style={{width: 16.93, height: 16.63, left: 19.95, top: 38.79, position: 'absolute'}}>
    //               <div style={{width: 16.93, height: 16.63, left: 0, top: 0, position: 'absolute'}}>
    //                 <div style={{width: 16.93, height: 16.62, left: 0, top: 0, position: 'absolute'}}>
    //                   <div style={{width: 5.96, height: 5.96, left: 10.50, top: 10.20, position: 'absolute', border: '1.32px #2C2C31 solid'}}></div>
    //                   <div style={{width: 12.24, height: 12.24, left: -0, top: 0, position: 'absolute'}}>
    //                     <div style={{width: 12.24, height: 12.24, left: 0, top: 0, position: 'absolute'}}></div>
    //                     <div style={{width: 10.91, height: 10.91, left: 0.66, top: 0.66, position: 'absolute', border: '1.32px #2C2C31 solid'}}></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div style={{width: 402.50, height: 87.57, left: 0, top: 79.13, position: 'absolute'}}>
    //             <div style={{width: 76.58, height: 19.95, left: 1.11, top: 0, position: 'absolute', color: '#2C2C31', fontSize: 13.30, fontFamily: 'Noto Sans', fontWeight: '400', textTransform: 'uppercase', lineHeight: 19.95, wordWrap: 'break-word'}}>Industries</div>
    //             <div style={{width: 400.28, height: 58.75, left: 1.11, top: 28.82, position: 'absolute', background: '#F2F2F2', borderRadius: 7.76}}>
    //               <div style={{width: 345.49, height: 23.28, left: 19.95, top: 17.73, position: 'absolute'}}>
    //                 <div style={{width: 111.39, height: 21.06, left: 0, top: 1.11, position: 'absolute', color: 'black', fontSize: 15.52, fontFamily: 'Noto Sans', fontWeight: '500', lineHeight: 23.28, wordWrap: 'break-word'}}>Select Industry</div>
    //               </div>
    //               <div style={{width: 14.87, height: 15.52, left: 365.45, top: 21.61, position: 'absolute'}}>
    //                 <div style={{width: 14.87, height: 15.52, left: -0, top: 0, position: 'absolute'}}>
    //                   <div style={{width: 14.87, height: 9.06, left: 0, top: 3.23, position: 'absolute'}}>
    //                     <div style={{width: 7.02, height: 13.50, left: 14.19, top: 0.66, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1.91px #A6CE39 solid'}}></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div style={{width: 402.50, height: 87.57, left: 402.49, top: 79.13, position: 'absolute'}}>
    //             <div style={{width: 171.81, height: 15.52, left: 0.55, top: -0.43, position: 'absolute', color: '#2C2C31', fontSize: 13.30, fontFamily: 'Noto Sans', fontWeight: '400', textTransform: 'uppercase', lineHeight: 19.95, wordWrap: 'break-word'}}>Chemical Solutions</div>
    //             <div style={{width: 400.28, height: 58.75, left: 1.11, top: 28.82, position: 'absolute', background: '#F2F2F2', borderRadius: 7.76}}>
    //               <div style={{width: 345.49, height: 23.28, left: 19.95, top: 17.73, position: 'absolute'}}>
    //                 <div style={{width: 132.26, height: 21.06, left: 0, top: 1.11, position: 'absolute', color: 'black', fontSize: 15.52, fontFamily: 'Noto Sans', fontWeight: '500', lineHeight: 23.28, wordWrap: 'break-word'}}>Select Solutions</div>
    //               </div>
    //               <div style={{width: 14.87, height: 15.52, left: 365.45, top: 21.61, position: 'absolute'}}>
    //                 <div style={{width: 14.87, height: 15.52, left: 0, top: 0, position: 'absolute'}}>
    //                   <div style={{width: 14.87, height: 9.06, left: 0, top: 3.23, position: 'absolute'}}>
    //                     <div style={{width: 7.02, height: 13.50, left: 14.19, top: 0.66, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1.91px #A6CE39 solid'}}></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div style={{width: 405.16, height: 26.60, left: 200, top: 315.22, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 17.73, fontFamily: 'Arial', fontWeight: '400', lineHeight: 26.60, wordWrap: 'break-word'}}>Looking for other resources? Select an item below.</div>
    //           <div style={{width: 155.32, height: 26.60, left: 55.64, top: 369.54, position: 'absolute'}} />
    //           <div style={{width: 180.74, height: 26.60, left: 264.16, top: 369.54, position: 'absolute'}} />
    //           <div style={{width: 589.47, height: 27, left: 108, top: 369.64, position: 'absolute'}}>
    //             <div style={{width: 1.11, height: 22.17, left: 180.80, top: 2.11, position: 'absolute', background: '#B2BAC1'}} />
    //             <div style={{width: 155.67, height: 24.39, left: 0, top: 1, position: 'absolute', color: '#023B3B', fontSize: 17.73, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 26.60, wordWrap: 'break-word'}}>Safety Data Sheets</div>
    //             <div style={{width: 1.11, height: 22.17, left: 414.76, top: 2.11, position: 'absolute', background: '#B2BAC1'}} />
    //             <div style={{width: 181.10, height: 24.39, left: 208.52, top: 1, position: 'absolute', color: '#023B3B', fontSize: 17.73, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 26.60, wordWrap: 'break-word'}}>Technical Data Sheets</div>
    //             <div style={{left: 442.47, top: 0, position: 'absolute', color: '#023B3B', fontSize: 17.73, fontFamily: 'Noto Sans', fontWeight: '400', lineHeight: 26.60, wordWrap: 'break-word'}}>Product Brochures</div>
    //           </div>
    //           <div style={{width: 225.19, height: 46.55, left: 289.90, top: 423.85, position: 'absolute', borderRadius: 6.65, border: '1.11px #A6CE39 solid'}}>
    //             <div style={{width: 145.71, height: 24.39, left: 23.27, top: 11.08, position: 'absolute', textAlign: 'center', color: '#023B3B', fontSize: 17.73, fontFamily: 'Noto Sans', fontWeight: '500', lineHeight: 26.60, wordWrap: 'break-word'}}>View All Products</div>
    //             <div style={{width: 25.49, height: 18.84, left: 181.96, top: 13.86, position: 'absolute'}}>
    //               <div style={{width: 25.49, height: 18.84, left: 0, top: 0, position: 'absolute'}}>
    //                 <div style={{width: 21.92, height: 16.71, left: 1.79, top: 1.07, position: 'absolute'}}>
    //                   <div style={{width: 20.63, height: 15.42, left: -0, top: 0.65, position: 'absolute'}}>
    //                     <div style={{width: 20.31, height: 0, left: 0, top: 7.70, position: 'absolute', border: '1.83px #A6CE39 solid'}}></div>
    //                     <div style={{width: 7.71, height: 15.42, left: 12.93, top: 0, position: 'absolute', border: '1.83px #A6CE39 solid'}}></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div style={{width: 1425, height: 1305, left: 0, top: 806, position: 'absolute', background: 'rgba(165.74, 165.74, 165.74, 0.27)'}}>
    //       <img style={{width: 1425, height: 1305.40, left: 0.20, top: -0.13, position: 'absolute', mixBlendMode: 'soft-light'}} src="https://via.placeholder.com/1425x1305" />
    //       <div style={{width: 848.59, height: 100.03, left: 454.36, top: 100.95, position: 'absolute'}}>
    //         <div style={{width: 203.16, height: 42, left: 645.43, top: 58.03, position: 'absolute', borderRadius: 6, border: '1px #023B3B solid'}}>
    //           <div style={{width: 143, height: 22, left: 15.08, top: 9.61, position: 'absolute', textAlign: 'center', color: '#023B3B', fontSize: 16, fontFamily: 'Noto Sans', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>View All Industries</div>
    //           <div style={{width: 23, height: 17, left: 164.16, top: 12.50, position: 'absolute'}}>
    //             <div style={{width: 23, height: 17, left: 0, top: 0, position: 'absolute'}}>
    //               <div style={{width: 19.78, height: 15.07, left: 1.61, top: 0.96, position: 'absolute'}}>
    //                 <div style={{width: 18.61, height: 13.91, left: 0, top: 0.58, position: 'absolute'}}>
    //                   <div style={{width: 18.32, height: 0, left: 0, top: 6.95, position: 'absolute', border: '1.65px #023B3B solid'}}></div>
    //                   <div style={{width: 6.95, height: 13.91, left: 11.66, top: 0, position: 'absolute', border: '1.65px #023B3B solid'}}></div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div style={{width: 454.20, height: 40.81, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#023B3B', fontSize: 40, fontFamily: 'Albert Sans', fontWeight: '700', lineHeight: 36.44, wordWrap: 'break-word'}}>Explore Our Expertise</div>
    //         <div style={{width: 301.75, height: 32.27, left: 76.12, top: 67.76, position: 'absolute'}}>
    //           <div style={{width: 122.67, height: 32.27, left: 15.18, top: 0, position: 'absolute'}}>
    //             <div style={{width: 104.04, height: 20.88, left: 9.49, top: 5.69, position: 'absolute', color: '#A6CE39', fontSize: 15.19, fontFamily: 'Noto Sans', fontWeight: '700', textTransform: 'uppercase', lineHeight: 22.78, letterSpacing: 1.42, wordWrap: 'break-word'}}>Industries</div>
    //             <div style={{width: 103.69, height: 1.90, left: 9.49, top: 32.27, position: 'absolute', background: '#A6CE39'}} />
    //           </div>
    //           <div style={{width: 118.35, height: 32.27, left: 168.22, top: 0, position: 'absolute'}}>
    //             <div style={{width: 99.71, height: 20.88, left: 9.49, top: 5.69, position: 'absolute', color: '#023B3B', fontSize: 15.19, fontFamily: 'Noto Sans', fontWeight: '600', textTransform: 'uppercase', lineHeight: 22.78, letterSpacing: 1.42, wordWrap: 'break-word'}}>Solutions</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 362, height: 295, left: 123, top: 277.38, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}}>
    //         <div style={{width: 362.04, height: 294.93, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.59) 100%)', borderRadius: 12.42, overflow: 'hidden'}}>
    //           <div style={{height: 149.45, left: 83.50, top: 72.74, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20.53, display: 'inline-flex'}}>
    //             <div style={{width: 83.95, height: 83.95, position: 'relative'}}>
    //               <div style={{width: 47.39, height: 47.39, left: 18.43, top: 17.38, position: 'absolute'}}>
    //                 <div style={{width: 47.39, height: 36.77, left: 0, top: 5.31, position: 'absolute', background: 'white'}}></div>
    //               </div>
    //               <div style={{width: 81.05, height: 81.05, left: 1.45, top: 1.45, position: 'absolute', border: '2.89px white solid'}}></div>
    //             </div>
    //             <div style={{width: 195.05, height: 44.97, textAlign: 'center', color: 'white', fontSize: 32.98, fontFamily: 'Noto Sans', fontWeight: '600', lineHeight: 44.52, wordWrap: 'break-word'}}>Automotive</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 363.85, height: 295.25, left: 530.52, top: 277, position: 'absolute'}}>
    //         <div style={{width: 363.85, height: 295.25, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}} />
    //         <div style={{width: 407.31, height: 331.67, left: -21.98, top: -16.92, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)'}}>
    //           <div style={{width: 304.69, height: 184.53, left: 51.31, top: 79.57, position: 'absolute'}}>
    //             <div style={{width: 73.27, height: 73.27, left: 115.71, top: 0, position: 'absolute'}}>
    //               <div style={{width: 48.25, height: 49.63, left: 13.17, top: 11.03, position: 'absolute'}}>
    //                 <div style={{width: 36.19, height: 37.22, left: 6.03, top: 6.20, position: 'absolute'}}>
    //                   <div style={{width: 36.19, height: 31.02, left: 0, top: 0, position: 'absolute', border: '2.07px white solid'}}></div>
    //                   <div style={{width: 23.76, height: 14.48, left: 6.22, top: 22.75, position: 'absolute', border: '2.07px white solid'}}></div>
    //                   <div style={{width: 0.02, height: 0.02, left: 28.15, top: 14.47, position: 'absolute', border: '2.07px white solid'}}></div>
    //                 </div>
    //               </div>
    //               <div style={{width: 70.75, height: 70.75, left: 1.26, top: 1.26, position: 'absolute', border: '2.53px white solid'}}></div>
    //             </div>
    //             <div style={{width: 304.69, height: 78.59, left: 0, top: 105.95, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 28.79, fontFamily: 'Noto Sans', fontWeight: '600', lineHeight: 38.86, wordWrap: 'break-word'}}>Printing and Packaging</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 363.85, height: 295.25, left: 939.09, top: 277, position: 'absolute'}}>
    //         <div style={{width: 363.85, height: 295.25, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}} />
    //         <div style={{width: 386.97, height: 313.67, left: -11.51, top: -9.05, position: 'absolute'}}>
    //           <div style={{width: 386.97, height: 313.67, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)'}} />
    //           <div style={{width: 239.83, height: 182.65, left: 73.57, top: 72.19, position: 'absolute'}}>
    //             <div style={{width: 69.65, height: 69.65, left: 83.70, top: 0, position: 'absolute'}}>
    //               <div style={{width: 35.11, height: 38.43, left: 17.27, top: 15.61, position: 'absolute', background: 'white'}}></div>
    //               <div style={{width: 67.25, height: 67.25, left: 1.20, top: 1.20, position: 'absolute', border: '2.40px white solid'}}></div>
    //             </div>
    //             <div style={{width: 239.83, height: 74.70, left: 0, top: 107.95, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 27.36, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 36.94, wordWrap: 'break-word'}}>Agriculture, Feed, and Food</div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 363, height: 295, left: 123, top: 601.38, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}}>
    //         <div style={{width: 363.04, height: 294.93, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.59) 100%)', borderRadius: 12.42, overflow: 'hidden'}}>
    //           <div style={{width: 363.04, height: 294.63, left: -0, top: 0.30, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)'}} />
    //           <div style={{width: 167, height: 150.54, left: 98.02, top: 72.19, position: 'absolute'}}>
    //             <div style={{width: 78.18, height: 78.18, left: 45.78, top: 0, position: 'absolute'}}>
    //               <div style={{width: 43.13, height: 39.62, left: 17.53, top: 17.93, position: 'absolute', background: 'white'}}></div>
    //               <div style={{width: 75.48, height: 75.48, left: 1.35, top: 1.35, position: 'absolute', border: '2.70px white solid'}}></div>
    //             </div>
    //             <div style={{left: 0, top: 108.54, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30.71, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 41.46, wordWrap: 'break-word'}}>Electronics</div>
    //           </div>
    //         </div>
    //         <div style={{width: 333.91, height: 82.88, left: 10.85, top: 162.22, position: 'absolute'}} />
    //       </div>
    //       <div style={{width: 363.73, height: 295.25, left: 530.78, top: 601.38, position: 'absolute'}}>
    //         <div style={{width: 363.73, height: 295.25, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}} />
    //         <div style={{width: 407.17, height: 331.67, left: -21.96, top: -16.92, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', backgroundImage: 'url(https://via.placeholder.com/407x332)'}}>
    //           <div style={{width: 389.71, height: 306.24, left: 17.45, top: 12.75, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)'}} />
    //           <div style={{width: 237.46, height: 168.41, left: 93.58, top: 96.27, position: 'absolute'}}>
    //             <div style={{width: 76.87, height: 76.87, left: 80.16, top: 0, position: 'absolute'}}>
    //               <div style={{width: 42.41, height: 34.13, left: 17.22, top: 20.04, position: 'absolute', background: 'white'}}></div>
    //               <div style={{width: 74.22, height: 74.22, left: 1.32, top: 1.33, position: 'absolute', border: '2.65px white solid'}}></div>
    //             </div>
    //             <div style={{width: 237.46, height: 81.93, left: 0, top: 86.48, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30.20, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 40.77, wordWrap: 'break-word'}}>Personal and Home Care</div>
    //           </div>
    //           <div style={{width: 337.41, height: 81.50, left: 34.84, top: 187.19, position: 'absolute'}} />
    //         </div>
    //       </div>
    //       <div style={{width: 363.73, height: 295.25, left: 939.21, top: 601.38, position: 'absolute'}}>
    //         <div style={{width: 363.73, height: 295.25, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}} />
    //         <div style={{width: 455.30, height: 314.38, left: -20.53, top: -9.05, position: 'absolute'}}>
    //           <div style={{width: 386.84, height: 313.67, left: 9.02, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)'}} />
    //           <div style={{width: 455.30, height: 305.28, left: 0, top: 9.10, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', borderRadius: 12.42, overflow: 'hidden'}}>
    //             <div style={{width: 226.76, height: 152.04, left: 98.77, top: 76.62, position: 'absolute'}}>
    //               <div style={{width: 75.46, height: 75.46, left: 75.40, top: 0, position: 'absolute', border: '2.69px white solid'}}></div>
    //               <div style={{width: 43.15, height: 42.94, left: 93.02, top: 17.72, position: 'absolute', background: 'white'}}></div>
    //               <div style={{width: 226.76, height: 44.84, left: 0, top: 107.20, position: 'absolute'}}>
    //                 <div style={{width: 226.76, height: 44.84, left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32.88, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 44.39, wordWrap: 'break-word'}}>Adhesives and Sealants</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 363, height: 295, left: 123, top: 926.38, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}}>
    //         <div style={{width: 363.04, height: 294.93, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.59) 100%)', borderRadius: 12.42, overflow: 'hidden'}}>
    //           <div style={{width: 552.41, height: 294.93, left: -94.17, top: 0.16, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}}>
    //             <div style={{width: 182.35, height: 156.62, left: 185.04, top: 69.16, position: 'absolute'}}>
    //               <div style={{width: 70.77, height: 70.77, left: 55.59, top: 0, position: 'absolute', border: '2.53px white solid'}}></div>
    //               <div style={{width: 40.37, height: 40.44, left: 70.79, top: 15.17, position: 'absolute', background: 'white'}}></div>
    //               <div style={{width: 182.35, height: 39.27, left: 0, top: 117.35, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 28.80, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 38.88, wordWrap: 'break-word'}}>Paints and Coating</div>
    //             </div>
    //           </div>
    //         </div>
    //         <div style={{width: 73.30, height: 73.30, left: 141.29, top: 74.35, position: 'absolute'}} />
    //       </div>
    //       <div style={{width: 363.69, height: 295.25, left: 530.88, top: 925.64, position: 'absolute'}}>
    //         <div style={{width: 363.69, height: 295.25, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}} />
    //         <div style={{width: 407.12, height: 331.67, left: -21.96, top: -16.92, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', backgroundImage: 'url(https://via.placeholder.com/407x332)'}}>
    //           <div style={{width: 301.31, height: 306.24, left: 17.45, top: 12.75, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)'}} />
    //           <div style={{width: 370, height: 332, left: 17.09, top: -0.33, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}}>
    //             <div style={{width: 207.89, height: 174.76, left: 81.05, top: 78.62, position: 'absolute'}}>
    //               <div style={{width: 77.26, height: 77.26, left: 65, top: 0, position: 'absolute'}}>
    //                 <div style={{width: 74.60, height: 74.60, left: 1.33, top: 1.33, position: 'absolute', border: '2.66px white solid'}}></div>
    //                 <div style={{width: 42.89, height: 36.91, left: 17.18, top: 18.72, position: 'absolute', background: 'white'}}></div>
    //               </div>
    //               <div style={{width: 207.89, left: 0, top: 92.76, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30.35, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 40.98, wordWrap: 'break-word'}}>Building and Construction</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div style={{width: 363.69, height: 295.25, left: 939.26, top: 925.64, position: 'absolute'}}>
    //         <div style={{width: 363.69, height: 295.25, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}} />
    //         <div style={{width: 455.24, height: 314.38, left: -20.54, top: -9.05, position: 'absolute'}}>
    //           <div style={{width: 386.79, height: 313.67, left: 9.02, top: 0, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)'}} />
    //           <div style={{width: 455.24, height: 305.28, left: 0, top: 9.10, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', borderRadius: 12.42, overflow: 'hidden'}}>
    //             <div style={{width: 522.60, height: 316.66, left: -33.51, top: -5.77, position: 'absolute', background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)', boxShadow: '0px 3.9285576343536377px 9.821394920349121px rgba(0, 0, 0, 0.10)', borderRadius: 12.42}}>
    //               <div style={{width: 229.52, height: 172.30, left: 127.03, top: 72.18, position: 'absolute'}}>
    //                 <div style={{width: 74.30, height: 74.30, left: 77.48, top: 0, position: 'absolute'}}>
    //                   <div style={{width: 40.99, height: 32.99, left: 16.66, top: 19.37, position: 'absolute', background: '#FCFCFC'}}></div>
    //                   <div style={{width: 71.74, height: 71.74, left: 1.28, top: 1.28, position: 'absolute', border: '2.56px white solid'}}></div>
    //                 </div>
    //                 <div style={{width: 229.52, height: 79.20, left: 0, top: 93.10, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 29.19, fontFamily: 'Noto Sans', fontWeight: '700', lineHeight: 39.41, wordWrap: 'break-word'}}>Medical and Pharmaceutical</div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
