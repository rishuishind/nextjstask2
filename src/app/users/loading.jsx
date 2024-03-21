import { Divider } from '@mui/material'
import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
    return (
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <div className='flex items-center justify-center h-[100vh] bg-gray-950'>
                <div className=' w-[660px] bg-white h-[80vh] rounded-lg flex flex-col'>
                    <div className='pl-2 mb-3'>
                        <Skeleton height={30} width={100} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                    <Divider variant="fullWidth" component="base" />
                    <div className='flex gap-5 pl-5 mb-3'>
                        <Skeleton height={50} width={50} borderRadius={999} />
                        <Skeleton height={50} width={400} borderRadius={700} />
                    </div>
                </div>
            </div>
        </SkeletonTheme>
    )
}

export default loading