import Skeleton from 'react-loading-skeleton';
import React from 'react'

const LoadingUsers = () => {
    return Array(6).fill({}).map(()=> {
        return(
            <div className='col-4 text-center p-5'>
                <Skeleton className='mb-4' circle={true} width={100} height={100}/>
                <Skeleton className='mb-4' count={2} width={100} height={30}/>
            </div>
        )
    })
};

export default LoadingUsers;
