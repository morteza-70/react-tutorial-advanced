import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

class LoadingUsers extends Component {
  render() {
    return Array(6).fill({}).map(()=> {
        return (
        	<SkeletonTheme baseColor="rgb(200,10,150)" highlightColor="rgb(200,200,200)">
				<div className='col-4 text-center p-5'>
					<Skeleton className='mb-4' circle={true} height={100} width={100}/>
					<Skeleton className='mb-4' count={2} height={30}/>
				</div>          
        	</SkeletonTheme>
        )
    })
  }
}

export default LoadingUsers;