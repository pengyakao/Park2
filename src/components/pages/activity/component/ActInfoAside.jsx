// import React, { Component } from 'react'
// import { useState, useEffect } from 'react'
// import { getActivity } from '../../../../api/activity'
// import Title from '../../../commons/title/Title'
// import '../activities_components.css';

// const ActInfoAside = ({ listData }) => {

//     const [list, setList] = useState([])
//     const preDataHandle = () => {
//         getActivity().then((result) => {
//             setList(result)
//             console.log(result)
//         })
//     }
//     useEffect(() => {
//         preDataHandle()
//     }, [])

//     console.log('listData', listData)
//     return (
//         <div>
//             <Title title="近期活動" />
//         </div>
//     )
// }

// export default ActInfoAside