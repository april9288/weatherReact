import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';
import moment from 'moment';       

const Chart3 = ({data_set}) => {

  const mystyle = {
    margin: "50px auto"
  }

  return (
        <div>
        <AreaChart style ={mystyle} width={730} height={250} data={data_set} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey='weekday' 
                   stroke="black"
                     tickFormatter={(tick) => moment(tick*1000).format('ddd')}
                     />
          <YAxis type="number" domain={['auto', 'auto']} stroke="black"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend verticalAlign="top" height={36}/>
          <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>

        <AreaChart style ={mystyle} width={730} height={250} data={data_set} syncId="anyId"
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <XAxis dataKey='weekday' 
                   stroke="black"
                     tickFormatter={(tick) => moment(tick*1000).format('ddd')}
                     />
          <YAxis type="number" domain={['auto', 'auto']} stroke="black"/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend verticalAlign="top" height={36}/>
          <Area type='monotone' dataKey='ozone' stroke='#82ca9d' fill='#82ca9d' />
        </AreaChart>
        </div>
    );
}
export default Chart3;



