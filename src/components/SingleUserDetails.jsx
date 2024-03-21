'use client'

import axios from 'axios'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const SingleUserDetails = ({ id }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
                const data = response.data;
                setUser(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchUser();
    }, [id])

    return (
        <div className='flex w-full h-[100vh] bg-gray-950 items-center justify-center'>
            {user && (
                <div className='bg-slate-100 w-full max-w-md h-auto rounded-lg flex flex-col p-4'>
                    <h3 className='font-bold text-lg border-b border-black pb-2'>User details</h3>
                    <div className='flex items-center mt-4'>
                        <Image src={user.avatar} alt={`${user.profile.username}_details`} className='w-20 h-20 rounded-full mr-4' width={80} height={80} />
                        <div className='flex flex-col'>
                            <div className='flex items-center'>
                                <span className='font-bold mr-1'>First Name:</span>
                                <span className='font-medium'>{user.profile.firstName}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='font-bold mr-1'>Last Name:</span>
                                <span className='font-medium'>{user.profile.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='font-medium'><span className='font-bold mr-1'>Bio:</span>{user.Bio}</p>
                        <p className='font-medium'><span className='font-bold mr-1'>Job Title:</span>{user.jobTitle}</p>
                        <p className='font-medium'><span className='font-bold mr-1'>Username:</span>{user.profile.username}</p>
                        <p className='font-medium'><span className='font-bold mr-1'>Email:</span>{user.profile.email}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SingleUserDetails
