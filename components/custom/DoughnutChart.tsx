import { ArcElement, Chart, DoughnutController, Tooltip } from 'chart.js'
import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'

type ChartProps = {
    color?: string // Hex String Preferably
    labels: string[],
    data: {
        [key: string]: {
            value: number[],
            color?: string[]
        }
    },
    legend?: boolean,
    className?: string
}

const DoughnutChart = (props: ChartProps) => {
    Chart.register(DoughnutController, ArcElement, Tooltip);

    // const [data, setData] = useState<{
    //     label: string[],
    // }[]>([])

    useEffect(() => {

    }, [])

    return (
        <div className='w-[170px] h-[170px]'>
            <Doughnut
                className='w-full h-full'
                data={{
                    labels: props.labels,
                    datasets: [
                        {
                            data: [20, 5],
                            backgroundColor: ['blue', 'white'],
                            hoverBackgroundColor: ['blue', 'white'],
                            weight: 1,
                            borderWidth: 0,
                            borderRadius: 30,
                            borderColor: "white",
                        },
                        {
                            data: [16, 5],
                            backgroundColor: ['green', 'white'],
                            hoverBackgroundColor: ['green', 'white'],
                            weight: 1,
                            borderWidth: 0,
                            borderRadius: 30,
                            borderColor: "white",
                        },
                        {
                            data: [22, 5],
                            backgroundColor: ['orange', 'white'],
                            hoverBackgroundColor: ['orange', 'white'],
                            weight: 1,
                            borderWidth: 0,
                            borderRadius: 30,
                            borderColor: "white",
                        }
                    ]
                }}
            />
        </div>
    )
}

export default DoughnutChart