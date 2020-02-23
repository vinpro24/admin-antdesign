import React from 'react';
import { Card, DatePicker } from 'antd'
import moment from 'moment'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

const { RangePicker } = DatePicker

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
]

const CustomizedLabel = ({ x, y, stroke, value }) => {
    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
}

const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
        </g>
    )
}

const contentList = {
    sales: (
        <div style={{ width: '100%', height: 350 }}>
            <h4 style={{ marginBottom: 20 }}>Stores Sales Trend</h4>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 20, bottom: 20, right: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    ),
    visits: (
        <div style={{ width: '100%', height: 350 }}>
            <h4 style={{ marginBottom: 20 }}>Visits Trend</h4>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 20, bottom: 20, right: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    ),
};

const Chart = () => {
    const [state, setState] = React.useState({
        key: 'sales',
        noTitleKey: 'app',
    })

    const onTabChange = (key, type) => {
        setState({ ...state, [type]: key });
    }

    return (
        <Card
            style={{ width: '100%' }}
            // title="Card title"
            tabBarExtraContent={<ExtraContent />}
            tabList={[
                {
                    key: 'sales',
                    tab: 'Sales',
                },
                {
                    key: 'visits',
                    tab: 'Visits',
                },
            ]}
            activeTabKey={state.key}
            onTabChange={key => {
                onTabChange(key, 'key');
            }}
        >
            {contentList[state.key]}
        </Card>
    );
}

const ExtraContent = () => {
    const [state, setState] = React.useState({
        selected: 'day',
        ranges: [moment().startOf('day'), moment().endOf('day')]
    })
    const options = [
        { key: 'day', label: 'All day' },
        { key: 'week', label: 'All Week' },
        { key: 'month', label: 'All Month' },
        { key: 'year', label: 'All Year' }
    ]

    const onClick = (selected) => () => {
        const begin = moment().startOf(selected)
        const end = moment().endOf(selected)
        setState({ ...state, selected, ranges: [begin, end] })
    }

    return (
        <div>
            <div style={{ display: 'inline-block', marginRight: 24 }}>
                {options.map(i => <span onClick={onClick(i.key)} key={i.key} style={{ color: i.key === state.selected ? '#1890ff' : 'rgba(0,0,0,.65)', marginLeft: 24, cursor: 'pointer' }}>{i.label}</span>)}
            </div>
            <RangePicker
                value={state.ranges}
                format={'YYYY/MM/DD'}
                style={{ width: 256 }}
            />
        </div>
    )
}

export default Chart;
