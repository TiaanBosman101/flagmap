// [region, [[chunk, "iso2 + ISO numeric + name, ..."]]]
const REGIONS = [
  ["Europe", [
    ["Nordic", "dk208Denmark,se752Sweden,no578Norway,fi246Finland,is352Iceland"],
    ["British Isles & Benelux", "gb826United Kingdom,ie372Ireland,nl528Netherlands,be056Belgium,lu442Luxembourg"],
    ["Western Europe", "fr250France,es724Spain,pt620Portugal,ad020Andorra,mc492Monaco"],
    ["Central Europe", "de276Germany,pl616Poland,cz203Czechia,sk703Slovakia,hu348Hungary,at040Austria,ch756Switzerland,li438Liechtenstein"],
    ["Italy & Microstates", "it380Italy,sm674San Marino,va336Vatican City,mt470Malta"],
    ["Baltics & East", "ee233Estonia,lv428Latvia,lt440Lithuania,by112Belarus,ua804Ukraine,md498Moldova"],
    ["Western Balkans", "si705Slovenia,hr191Croatia,ba070Bosnia and Herzegovina,rs688Serbia,me499Montenegro,xkKosovo"],
    ["Southern Balkans", "al008Albania,mk807North Macedonia,gr300Greece,bg100Bulgaria,ro642Romania,cy196Cyprus"],
  ]],
  ["Middle East", [
    ["Levant", "il376Israel,ps275Palestine,lb422Lebanon,sy760Syria,jo400Jordan,iq368Iraq"],
    ["Arabian Peninsula", "sa682Saudi Arabia,ye887Yemen,om512Oman,ae784United Arab Emirates,qa634Qatar,bh048Bahrain,kw414Kuwait"],
    ["Turkey, Caucasus & Iran", "tr792Turkey,ge268Georgia,am051Armenia,az031Azerbaijan,ir364Iran"],
  ]],
  ["Asia", [
    ["Russia & Central Asia", "ru643Russia,kz398Kazakhstan,uz860Uzbekistan,tm795Turkmenistan,kg417Kyrgyzstan,tj762Tajikistan,af004Afghanistan"],
    ["South Asia", "in356India,pk586Pakistan,bd050Bangladesh,np524Nepal,bt064Bhutan,lk144Sri Lanka,mv462Maldives"],
    ["East Asia", "cn156China,mn496Mongolia,kp408North Korea,kr410South Korea,jp392Japan,tw158Taiwan"],
    ["Mainland Southeast Asia", "mm104Myanmar,th764Thailand,la418Laos,kh116Cambodia,vn704Vietnam"],
    ["Maritime Southeast Asia", "my458Malaysia,sg702Singapore,id360Indonesia,bn096Brunei,ph608Philippines,tl626Timor-Leste"],
  ]],
  ["Africa", [
    ["North Africa", "ma504Morocco,dz012Algeria,tn788Tunisia,ly434Libya,eg818Egypt,sd729Sudan"],
    ["West African Coast", "mr478Mauritania,sn686Senegal,gm270Gambia,gw624Guinea-Bissau,gn324Guinea,sl694Sierra Leone,lr430Liberia,cv132Cape Verde"],
    ["West Africa", "ml466Mali,bf854Burkina Faso,ne562Niger,ci384Côte d'Ivoire,gh288Ghana,tg768Togo,bj204Benin,ng566Nigeria"],
    ["Central Africa", "td148Chad,cm120Cameroon,cf140Central African Republic,gq226Equatorial Guinea,ga266Gabon,cg178Republic of the Congo,cd180DR Congo,st678São Tomé and Príncipe"],
    ["Horn & East Africa", "et231Ethiopia,er232Eritrea,dj262Djibouti,so706Somalia,ss728South Sudan,ke404Kenya,ug800Uganda"],
    ["Great Lakes & Indian Ocean", "rw646Rwanda,bi108Burundi,tz834Tanzania,mw454Malawi,mz508Mozambique,mg450Madagascar,km174Comoros,sc690Seychelles,mu480Mauritius"],
    ["Southern Africa", "ao024Angola,zm894Zambia,zw716Zimbabwe,na516Namibia,bw072Botswana,za710South Africa,ls426Lesotho,sz748Eswatini"],
  ]],
  ["Americas", [
    ["North America", "ca124Canada,us840United States,mx484Mexico"],
    ["Central America", "gt320Guatemala,bz084Belize,sv222El Salvador,hn340Honduras,ni558Nicaragua,cr188Costa Rica,pa591Panama"],
    ["Greater Antilles", "cu192Cuba,jm388Jamaica,ht332Haiti,do214Dominican Republic,bs044Bahamas"],
    ["Lesser Antilles", "kn659Saint Kitts and Nevis,ag028Antigua and Barbuda,dm212Dominica,lc662Saint Lucia,vc670Saint Vincent and the Grenadines,bb052Barbados,gd308Grenada,tt780Trinidad and Tobago"],
    ["Northern South America", "co170Colombia,ve862Venezuela,gy328Guyana,sr740Suriname,ec218Ecuador,pe604Peru"],
    ["Southern South America", "br076Brazil,bo068Bolivia,py600Paraguay,uy858Uruguay,ar032Argentina,cl152Chile"],
  ]],
  ["Oceania", [
    ["Australia & Melanesia", "au036Australia,nz554New Zealand,pg598Papua New Guinea,sb090Solomon Islands,vu548Vanuatu,fj242Fiji"],
    ["Micronesia & Polynesia", "pw585Palau,fm583Micronesia,mh584Marshall Islands,nr520Nauru,ki296Kiribati,tv798Tuvalu,ws882Samoa,to776Tonga"],
  ]],
];

