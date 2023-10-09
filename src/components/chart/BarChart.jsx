import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import styled from "styled-components"
import getData from "../../api/getData";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    margin-bottom: 28px;
	border-radius: 5px;
	background-color: #fbfbfb;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    padding: 24px 26px 23px 32px;
`

/* --------------------------------TITLE AND LEGEND-------------------------------------- */

const Head = styled.div`
    display: flex;
    justify-content: space-between;
	`

const Title = styled.h2`
    font-size: 15px;
    line-height: 24px;
    color: #20253A;
`

const LegendChart = styled.div`
	display: flex;
`

const Info = styled.div`
    display: flex;
    align-items:center;
`
const Icon = styled.div`
	height: 8px;
	width: 8px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	align-self: center;
	margin-left: 30px;
`
const TextLegend = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #74798c;
	margin-left: 10px;
    font-weight: bold
`

/* --------------------------------CUSTOM TOOLTIP-------------------------------------- */

const Container = styled.div`
background-color:#E60000;
width: 72px;
height: 96px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`

const Text = styled.p`
	font-size: 14px;
	color: #FFFFFF;
	margin-left: 10px;
`

function CustomTooltip({ payload, active }) {
    if (active) {
        return (
            <Container>
                <Text>{payload[0].value}kg</Text>
                <Text>{payload[1].value}Kcal</Text>
            </Container>
        )
    }
}

/* ------------------------------------------------------------------------------------ */

const xAxisFormatter = (day) => {
    switch (day) {
        case "2020-07-01": return '1';
        case "2020-07-02": return '2';
        case "2020-07-03": return '3';
        case "2020-07-04": return '4';
        case "2020-07-05": return '5';
        case "2020-07-06": return '6';
        case "2020-07-07": return '7';
        default: return '';
    }
}

/* ------------------------------------------------------------------------------------ */

function ActivitiesChart() {
    const { id } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const userData = async () => {
            const request = await getData("usersActivities", id)
            if (!request) return console.log("error")
            setData(request.data)
        }
        userData()
    }, [id])
    if (data.length === 0) return null;

    const userActivity = data.sessions

    return (
        <Wrapper>
            <Head>
                <Title>Activité quotidienne</Title>
                <LegendChart>
                    <Info>
                        <Icon color='#282D30' />
                        <TextLegend>Poids (kg)</TextLegend>
                    </Info>
                    <Info>
                        <Icon color='#E60000' />
                        <TextLegend>Calories brûlées (kCal)</TextLegend>
                    </Info>
                </LegendChart>
            </Head>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={7}
                    data={userActivity}
                    barGap={8}
                    barCategoryGap={1}
                >
                    <CartesianGrid vertical={false} strokeDasharray="1 1" />
                    <XAxis dataKey="day" tickFormatter={xAxisFormatter} tickLine={false} tick={{ fontSize: 14, stroke: '#9B9EAC' }} dy={15} />
                    <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14, stroke: '#9B9EAC' }} dx={15} />
                    <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide={true} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

ActivitiesChart.prototype = {
    userActivity: PropTypes.array.isRequired
}

export default ActivitiesChart