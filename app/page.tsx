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
		<section className="flex flex-col items-center justify-center my-24 gap-4 py-8 md:py-10" style={{ backgroundImage: "url('./fondo.svg')", marginBottom: 50 }}>
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
						Explore more about my work <Code color="primary">below.</Code> 👇
					</span>
				</Snippet>
			</div>
			
			{/* Esta es la seccion sobre mi */}
			<div id="#about" className="mt-36 pt-10 bg-transparent-50 dark:bg-transparent-50 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="grid items-center grid-cols-1 md:grid-cols-2">

						<div>
							<h2 className={title()}>Hey 👋 I am</h2>
							<br className="block sm:hidden" /> 
							<h2 className={title({ color: "blue" })}> Israel Mendoza</h2>
							
							<p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
							A web programming enthusiast specializing in Full Stack development. My expertise spans technologies such as HTML, CSS, and JavaScript, as well as frameworks like React and Node.js. Additionally, I have solid knowledge in Python, along with experience using Django and Odoo. My primary commitment is to deliver efficient and high-quality solutions to meet my clients' needs.
							</p>
							<div className="mt-12 ml-36">
								<a href="./isra_cv.pdf" download="Isra Mendoza CV">
									<button className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}><img className="w-8" src="./download-pdf-icon.png" /> Download CV</button>
								</a>
							</div>
						</div>

						<div className="relative">
							<img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

							<img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="./chae-icono.png" alt="" />
						</div>

					</div>
				</div>
			</div>

			{/* Aqui la area de skills */}
			<div id="skills" className="mt-28 px-4 py-24 mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className={title()}>My tech </h2>
					<h2 className={title({ color: "green" })}>knowledge</h2>
				</div>
				<div className="mt-20 grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
					<div className="flex items-center justify-center">
						<img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="HTML Logo" className="block object-contain h-12" />
						HTML
					</div>
					<div className="flex items-center justify-center">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="CSS Logo" className="block object-contain h-12" />
						CSS
					</div>
					<div className="flex items-center justify-center">
						<img src="https://static-00.iconduck.com/assets.00/javascript-plain-icon-256x256-ianqz9kb.png" alt="JavaScript Logo" className="block object-contain h-12" /> 
						JavaScript
					</div>
					<div className="flex items-center justify-center">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React JS Logo" className="block object-contain h-12" />
						React
					</div>
					<div className="flex items-center justify-center">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python Logo" className="block object-contain h-12" />
						Python
					</div>
					<div className="flex items-center justify-center">
						<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/django_line_logo_icon_146560.png" alt="Django Logo" className="block object-contain h-12" />
					</div>
					<div className="flex items-center justify-center">
						<img src="https://assets-global.website-files.com/6407282fb8fd3f5e4f21e2b0/64a549dcb32e55a254d52cd2_HrEG0mz7dPoT60cskCyU1mrzta40Ky1heqhJVrPf4MQ.png" alt="Odoo Logo" className="block object-contain h-12" />
					</div>
					<div className="flex items-center justify-center">
						<img src="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png" alt="PostgreSQL Logo" className="block object-contain h-12" />
						PostgreSQL
					</div>
					<div className="flex items-center justify-center">
						<img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node JS Logo" className="block object-contain h-12" />
						Node JS
					</div>
					<div className="flex items-center justify-center">
						<img src="https://kalimahapps.gallerycdn.vsassets.io/extensions/kalimahapps/tailwindcss-kit/1.0.4/1688444804387/Microsoft.VisualStudio.Services.Icons.Default" alt="Tailwind CSS" className="block object-contain h-12" />
						Tailwind CSS
					</div>
					<div className="flex items-center justify-center">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Bootstrap CSS" className="block object-contain h-12" />
						Bootstrap
					</div>
					<div className="flex items-center justify-center">
						<img src="https://zonatecnologicaecc.com/wp-content/uploads/2022/11/MySQL-logo.png" alt="MySQL Logo" className="block object-contain h-12" />
					</div>
					<div className="flex items-center justify-center">
						<img src="https://cdn.dribbble.com/users/528264/screenshots/3140440/media/5f34fd1aa2ebfaf2cd548bafeb021c8f.png?resize=400x300&vertical=center" alt="Firebase Logo" className="block object-contain h-12" />
						Firebase Auth
					</div>
					<div className="flex items-center justify-center">
						<img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png" alt="Git Logo" className="block object-contain h-12" />
						Git
					</div>
					<div className="flex items-center justify-center">
						<img src="https://ouch-cdn2.icons8.com/_qv0GZ-TvUNz7L6kTDY6jQTK0ZL8PBgeSRketqzOyB0/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDEw/LzY2ZThhYzc1LTJh/ZjAtNDk4MC1hNThl/LWMwOWY0NWIyM2Mz/NS5wbmc.png" alt="Github Logo" className="block object-contain h-12" />
						GitHub
					</div>
					<div className="flex items-center justify-center">
						<img src="https://miro.medium.com/v2/resize:fit:512/1*pcRNg2RXH2LWkiciru5fJQ.png" alt="SCRUM Logo" className="block object-contain h-12" />
						SCRUM
					</div>
				</div>
				<p className="mt-16 text-base font-medium text-center text-gray-500">
				Explore my portfolio and discover how my technological expertise fuels innovation across various projects...
				</p>
			</div>

			{/* Portfolio */}
			<div id="#portfolio">
				<div className="container px-6 py-10 mx-auto">
					<div className="text-center">
						<h2 className={title()}>Explore</h2>
						<h2 className={title({ color: "yellow"})}> My Web </h2>
						<h2 className={title()}>World</h2>
					</div>

					<div className="bg-transparent-50 mt-4 rounded-lg p-4 text-center shadow">
						<p className="text-lg text-gray-500">Step into my web universe and uncover an array of unique projects waiting to be explored!  I invite you to delve into each one <br /> and discover what makes them special.</p>
    					<p className="mt-2 text-lg font-bold text-gray-500 italic">"The only way to do great work is to love what you do." - Steve Jobs</p>
					</div>

					
					<div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
						<div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('./beefounding.png')" }}