const FAMILIES = [
  { name: "Nordic Cross", m: "dk se no fi is", note: "All copy Denmark's Dannebrog, the oldest national flag still in use. The cross sits off-centre, towards the pole." },
  { name: "Pan-Slavic", m: "ru rs sk si hr cz", note: "White, blue and red from Russia's flag, adopted by Slavic nations in 1848. The coat of arms tells them apart." },
  { name: "Pan-Arab", m: "eg iq sy ye jo ps ae kw sd ly", note: "Red, white, black and green from the 1916 Arab Revolt against the Ottomans." },
  { name: "Pan-African (Ethiopian)", m: "et gh sn ml gn cm bj tg bf gw cg", note: "Green, yellow and red from Ethiopia, the African nation that was never colonised." },
  { name: "Pan-African (Garvey)", m: "ke mw ss", note: "Red, black and green from Marcus Garvey's 1920 movement for African unity." },
  { name: "Gran Colombia", m: "co ec ve", note: "Yellow, blue and red: all three were once one country, Gran Colombia (1819-1831)." },
  { name: "Central American", m: "gt hn sv ni cr", note: "Blue-white-blue from the old Federal Republic of Central America. Costa Rica added a red stripe." },
  { name: "Union Jack", m: "gb au nz fj tv", note: "The British flag in the corner marks former British colonies that kept it." },
  { name: "Southern Cross", m: "au nz ws pg br", note: "The Southern Cross constellation, only visible from the southern hemisphere." },
  { name: "Crescent & Star", m: "tr tn dz pk az my mr ly", note: "An Islamic symbol made famous by the Ottoman Empire's flag." },
  { name: "Tricolour", m: "fr it ie be ro mx td ci", note: "Three vertical stripes, inspired by the French Revolution's flag." },
  { name: "Stars & Stripes", m: "us lr my", note: "Copied from the US flag: Liberia was founded by freed American slaves; Malaysia's stripes are its states." },
];

// [members, how to tell apart] — each country in at most one group
const TWINS = [
  ["td ro", "Practically identical! Chad's blue is a touch darker. Romania is in Europe, Chad in Africa."],
  ["id mc pl", "Indonesia and Monaco are both red over white (Indonesia's is longer). Poland is the reverse: white over red."],
  ["ie ci", "Same colours, mirrored. Ireland has green at the flagpole, Côte d'Ivoire has orange there."],
  ["nl lu", "Luxembourg's bottom stripe is light sky blue; the Netherlands' is dark blue."],
  ["au nz", "Australia has white stars plus a big 7-pointed star. New Zealand has 4 red stars."],
  ["ml sn gn", "Mali: green-yellow-red. Senegal: the same plus a green star. Guinea: reversed, red-yellow-green."],
  ["si sk", "Slovenia's small shield (mountain peaks) sits top-left. Slovakia's bigger shield (white double cross) sits lower."],
  ["co ec ve", "Colombia and Ecuador have a double-height yellow stripe; Ecuador adds a coat of arms. Venezuela has equal stripes and an arc of stars."],
  ["no is", "Norway: red with a blue cross. Iceland: blue with a red cross."],
  ["eg iq ye", "All red-white-black. Egypt: golden eagle. Iraq: green writing. Yemen: nothing at all."],
  ["ht li", "Both blue over red. Haiti has a coat of arms in the centre; Liechtenstein has a gold crown top-left."],
  ["it mx", "Same colours. Mexico has an eagle in the middle; Italy is plain."],
  ["jo ps sd", "Jordan has a white star in the red triangle, Palestine has no star, Sudan's triangle is green."],
  ["tr tn", "Turkey: crescent and star on plain red. Tunisia: crescent and star inside a white circle."],
  ["be de", "Belgium: vertical black-yellow-red. Germany: horizontal black-red-gold."],
  ["gr uy", "Both blue-white stripes. Greece has a white cross top-left; Uruguay has a golden sun."],
  ["bh qa", "Both have a white serrated edge. Bahrain: red, 5 points. Qatar: maroon, 9 points."],
  ["ae kw", "Same Pan-Arab colours. UAE has a red bar at the pole; Kuwait has a black trapezoid."],
];
