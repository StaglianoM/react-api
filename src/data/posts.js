import PostIt from '../assets/post.jpg';
import PostIt2 from '../assets/post2.jpg';


export const posts = [
	{
		id: 1,
		title: 'Titolone',
		image: PostIt,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html', 'css', 'js', 'react'],
		published: true,
	},
	{
		id: 2,
		title: 'Titolo',
		image: PostIt2,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'css'],
		published: true,
	},
	{
		id: 3,
		title: 'Titolino',
		image: undefined,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'php'],
		published: true,
	},
	{
		id: 4,
		title: 'Titolo del Post',
		image: '' /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html'],
		published: false,
	},
]

export default posts;