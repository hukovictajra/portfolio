import { BlogColors, BlogTitle } from "@data/models";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@elements/shadcn/ui/hover-card";
import { BASE_URL } from "@utils/constants";
import { useState } from "react";
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	PinterestIcon,
	PinterestShareButton,
	RedditIcon,
	RedditShareButton,
	TelegramIcon,
	TelegramShareButton,
	TumblrIcon,
	TumblrShareButton,
	TwitterIcon,
	TwitterShareButton,
	ViberIcon,
	ViberShareButton,
	WhatsappIcon,
	WhatsappShareButton
} from "react-share";

export default function Share({
	id,
	title,
	colors
}: {
	id: string;
	title: string | BlogTitle;
	colors: BlogColors;
}) {
	const blogUrl = `${BASE_URL}/${id}`;

	const [open, setOpen] = useState(false);

	const onClick = () => {
		setOpen(!open);
	};

	return (
		<HoverCard openDelay={300} closeDelay={300} open={open} onOpenChange={setOpen}>
			<HoverCardTrigger onClick={onClick}>
				<span
					className="underline-effect font-medium select-none md:text-lg md:text-center"
					style={{
						color: colors.primary
					}}
				>
					Liked the blog? Share it with your friends!
				</span>
			</HoverCardTrigger>
			<HoverCardContent
				className="w-full"
				style={{
					backgroundColor: colors.background,
					borderColor: colors.primary
				}}
				side="top"
			>
				<div className="flex justify-between gap-4 w-full sm:!grid sm:grid-cols-5">
					<EmailShareButton
						url={blogUrl}
						subject={`Check out the ${
							typeof title === "object" ? title.main : title
						} project by Tajra Hukovic!`}
						body={`Hello!
        I saw this project and I though you might find it interesting. 
        It is made by Tajra Hukovic, Junior UX/UI designer based in Sarajevo!
        Best Regards!
        `}
						separator="
        "
					>
						<EmailIcon size={32} borderRadius={10} className="transition-colors duration-500" />
					</EmailShareButton>

					<FacebookShareButton url={blogUrl}>
						<FacebookIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</FacebookShareButton>

					<LinkedinShareButton url={blogUrl}>
						<LinkedinIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</LinkedinShareButton>

					<RedditShareButton url={blogUrl}>
						<RedditIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</RedditShareButton>

					<PinterestShareButton url={blogUrl} media="">
						<PinterestIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</PinterestShareButton>

					<TelegramShareButton url={blogUrl}>
						<TelegramIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</TelegramShareButton>

					<TumblrShareButton url={blogUrl}>
						<TumblrIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</TumblrShareButton>

					<TwitterShareButton url={blogUrl}>
						<TwitterIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</TwitterShareButton>

					<ViberShareButton url={blogUrl}>
						<ViberIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</ViberShareButton>

					<WhatsappShareButton url={blogUrl}>
						<WhatsappIcon size={32} borderRadius={10} className="hover:opacity-50  duration-500" />
					</WhatsappShareButton>
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
