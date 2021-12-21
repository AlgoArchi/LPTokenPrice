import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from "../../images/arrow.png";
import facebook from "../../images/fb.svg";
import discord from "../../images/discord.svg";
import github from "../../images/github.svg";
import email from "../../images/mail.svg";
import twitter from "../../images/twitter.svg";
import telegram from "../../images/telegram.svg";
import coingecko from "../../images/coingecko.svg";

import './footer.css';

function Footer() {
    return (
		<footer className='footer_container'>
			<div className='detail_container'>
				<div className='seperate'>
					<div>
						<h3 className='footer_title'>Community</h3>
						<nav className='icon_arrange'>
							<img src={facebook} alt='facebook' />
							<img src={discord} alt='dicord' />
							<img src={twitter} alt='twitter' />
							<img src={telegram} alt='telegram' />
							<img src={email} alt='email' />
							<img src={github} alt='github' />
							<img src={coingecko} alt='coingecko' />
						</nav>
					</div>
					
					<div>
						<h3 className='footer_title'>Documents</h3>
						<nav className='second_detail'>
							<p>Pitch Deck <img src={arrow} height={15} width={35} alt='arrow' /></p>
							<p>One Pager <img src={arrow} height={15} width={35} alt='arrow' /></p>
							<p>Roadmap <img src={arrow} height={15} width={35} alt='arrow' /></p>
						</nav>
					</div>
					<div>
						<h3 className='footer_title'>Company</h3>
						<nav className='second_detail'>
							<p>Merch Shop <img src={arrow} height={15} width={35} alt='arrow' /></p>
							<p>Contact Our Team <img src={arrow} height={15} width={35} alt='arrow' /></p>

						</nav>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;
