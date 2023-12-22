import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'aries-webpage',
		color: '#5e95e3',
		description:
			'Deployed a RESTful routing system using Express.js, incorporating one or more handle functions for each route and hosting the application on Heroku.  Developed an inventory management system utilizing MongoDB and facilitated communication through Mongoose. Integrated user authentication using Passport.js, resulting in a significant 50% decrease in data entry errors.',
		shortDescription:
			'Web Page Backend design. Click for more details!',
		links: [{ to: 'https://github.com/ataata107/ArIES-Webpage', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Aries Webpage',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2019,9,1)
		},
		skills: getSkills('js', 'html', 'nodejs','mongodb'),
		type: 'Website Development'
	},
	{
		slug: 'haunting-eye',
		color: '#5e95e3',
		description:
			"Created an autonomous robot that can precisely track and follow people by observing their facial motions. used the Dlib Deep Learning library to achieve accurate real-time facial coordinate detection. Used the extracted facial coordinates as input data for a Raspberry Pi-based PID controller. Transmitted the controller's outputs to servo motors, allowing the robot to track and follow a detected face precisely and autonomously, increasing tracking accuracy by 30%.",
		shortDescription:
		'Face following bot. Click for more details!',
		links: [{ to: 'https://github.com/ataata107/Haunting-Eye-DL', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Haunting Eye',
		period: {
			from: new Date(2017,8,1),
			to: new Date(2017,10,1)
		},
		skills: getSkills('python', 'rpi'),
		type: 'Bot'
	},
	{
		slug: 'quadcopter',
		color: '#5e95e3',
		description:
			"I actively collaborated within a team to assemble a quadcopter, employing Arduino as the primary flight controller. The project involved incorporating sensor feedback from components such as the gyroscope and pressure sensors to achieve optimal stability, resulting in an impressive 15-minute flight time. This hands-on experience significantly enhanced my understanding of flight dynamics and control systems. In addition to the quadcopter project, I took the lead in constructing a line-following drone equipped with Pixhawk as the flight controller. This innovative drone demonstrated the capability to autonomously track a yellow line by processing feedback from a camera, LIDAR, and a flow sensor. The successful integration of this data into a PID controller facilitated seamless automation, highlighting my proficiency in drone design and autonomous navigation systems.",
		shortDescription:
		'Line following quadcopter. Click for more details!',
		links: [{ to: 'https://github.com/ataata107/Haunting-Eye-DL', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Line following Drone',
		period: {
			from: new Date(2017,11,1),
			to: new Date(2018,1,1)
		},
		skills: getSkills('python', 'rpi'),
		type: 'Quadcopter'
	},
	{
		slug: 'nvision',
		color: '#5e95e3',
		description:
			"I concurrently captured images from RGB and thermal cameras to create a dataset for object recognition, eliminating the need for manual annotation. The thermal images were annotated by cross-referencing them with corresponding RGB images using the YOLO algorithm. Subsequently, I trained the annotated thermal images using a Single Shot Detector and conducted real-time inference on an NVIDIA Jetson with live thermal feed, enhancing visibility by 25 meters in low-light conditions.",
		shortDescription:
		'Thermal Imaging for night vision. Click for more details!',
		links: [],
		logo: Assets.Unknown,
		name: 'Night Vision',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2020,4,1)
		},
		skills: getSkills('python'),
		type: 'Deep Learning'
	},
	{
		slug: 'labbased',
		color: '#5e95e3',
		description:
			"Removed spectacles from an image by incorporating unsupervised learning of feature translation from one hyperspace to another which successfully eliminated spectacles without need of pairwise image features while training. Trained state of the art model Cycle GAN to perform unsupervised learning and applied neural style transfer to translated features to achieve similarity between both hyperspaces.",
		shortDescription:
		'Generative adversarial networks for spectacles removal. Click for more details!',
		links: [],
		logo: Assets.Unknown,
		name: 'Lab Based Project',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2020,4,1)
		},
		skills: getSkills('python'),
		type: 'Deep Learning'
	},
	{
		slug: 'biometrics',
		color: '#5e95e3',
		description:
			"Performed error correction techniques such as Reed Solomon and Hadamard codes for enrollment and verification of a user based on their iris biometric codes. Achieved iris segmentation from eye images by utilizing cutting-edge models like Segnet. Created a Siamese deep learning model with binary classification for iris verification.",
		shortDescription:
		'Deep Learning for biometric verification. Click for more details!',
		links: [{ to: 'https://github.com/ataata107/Error-Correction', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Biometrics',
		period: {
			from: new Date(2019,7,1),
			to: new Date(2020,4,1)
		},
		skills: getSkills('matlab','python'),
		type: 'Deep Learning'
	}
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('js'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export default MY_PROJECTS;
