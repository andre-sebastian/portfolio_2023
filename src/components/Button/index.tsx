import Link from 'next/link';
import type {
	ComponentPropsWithoutRef,
	ReactElement,
	ReactNode,
} from 'react';
import cx from '@/util/cx';

type ButtonVariant = 'primary' | 'secondary' | 'neutral' | 'outline' | 'link';
type ButtonSize = 'sm' | 'md';

const variantClasses: Record<ButtonVariant, string> = {
	primary: 'btn-primary',
	secondary: 'btn-secondary',
	neutral: 'btn-neutral',
	outline: 'btn-outline',
	link: 'btn-link',
};

interface ButtonBaseProps {
	variant?: ButtonVariant;
	size?: ButtonSize;
	block?: boolean;
	className?: string;
	children?: ReactNode;
}

type LinkButtonProps = ButtonBaseProps & {
	href: string;
} & Omit<ComponentPropsWithoutRef<'a'>, 'href' | 'className' | 'children'>;

type NativeButtonProps = ButtonBaseProps &
	Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>;

const isInternalHref = (href: string): boolean =>
	href.startsWith('/') && !href.startsWith('//');

function Button(props: LinkButtonProps): ReactElement;
function Button(props: NativeButtonProps): ReactElement;
function Button(props: LinkButtonProps | NativeButtonProps): ReactElement {
	const {
		variant = 'primary',
		size = 'md',
		block = false,
		className,
		children,
		...rest
	} = props;

	const classes = cx(
		'btn',
		variantClasses[variant],
		size === 'sm' && 'btn-sm',
		block && 'btn-block',
		className
	);

	if ('href' in rest) {
		const { href, download, ...anchorProps } = rest;

		if (isInternalHref(href) && download === undefined) {
			return (
				<Link href={href} {...anchorProps} className={classes}>
					{children}
				</Link>
			);
		}

		return (
			<a href={href} download={download} {...anchorProps} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<button type='button' {...rest} className={classes}>
			{children}
		</button>
	);
}

export type { ButtonVariant, ButtonSize, LinkButtonProps, NativeButtonProps };
export default Button;
