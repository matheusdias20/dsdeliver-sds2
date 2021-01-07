import './styles.css';
import { ReactComponent as PortfolioIcon } from './portfolio.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as GithubIcon } from './github.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª edição do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://portfoliomatheus-v2.netlify.app/" target="_new">
                    <PortfolioIcon />
                </a>
                <a href="https://www.linkedin.com/in/matheus-vieira-53aaa7188/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://github.com/matheusdias20" target="_new">
                    <GithubIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;