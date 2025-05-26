import dhamImg from './assets/dham.jpg';
import dham from './assets/jagannath.jpg';
import ram from './assets/rameshwaram.jpg';
import krishna from './assets/dwarika.png';
import leh from './assets/ladhakh.jpg';
import kerela from './assets/kochi.jpg';
import Ram from './assets/RamMandir.jpg';
import wrindawan from './assets/premMandir.jpg';
import banaras from './assets/waranasi.jpg';



const data = [
	{
		id: 1,
		name: "Badarinath Dham",
		info: "Badarinath Dham, located in Uttarakhand, India, is one of the Char Dham pilgrimage sites. It is dedicated to Lord Vishnu and nestled in the scenic Himalayas along the Alaknanda River and is surrounded by snow-capped peaks. The temple attracts thousands of devotees and spiritual seekers every year.",
		image: dhamImg,
		price: "8000",
	},
	{
		id: 2,
		name: "Jagannath",
		info: `Jagannath Puri, in Odisha, India, is a renowned pilgrimage city famous for the Jagannath Temple dedicated to Lord Jagannath (a form of Krishna). It hosts the grand Rath Yatra festival, attracting millions. Puri is also known for its beautiful beaches and rich cultural heritage.
`,// if we want in two line then we rwite in `` cotetion if we reite double cottection the we can coplite in single line
		image: dham,
		price: "5000",
	},
	{
		id: 3,
		name: "Rameshwaram",
		info: " Rameshwaram is a sacred town in Tamil Nadu, India, known for the famous Ramanathaswamy Temple dedicated to Lord Shiva. It is a key pilgrimage site and part of the Char Dham pilgrimage. Located on Pamban Island, it connects India to Sri Lanka via the historic Pamban Bridge.",
		image: ram,
		price: "10000",
	},
		{
		id: 4,
		name: "Dwarika Dham",
		info: "Dwarika Dham is a sacred Hindu pilgrimage site located in Gujarat, India. It is believed to be the ancient kingdom of Lord Krishna. Famous for its beautiful temples, especially the Dwarkadhish Temple, it attracts thousands of devotees annually who come to seek blessings and experience spiritual peace.",
		image: krishna,
		price: "12000",
	},
	{
		id: 5,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: banaras,
		price: "1000",
	},
	{
		id: 6,
		name: "Prem Mandir",
		info: "Prem Mandir, located in Vrindavan, Uttar Pradesh, is a stunning Hindu temple dedicated to Radha Krishna and Sita Ram. Built by Jagadguru Kripalu Maharaj, it showcases intricate marble carvings and colorful lighting. The temple complex narrates Lord Krishna’s pastimes and attracts devotees with its spiritual ambiance and architectural beauty.",		image: wrindawan,
		price: "5000",
	},
	{
		id: 7,
		name: "Ladakh",
		info: "Leh, located in the union territory of Ladakh, India, is a stunning high-altitude desert town surrounded by the Himalayas. Known for its Buddhist monasteries, vibrant culture, and adventure activities, it's a gateway to trekking, river rafting, and exploring Pangong Lake. Leh also preserves rich Tibetan traditions and architecture.",
		image: leh,
		price: "30,000",
	},
		{
		id: 8,
		name: "Kochi",
		info: "Kochi, located in Kerala, is a historic port city known for its colonial past and vibrant cultural mix. It features ancient churches, synagogues, and mosques, reflecting its diverse heritage. Famous for spice trade, Kochi also offers scenic backwaters, art festivals, and a unique cuisine blending Indian, Portuguese, and Dutch influences.",
		image: kerela,
		price: "25,000",
	},
		{
		id: 9,
		name: "Ram Mandir",
		info: "Ram Mandir, located in Ayodhya, Uttar Pradesh, is a grand Hindu temple dedicated to Lord Ram. Built at his believed birthplace, it holds deep religious significance. The temple showcases traditional Indian architecture and symbolizes faith, unity, and cultural heritage. Its construction marks a historic moment for millions of devotees.",		image: Ram,
		price: "1500",
	},


];

export default data;
