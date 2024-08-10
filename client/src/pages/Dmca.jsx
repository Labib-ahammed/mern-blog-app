import React from 'react'

const Dmca = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
            <h1 className='text-3xl font-semibold text-center my-7'>DMCA</h1>
            <div className="text-md text-gray-500 flex flex-col gap-6 text-left">
                <p>
                Welcome to Aniblog! As part of our commitment to respecting intellectual property rights, we have implemented this DMCA policy. Please read it carefully to understand how we handle copyright infringement claims.
                </p>
                <h2 className='text-2xl'>Reporting Copyright Infringement</h2>
                <p>If you believe that any content on Aniblog infringes your copyright, please follow the steps below:</p>
                <ol className='flex flex-col gap-2 list-decimal'>
                    <li>Identification: Provide a detailed description of the copyrighted work you believe has been infringed, including its location on our website.</li>
                    <li>
                    Contact Information: Include your contact information (name, address, email, and phone number).
                    </li>
                    <li>
                    Statement: Include a statement that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.
                    </li>
                    <li>
                    Signature: Sign the notice electronically or physically.
                    </li>
                    <li>Send the Notice: Send the notice to our designated agent at grandlineadventurer@gmail.com.</li>
                </ol>
                <h2 className='text-2xl'>Counter-Notification</h2>
                <p>If you believe that your content was removed in error or misidentification, you may submit a counter-notification. It must include:</p>
                <ol className='flex flex-col gap-2 list-decimal'>
                    <li>
                    Identification: Specify the content that was removed and its location.
                    </li>
                    <li>
                    Statement: Include a statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.
                    </li>
                    <li>
                    Contact Information: Provide your contact information.
                    </li>
                    <li>Signature: Sign the counter-notification electronically or physically.</li>
                    <li>
                    Send the Counter-Notification: Send the counter-notification to our designated agent at grandlineadventurer@gmail.com.
                    </li>
                </ol>
                <h2 className='text-2xl'>Repeat Infringers</h2>
                <p>We reserve the right to terminate the accounts of repeat infringers.</p>
                <h2 className='text-2xl'>Contact Us</h2>
                <p>If you have any questions or concerns regarding our DMCA policy, please contact us at grandlineadventurer@gmail.com.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dmca
