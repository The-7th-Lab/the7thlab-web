"use client";

import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface FormData {
    email: string;
}

const QuickEmailForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const onSubmit = (data: FormData) => {
        console.log(data);
        // Add your email submission logic here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center bg-White/20 rounded-[10px] p-1 w-8/10">
            <input
                {...register("email", { 
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                })}
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-1 bg-transparent border-none outline-none text-sm text-White placeholder-gray-500"
            />
            <button
                type="submit"
                className="bg-blueLagoon/20 hover:bg-blueLagoon/40 text-blueLagoon pt-1 pb-1 pl-2 pr-1 rounded-[8px] transition-colors duration-200 flex items-center gap-1"
            >
                Track Progress
                <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
        </form>
    );
};

export default QuickEmailForm;