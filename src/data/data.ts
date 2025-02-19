export const language = {
	en: {
		theme: {
			dark: 'Dark',
			light: 'Light',
		},
		project: {
			description: {
				'01': 'Homechef is a website that help and connects cooking enthusiasts to learn cooking techniques and recipes.',
				'02': 'Broodl is a website that help me track my daily mood, it help me to see how much happy i am in that year.',
				'03': 'Enigma is a laundry management application built with React and other modern web technologies.',
			},
			link: {
				'01': 'See code on github',
				'02': 'Visit the website',
			},
		},
		about: "I'm a web developer with a strong skillset in building dynamic and responsive web applications. My primary focus is on front-end development, and I'm particularly proficient with <strong><u>React.js</u></strong> and <strong><u>Next.js</u></strong>. I'm able to integrate applications with backend services, databases, and apis.",
	},

	id: {
		theme: {
			dark: 'Gelap',
			light: 'Terang',
		},
		project: {
			description: {
				'01': 'Homechef merupakan sebuah website yang bisa menghubungkan dan membantu orang yang suka masak untuk bisa menemukan resep-resep makanan dari berbagai negara dan menemukan teknik memasak yang lebih modern dan unik.',
				'02': 'Broodl merupakan sebuah website yang membantu melacak mood saya sehari-hari, sehingga nantinya saya bisa melihat seberapa bahagia saya di tahun sebelumnya.',
				'03': 'Enigma adalah aplikasi manajemen laundry yang dibangun dengan React dan teknologi web modern lainnya.',
			},
			link: {
				'01': 'Lihat codingan di github',
				'02': 'Kunjungi websitenya',
			},
		},
		about: 'Seorang web developer yang mampu membangun aplikasi web yang dinamis dan responsif. Keahlian utama saya ada pada front-end web development, khususnya menggunakan <strong><u>React.js</u></strong> dan <strong><u>Next.js</u></strong>. Mampu mengintegrasikan aplikasi dengan backend, database dan api.',
	},
};

export const projects = [
	{
		id: '01',
		name: 'HomeChef',
		image: ['/homechef-home.png', '/homechef-details.png'],
		github: 'https://github.com/enggar77/HomeChef',
		website: 'https://home-chef-nine.vercel.app',
		techs: [
			'Next.js',
			'Typescript',
			'TheMealDb api',
			'Kinde',
			'Prisma & Neon',
			'DaisyUI',
		],
	},
	{
		id: '02',
		name: 'Broodl',
		image: [
			'/broodl-home.png',
			'/broodl-login.png',
			'/broodl-dashboard.png',
		],
		github: 'https://github.com/enggar77/Broodl',
		website: 'https://broodl-lilac-kappa.vercel.app',
		techs: ['Next.js', 'Tailwind', 'Zod', 'Firebase'],
	},
	{
		id: '03',
		name: 'Enigma',
		image: [
			'/enigma-login.png',
			'/enigma1.png',
			'/enigma2.png',
			'/enigma3.png',
		],
		github: 'https://github.com/enggar77/laundry-app',
		website: '',
		techs: [
			'React.js',
			'Tailwind',
			'react-router-dom',
			'useContext & useReducer',
		],
	},
];

export const about = {
	name: 'Enggar Jihandoko',
	picture: '/profile.webp',
	techs: [
		'React.js',
		'Next.js',
		'Typescript',
		'Redux Toolkit',
		'Tailwind CSS',
		'SCSS',
		'DaisyUI',
		'Prisma',
		'Firebase',
	],
	links: {
		linkedin: 'https://www.linkedin.com/in/enggar-jihandoko-e777/',
		github: 'https://github.com/enggar77',
	},
};
