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
			},
			link: {
				'01': 'See code on github',
				'02': 'Visit the website',
			},
		},
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
			},
			link: {
				'01': 'Lihat codingan di github',
				'02': 'Kunjungi websitenya',
			},
		},
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
];
