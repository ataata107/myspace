import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'gsa',
		company: 'Arizona State University',
		description: '',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Tempe, USA',
		period: { from: new Date(2023, 8, 12) },
		skills: getSkills('aws', 'python'),
		name: 'Graduate Services Assistant ',
		color: '#ffffff',
		links: [],
		logo: Assets.ASU,
		shortDescription: ' ',
		longDescription: "In my role as a Graduate Services Assistant, I have been actively engaged in addressing homelessness concerns within Maricopa County by working closely with individuals residing in shelters. A key aspect of my responsibilities involved conducting in-depth Return to Homeless analyses, where I systematically examined patterns and trends to understand the dynamics surrounding individuals who had previously experienced homelessness and were seeking shelter once again. This analysis aimed to uncover insights into the recurring nature of homelessness, enabling more targeted and effective intervention strategies. In addition to Return to Homeless analyses, I conducted a comprehensive examination of the disabilities prevalent among individuals admitted to shelters. This involved identifying and categorizing various disabilities, providing crucial data to inform policy decisions and improve the provision of services to those with specific needs. The insights derived from this analysis played a pivotal role in enhancing the support systems for vulnerable populations, contributing to a more inclusive and responsive approach to homelessness assistance. To further augment our understanding and response to homelessness, I utilized cutting-edge technology such as Eventstream GPT (Generative Pre-trained Transformer). Leveraging the capabilities of GPT, I actively generated new events related to homelessness, allowing for scenario planning and proactive measures in addressing emerging challenges. This utilization of advanced technologies reflects my commitment to employing innovative solutions to tackle complex social issues and drive positive change within the community. In summary, my role as a Graduate Services Assistant involved a multifaceted approach to addressing homelessness in Maricopa County, encompassing Return to Homeless analyses, examination of disabilities, and the application of Eventstream GPT for scenario generation. Through these efforts, I aimed to contribute valuable insights and foster a more informed and proactive response to the complex issue of homelessness."
	},
	{
		slug: 'hilabs',
		company: 'HiLabs',
		description: '',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Pune, India',
		period: { from: new Date(2020, 9, 12), to: new Date(2023,4,11) },
		skills: getSkills('aws', 'scala','java','mysql','spark','springboot','solr','snowflake','bash','python'),
		name: 'Senior Data Scientist',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ' ',
		longDescription: "Served as the team leader while building a scalable system on AWS and a REST-API using Spring Boot. Over $2 million in yearly overpayments within inpatient claims data were prevented thanks to the API's flawless integration into one of the biggest health plans (Anthem) and its claims adjudication system. Created Hive queries to extract and examine claims data on the Hadoop system, carried out Spark tasks using the HiLabs MGest platform, and then indexed data on Solr, significantly improving search capabilities. Integrated services like EC2, EMR, RDS, Load Balancer, and S3 into DevOps pipeline implementations. Helped ensure system resilience and data integrity by working together with the central logging and disaster recovery team. Using Swagger UI, extensive API documentation was created, guaranteeing stakeholders and development teams communication in an understandable and clear manner. Computed correlation of historical disease data with current diagnosis data to identify Fraud, Waste or Abuse."
	},
	{
		slug: 'fujifilm',
		company: 'Fujifilm Software',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Yokohama, Japan',
		period: { from: new Date(2019, 4, 1), to: new Date(2019,6,11)},
		skills: getSkills('python'),
		name: 'Software Development Computer Vision Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.Fujifilm,
		shortDescription: '',
		longDescription: "Used Mask RCNN to analyze many pieces attached to a toy called Baymax in order to detect contours, classify the parts, determine whether any of the parts had been altered by coloring, and determine the proportion of each color on each part. Added several branches to the Mask RCNN's Resnet layer in order to complete the task. Converted RGB feature space to HSV to simplify the calculation of the color percentage that is present on each component. Used the Python Tkinter Library to create a basic user interface (UI) for attaching parts."
	},
	{
		slug: 'software-freelance-junior',
		company: 'StyleDotMe',
		description: '',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Delhi, India',
		period: { from: new Date(2019, 5, 1), to: new Date(2019,6,11) },
		skills: getSkills('python'),
		name: 'Software Development Computer Vision Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: '',
		longDescription: "Constructed a prototype that uses TensorFlow to precisely identify hand joints so that, when a hand is held up to a camera, a ring is automatically generated, improving user engagement. Used deep learning frameworks like Keras and DLib to facilitate the use of advanced models like Yolo and VGG-16 in transfer learning for the purpose of classifying hands and recognizing motions."
	}
];

export default MY_EXPERIENCES;
