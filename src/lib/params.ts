import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Instagram:
			return Icons.Instagram;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Shazeb',
	lastName: 'Ata',
	description:
		"Hey, I'm Shazeb, a tech enthusiast on a relentless quest for innovation. Whether I'm crafting intricate algorithms for competitive programming, building scalable systems, or diving into the world of machine learning, versatility is my forte. I am currently pursuing Master's in Computer Science from Arizona State University, with a knack for languages like C++, Python, and Java. But it doesn't stop there—web development with NodeJs, JavaScript, and HTML/CSS adds a dash of creativity to my coding palette. Beyond the lines of code, I'm a competitive programming aficionado, constantly honing my skills to stay at the forefront of the tech landscape. Let's not just solve problems; let's create solutions, break barriers, and make every line of code a masterpiece!",
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/ataata107' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/shazeb-ata-05a127154/'
		},
		{
			platform: Platform.Email,
			link: 'sata1@asu.edu'
		},
		{
			platform: Platform.Youtube,
			link: 'https://www.youtube.com'
		},
		{
			platform: Platform.Instagram,
			link: 'https://www.instagram.com/shazebata/'
		}
		,
		{
			platform: Platform.Facebook,
			link: 'https://www.facebook.com/shazeb.ata/'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/15o4rAebHWpLzyg-NU8LXI66rVNV_7Zs0/view?usp=share_link'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
