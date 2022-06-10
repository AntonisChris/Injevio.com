import Image from 'next/image';
import React, { useEffect } from 'react';
import closeIcon from '../assets/close_FILL0_wght400_GRAD0_opsz48.svg';

export default function Modal({ children, title, onClose }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    });

    return (
        <div className="flex items-center justify-center absolute bg-opacity-50 z-10 bg-black w-screen h-[110vh] bottom-0">
            <div className="bg-white  z-20 h-1/2 w-[100%] mx-6 sm:w-[640px] rounded-3xl ">
                <div className="p-6 text-black relative h-full flex flex-col">
                    <div className="h-10 mb-4 flex items-center">
                        <span className="text-m font-semibold">{title}</span>
                        <button
                            className="absolute flex items-center justify-center top-6 right-6 h-10 w-10 z-30 rounded-full hover:bg-black hover:bg-opacity-[0.12] hover:text-black"
                            onClick={onClose}
                        >
                            <div className="flex items-center justify-center h-8 w-8">
                                <Image src={closeIcon} />
                            </div>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto">{children}</div>
                </div>
            </div>
        </div>
    );
}
