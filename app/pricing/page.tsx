'use client'
import { title } from "@/components/primitives";
import { CardHoverEffectDemo } from "../../components/skills-list"

export default function PricingPage() {
	return (
		<div className="w-full">
			<h1 className={title({ color: "green" })}>Skills</h1>	
			<CardHoverEffectDemo />
		</div>
	);
}
