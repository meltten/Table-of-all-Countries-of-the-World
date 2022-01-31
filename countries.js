//    ID, Страна, Столица,  Часть света,  Население,  Площадь, Полушарие (North/South/NS), Полушарие (West/East/WE)
const whenua = [
['ABH','Республика Абхазия','Сухуми','Азия',244832,8600,'n','e'],
['AFG','Афганистан','Кабул','Азия',32225560,647500,'n','e'],
['AIA','Ангилья','Валли','Северная Америка',14869,100,'n','w'],
['ALA','Аландские острова','Мариехамн','Европа',29931,1553,'n','e'],
['ALB','Албания','Тирана','Европа',2845955,28748,'n','e'],
['ALG','Алжир','Алжир','Африка',43000000,2381740,'n','we'],
['AND','Андорра','Андорра-ла-Велья','Европа',77543,468,'n','e'],
['ANG','Ангола','Луанда','Африка',31127674,1246700,'s','e'],
['ARG','Аргентина','Буэнос-Айрес','Южная Америка',44938712,2780400,'s','w'],
['ARM','Армения','Ереван','Азия',2956900,29743,'n','e'],
['ARU','Аруба','Ораньестад','Северная Америка',112190,193,'n','w'],
['ASA','Американское Самоа','Паго-Паго','Австралия',56700,199,'s','w'],
['ATA','Антарктида','—','Антарктида',0,14107000,'s','we'],
['ATG','Антигуа и Барбуда','Сент-Джонс','Северная Америка',96453,442,'s','w'],
['ARTSAKH','Республика Арцах','Степанакерт','Азия',148000,11458,'n','w'],
['AUS','Австралия','Канберра','Австралия',25728080,7686850,'s','e'],
['AUT','Австрия','Вена','Европа',8902600,83871,'n','e'],
['AZE','Азербайджан','Баку','Азия',10067108,75100,'n','e'],
['BAH','Багамы','Нассау','Северная Америка',385340,13940,'n','w'],
['BAN','Бангладеш','Дакка','Азия',175000000,144000,'n','e'],
['BDI','Бурунди','Бужумбура','Африка',10953317,27830,'s','e'],
['BEL','Бельгия','Брюссель','Европа',11534131,32545,'n','e'],
['BEN','Бенин','Порто-Ново','Африка',11733059,112620,'n','e'],
['BER','Бермуды','Гамильтон','Северная Америка',64027,54,'n','w'],
['BES','Бонайре, Синт-Эстатиус и Саба','Кралендейк','Северная Америка',25000,322,'n','w'],
['BFA','Буркина-Фасо','Уагадугу','Африка',21510181,274200,'n','we'],
['BHR','Бахрейн','Манама','Азия',1543300,665,'n','e'],
['BHU','Бутан','Тхимпху','Азия',741672,47000,'n','e'],
['BIH','Босния и Герцеговина','Сараево','Европа',3301000,51129,'n','e'],
['BLM','Сен-Бартелеми','Густавия','Северная Америка',9961,21,'n','w'],
['BLR','Белоруссия','Минск','Европа',9397800,207600,'n','e'],
['BLZ','Белиз','Бельмопан','Северная Америка',408487,22966,'n','w'],
['BOL','Боливия','Сукре','Южная Америка',11469896,1098580,'s','w'],
['BOT','Ботсвана','Габороне','Африка',2338851,581730,'s','e'],
['BRA','Бразилия','Бразилиа','Южная Америка',213710000,8515767,'ns','w'],
['BRB','Барбадос','Бриджтаун','Северная Америка',287025,430,'n','w'],
['BRU','Бруней','Бандар-Сери-Бегаван','Азия',459500,5770,'n','e'],
['BUL','Болгария','София','Европа',6951482,110910,'n','e'],
['CAM','Камбоджа','Пномпень','Азия',15288489,181040,'n','e'],
['CAN','Канада','Оттава','Северная Америка',38050445,9984670,'n','w'],
['CAY','Острова Кайман','Джорджтаун','Северная Америка',65813,262,'n','w'],
['CC','Кокосовые острова (Килинг)','Уэст-Айленд','Азия',555,14,'s','e'],
['CGO','Конго','Браззавиль','Африка',5518092,342000,'ns','e'],
['CHA','Чад','Нджамена','Африка',16244513,1284000,'n','e'],
['CHI','Чили','Сантьяго','Южная Америка',19107216,756950,'s','w'],
['CHN','Китай','Пекин','Азия',1430915880,9598962,'n','e'],
['CIV','Кот-д’Ивуар','Ямусукро','Африка',25823071,322460,'n','w'],
['CMR','Камерун','Яунде','Африка',26545864,475440,'n','e'],
['COD','Демократическая Республика Конго','Киншаса','Африка',97000000,2345410,'ns','e'],
['COK','Острова Кука','Аваруа','Австралия',15200,240,'s','w'],
['COL','Колумбия','Богота','Южная Америка',50395678,1138910,'ns','w'],
['COM','Коморы','Морони','Африка',873724,1862,'s','e'],
['CPV','Кабо-Верде','Прая','Африка',550483,4033,'n','w'],
['CRC','Коста-Рика','Сан-Хосе','Северная Америка',5058007,51100,'n','w'],
['CRO','Хорватия','Загреб','Европа',4076246,56542,'n','e'],
['CTA','Центральноафриканская Республика','Банги','Африка',5496011,622984,'n','e'],
['CUB','Куба','Гавана','Северная Америка',11209628,110860,'n','w'],
['CUW','Кюрасао','Виллемстад','Северная Америка',156223,444,'n','w'],
['CX','Остров Рождества','Флайинг-Фиш-Коув','Азия',1955,135,'s','e'],
['CYP','Кипр','Никосия','Азия',875900,6000,'n','e'],
['CZE','Чехия','Прага','Европа',10693939,78866,'n','e'],
['DEN','Дания','Копенгаген','Европа',5824857,43094,'n','e'],
['DJI','Джибути','Джибути','Африка',1078373,22000,'n','e'],
['DMA','Доминика','Розо','Северная Америка',71808,754,'n','w'],
['DOM','Доминиканская Республика','Санто-Доминго','Северная Америка',10358320,48730,'n','w'],
['ECU','Эквадор','Кито','Южная Америка',17497960,283560,'ns','w'],
['EGY','Египет','Каир','Африка / Азия',103456444,1001450,'n','e'],
['EQG','Экваториальная Гвинея','Малабо','Африка',1454789,28051,'ns','e'],
['ERI','Эритрея','Асмэра','Африка',3497117,121320,'n','e'],
['ESP','Испания','Мадрид','Европа',47100396,497304,'n','we'],
['EST','Эстония','Таллин','Европа',1328976,45226,'n','e'],
['ETH','Эфиопия','Аддис-Абеба','Африка',117876000,1127127,'n','e'],
['FIJ','Фиджи','Сува','Австралия',884887,18270,'s','we'],
['FIN','Финляндия','Хельсинки','Европа',5498806,337030,'n','e'],
['FLK','Фолклендские (Мальвинские) острова','Стэнли','Южная Америка',3198,12173,'s','w'],
['FRA','Франция','Париж','Европа',68075000,547030,'n','we'],
['FRO','Фареры','Торсхавн','Европа',52428,1399,'n','w'],
['FSM','Федеративные Штаты Микронезии','Паликир','Австралия',104468,702,'n','e'],
['GAB','Габон','Либревиль','Африка',2172579,267667,'ns','e'],
['GAM','Гамбия','Банжул','Африка',2347706,11300,'n','w'],
['GBR','Великобритания','Лондон','Европа',67081234,244820,'n','we'],
['GEO','Грузия','Тбилиси','Азия',3716858,57200,'n','e'],
['GER','Германия','Берлин','Европа',83149300,357021,'n','e'],
['GGY','Гернси','Сент-Питер-Порт','Европа',63196,78,'n','w'],
['GHA','Гана','Аккра','Африка',30280811,238540,'n','we'],
['GIB','Гибралтар','Гибралтар','Европа',33691,7,'n','w'],
['GNB','Гвинея-Бисау','Бисау','Африка',1604528,36120,'n','w'],
['GPE','Гваделупа','Бас-Тер','Северная Америка',403750,1780,'n','w'],
['GRE','Греция','Афины','Европа',10724599,131940,'n','e'],
['GRL','Гренландия','Нуук','Северная Америка',56081,2166086,'n','w'],
['GRN','Гренада','Сент-Джорджес','Северная Америка',112003,340,'n','w'],
['GUA','Гватемала','Гватемала','Северная Америка',16604026,108890,'n','w'],
['GUI','Гвинея','Конакри','Африка',12218357,245857,'n','w'],
['GUM','Гуам','Хагатна','Австралия',172400,548,'s','e'],
['GUY','Гайана','Джорджтаун','Южная Америка',782766,214970,'n','w'],
['GYF','Французская Гвиана','Кайенна','Южная Америка',254541,91000,'n','w'],
['HAI','Гаити','Порт-о-Пренс','Северная Америка',11577779,27750,'n','w'],
['HKG','Гонконг','—','Азия',7500700,1016,'n','e'],
['HON','Гондурас','Тегусигальпа','Северная Америка',9158345,112090,'n','w'],
['HUN','Венгрия','Будапешт','Европа',9769000,93030,'n','e'],
['IDN','Индонезия','Джакарта','Азия',271350000,1904556,'ns','e'],
['IMN','Остров Мэн','Дуглас','Европа',83314,572,'n','w'],
['IND','Индия','Нью-Дели','Азия',1393809280,3287590,'n','e'],
['IRL','Ирландия','Дублин','Европа',4921500,70273,'n','w'],
['IRN','Иран','Тегеран','Азия',85497484,1648000,'n','e'],
['IRQ','Ирак','Багдад','Азия',40150200,437072,'n','e'],
['ISL','Исландия','Рейкьявик','Европа',366130,103000,'n','w'],
['ISR','Израиль','Иерусалим','Азия',9204865,22072,'n','e'],
['ITA','Италия','Рим','Европа',60238522,301340,'n','e'],
['JAM','Ямайка','Кингстон','Северная Америка',2726667,10990,'n','w'],
['JEY','Джерси','Сент-Хелиер','Европа',106800,116,'n','w'],
['JOR','Иордания','Амман','Азия',10693560,92300,'n','e'],
['JPN','Япония','Токио','Азия',125900000,377835,'n','e'],
['KAZ','Казахстан','Нур-Султан','Азия / Европа',18712048,2724902,'n','e'],
['KEN','Кения','Найроби','Африка',47564296,582650,'ns','e'],
['KGZ','Киргизия','Бишкек','Азия',6533500,198500,'n','e'],
['KIR','Кирибати','Южная Тарава','Австралия',120100,717,'ns','we'],
['KOR','Республика Корея','Сеул','Азия',51780579,98480,'n','e'],
['KSA','Саудовская Аравия','Эр-Рияд','Азия',34218169,2149690,'n','e'],
['KUW','Кувейт','Эль-Кувейт','Азия',4420110,17820,'n','e'],
['KVX','Республика Косово','Приштина','Европа',1795666,10888,'n','e'],
['LAO','Лаос','Вьентьян','Азия',7123205,236800,'n','e'],
['LBR','Либерия','Монровия','Африка',4475353,111370,'n','w'],
['LBY','Ливия','Триполи','Африка',6871287,1759540,'n','e'],
['LCA','Сент-Люсия','Кастри','Северная Америка',178696,620,'n','w'],
['LES','Лесото','Масеру','Африка',2007201,30355,'s','e'],
['LIB','Ливан','Бейрут','Азия',6825442,10452,'n','e'],
['LIE','Лихтенштейн','Вадуц','Европа',38749,160,'n','e'],
['LTU','Литва','Вильнюс','Европа',2793271,65200,'n','e'],
['LUX','Люксембург','Люксембург','Европа',626108,2586,'n','e'],
['LVA','Латвия','Рига','Европа',1904600,64589,'n','e'],
['MAC','Макао','—','Азия',696100,31,'n','e'],
['MAD','Мадагаскар','Антананариву','Африка',26251309,587040,'s','e'],
['MAR','Марокко','Рабат','Африка',35915525,446550,'n','w'],
['MAS','Малайзия','Куала-Лумпур','Азия',32798760,329750,'n','e'],
['MCO','Монако','Монако','Европа',38100,2,'n','e'],
['MDA','Молдавия','Кишинёв','Европа',2681735,29680,'n','e'],
['MDV','Мальдивы','Мале','Азия',374775,298,'ns','e'],
['MEX','Мексика','Мехико','Северная Америка',126014024,1972550,'n','w'],
['MGL','Монголия','Улан-Батор','Азия',3320588,1564116,'n','e'],
['MHL','Маршалловы Острова','Маджуро','Австралия',55500,181,'n','e'],
['MKD','Северная Македония','Скопье','Европа',2077132,25333,'n','e'],
['MLI','Мали','Бамако','Африка',20250833,1240000,'n','we'],
['MLT','Мальта','Валлетта','Европа',493559,316,'n','e'],
['MNE','Черногория','Подгорица','Европа',622359,14026,'n','e'],
['MOZ','Мозамбик','Мапуту','Африка',30066648,801590,'s','e'],
['MRI','Маврикий','Порт-Луи','Африка',1265475,2040,'s','e'],
['MSR','Монтсеррат','Плимут / Брейдс','Северная Америка',4989,102,'n','w'],
['MTN','Мавритания','Нуакшот','Африка',4077347,1030700,'n','w'],
['MTQ','Мартиника','Фор-де-Франс','Северная Америка',381326,1100,'n','w'],
['MWI','Малави','Лилонгве','Африка',19129952,118480,'s','e'],
['MYA','Мьянма','Нейпьидо','Азия',54817919,678500,'n','e'],
['MYT','Майотта','Мамудзу','Африка',246496,374,'s','e'],
['NAM','Намибия','Виндхук','Африка',2746746,825418,'s','e'],
['NCA','Никарагуа','Манагуа','Северная Америка',6460411,129494,'n','w'],
['NCL','Новая Каледония','Нумеа','Австралия',271407,19060,'s','e'],
['NCP','Турецкая Республика Северного Кипра','Никосия','Азия',351965,3300,'n','e'],
['NED','Нидерланды','Амстердам','Европа',17472381,41526,'n','e'],
['NEP','Непал','Катманду','Азия',29996478,140800,'n','e'],
['NF','Остров Норфолк','Кингстон','Австралия',1735,35,'s','e'],
['NGA','Нигерия','Абуджа','Африка',213000000,923768,'n','e'],
['NIG','Нигер','Ниамей','Африка',22314743,1267000,'n','e'],
['NIU','Ниуэ','Алофи','Австралия',1520,260,'s','w'],
['NMI','Северные Марианские Острова','Сайпан','Австралия',56200,477,'s','e'],
['NOR','Норвегия','Осло','Европа',5372355,324220,'n','e'],
['NRU','Науру','Ярен','Австралия',11000,21,'s','e'],
['NZL','Новая Зеландия','Веллингтон','Австралия',5006437,268680,'s','e'],
['OMA','Оман','Маскат','Азия',4645249,309500,'n','e'],
['OSE','Южная Осетия','Цхинвал','Азия',53532,3900,'n','e'],
['PAK','Пакистан','Исламабад','Азия',227983706,803940,'n','e'],
['PAN','Панама','Панама','Северная Америка',4218808,78200,'n','w'],
['PAR','Парагвай','Асунсьон','Южная Америка',7252672,406750,'s','w'],
['PCN','Острова Питкэрн','Адамстаун','Австралия',50,47,'s','w'],
['PER','Перу','Лима','Южная Америка',32824358,1285220,'s','w'],
['PHI','Филиппины','Манила','Азия',110941613,299764,'n','e'],
['PLE','Палестина','Рамалла','Азия',4976684,6020,'n','e'],
['PLW','Палау','Нгерулмуд','Австралия',17900,458,'n','e'],
['PNG','Папуа — Новая Гвинея','Порт-Морсби','Австралия',8935000,462840,'s','e'],
['POL','Польша','Варшава','Европа',38379000,312685,'n','e'],
['POR','Португалия','Лиссабон','Европа',10276617,92082,'n','w'],
['PRK','КНДР','Пхеньян','Азия',25450000,120540,'n','e'],
['PUR','Пуэрто-Рико','Сан-Хуан','Северная Америка',3193694,9104,'n','w'],
['QAT','Катар','Доха','Азия',2795484,11437,'n','e'],
['REU','Реюньон','Сен-Дени','Африка',844994,2517,'s','e'],
['RMN','Приднестровская Молдавская Республика','Тирасполь','Европа',469000,4163,'n','e'],
['ROU','Румыния','Бухарест','Европа',19405156,237500,'n','e'],
['RSA','Южно-Африканская Республика','Претория','Африка',61075022,1219912,'s','e'],
['RUS','Россия','Москва','Европа / Азия',146171015,17125191,'n','e'],
['RWA','Руанда','Кигали','Африка',12374397,26338,'s','e'],
['SAH','Западная Сахара','Эль-Аюн','Африка',582463,266000,'n','w'],
['SAM','Самоа','Апиа','Австралия',200874,2860,'s','w'],
['SEN','Сенегал','Дакар','Африка',16705608,196190,'n','e'],
['SEY','Сейшельские Острова','Виктория','Африка',98055,455,'s','e'],
['SGS','Южная Георгия и Южные Сандвичевы Острова','Кинг-Эдуард-Пойнт','Южная Америка',3903,30,'s','w'],
['SHN','Остров Святой Елены','Джеймстаун','Африка',5633,410,'s','w'],
['SIN','Сингапур','Сингапур','Азия',5703600,778,'n','e'],
['SKN','Сент-Китс и Невис','Бастер','Северная Америка',52823,261,'n','w'],
['SLE','Сьерра-Леоне','Фритаун','Африка',7901454,71740,'n','w'],
['SLV','Сальвадор','Сан-Сальвадор','Северная Америка',6486201,21040,'n','w'],
['SMR','Сан-Марино','Сан-Марино','Европа',33553,61,'n','e'],
['SMT','Сен-Мартен','Мариго','Северная Америка',35334,53,'n','w'],
['SOL','Соломоновы Острова','Хониара','Австралия',680806,28450,'s','e'],
['SOM','Сомали','Могадишо','Африка',15893219,637657,'ns','e'],
['SPM','Сен-Пьер и Микелон','Сен-Пьер','Северная Америка',5997,242,'n','w'],
['SRB','Сербия','Белград','Европа',6963764,77473,'n','e'],
['SRI','Шри-Ланка','Шри-Джаяварденепура-Котте','Азия',21803000,65610,'n','e'],
['SSD','Южный Судан','Джуба','Африка',12778250,619745,'n','e'],
['STP','Сан-Томе и Принсипи','Сан-Томе','Африка',210240,1001,'ns','e'],
['SUD','Судан','Хартум','Африка',42553875,1886065,'n','e'],
['SUI','Швейцария','Берн','Европа',8603899,41290,'n','e'],
['SUR','Суринам','Парамарибо','Южная Америка',581372,163270,'n','w'],
['SVK','Словакия','Братислава','Европа',5457873,48845,'n','e'],
['SVN','Словения','Любляна','Европа',2095861,20253,'n','e'],
['SWE','Швеция','Стокгольм','Европа',10343403,449964,'n','e'],
['SWZ','Эсватини','Мбабане','Африка',1093238,17363,'s','e'],
['SXM','Синт-Мартен','Филипсбург','Северная Америка',40614,35,'n','w'],
['SYR','Сирия','Дамаск','Азия',17500657,185180,'n','e'],
['TAH','Французская Полинезия (Таити)','Папеэте','Австралия',275918,4167,'s','w'],
['TAN','Танзания','Додома','Африка',63637628,948087,'s','e'],
['TCA','Тёркс и Кайкос','Коберн-Таун','Северная Америка',42953,430,'n','w'],
['TGA','Тонга','Нукуалофа','Австралия',100651,748,'s','w'],
['THA','Таиланд','Бангкок','Азия',67512242,514000,'n','e'],
['TJK','Таджикистан','Душанбе','Азия',9127000,143100,'n','e'],
['TKL','Токелау','Атафу','Австралия',1400,12,'s','w'],
['TKM','Туркмения','Ашхабад','Азия',6031187,491200,'n','e'],
['TLS','Восточный Тимор','Дили','Азия',1387149,14874,'s','e'],
['TOG','Того','Ломе','Африка',7538000,56785,'n','we'],
['TPE','Тайвань (Китайская Республика)','Тайбэй','Азия',23596493,35980,'n','e'],
['TRI','Тринидад и Тобаго','Порт-оф-Спейн','Северная Америка',1363985,5128,'n','w'],
['TUN','Тунис','Тунис','Африка',11722038,163610,'n','e'],
['TUR','Турция','Анкара','Европа / Азия',84154997,780580,'n','e'],
['TUV','Тувалу','Фунафути','Австралия',10200,26,'s','w'],
['UAE','Объединённые Арабские Эмираты','Абу-Даби','Азия',9890400,82880,'n','e'],
['UGA','Уганда','Кампала','Африка',41590300,236040,'ns','e'],
['UKR','Украина','Киев','Европа',41830619,576604,'n','e'],
['URU','Уругвай','Монтевидео','Южная Америка',3518552,176220,'s','w'],
['USA','Соединённые Штаты Америки','Вашингтон','Северная Америка',332514384,9525067,'n','w'],
['UZB','Узбекистан','Ташкент','Азия',34217144,447400,'n','e'],
['VAN','Вануату','Порт-Вила','Австралия',304500,12200,'s','e'],
['VAT','Ватикан','Ватикан','Европа',453,0,'n','e'],
['VEN','Венесуэла','Каракас','Южная Америка',32219521,912050,'n','w'],
['VGB','Виргинские Острова (Великобритания)','Род-Таун','Северная Америка',30030,153,'n','w'],
['VIE','Вьетнам','Ханой','Азия',98208984,329560,'n','e'],
['VIN','Сент-Винсент и Гренадины','Кингстаун','Северная Америка',110608,389,'n','w'],
['VIR','Виргинские Острова (США)','Шарлотта-Амалия','Северная Америка',104578,352,'n','w'],
['WLF','Уоллис и Футуна','Мата-Уту','Австралия',11700,274,'s','we'],
['YEM','Йемен','Сана','Азия',29825968,527970,'n','e'],
['ZAM','Замбия','Лусака','Африка',17885422,752614,'s','e'],
['ZIM','Зимбабве','Хараре','Африка',15159624,390580,'s','e'],
];
