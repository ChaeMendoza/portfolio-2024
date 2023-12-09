import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center my-24 gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl text-center justify-center">
				<h1 className={title()}>Hello&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>World!&nbsp;</h1>
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
		</section>
	);
}
