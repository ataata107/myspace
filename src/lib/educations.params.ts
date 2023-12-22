import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Master of Science, Computer Science',
		description: '',
		location: 'Tempe, USA',
		logo: Assets.ASU,
		name: '',
		organization: 'Arizona State University',
		period: { from: new Date(2023, 7, 17), to: new Date(2025, 4, 1) },
		shortDescription: '',
		slug: 'education-item',
		subjects: ['Distributed Database Systems', 'Foundation of Algorithms', 'Multimedia and Web Databases', 'Software Design', 'Cloud Computing', 'Software Security']
	},
	{
		degree: 'Bachelor of Technology, Engineering Physics',
		description: '',
		location: 'Roorkee, India',
		logo: Assets.Unknown,
		name: '',
		organization: 'Indian Institute of Technology (IIT), Roorkee',
		period: { from: new Date(2016, 6, 1), to: new Date(2020, 5, 1) },
		shortDescription: '',
		slug: 'education-item-2',
		subjects: ['Data Structures', 'Data Mining For Business Intelligence', 'Analog and Digital Electronics', 'Microprocessors and Peripheral Devices']
	}
];
