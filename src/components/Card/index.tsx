interface CardProps {
	date: string;
	category: string;
	title: string;
	content: string;
}

const Card = ({ category, content, date, title }: CardProps) => (
	<article className='card grid grid-cols-12 gap-2 border-l-4 border-transparent p-4 hover:border-l-4 hover:border-primary hover:bg-base-100'>
		<div className='col-span-12 '>
			<span className='whitespace-nowrap text-xs text-gray-400'>{date}</span>
		</div>
		<div className='col-span-12 space-y-2'>
			<span className='badge indicator-item badge-primary gap-2 py-3'>
				<span className='h-1.5 w-1.5 animate-ping rounded-full bg-white'></span>
				{category}
			</span>
			<h2 className='text-xl text-white'>{title}</h2>
			<p className='text-sm font-light'>{content}</p>
		</div>
	</article>
);

export default Card;
