import React from 'react';

const BannerImage = () => {

    return (
        <div className="md:absolute top-[500px] left-0 right-0 md:mt-0 mt-[-200px] ">
            <div className="border-2 w-7/12 mx-auto p-1 md:p-3 rounded-[20px] bg-[#d8d7d831]">
                <img className="rounded-[20px] aspect-video w-full"
                    src="https://i.ibb.co.com/x65TdVn/banner.jpg"
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default BannerImage;