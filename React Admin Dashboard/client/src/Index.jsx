import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsCalendarFill, BsFilm}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'July 01',
          available: 20,
          reserved: 22,
        },
        {
          name: 'July 02',
          available: 5,
          reserved: 37,
        },
        {
          name: 'July 03',
          available: 30,
          reserved: 12,
        },
        {
          name: 'July 04',
          available: 34,
          reserved: 8,
        },
        {
          name: 'July 05',
          available: 7,
          reserved: 35,
        },
        {
          name: 'July 06',
          available: 8,
          reserved: 34,
        },
        {
          name: 'July 07',
          available: 6,
          reserved: 36,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>DASHBOARD</h2>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Movies</h3>
                    <BsFilm className='card_icon'/>
                </div>
                <h1>02</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Date and Time</h3>
                    <BsCalendarFill className='card_icon'/>
                </div>
                <h1>02</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Users</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>55</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Notifications</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>08</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reserved" fill="#8884d8" />
                <Bar dataKey="available" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="reserved" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="available" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home