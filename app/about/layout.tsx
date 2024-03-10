export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center">
			<div className="text-center w-9/12">
				{children}
			</div>
		</section>
	);
}
