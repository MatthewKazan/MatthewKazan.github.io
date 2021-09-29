import React, {Component, useState} from 'react';
import { Bar } from "react-chartjs-2";

import {
    Card,
    CardContent,
    Divider, Typography,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";


function Graph() {
    const [chartData, setChartData] = useState({
        labels: [
            "Boston",
            "Worcester",
            "Springfield",
            "Lowel",
            "Cambridge",
            "New bedford"
        ],
        datasets: [
            {
                label: "Population",
                data: [617594, 181455, 153060, 106519, 105162, 95072],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 1255, 0.6)",
                    "rgba(255, 159, 64, 0.6)",
                    "rgba(255, 99, 132, 0.6)"
                ]
            }
        ]
    });
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <CardContent>
                        return (
                        <>
                            <Typography variant="h6">Bar Chart</Typography>
                            <Bar
                                data={chartData}
                                options={{
                                    maintainAspectRatio: true,
                                    title: {
                                        display: true,
                                        text: "Largest cities of Massachusetts"
                                        /* fontSize: 25 */
                                    },
                                    legend: {display: true, position: "bottom"}
                                }}
                            />
                        </>
                        );
                    </CardContent>
                </CardContent>
            </CardActionArea>

        </Card>

    )
}

export default Graph