import { RemixiconReactIconComponentType } from "remixicon-react";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";

export interface HeroIcon {
	id: string;
	icon: RemixiconReactIconComponentType;
	url: string;
	className?: string;
}

// TODO: Add colors according to their logos
export const heroIcons: HeroIcon[] = [
	{
		id: "instagram",
		icon: InstagramLineIcon,
		url: "https://instagram.com",
	},
	{
		id: "facebook",
		icon: FacebookCircleLineIcon,
		url: "https://facebook.com",
	},
	{
		id: "dribble",
		icon: DribbbleLineIcon,
		url: "https://dribble.com",
	},
	{
		id: "youtube",
		icon: YoutubeLineIcon,
		url: "https://youtube.com",
	},
	{
		id: "github",
		icon: GithubLineIcon,
		url: "https://github.com",
	},
];
