import Image from "next/image";
import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title({ color: "yellow" })}>About me</h1>
			<div className="flex justify-between items-center mt-24">
				<div>
					<Image
						src="/chae_trabajando.png"
						width={350}
						height={350}
						className="rounded-3xl"
						alt="Picture of the author"
					/>
				</div>
				<div className="w-6/12 text-center ml-5">
					<p>
						Greetings!👋, I'm Israel Mendoza, a web programming enthusiast specializing in Full Stack development. My expertise spans technologies such as HTML, CSS, and JavaScript, as well as frameworks like React and Node.js. Additionally, I have solid knowledge in Python, along with experience using Django and Odoo. My primary commitment is to deliver efficient and high-quality solutions to meet my clients' needs.
					</p>
					<button className="bg-orange-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-4">
						<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
						<span>Download CV</span>
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center mt-20">
				<p className="w-6/12">
					My focus extends beyond simply writing lines of code; I love understanding the needs and goals behind each project to craft tailored and efficient solutions. I'm a firm believer in the importance of collaboration and transparent communication to ensure client satisfaction at every step of the development process. <br /><br />
					When I'm not immersed in the world of web development, you'll find me exploring new technologies, reading about industry trends, or enjoying outdoor activities. I firmly believe in the balance between work and personal life, and finding inspiration in various aspects of life is crucial to my creativity.
				</p>
				<Image
					src="/programando.png"
					width={250}
					height={250}
					className="rounded-3xl mr-20"
					alt="Picture of the author"
				/>
			</div>
			<div className="mt-8">
				<p>
					I'm thrilled to have the opportunity to connect with you and contribute to your digital journey. Feel free to explore my portfolio and see firsthand the projects I've crafted with passion and dedication. Let's collaborate to bring your ideas to life and create something truly exceptional together! 🚀
				</p>
			</div>
		</div>
	);
}