>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">BeeFounding Website</h2>
								<p className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">Django - PostgreSQL - Azure</p>
								<a href="https://github.com/ChaeMendoza/founding-project" target="_blank">
									<button className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow" })}>See Project</button>
								</a>
							</div>
						</div>

						<div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('./onlypets.png')" }}>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Only Pets Shop</h2>
								<p className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">ViteJS - Talwind - PostgreSQL</p>
								<a href="https://pf-vet.vercel.app/" target="_blank">
									<button className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow" })}>See Project</button>
								</a>
							</div>
						</div>

						<div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('./calculator.png')" }}>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Calculator App</h2>
								<p className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">HTML - CSS - JavaScript</p>
								<a href="https://github.com/ChaeMendoza/calculadora-js" target="_blank">
									<button className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow" })}>See Project</button>
								</a>
							</div>
						</div>

						<div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('./pokeapp.png')" }}>
							<div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
								<h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Pokedex App</h2>
								<p className="mt-2 text-lg tracking-wider text-yellow-500 uppercase dark:text-yellow-400 ">HTML - JavaScript - PokeApi</p>
								<a href="https://github.com/ChaeMendoza/04-practica-JS" target="_blank">
									<button className={buttonStyles({ color: "secondary", radius: "full", variant: "shadow" })}>See Project</button>
								</a>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* Contact Section */}
			<div>
				<div className="mt-36">
					<div className="text-center">
						<h3 className={title({ color: "violet" })}>Contact Me</h3>
					</div>
					{/* Contact Section */}
					<div className="mt-8">
					<div
							className="absolute inset-x-0 top-[-60rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]"
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
						<div className="relative flex items-top justify-center h-46 bg-transparent-50 dark:bg-transparent-50 sm:items-center sm:pt-0 rounded">
							<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
								<div className="mt-8 overflow-hidden">
									<div className="grid grid-cols-1 md:grid-cols-2">
										<div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
											<h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
												Get in touch
											</h1>
											<p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
												Fill in the form to start a conversation
											</p>

											<div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
												<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
												</svg>
												<div className="ml-4 text-md tracking-wide font-semibold w-40">
													Quito, Pichincha, Ecuador.
												</div>
											</div>

											<div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
												<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
												</svg>
												<div className="ml-4 text-md tracking-wide font-semibold w-40">
													+593 99 844 3304
												</div>
											</div>

											<div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
												<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
												</svg>
												<div className="ml-4 text-md tracking-wide font-semibold w-40">
													israel656mendoza@gmail.com
												</div>
											</div>
										</div>

										<form className="p-6 flex flex-col justify-center">
											<div className="flex flex-col">
												<span className="hidden">Full Name</span>
												<input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
											</div>

											<div className="flex flex-col mt-2">
												<span className="hidden">Email</span>
												<input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
											</div>

											<div className="flex flex-col mt-2">
												<span className="hidden">Number</span>
												<input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
											</div>

											<button type="submit" className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</div>
			
		</section>
	);
}
