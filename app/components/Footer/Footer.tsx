import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import Link from 'next/link';
import { Input } from '../Input/Input';
import { Toaster } from 'react-hot-toast';
import LinkedinIcon from '../../../public/icon-linkedin.svg';
import FacebookIcon from '../../../public/icon-facebook.svg';
import InstagramIcon from '../../../public/icon-instagram.svg';
import TwitterIcon from '../../../public/icon-twitter.svg';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer} {...props}>
			<div className={styles.top}>
				<nav className={styles.nav}>
					<Link href="/contacts ">КОНТАКТЫ</Link>
					<Link href="/purchase-terms">УСЛОВИЯ ПОКУПКИ</Link>
					<Link href="/delivery-and-returns">ДОСТАВКА И ВОЗВРАТ</Link>
				</nav>
				<div className={styles.subscribe}>
					<Input
						type={'email'}
						placeholder={'Ваш email для акций и предложений'}
						icon={'arrow'}
					/>
					<Toaster position="bottom-center" reverseOrder={false} />
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.copyright}>&copy; {currentYear} Shoppe</div>
				<div className={styles.social}>
					<Link href="https://www.linkedin.com/">
						<LinkedinIcon />
					</Link>
					<Link href="https://www.facebook.com/">
						<FacebookIcon />
					</Link>
					<Link href="https://www.instagram.com/">
						<InstagramIcon />
					</Link>
					<Link href="https://x.com/">
						<TwitterIcon />
					</Link>
				</div>
			</div>
		</footer>
	);
};
