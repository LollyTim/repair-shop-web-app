import Image from "next/image";
import Link from "next/link";
import { title } from "process";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (

        <div className=" px-2 w-full">
            <div className=" mx-auto py-4 flex flex-col justify-center items-center gap-4">
                <h2 className=" text-2xl">Page Not Found</h2>
                <Image
                    src={"/images/pageNotFound.jpeg"}
                    alt="not found image"
                    width={300}
                    height={300}
                    sizes="300px"
                    priority={true}
                    title="Page Not Found"
                    className=" m-0 rounded-xl"
                />
            </div>

        </div>
    );
}
