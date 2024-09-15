import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@elements/shadcn/ui/accordion";

import { useEffect } from "react";
import { Card } from "@elements/shadcn/ui/card";
import ContentPage from "@pages/ContentPage/ContentPage";

import "./GetToKnowMe.scss";
export default function GetToKnowMe() {
	useEffect(() => {
		document.documentElement.style.setProperty("--theme-bg-navbar", "#eec3bd");
		document.documentElement.style.setProperty("--theme-navbar-primary", "#eec3bd");
		document.documentElement.style.setProperty("--theme-bg-primary", "#f1e1e1");
		document.documentElement.style.setProperty("--theme-primary", "#a41109");
	}, []);

	return (
		<ContentPage>
			<div id="get-to-know-me">
				<h1>Get to know me!</h1>

				<Card className="card">
					Hello, my name is Tajra, and I'm an aspiring UX/UI designer currently pursuing a
					bachelor's degree in psychology. You might wonder how I ended up working with Figma.
					Growing up, I always wanted to do something creative for a living, feeling torn between
					the worlds of design and science. While I initially chose to explore the scientific side
					of my mind, I never stopped creating and expressing my creative side.
				</Card>
				<Accordion type="single" className="accordion">
					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.1s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="initial-spark"
					>
						<AccordionTrigger>What initially sparked your interest in UX/UI?</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								Design has always held a special place in my heart. I've known from a young age that
								I wanted a career where creativity could thrive. However, I've often felt torn
								between my love for art and my interest in science, especially as I studied
								psychology and enjoyed doing research.
							</p>
							<p>
								When I discovered UX/UI design—a field that lets me combine creativity with
								scientific thinking—I was intrigued. It was a perfect fit for my interests. I
								started learning about UX/UI design through YouTube and Udemy courses, and the more
								I learned, the more I enjoyed it.I hope to transition it from a passion into a
								career where I can continuously grow and make meaningful contributions.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						value="ux-ui-exicitement"
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.15s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
					>
						<AccordionTrigger>
							What excites you most about UX/UI and keeps you motivated?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							What excites me most about UX/UI design is the boundless creativity it offers. I'm
							constantly inspired by seeing what people create and the innovative solutions they
							come up with. This curiosity and fascination with others' work is a major driving
							force for me in this field. On the flip side, when I encounter exceptional designs,
							I'm intrigued by the creative process behind them. I enjoy delving into research to
							understand how these ideas were conceived and executed, which further fuels my own
							desire to innovate and create.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.2s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="creative-process"
					>
						<AccordionTrigger>
							How would you describe your creative process? Where do you find inspiration?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								My creative process is pretty hands-on and flexible. I prefer figuring things out my
								own way rather than sticking strictly to the norm. Inspiration comes from all around
								me—I just take in what's happening and go from there.
							</p>

							<p>
								When I started with UX/UI, I watched tutorials to get the basics down. Understanding
								the main principles was important, but I also think there's no one "right" way to
								use a tool or a brush when it comes to painting or creating a design. I enjoy
								finding new, fun ways to create and design, experimenting to see what works best.
							</p>

							<p>
								Basically, my approach is about mixing structured learning with a lot of
								exploration. It's about enjoying the journey of figuring things out and coming up
								with art.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.25s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="favorite tools or techniques"
					>
						<AccordionTrigger>
							What are your favorite tools or techniques to use in your work, and why?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								My preferred tools for my work are Figma and Canva. Figma is essential for my UX/UI
								design projects because of its versatility and the supportive community around it. I
								particularly enjoy using Figma for its capability with gradients, allowing me to
								create visually appealing designs that align with user preferences and needs. The
								community aspect of Figma has also been invaluable, providing opportunities to learn
								from others and explore new design approaches.
							</p>

							<p>
								As for Canva, I consider myself a Canva veteran. I first started using it during my
								school days for presentations, and it has since become my go-to tool for quick and
								accessible design needs.t's straightforward to use and offers a wide range of
								templates and resources that make designing easy and accessible. I find myself
								turning to Canva for quick projects or when I need to create polished visuals
								efficiently.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.3s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="hobbies-and-interests"
					>
						<AccordionTrigger>
							Outside of design, what hobbies or interests do you pursue? How do they influence your
							work?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								In addition to design, I'm also passionate about photography and painting. I find
								joy in discovering beauty in everyday scenes and capturing it through my lens or
								expressing it on canvas. Being inherently artistic, I'm always exploring new ways to
								creatively express myself. Having an interest in art has influenced by physical and
								digital work. For me, creating art doesn't feel like a chore or a job; it's simply
								fun. Having fun with creating allows me to enjoy the creative process more and makes
								learning feel less like a chore or a job, but more like a fun exploration of ideas
								and techniques.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.35s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="collaboration-role"
					>
						<AccordionTrigger>
							What role does collaboration play in your work? How do you approach working with
							others?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								Collaboration plays a significant role in my approach to work. Coming from a
								background in psychology, I've always valued working with people in both group
								settings and when working independently. Throughout my academic journey, I've
								actively participated in volunteering and various school projects, which have honed
								my teamwork and project management skills.
							</p>

							<p>
								While I haven't yet had the opportunity to collaborate closely with others in the
								design field, I am eager to do so. I believe in the power of collaboration to bring
								diverse perspectives and ideas to the table, enriching the creative process and
								leading to innovative solutions. I look forward to future opportunities where I can
								contribute my skills and learn from others in a collaborative setting, fostering
								meaningful connections and achieving impactful results together.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.4s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="philosophy-or-principle"
					>
						<AccordionTrigger>
							Is there a specific philosophy or principle that guides your approach to design/work?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								For me, creating art is a way to express emotions and evoke feelings, whether it's
								sharing my own experiences or connecting with others on a deeper level. I believe
								art should be enjoyable and inherently expressive. This mindset guides my approach
								to everything I create, infusing each project with a sense of joy, creativity, and
								the potential to resonate emotionally with its audience. My goal is to have fun and
								love what I do, ensuring that every design reflects this passion and energy.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						className="accordion-item animate-slide-in translate-x-0"
						style={{
							animationDelay: `0.45s`,
							animationFillMode: "forwards",
							animationDuration: "0.8s"
						}}
						value="long-term-career-goals"
					>
						<AccordionTrigger>
							What are your long-term career goals or aspirations? How do you see yourself growing
							in UX/UI design?
						</AccordionTrigger>
						<AccordionContent className="accordion-content">
							<p>
								My long-term career goal in UX/UI design is to conduct personal research that
								explores human experiences and perceptions related to design quality. I aspire to
								contribute insights that enhance understanding in the field. I see myself growing by
								embracing new challenges and continually learning, pushing design boundaries to
								create impactful user experiences. I aim to find happiness and fulfillment in this
								work, always seeking new and exciting challenges.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</ContentPage>
	);
}
