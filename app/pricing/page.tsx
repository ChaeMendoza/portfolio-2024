import Image from "next/image";
import { title } from "@/components/primitives";

export default function PricingPage() {
	return (
		<div>
			<h1 className={title({ color: "green"})}>Skills</h1>
			<div className="flex flex-wrap mt-16">
				<div>
					<div
						className="relative grid h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
						<div
							className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
							<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
						</div>
						<div className="relative p-6 px-6 py-14 md:px-12">
							<h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
								Frontend
							</h2>
						</div>
					</div>
				</div>

				<div>
					<div
						className="relative grid h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
						<div
							className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
							<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
						</div>
						<div className="relative p-6 px-6 py-14 md:px-12">
							<h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
								Frontend
							</h2>
						</div>
					</div>
				</div>

				<div>
					<div
						className="relative grid h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
						<div
							className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://diegoboscan.com/static/738155fe5ef8b31a8de213cbd0295fc8/bd3bc/js-1.avif')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
							<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
						</div>
						<div className="relative p-6 px-6 py-14 md:px-12">
							<h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
								Frontend
							</h2>
						</div>
					</div>
				</div>

				<div>
					<div
						className="relative grid h-[20rem] w-full max-w-[18rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
						<div
							className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits-1024x512.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
							<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
						</div>
						<div className="relative p-6 px-6 py-14 md:px-12">
							<h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
								Frontend
							</h2>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
}
