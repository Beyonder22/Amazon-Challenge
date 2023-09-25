import React from 'react';
import Product from './Product';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<Carousel showArrows={true} autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} emulateTouch swipeable showIndicators={false}>
					<img className="home_image" 
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/one/KA_3000._CB598906425_.jpg" 
					alt="not found"/>
					<img className="home_image" 
					src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" 
					alt="not found"/>
					<img className="home_image"
						src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" 
						alt="not found"/>
					<img className="home_image"
						src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" 
						alt="not found"/>
					<img className="home_image"
						src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" 
						alt="not found"/>
					<img className="home_image"
						src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" 
						alt="not found"/>
					<img className="home_image"
						src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB589732670_.jpg" 
						alt="not found"/>
				</Carousel>
				<div className="home_row">
					<Product id="234532" title='First Gen: A Memoir Hardcover – September 12, 2023' price={399}
					image={'https://m.media-amazon.com/images/I/81l6PnNg08L._SL1500_.jpg'} 
					rating={5}/>
					<Product id="234832" title='2023 Newest Tablet with Keyboard Tablets 2 in 1 4GB+64GB 10 inch Tablet And Case Mouse Stylus Film Game Android 11.0 Tablets PC 10.1 IPS Screen Tableta Computer 8MP Dual Camera WiFi BT Google Play Tab' price={6999} 
					image={'https://m.media-amazon.com/images/I/715gMlk5oDL._AC_SL1500_.jpg'} 
					rating={4}/>
				</div>

				<div className="home_row">
					<Product id="234932" title='Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes, Smartwatch for Men and Women (Jet Black)' price={1399} 
					image={'https://m.media-amazon.com/images/I/61SSVxTSs3L._SL1500_.jpg'} 
					rating={3}/>
					<Product id="204532" title="ASIAN Men's Wonder-13 Sports Running Shoes" price={899} 
					image={'https://m.media-amazon.com/images/I/61utX8kBDlL._UY695_.jpg'} 
					rating={5}/>
					<Product id="194532" title='V-Guard Zio Instant Water Geyser | 3 Litre | 3000 W Heating | White-Blue | | 2 Year Warranty' price={2399} 
					image={'https://m.media-amazon.com/images/I/61oOGUIEmgL._SL1500_.jpg'} 
					rating={4}/>
					
				</div>

				<div className="home_row">
					<Product id="834532" title='Sceptre IPS 27-inch Gaming Monitor 1920 x 1080p up to 165Hz 1ms AMD FreeSync Premium 119% sRGB DisplayPort HDMI Build-in Speakers, Machine Black (E275B-FPT168S)' price={13099} 
					image={'https://m.media-amazon.com/images/I/61huUNEiGOL._AC_SL1367_.jpg'} 
					rating={4}/>
				</div>
				
			</div>
		</div>
	)
}

export default Home;