import UserDetails from '@/components/UserDetails';
import { List } from '@mui/material'
import axios from 'axios'
import React from 'react'

const page = async () => {
    const usersObj = await axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users');
    const users = usersObj.data;
    return (
        <div className='flex items-center justify-center h-[100vh] bg-gray-950'>
            <List className='rounded-lg max-h-[80vh] overflow-y-auto' sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}>
                <span className='font-bold pl-4 border-b flex text-lg'>Users</span>
                {
                    <UserDetails users={users} />
                }
            </List>
        </div>
    )
}

export default page
