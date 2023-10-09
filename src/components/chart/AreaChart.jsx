import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";
import styled from "styled-components";
import getData from "../../api/getData";
import PropTypes from "prop-types";

/* ------------------------------------------------------------------------------------ */

const ContainerTooltip = styled.div`
background-color:white;
width:45px;
height:30px;
display:flex;
flex-direction:column;
align-items:center;
`
const Text = styled.p`
color:black;
font-weight: 500;
font-size: 10px;
line-height: 24px;
margin-top:4px;
`

function SessionsToolType({ active, payload }) {
    if (active) {
        return (
            <ContainerTooltip>
                <Text>{payload[0].value}min</Text>
            </ContainerTooltip>

        );
    }
    return null
}

const CustomCursor = (props) => {
    const { points, width, height } = props
    const { x } = points[0]
    return (
        <Rectangle
            fill="rgba(0,0,0,0.1)"
            stroke="none"
            x={x}
            y={0}
            width={width}
            height={height}
        />
    )
}

/* ------------------------------------------------------------------------------------ */

const xAxisFormatter = (day) => {
    switch (day) {
        case 1: return 'L';
        case 2: return 'M';
        case 3: return 'M';
        case 4: return 'J';
        case 5: return 'V';
        case 6: return 'S';
        case 7: return 'D';
        default: return '';
    }
}

const Container = styled.div`
    position: relative;
	max-width: 258px;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #ff0000;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
	border-radius: 5px;
`

const Title = styled.h2`
    position: absolute;
	font-weight: 500;
	font-size: 15px;
	padding: 29px 34px 0 34px;
	color: rgba(255, 255, 255, 0.7);
`

/* ------------------------------------------------------------------------------------ */

function AverageChart() {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const userData = async () => {
            const request = await getData("usersAverage", id)
            if (!request) return console.log("error")
            setData(request.data)
        }
        userData()
    }, [id])
    if (data.length === 0) return null;

    const userAverage = data.sessions

    return (
        <Container>
            <Title>Durée moyenne des sessions</Title>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={userAverage} >
                    <XAxis type="category" dataKey="day" tickFormatter={xAxisFormatter} tickLine={false} tick={{ fontSize: 14, stroke: 'rgba(255, 255, 255, 0.7)' }} />
                    <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
                    <Tooltip content={<SessionsToolType />} cursor={<CustomCursor width={500} height={500} />} />
                    <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }} />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

AverageChart.prototype = {
    userAverage: PropTypes.array.isRequired
}

export default AverageChart