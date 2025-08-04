import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen relative bg-white overflow-x-hidden wrap-break-word">
			{/* Header */}
			<header className="bg-transparent backdrop-blur-md shadow-sm fixed w-screen z-50">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<div className="text-lg font-semibold text-gray-800">
						Racket service
					</div>
					<Button className="bg-[#1A7F40] font-semibold md:h-[47px] hover:bg-green-700 text-white rounded-[13px] md:px-6">
						<span className="hidden md:flex">Nimm Kontakt auf</span>
						<Image src={"/contact.svg"} width={20} height={20} alt="" />
					</Button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="pt-[120px] py-12 lg:py-20 md:pt-0 lg:pt-0 px-2">
				<div className="">
					<div className="grid lg:grid-cols-2 gap-0 md:gap-8 items-end">
						{/* max-w-[565px] */}
						<div className="space-y-3 md:space-y-6 container px-3 md:ps-[50px] pb-[50]">
							<h1 className="text-[36px] font-bold text-gray-900 leading-tight flex flex-wrap">
								<span>Hol dir alles, was dein</span>
								<div className="flex items-end gap-2">
									{/* <span>Schläger</span>
									<div className="shrink-0">
										<Image
											src={"/inline-hero-racket.svg"}
											width={94}
											height={66}
											alt=""
											className="-translate-y-2 shrink-0"
										/>
									</div> */}
									<span>braucht, schnell.</span>
								</div>
							</h1>
							<p className="text-gray-600 text-base lg:text-lg">
								Finde die passenden Saiten und das richtige Zubehör für
								deinen Tennisschläger, die zu deinem individuellen
								Spielstil passen.
							</p>

							<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-6">
								<div className="flex items-center gap-2">
									<div className="bg-[#1A7F401A] size-8 shrink-0 rounded-full flex justify-center items-center">
										<Image
											src={"/spin.svg"}
											width={20}
											height={20}
											alt=""
										/>
									</div>
									<span className="text-sm text-gray-700">
										Mehr Spin
									</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="bg-[#1A7F401A] size-8 shrink-0 rounded-full flex justify-center items-center">
										<Image
											src={"/control.svg"}
											width={20}
											height={20}
											alt=""
										/>
									</div>
									<span className="text-sm text-gray-700">
										Mehr Kontrolle
									</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="bg-[#1A7F401A] size-8 shrink-0 rounded-full flex justify-center items-center">
										<Image
											src={"/power.svg"}
											width={20}
											height={20}
											alt=""
										/>
									</div>
									<span className="text-sm text-gray-700">
										Mehr Power
									</span>
								</div>
							</div>

							<Button className="bg-[#1A1A1A] h-[47px] hover:bg-gray-800 text-white px-8 py-3 rounded-[13px]">
								Schläger abstimmen
							</Button>
						</div>
						{/* <Image
							src="/hero.png"
							alt="Tennis player with racket"
							width={300}
							height={400}
							className="mx-auto max-w-[100vw] relative md:h-screen w-auto rounded-lg translate-x-3 z-10 object-cover"
						/> */}
						{/* <div className="bg-green-100 h-screen rounded-3xl p-8 relative overflow-hidden">
						</div> */}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
						<div className="relative">
							<Image
								src="/section1.png"
								alt="Tennis player in action"
								width={572}
								height={630}
								className="rounded-2xl shadow-lg"
							/>
						</div>

						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
								Alles, was dein Schläger braucht – alles an einem Ort.
								<Image
									src={"/tennis.png"}
									width={40}
									height={40}
									alt=""
									className="inline size-8 -translate-y-1"
								/>
							</h2>
							<p className="text-gray-600 lg:text-lg">
								Hier ist, was wir anbieten, damit dein Schläger bis zum
								Wochenende spielfertig ist und du ihn wieder liebst.
							</p>

							<Button className="bg-[#1A7F40] w-[142px] h-[47px] hover:bg-green-700 text-white px-6 py-3 rounded-[13px]">
								Ruf uns an <PhoneCall />
							</Button>

							<div className="grid md:hidden lg:grid gap-4 mt-3">
								<Card className="p-0 border-none shadow-none">
									<CardContent className="p-0">
										<div className="flex items-center gap-3">
											<Image
												src="/subsection-1-1.png"
												alt="Tennis grip"
												width={199}
												height={144}
												className="rounded-lg"
											/>
											<div className="w-full md:max-w-[248px]">
												<h3 className="font-semibold text-wrap wrap-break-word text-sm text-[#1A7F40] mb-1">
													Schlägerbespannung
												</h3>
												<p className="text-[12px] sm:text-sm text-gray-600">
													Mit hochwertigen Saiten, schneller
													Bearbeitung und individuell angepasster
													Spannung für optimale Leistung.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>

								<Card className="p-0 border-none shadow-none">
									<CardContent className="p-0">
										<div className="flex lg:flex-row-reverse lg:justify-start items-center gap-3">
											<Image
												src="/subsection-1-2.png"
												alt="Tennis grip"
												width={199}
												height={144}
												className="rounded-lg"
											/>
											<div className="w-full md:max-w-[248px]">
												<h3 className="font-semibold text-sm text-[#1A7F40] mb-1">
													Griffe & Tenniszubehör
												</h3>
												<p className="text-[12px] sm:text-sm text-gray-600">
													Lass deine Overgrips für mehr Komfort und
													Kontrolle austauschen und statte dich mit
													Zubehör wie Dämpfern und Griffen aus.
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:grid lg:hidden grid-cols-2 gap-4 mt-10 px-4 container mx-auto">
					<Card className="p-0 border-none shadow-none">
						<CardContent className="p-0">
							<div className="flex items-center gap-3">
								<Image
									src="/subsection-1-1.png"
									alt="Tennis grip"
									width={199}
									height={144}
									className="rounded-lg"
								/>
								<div className="w-full md:max-w-[248px]">
									<h3 className="font-semibold text-wrap wrap-break-word text-sm text-[#1A7F40] mb-1">
										Schlägerbespannung
									</h3>
									<p className="text-[12px] sm:text-sm text-gray-600">
										Mit hochwertigen Saiten, schneller Bearbeitung und
										individuell angepasster Spannung für optimale
										Leistung.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card className="p-0 border-none shadow-none">
						<CardContent className="p-0">
							<div className="flex items-center gap-3">
								<Image
									src="/subsection-1-2.png"
									alt="Tennis grip"
									width={199}
									height={144}
									className="rounded-lg"
								/>
								<div className="w-full md:max-w-[248px]">
									<h3 className="font-semibold text-sm text-[#1A7F40] mb-1">
										Griffe & Tenniszubehör
									</h3>
									<p className="text-[12px] sm:text-sm text-gray-600">
										Lass deine Overgrips für mehr Komfort und
										Kontrolle austauschen und statte dich mit Zubehör
										wie Dämpfern und Griffen aus.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
								Warum solltest du uns in Betracht ziehen?
							</h2>
							<p className="text-gray-600 lg:text-lg">
								Wir machen deinen Schläger im Handumdrehen spielbereit,
								damit du Spiele gewinnst. Das ist nur einer von vielen
								Gründen, warum wir deine beste Wahl sind.
							</p>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex items-start gap-3 w-full md:max-w-[270px] bg-[#1A7F400D] rounded-lg p-4">
									<div className="bg-[#1A7F401A] size-8 shrink-0 rounded-full flex justify-center items-center">
										<Check className="w-5 h-5 stroke-3 text-green-600 flex-shrink-0" />
									</div>
									<div>
										<h3 className="font-semibold text-[#1E1E1E]">
											Schnelle Bearbeitung
										</h3>
										<p className="text-xs text-gray-600">
											Der ultimative Schlägerservice für TC
											Bernkastel-Kues, VfL Bernkastel und
											Tennisvereine.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 w-full md:max-w-[270px] bg-[#1A7F400D] rounded-lg p-4">
									<div className="bg-[#1A7F401A] size-8 shrink-0 rounded-full flex justify-center items-center">
										<Check className="w-5 h-5 stroke-3 text-green-600 flex-shrink-0" />
									</div>
									<div>
										<h3 className="font-semibold text-[#1E1E1E]">
											Persönlicher Service
										</h3>
										<p className="text-xs text-gray-600">
											Professionelle und persönliche Beratung mit
											individueller Saitenempfehlung abgestimmt auf
											deinen Spielstil.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3 w-full md:max-w-[270px] md:col-span-2 mx-auto bg-[#1A7F400D] rounded-lg p-4">
									<div className="bg-[#1A7F401A] size-8 shrink-0 rounded-full flex justify-center items-center">
										<Check className="w-5 h-5 stroke-3 text-green-600 flex-shrink-0" />
									</div>
									<div>
										<h3 className="font-semibold text-[#1E1E1E]">
											Vom Club anerkannte Expertise
										</h3>
										<p className="text-xs text-gray-600">
											Der offizielle Schlägerservice für TC
											Bernkastel-Kues, VfL Bernkastel und
											Tennisvereine.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/section2.png"
								alt="Professional tennis player"
								width={630}
								height={480}
								className="rounded-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="px-4">
				<div className="container rounded-[25px] mx-auto bg-[#F4F9F5] shadow-none flex flex-col md:flex-row gap-6  md:gap-12 items-center justify-between h-full lg:max-h-[428px] px-5 py-8 md:px-18 relative overflow-hidden">
					<Image
						src={"/floating-racket.png"}
						width={160}
						height={160}
						alt=""
						className="absolute top-0 left-0"
					/>
					<Image
						src={"/floating-racket.png"}
						width={160}
						height={160}
						alt=""
						className="absolute bottom-10 -right-3 rotate-180 z-10"
					/>

					<div className="space-y-6">
						<h2 className="text-2xl text-center md:text-start md:text-3xl lg:text-4xl font-bold text-gray-900">
							Komfort und Kontrolle in <br /> deiner Handfläche.
						</h2>
					</div>

					<div className="bg-white rounded-2xl p-5 lg:px-[68px] lg:py-[40] space-y-4 w-full max-w-[481px] flex flex-col justify-between z-20">
						<h3 className="text-xl text-center md:text-start lg:text-2xl font-bold text-gray-900 mb-4">
							Buche ein 10-minütiges Einführungsgespräch.
						</h3>

						<Button className="w-full bg-[#1A7F40] hover:bg-green-700 text-white h-[47px] rounded-lg mb-4">
							Ruf uns an <Phone />
						</Button>

						<div className="flex items-center justify-start gap-2 text-sm text-gray-600">
							<div className="flex items-center gap-2">
								<Image
									src="/send.svg"
									alt=""
									width={50}
									height={50}
									className="size-6"
								/>
								<div className="w-fit">
									<span className="font-bold text-sm w-fit">
										Bevorzugst du lieber E-Mail?
									</span>
									<span className="w-fit">
										dennis.engelmann@gmail.com
									</span>
								</div>
							</div>
							{/* <Image
								src="/arrow.png"
								alt=""
								width={50}
								height={50}
								className="size-5"
							/> */}
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white py-12">
				<div className="container mx-auto px-4">
					<div className="text-center space-y-4">
						<div className="text-lg font-semibold text-gray-800">
							Racket service
						</div>

						<div className="flex justify-center gap-4">
							<Link href={""} className="rounded-full bg-transparent">
								<Image src="/mail.png" alt="" width={30} height={30} />
							</Link>
							<Link href={""} className="rounded-full bg-transparent">
								<Image
									src="/linkedin.png"
									alt=""
									width={30}
									height={30}
								/>
							</Link>
							<Link href={""} className="rounded-full bg-transparent">
								<Image
									src="/whatsapp.png"
									alt=""
									width={30}
									height={30}
								/>
							</Link>
							<Link href={""} className="rounded-full bg-transparent">
								<Image
									src="/facebook.png"
									alt=""
									width={30}
									height={30}
								/>
							</Link>
						</div>

						<p className="text-sm text-gray-500">
							© 2025 - Alle Rechte vorbehalten.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
