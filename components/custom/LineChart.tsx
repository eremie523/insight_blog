import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { CategoryScale, Chart, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js'

type ChartProps = {
    color?: string // Hex String Preferably
    data: {
        label: string,
        value: number,
        color?: string
    }[],
    label: string
    legend?: boolean,
    className?: string
}

const LineChart = (props: ChartProps) => {
    Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);

    const [data, setData] = useState<number[]>([])
    const [label, setLabel] = useState<string[]>([])
    const [barColors, setBarColors] = useState<string[]>([])

    useEffect(() => {
        setData([]);
        setLabel([]);

        props.data.forEach(entry => {
            setData(data => [...data, entry.value])
            setLabel(data => [...data, entry.label])
        });
    }, [props.data])

    useEffect(() => {
        setBarColors([]);

        data.forEach(entry => {
            setBarColors(color => [...color, props.color + (Math.floor((entry / Math.max(...data)) * 200) + 54).toString(16)]
            )
        })
    }, [data, props.color])

    return (

        <>
            {
                props.legend &&
                (
                    <div className='flex justify-end'>
                        <legend className='max-sm:hidden flex'>
                            <div className='flex items-center gap-2'>
                                <div className={`px-4 py-2`} style={{ background: props.color }}></div>
                                <span>{props.label}</span>
                            </div>
                        </legend>
                    </div>
                )
            }
            <Line className={`${props.className && props.className}`} datasetIdKey='label' data={{
                labels: label,
                datasets: [
                    {
                        label: props.label,
                        pointBackgroundColor: barColors.length > 0 ? barColors : barColors,
                        pointBorderColor: '#fff',
                        pointRadius: 5,
                        tension: 0.4,
                        borderColor: '#8B5CF6',
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: "blue",
                        data: data
                    }
                ],
            }} options={{
                animation: false,
                responsive: true,
                // aspectRatio: 1,
                scales: {
                    x: {
                        // backgroundColor: "blue",
                        beginAtZero: true,
                        grid: {
                            color: "transparent",
                            drawOnChartArea: false,
                        },
                        ticks: {
                            font: {
                                size: 12,
                                style: "oblique"
                            },
                            // color: "black"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        grid: {

                        },
                        border: {
                            color: "transparent"
                        }
                    }
                }
            }} />
        </>
    )
}

export default LineChart