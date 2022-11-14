import React from 'react'
import Meta from "../../Images/image 66.png"
import Wallet from "../../Images/image 69 (1).png"
import Arrow from "../../Images/Arrow.png"



const Popup = ({connectWallet}) => {
  return (
    <div className='bg-Popup w-screen h-screen fixed top-0 left-0 z-[100001] flex justify-center items-center'>
      <div className='w-4/5 lg:w-1/3 m-auto bg-white rounded-2xl'>
        
<div className='flex justify-between border-b border-[#CFD8DC] px-8 py-4 '>
  <h3 className='text-xl font-bold'>Connect wallet</h3>
  <p className='text-base cursor-pointer' onClick={connectWallet}>X</p>
</div>

<div className='px-8 py-4'>
<p className='mt-4 text-sm'>Choose your preferred wallet</p>
<div className='flex justify-between items-center border-[#CFD8DC] border rounded-xl mt-4 p-1 px-4 cursor-pointer hover:bg-[#CFD8DC] duration-400'>
<div className='w-full flex items-center'>
<img src={Meta} alt="metamask" className='block'/>
<h4 className='ml-4 text-base'>Metamask</h4>
</div>
<img src={Arrow} alt="connect" />
</div>

<div className='flex justify-between items-center  border-[#CFD8DC] border rounded-xl mt-4 p-1 px-4 cursor-pointer hover:bg-[#CFD8DC] duration-400'>
<div className='w-full flex items-center'>
<img src={Wallet} alt="wallet" className='block'/>
<h4 className='ml-4 text-base'>WalletConnect</h4>
</div>
<img src={Arrow} alt="connect"/>
</div>
</div>
      </div>
    </div>
  )
}

export default Popup