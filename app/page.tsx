'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import Image from "next/image";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
  }

export default function Home() {
	const [agreed, setAgreed] = useState(false);

	return (
		<section className="flex flex-col items-center justify-center my-24 gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl text-center justify-center">
				<h2 className={title()}>cons😎le.</h2>
				<h2 className={title({ color: "violet" })}>log('❤️')&nbsp;</h2>
				<br />
				<h1 className={title()}>
					Welcome to my portfolio.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					I am a Full Stack Web Developer.
				</h2>
			</div>


			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					LikendIn
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
					If you want to learn more about my work, <Code color="primary">scroll down the page.</Code> 👇
					</span>
				</Snippet>
			</div>

			<div className="mt-36">
				<div className="text-center">
					<h3 className={title({ color: "green" })}>Professional Experience</h3>
				</div>
				<div>
					<div className="container mx-auto py-8">
						<div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
							<div className="col-span-4 sm:col-span-3">
								<div className="shadow shadow-gray-300 rounded-lg p-6">
									<div className="flex flex-col items-center">
										<Image
											src="/chimico.jpg"
											width={150}
											height={150}
											className="rounded-full"
											alt="Picture of the author"
										/>
										<h1 className="text-xl font-bold">Israel Mendoza</h1>
										<p className="text-gray-300">FullStack Web Developer</p>
										<div className="mt-6 flex flex-wrap gap-4 justify-center">
											<a href="#" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Contact</a>
											<a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
										</div>
									</div>
									<hr className="my-6 border-t border-gray-300" />
									<div className="flex flex-col">
										<span className="text-gray-300 uppercase font-bold tracking-wider mb-2">Skills</span>
										<ul>
											<li className="mb-2">JavaScript</li>
											<li className="mb-2">React</li>
											<li className="mb-2">Node.js</li>
											<li className="mb-2">HTML/CSS</li>
											<li className="mb-2">Tailwind Css</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-span-4 sm:col-span-9">
								<div className="shadow shadow-gray-300 rounded-lg p-6">
									<h3 className="font-semibold text-center mt-3 -mb-2">
										Find me on
									</h3>
									<div className="flex justify-center items-center gap-6 my-6">
										<a className="text-gray-300 hover:text-green-600" aria-label="Visit TrendyMinds LinkedIn" href=""
											target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
												<path fill="currentColor"
													d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
												</path>
											</svg>
										</a>
										<a className="text-gray-300 hover:text-green-600" aria-label="Visit TrendyMinds YouTube" href=""
											target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
												<path fill="currentColor"
													d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
												</path>
											</svg>
										</a>
										<a className="text-gray-300 hover:text-green-600" aria-label="Visit TrendyMinds Facebook" href=""
											target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
												<path fill="currentColor"
													d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
												</path>
											</svg>
										</a>
										<a className="text-gray-300 hover:text-green-600" aria-label="Visit TrendyMinds Instagram" href=""
											target="_blank">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
												<path fill="currentColor"
													d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
												</path>
											</svg>
										</a>
										<a className="text-gray-300 hover:text-green-600" aria-label="Visit TrendyMinds Twitter" href=""
											target="_blank">
											<svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
												<path fill="currentColor"
													d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
												</path>
											</svg>
										</a>
									</div>

									<div className="mb-6">
										<div className="flex justify-between flex-wrap gap-2 w-full">
											<span className="text-gray-300 font-bold">Web Developer</span>
											<p>
												<span className="text-gray-300 mr-2">at ABC Company</span>
												<span className="text-gray-300">2017 - 2019</span>
											</p>
										</div>
										<p className="mt-2">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
											tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
											suscipit.
										</p>
									</div>
									<div className="mb-6">
										<div className="flex justify-between flex-wrap gap-2 w-full">
											<span className="text-gray-300 font-bold">Web Developer</span>
											<p>
												<span className="text-gray-300 mr-2">at ABC Company</span>
												<span className="text-gray-300">2017 - 2019</span>
											</p>
										</div>
										<p className="mt-2">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
											tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
											suscipit.
										</p>
									</div>
									<div className="mb-6">
										<div className="flex justify-between flex-wrap gap-2 w-full">
											<span className="text-gray-300 font-bold">Web Developer</span>
											<p>
												<span className="text-gray-300 mr-2">at ABC Company</span>
												<span className="text-gray-300">2017 - 2019</span>
											</p>
										</div>
										<p className="mt-2">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
											tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
											suscipit.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-36">
				<div className="text-center">
					<h3 className={title({ color: "yellow" })}>Contact Me</h3>
				</div>
				<div className=" shadow shadow-white isolate px-6 py-24 sm:py-32 lg:px-8">
					<div
						className="absolute inset-x-0 top-[60rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]"
						aria-hidden="true"
					>
						<div
						className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
						style={{
							clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
						/>
					</div>
					<div className="mx-auto max-w-2xl text-center">
						<p className="mt-2 text-lg leading-8 text-gray-300">
						Aute magna irure deserunt veniam aliqua magna enim voluptate.
						</p>
					</div>
					<form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-300">
							First name
							</label>
							<div className="mt-2.5">
							<input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="given-name"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							</div>
						</div>
						<div>
							<label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-300">
							Last name
							</label>
							<div className="mt-2.5">
							<input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300">
							Email
							</label>
							<div className="mt-2.5">
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-300">
							Phone number
							</label>
							<div className="relative mt-2.5">
							<input
								type="tel"
								name="phone-number"
								id="phone-number"
								autoComplete="tel"
								className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300">
							Message
							</label>
							<div className="mt-2.5">
							<textarea
								name="message"
								id="message"
								rows={4}
								className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								defaultValue={''}
							/>
							</div>
						</div>
						<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
							<div className="flex h-6 items-center">
							<Switch
								checked={agreed}
								onChange={setAgreed}
								className={classNames(
								agreed ? 'bg-indigo-600' : 'bg-gray-200',
								'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								)}
							>
								<span className="sr-only">Agree to policies</span>
								<span
								aria-hidden="true"
								className={classNames(
									agreed ? 'translate-x-3.5' : 'translate-x-0',
									'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
								)}
								/>
							</Switch>
							</div>
							<Switch.Label className="text-sm leading-6 text-gray-600">
							By selecting this, you agree to our{' '}
							<a href="#" className="font-semibold text-indigo-600">
								privacy&nbsp;policy
							</a>
							.
							</Switch.Label>
						</Switch.Group>
						</div>
						<div className="mt-10">
						<button
							type="submit"
							className="block w-full rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Let's talk
						</button>
						</div>
					</form>
					</div>
			</div>
		</section>
	);
}
