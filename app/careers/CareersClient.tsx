'use client';

import Image from "next/image";


const CareersClient: React.FC = ({
}) => {

    return (
        <div className="-mt-6">
            <div className={`flex flex-col  relative h-[55vh] justify-end  bg-cover gap-4	pl-8 pr-8`} style={{ backgroundImage: `url('/images/career.png')` }}>
                <div className="absolute align-middle flex-col  flex justify-center   inset-0 bg-gradient-to-b from-[#fff0] to-black bg-opacity-50">
                    <h1 className=" items-center flex justify-center text-white font-bold md:text-2xl lg:text-4xl">Careers</h1>
                </div>
            </div>
            <div className="p-5 px-24 flex justify-center items-center flex-col w-full" >
                <div className="w-[75%] text-center my-3 ">
                    <div className="border-2 text-white text-[1.3rem] bg-[#cb1670] rounded-lg p-8">
                        We’re now accepting applications for 2023 onwards.
                        <br /> Email : <span className="text-black font-semibold ">info@2algarve.com</span> to apply.</div>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-center m3-5">CURRENT VACANCIES</h2>

            <div className="p-5 px-24 flex justify-center items-center flex-col w-full" >
                <div className="w-[75%] my-3 ">
                    <div className="border-2 text-black text-[1.3rem] shadow-lg bg-white rounded-lg p-6">
                        
                    <h2 className="text-xl font-bold text-[#cb1670]">Job Title: Restaurant Manager</h2>
                    <p className="text-base font-light mt-2">We are seeking an experienced and enthusiastic Restaurant Manager to join our team. Our restaurant is a unique blend of a children’s play center and a family dining experience, offering a fun and lively atmosphere for families and children. The ideal candidate will have a passion for working with children and a proven track record in managing a busy restaurant.</p>
                    <h2 className="text-xl font-normal text-[#000000] mt-2 mb-2">Key Responsibilities:</h2>
                    <ol>
                        <li className="text-lg font-light">
                        &#x2022; Oversee all aspects of restaurant operations to ensure efficient and effective service</li>
                        <li className="text-lg font-light">
                        &#x2022; Develop and implement systems and procedures to ensure high standards of quality and hygiene</li>
                        <li className="text-lg font-light">
                        &#x2022; Train and manage a team of staff to provide excellent customer service</li>
                        <li className="text-lg font-light">
                        &#x2022; Manage budgets and control costs to ensure profitability</li>
                        <li className="text-lg font-light">
                        &#x2022; Implement marketing and promotional activities to increase sales and customer numbers</li>
                        <li className="text-lg font-light">
                        &#x2022; Maintain effective communication with customers, suppliers, and staff</li>
                        <li className="text-lg font-light">
                        &#x2022; Ensure compliance with all relevant health and safety regulations</li>
                        
                    </ol>
                    <h2 className="text-xl font-normal text-[#000000] mt-2 mb-2">Requirements:</h2>
                    <ol>
                        <li className="text-lg font-light">
                        &#x2022; Proven experience as a Restaurant Manager or similar role</li>
                        <li className="text-lg font-light">
                        &#x2022; Strong leadership skills with the ability to motivate and manage a team</li>
                        <li className="text-lg font-light">
                        &#x2022; Excellent communication skills in English and Portuguese</li>
                        <li className="text-lg font-light">
                        &#x2022; Passion for working with children and a family-oriented environment</li>
                        <li className="text-lg font-light">
                        &#x2022; Strong organizational and time-management skills</li>
                        <li className="text-lg font-light">
                        &#x2022; Knowledge of food and beverage service, preparation, and presentation</li>
                        <li className="text-lg font-light">
                        &#x2022; Ability to work under pressure in a fast-paced environment</li>
                        </ol>
                        <p className="text-lg font-light mt-2">This is an exciting opportunity for someone who is looking for a challenging role in a dynamic and fun environment. If you have a passion for working with children and a proven track record in restaurant management, we would love to hear from you.</p>
                        <p className="text-lg font-light mt-2">Please apply with your CV and a cover letter highlighting your relevant experience.</p>
                        <h2 className="text-xl font-bold text-[#cb1670]">APPLY NOW</h2>
                    
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CareersClient;
