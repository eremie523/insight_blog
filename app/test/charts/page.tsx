// "use client"

// import React from 'react'
// import {Doughnut, Line, Pie} from 'react-chartjs-2';
// import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, RadialLinearScale } from "chart.js";

// const page = () => {
//     ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend)
    
//     return (
//         <div className='w-[500px]'>
//             <Pie
//                 datasetIdKey='id'
//                 data={{
//                     labels: ['Jun', 'Jul', 'Aug', 'September', 'October', 'December'],
//                     datasets: [
//                         {
//                             id: 1,
//                             label: '',
//                             data: [5, 6, 7],
//                         },
//                         {
//                             id: 2,
//                             label: '',
//                             data: [3, 2, 1],
//                         },
//                         {
//                             label: '# of Votes',
//                             data: [12, 19, 3, 5, 2, 3],
//                             borderWidth: 4
//                         }
//                     ],
//                 }}
//             />
//         </div>
//     )
// }

// export default page