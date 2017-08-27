(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('肇庆', {"type":"FeatureCollection","features":[{"type":"Feature","id":"441202","properties":{"name":"端州区","cp":[112.484848,23.052101],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@K@A@ABI@A@CBC@E@C@C@A@Q@A@GBKDEBQJCHADCF@B@@AD@BA@AHADCH@BAD@BAH@F@D@DBLHR@DFJBFFADADBD@@CDAB@D@B@B@BEBABAD@D@DD@DADDBBH@FEDC@ABGBA@C@CBC@GGI@ANEHFDBCB@DAB@BF@B@BADCA@DC@@BDBBAD@@BD@D@BB@BDADD@DAA@BC@ABFBBBBFDFABFBB@FABBB@BABABBD@DB@@D@D@BDB@D@B@F@DBDA@ABAD@FAH@B@BBD@B@FBBBBF@DF@DBJFFBDDFJDDHBBABC@ABA@AA@@A@ABCD@B@B@BA@@DAB@BB@A@@BBB@B@@AB@AGBCBCJE@C@CA@AAACCIB@BCBAD@FCBAIIAABAFCCCDAB@@@BAB@@@BA@@@@@@@@FCBCBAB@D@B@D@BAB@DC@@@A@@BCBEBCBCBEFEAAGCACAACEAEAC@@AEACAA@CACAAACACAACCAA@@ACCC@AAACACCAA@ACACAAACA@@AAAA@ACAAAA@CAGCEAEACAG@G@AAA@A@A@EBG@C@E@"],"encodeOffsets":[[115168,23591]]}},{"type":"Feature","id":"441203","properties":{"name":"鼎湖区","cp":[112.567588,23.158447],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@KAEAGAEBEAC@EBC@E@E@CBEBCDCDG@EBGBGDGFGBC@E@C@C@GECEEAE@C@EBAB@DBJBJBFCLAHK@C@CDEDCBCDGDEBABKB@ACECEAEEECACECEACACACACEGEGCAACGEA@EFAFADADAFAD@@@B@@CDA@ABC@A@C@A@ABADED@@@@@@@@AB@@A@AB@@A@CBDDEDABBBJJABEDC@ABADA@DJBDBBB@@D@DIFADADBHA@@BA@A@AA@@@BAAA@CB@@ABA@A@C@AD@B@BB@@BAB@BADABBDBDAD@BC@AB@B@BAB@BAB@BC@C@ABC@C@CBABADA@CBCDABBBAD@B@DC@@BAB@B@DAB@D@BCDBB@FBBABAB@BAF@DABA@A@A@AB@@C@A@@D@F@DAFCBA@A@AB@BADABCB@B@DAD@B@DAD@B@BDBD@B@@D@BABAD@DBBADCBABCD@BBBBBDB@B@BDBD@DCD@DBBBBBBB@DD@BADBBDFBBABDB@B@AD@FCBA@DBBDBBBBDAB@B@B@BBDBDB@B@BBDD@BBBB@FDDB@DBB@BBB@BDBBBBB@B@@ABAD@@AB@@@BAFAHDFB@@B@@@B@JG@@DCD@JA@@@ADAFGDADCJAJBD@FB@@BABADCJC@CDCDE@ADABCAE@A@@HALALAB@@@D@BBD@DBDBDBBBDDDBB@BBFBD@BBFBDBBBDBDDDBDBDB@@DAHCBBDBBBB@DBF@DDB@BB@@B@DDBDB@DBB@B@B@DCDAB@B@D@BBF@DABAB@D@FABBD@B@B@BA@A@@HBHADAFCHAFCHEDADEBCBGAA@EAEDCACAC@C@EB@@ADCB@D@DABABCBCAC@C@G@@ECCAEACI@E@@@@@@DGACBC@A@CDCBAHGDJ@@BD@BB@BBDGF@DDHBDD@B@DBBBBB@DBF@BCDABB@D@D@@@DBBB@BA@C@AD@BCBCB@BAD@D@D@DADCBA@C@C@@BABB@@B@B@@AACC@AAC@CA@A@E@EACAC@ABAD@DA@@D@B@@@B@@A@C@@@AAC@C@CDGBEBGAK@G@ABCHGCECEEGEGCCAABE@A@@@A@A@AA@AAGACCEAC@G@C@E@CAAACC@@CACAA@ACCEAACAA@CA@AAEC@CACAAEACAAACACCACCEAGEGEEC"],"encodeOffsets":[[115404,23648]]}},{"type":"Feature","id":"441223","properties":{"name":"广宁县","cp":[112.44069,23.634675],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@EFAH@F@JDBBH@FABAHCFGFARBL@DAACEMAC@CDADC@CAG@IAEGGAC@A@GBCFCDE@EBCBCF@F@JDPDDBD@DBH@FCBAHAB@@CACEAAC@GACACACEEAAAECECCGACC@ECEEECCC@@CBC@ABAJDBBH@BBDA@@@@@@@AAC@CAAEICECCCCBCFABCA@AEECC@ADAHCDEDA@A@A@A@@AA@AA@AA@AEBAFC@GAA@AAAAAAA@A@C@A@ABCBA@ABCBA@C@A@C@AAA@C@AAA@A@AB@@A@AB@@AB@AA@@@A@@@A@A@A@A@A@AAAAA@@A@AAE@AACAAC@E@@@@AAAB@@A@AB@@@@@BC@C@A@C@A@@AA@AAAA@@@AECA@ECCBE@@@CAA@A@@AA@CA@AAACE@CDEBE@ABEBCDADE@@@C@ACE@CAC@AC@C@ABCBEBA@C@ECCACE@@A@CBE@E@CACACBKJCDA@@@@@CCCA@CECC@GA@@@ACEAAACAECAEDC@CAC@A@C@A@A@A@A@AAAAAAAAAACAA@@AEA@A@ABABEDEDA@ABC@@AC@EAC@A@G@EAEBABCDADA@AACAE@@AC@AAA@@@A@A@A@@BA@AB@@A@A@A@@AA@ACCAAACACAA@A@A@AAEDCB@@ABA@@DC@A@@@AAA@@@A@A@@AAAE@C@@@A@@GAAAA@EEEBIAEAACAECEAAGCG@KAIAE@GAECCAAB@B@DAFCFCF@BC@C@@CAAA@CBADAD@@A@E@AACCGCDQDEBECCA@EA@CAEAC@@CAC@AFG@@D@@@BA@@@@@@@A@@@@@@BGCIAEEACDK@AACCCCCCCAE@@CC@ECC@AFCCEGCA@EEEAECEECE@IAGA@ACAACECCAACACCDCAMA@KGMAOBK@C@EACACCA@ABAFCJGPDHFRCHEF@BCLK@@RCBEBEBAFADADEAI@GH@@BDEB@@@@IBG@KBCCAAGBCAECAECA@EA@CAI@CFC@C@EHEDKFIF@@AEEAKBEHGAE@G@@B@@@BBBAF@D@D@D@DBB@BBB@BAB@B@BAB@B@B@@AB@@@@A@@@@@A@A@A@A@A@@BABCHA@@BA@CBA@A@IDCBCGM@A@EDEBEAG@C@ABGHKLE@ACGBIBGJAFADGAIDECI@EDCBADCBG@ADAJAFIDC@EHGBEBACEEEIG@BFMFEAC@BKCE@@EAMMEAIGGKEBIBEBCHIJEAEGKBGECBEBDBAB@DBBDHFBBDDBGDC@A@A@@DBBBF@DHFDFBBADDB@B@DDDBBBB@H@DB@BBBA@E@CDADADBBABBDFBDBAD@D@B@@A@AFABBD@@ELJHBFHFBFFHDBJDFLHBHB@HDF@@B@@@HEFADCBDHDDFD@BBDBDFGF@J@HDADCJBD@BAF@BFFDB@@F@FNGB@@IBAF@@A@@@EBEDGDADFHKFC@AAA@CT@LBB@BCDGL@H@BED@DADDBD@F@FB@F@DJD@DADBDEVBFBFAF@@@NFBHFPA@@FBD@FHBDHJHB@@NDB@BBJDF@JAFAFB@F@JDABRCLCDCFADADDDDHJBHFDJHAD@@BBHBDABIP@HDBJBJFDAPCB@@MBAJBF@FAFCGCEBACCGDIHCBA@GFCDI@ACEAI@@@G@@@AFBJAFCB@BAB@@B@HFBFHF@@BDBBDDNLLJADBBFAHBDJHBBBBBBD@DABAJMD@HBFCBCHEDALHF@@AHGD@D@BBDDFBDBBBB@@HAH@BCRAHAFD@FDDBBF@DAHDFO\\MFBFBTB@DBD@J@D@B@DDDDFFHBDBDD@D@H@HDJ@@FJDFDF@DAHBDBHBDBFDHBDDDBD@HB@TDD@LB@@FDHFDDDBB@DBF@D@HGH@DD@BDB@DFDF@FD@F@FDBFDB@F@@@F@F@BDFHDF@BFBB@HCLBBDBBDFJHDD@DDFJFLJDFDFDDBBBD@BBB@BBB@BBBDDBBBBBADAD@D@FAFADAB@DA@@B@@@B@B@@@B@@@FBB@F@D@D@DBBB@B@@B@BDB@BBB@B@B@B@B@B@BAD@BA@CAE@ABCBCBAD@F@DD@@B@@@DAB@DABADADCDCBC@@BAHAFALCHBFAFADAFCDADCFCF@B@@@D@B@D@B@D@BABAB@DAB@B@B@D@B@BBDBBBDBB@DHF@DBH@D@DADEFADCBCDAB@BAB@D@B@BABCBG@EACAE@@@CB@BCFCBCDA@@@@FE@A@ABAACAC@C@AAAAAAAAACACA@A@ADA@@BA@@@AHA@CA@@AEAAA@@@E@AAAAAC@AA@@AA@@@C@ACA@@A@@A@A@AAAAA@@@C@A@@C@A@AA@ABABCD@BAB@BC@C@AAACACA@A@@A@AAAAAC@@AABABA@A@C@A@A@A@A@@@CBA@@B@BCBCACEEA@AAAAA@AAA@CAA@AA@@AA@@II"],"encodeOffsets":[[115360,24388]]}},{"type":"Feature","id":"441204","properties":{"name":"高要区","cp":[112.457981,23.025305],"childNum":3},"geometry":{"type":"MultiPolygon","coordinates":[["@@CEEAA@TZB@IQ"],["@@@@ADABA@@@CACACAECA@CBCB@@CDABC@AAAA@EBCBABABAAC@AAEC@EAAAAAC@C@AA@A@CACAE@CA@CEA@EAABA@CAGACAEC@AE@A@C@CDE@EBCACACBABA@CAACACEAEA@@GEGAGCCAEAG@AAAC@@EAA@AAECE@A@CAA@ABADA@C@ACAA@DCBABABCD@DA@@D@B@BABA@AB@BBBB@BBBB@BABAB@BCBA@@@ABABA@@@AB@@A@ABAA@A@ACAA@A@AA@@@AC@AAA@CAA@A@AAA@@@A@A@CACBADABCAA@AA@ADCAAA@AB@BA@A@CAA@A@ABA@C@ADAAA@AAA@CAA@A@AB@BC@AAC@A@A@ABCBA@A@@@@D@B@BBB@BD@B@BDBB@BBD@BB@D@B@@@@ABBB@B@@@B@B@B@B@@@@BBB@@@BBB@@B@@@AB@@@BABB@@B@@AB@@A@A@AB@BABABAB@DABA@ABA@ABA@@B@@AB@B@BCBC@CAA@A@CAABA@@B@BBBBD@@@BAB@BABBBB@@D@HADAB@B@BBBB@@BAB@B@@BB@DABC@A@AB@@@BBBABCDAD@BABA@ADA@C@@D@D@DABAB@B@B@BBFBBBBB@B@@B@BABAB@@@B@B@F@BBDB@BBBBDB@BBB@DBB@D@D@B@B@D@B@B@DABA@A@AAA@ABAB@B@BA@A@C@A@A@AACAABAAA@AACAA@C@@BABCBA@E@AAAAAAC@@AAACAAAA@@AEBA@ABABA@A@AB@B@BB@BB@B@BBBBB@BAB@D@BBB@@ABA@A@@BBB@@@BDB@F@HB@@@B@@@@@@B@DAB@@BBAB@@@@@BAA@@AB@BB@@B@BA@@@@B@@AB@@A@@AABAA@BA@@@@B@@@B@@BB@@@BBBB@@@B@B@@@B@@@BA@@BA@@BB@@BA@@@@B@@A@@B@@@B@B@@@AA@ABAB@@ABAB@@BBBBBB@B@DA@@BB@@@DB@B@BADED@B@BD@D@B@BBBDB@@AB@BABABC@ABA@DB@D@DADC@@DA@A@A@ABA@AB@B@BBBD@FD@B@B@@AAA@@BBBB@F@BB@@@B@BAB@DBD@BB@D@@B@BB@BB@@AD@B@DBDBFD@@BBD@D@@BBBDBDBB@DC@@AA@CBABADGBAD@B@BADBDBBBBBDA@ABBD@HC@BHCFA@@F@DBFBFB@BFFDBBFJ@D@BBFDJ@HDHFB@CF@FCFBDDFB@BABDB@BBD@@BB@@DDDBDFCD@F@BBDB@@B@B@B@BA@@@ABABCBGFEFCBAD@@@J@@A@ABA@@@C@G@C@CDCBCBABC@A@@@ADI@AHA@GKGEIEKCSA@@AA@@@FAJAAAACF@DADCJCAGAGCECCACBCAWICAA@CDGCQCACKCEACJAJJHFDJDLFDD@FNFDAF@DB@D@BK@FLJBDBFB@F@HAHDD@FCBABCJDHAHADCFEFCDI@IBO@KJDFFHCHIJBFBDHBFBDBDBABEFDNHNNLHDJFDDBBLHJBLAD@FE@EBCBADDDFFFFDABKJCFARDBJB@@CLDHAFFHCBAFD@BHFFCHFB@F@@@FAJDLAFDF@HCBA@@@@B@@A@@@@B@@@@@@@B@@@@@@@@B@@@@@@@@B@@B@@@A@@@@@@@@@A@@@@A@@A@@@@@@@A@@@@B@@A@@@@@@@@@@@A@@A@@@@@@B@@@@@@AB@@@A@@@@@@A@@@@@@@AA@@@GCJR@A@@@@@@@@B@@@@@@BB@@@@@@@BA@@@@B@@@@@@@BA@@@@B@@B@@A@@@@@@@A@@@@BA@@@@@A@@B@@@@AA@@@@@@@@@@@@@BB@@@@@@BA@@@@@@@A@@@@@@@B@@B@@@@@B@@A@@@@@@@@A@@@@@@@@AA@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@SYIJA@E@GBAECG@OBCBEAACCGDAHCBEC@EIAEBADAHDLFPJH@D@DEJFDFHFHMPCD@JC@OJOTEHADC@EB@DDDHD@DFFHPHNBJFDD@H@BA@CNADEFEAI@@H@FBFBDBDDDND@F@RBFDHAFBFD@@H@F@HBFGLAFBBF@@JELEFCFGD@D@DEJ@DBB@@FDBBFFDDBHABBDDLAH@JA@@@@FAAC@@HGJ@FBBCBCBEFAFADA@QL@DK@AFEDGEQCGHODIBEBAB@DDDBFBD@L@PANBLHB@B@B@FCH@BAFCBEB@DGBI@MDCB@@AHADIBA@@DCBAFAF@HADACCLI@AFAD@@CBCDABHB@BA@EBCBAAA@AD@BAA@DA@AD@DACC@EAAAAC@AC@A@ACACAAAA@A@A@CBAAAAACCAB@DA@EBCA@A@ACABEAACCAABC@@CAAAAAACAC@CDC@CA@A@ACAAAAA@ADCBADABCAA@CBCBA@A@CA@C@CA@A@ABC@C@ABC@C@ADABABC@ABAB@B@DABE@C@E@CB@D@@@BAB@B@B@BA@CBE@ABABAAA@EAADC@A@CBA@C@ABA@AD@@C@ABCAABADCDAB@BCBADAD@D@BAD@D@@ABA@ABA@A@ABAD@@ABCACACGACCEICCEAIECAE@@CAEAAEAA@C@AAA@G@EBC@AB@BCBCAE@A@C@A@ACC@C@@@CAC@AAABABA@AAEBA@EABACEAEAAEABAD@@ABB@CCCCB@AAAC@C@@AC@ABCA@AD@@CDBBC@A@AAEA@CBA@ADECFGBMJ@HHD@DAD@B@HABAD@FC@EAGCABC@CCCC@C@ABABAFA@A@C@A@CB@DC@CACBEBAEEI@CGQAK@C@C@EBG@ABC@ADGBCBGB@@ABC@@@ADEBCDGRIFALCHAB@R@B@D@D@F@D@DAB@J@BAB@L@F@D@H@FAB@B@B@BBH@H@DBFBFBHDDBB@BBDB@BBBBB@@DBBBDBDB@BBBDDDBBB@BDDBD@@BBDDBBBDBDBBBD@DBBBDBF@@BDBFDFBBBDHDBBB@HFBDDBFHFHBDBDBDBDDFDFDBFFBFDFDF@BLABAFAHCDCDAFCDCD@L@BGDKAEAIAI@CBAFAD@F@FBDFHFD@D@F@D@HAHEHCHAFAH@DCDCFADAF@F@D@FAD@FBFAHBFBLBFDHFHFFBDDDBBDBDBBBDBFDBDBD@BF@BDBB@DBBBDFBDB@DBDB@@DDBBDBF@D@H@D@FBDDHBBBB@@B@B@B@@@BAFBBDDFHFHDFDFLIBADABAHGBAFKBC@G@ABW@A@A@[@@DQBCDKBCDEBCHEFIHK@@@AAQBUJUJUBCFOBCBGGAEACAEACACAECCACCAAA@CCAACCCAAAA@CACA@A@@CCAAE@EBADBD@D@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@B@@@@@A@@@@@@@@B@@@@@@B@@@@B@@A@@@@@@@@@@@@@@@@@AB@@A@@@@@@@@A@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@B@@@@@@A@@@@@@B@@AB@@A@@@@@@@@A@@@@@@@@@@@A@A@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@A@@@@@@@@@@AA@@@@A@A@A@@@A@@@@@@@@@@B@@@@@@@@AA@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@B@@@@@@B@@@@@B@@A@@B@@@@@@@A@@@@@GAA@@@A@E@@A@CA@ABEA@@AC@CEEACCCAAA@@C@AC@C@ABAHAAA@AB@BCDAF@BG@C@@ECAEAEAACCA@A@E@ECC@ADADE@CAC@AD@H@@CBAAEACECCCBEAECE@A@A@AA@ACCCA@@@A@CBC@A@CGAAA@A@A@C@@AA@CA@AACC@AB@@@B@BA@CFCF@@@@@BBFBB@DABCBABA@AFEAEBA@CAEBA@AAAA@@@AA@@@CC@D@B@BAA@A@EA@A@CBC@ACAB@@A@@@@@DA@AA@A@@AB@@@@@@@@@BBD@BA@C@ADCBA@@@A@A@@BABADCF@@B@BBBBB@@@AA@@AB@B@BBBB@B@@A@@BD@@@@AD@@AABAAACAAA@BADAB@BBAB@B@@BA@A@AB@@BB@@B@B@B@B@@@@@ABA@@@B@@BBA@BD@@BAB@@@@@@@@@@@@B@@@@B@@@@@AC@@A@@BAA@@@A@@BA@@B@@A@@@@@@ABA@@@CABA@@D@BA@@BA@@@@@@@@ABA@C@@@@@@ABADA@@@A@@ED@@@B@@A@A@A@@@@@@AB@@@@@@@C@@@@@A@@@@AFC@@@@@A@BABCB@@@@@E@@@BAD@@@B@BCB@@A@@AAA@@@@B@BABABC@ABCB@B@DA@@@@@A@A@A@@@@@@C@@@A@@A@@A@AA@@@@@@A@@B@@@@EB@@@A@@@AB@BC@AACA@@@A@@@A@B@DCDA@A@@BA@@BA@@AAA@@@AA@A@@A@@BA@@@A@AAAA@A@@@@@@A@BB@BCBABAB@B@BA@@@@A@@A@A@A@AC@@@AA@@AB@BAB@AA@@AC@@A@ECC@CCGACBC@@EAAE@C@ABC@AAA@EAE@EACAABECGEBE@@@@@@@@A@@@@@AA@@OACACAA@EA@DAD@BICCC@CCAA@ADAB@AACCCCBA@ABGA@C@CAAECEBI@MFEDGFGDCA@ECCBABABAA@AAA@@CBA@AB@BB@@B@@C@CBC@AFC@ABBB@B@@ABABADCB@BCAA@@@C@CA@A@@A@@@CBAAEA@ABABA@@A@A@AAE@@A@ABABABCCAEC@ACABC@A@AAA@A@AAA@@BA@@@@A@@AAA@C@C@@@@@A@@@AAIAAB@BAAAA@C@@@ABCCA@AA@C@@@@B@B@@AB@@A@@@@BCD@AC@@@@BBB@DAB"],["@@@@@A@@@A@@@@@@@@@@@@@@A@@B@@@@@@@B@@@@@@@@A@@B@@@@@@B@@@@B@AB@@@@@@@@A@@@@@@"]],"encodeOffsets":[[[114945,23900]],[[115223,23373]],[[115497,23554]]]}},{"type":"Feature","id":"441224","properties":{"name":"怀集县","cp":[112.167742,23.92035],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ABGC@@ECEC@CCEACAAAACGCEADC@EGGEGAG@ADBHBBDBDBADFDHJAFEBEAE@EBCDCDGA@CCAIACBBJHDDADBBHFHGFABCFCD@@@B@DA@ABA@AB@@ABA@@B@@C@FJBJADGHAFDB@@@BB@@B@B@D@B@@@B@B@BA@@B@@AV@@BB@@B@HJDBBB@@@BAB@@@BA@A@@BC@ABA@ABCBKHBD@@@DBDANCDBFDCD@@JED@PFHF@BBBBBBBH@DFBAFDDAFHDHBBB@BA@CFAD@F@@@BA@@B@@AB@BCDBD@B@B@@CF@FAFEDG@AACAC@A@A@C@AB@@CBA@G@K@@B@@@B@@@B@B@D@B@B@B@BAB@@AB@BCB@@ADABABGFBF@B@@@B@B@B@@@@@@ABA@@BA@ABEBMBGFABCBEBEFGCCAGAEACDEDCF@DFDADBHA@@@EDENBF@D@B@B@B@B@B@@@B@B@B@B@@JDHFB@DBB@BBB@BBB@@FFBBD@B@BABFFHADF@H@J@FJDD@@FBJDFB@D@HJBBDBBDB@@B@@AFBFCHDDPDB@BBB@BBAB@BAB@B@@@BADCD@FDFGFDBDD@FDBFBDBBHDHDF@FFJBJBB@B@B@B@B@BCF@BHH@B@B@@BDBDBDBD@F@BBNADCLCFABBHDBFDJL@BBB@DB@@B@BBB@@@B@BBB@@@B@B@@ABC@AHCBAB@BAB@BAB@BBB@B@@NHFFBH@B@@BB@B@B@BJD@BAJLRABAD@BABAD@B@BGDCDDBA@ABA@A@@AAAMC@@AE@CCAABGABCAA@CEAGHAAAFABCAA@ADCADFE@A@EEIBGB@@ABBFFFFBB@DD@B@D@BADEFEDAB@B@D@@@BABKPCDCDAD@DBH@DAL@L@F@FADADA@ABCBCBCACBCBCBAFAFAFEJCHABBDAFADCDEDADCDABBDBDBB@D@DAB@DCBCBABA@AFAB@BAHAHAD@F@HBJ@FADBFBFBDBB@D@D@DBBBFDJDJ@D@F@DADCDCBA@ABEBCDCFCBAB@B@DBNBDBDBD@D@D@DAD@BBP@H@HBFBF@D@D@D@@@DDBF@BAB@BAB@HCFCJAJAF@H@F@FBDBBDBB@DBF@DD@DBBBBBB@B@DAD@DCDABCD@B@BBBBBDD@D@DBFBB@D@HAFADCFCDCDCDADADADADEBC@CBEBEDEDCFEBABABADABEBC@C@C@CBADABAB@@@B@@BBDBBFBB@D@HAH@NANBJBJDFDDH@DADADCFAH@J@BBDFBDDDB@@BD@F@D@H@F@@BFBH@DBBDBF@DBBDBFBDDHBBDBDBB@D@FADADAF@DAD@DCBA@CBCBCDEBCDCDADCFE@ADC@EBABAB@B@F@FBFADADCBC@EBEBEBCDEDCFADAD@HCHCDC@ABC@EBC@CB@FCHADAH@FBDBBBBDBD@@AD@DBBD@D@D@D@HBFBDDBBD@DBF@F@FDDDBB@DB@DFDHFDDDFDDF@DBDAHAH@F@FB@BBB@D@D@F@B@DBF@DBD@DADADCDABAD@BBDDDHFJBH@BBD@D@H@JAH@JBHDHDDDD@FAHAJALADAF@H@H@DBDRCHCF@NBLFHDFBBFA\\EfIRALBJFLDBB@B@HCFAFGFEDAD@HBHBB@D@DCBADCDCBCBCBCB@B@FIPQLCTAB@@AB@BAFAHAFBD@B@DCBC@CBCBGBEDEHCFAF@DA@@B@@@@C@A@C@EDEFEFEFCDABADBD@DCBEFEDEBEBC@E@CBABANBLDF@F@B@B@DADABCBE@ABKDODUBODGBE@C@MAKAGAGAEAC@CAC@AA@A@CDA@A@@@@A@CBC@E@CACEA@AAAAAAAAC@AAK@IAAACC@CAAA@@AC@ABCBCBCBC@CCAC@A@@@AABCBCDCBABC@C@CCECACCAC@KBIBCBCFCD@D@F@B@BADAD@HDFBD@@@@A@ACCAA@E@ABAD@DBFFFDDBD@D@DADCFCB@BAD@H@DABADKHSBC@AACCAACAA@ABCBCHAFB@@DA@CBABC@CAA@EAGAGAA@EBABELIB@B@@@@@@A@A@E@C@CBC@ABC@AB@@ABA@AB@@ABA@A@ABA@A@C@A@ABA@A@ABAB@@ABA@AB@AA@@@A@@AAAAA@@AAACAECA@A@@AAA@C@CBADAB@B@@A@E@@A@@C@AFCBEB@AC@A@A@A@A@C@AB@@ABC@AAAAACCAA@AAA@AAA@AACAACCCECEKIIECE@CCCIGCEAAACKAGDA@EA@ACEEGACE@E@@@E@A@ECCA@E@EECE@EC@CCA@ACCG@GHC@E@CAA@CACCGEEC@@KAC@SCA@@GACCCACCGAEACAGACBG@CCECEEI@@CI@G@G@CCCCAGAEECCCCA@C@I@C@CAA@ASAENEP[CEBG@CAECAECC@BEBGDQ@ABG@GA@AACAEACCAAC@C@GH@BE@KGCBGFADEDGAC@INABCBC@AAAAAAIGACBGAECAIBKKCMACCA@AE@EGEA@G@AA@ABA@EDIBEA@B@@@H@@BJDF@BCJED@HABGDCJDHBDFAHDEDEBE@IAAB@NA@ODCBIEIACA@GJOBAACAG@AC@GBCIGEIACGCCBCBCDEDCDKAQCB@I@EEAEBIBE@ICAAA@MC@@GAGIACEGC@EA@@OBGEEA@M@@BEAEAEFUACBC@CIC@C@EEAE@C@CABC@CFC@A@GHKDC@AAA@KDSB@BBD@LEEGBCHCFCFA@@B@@@BEJA@@HAEME@@@CAEE@ABE@AACDIBCGCI@E@EHACAC@AECCCCGDABCFE@G@@@AE@GCA@AGKGCEAIGCEEEAEGGAKI@FC@AAEB@B@BA@C@C@ABACCEAAABCACBCB@D@FABAAA@@C@GAAAACC@C@ACABCAACEGE@CAEAA@CB@B@D@HCCAACEACGAA@CBACACC@AACGBEAGDABA@KEGAC@CEAHEBABCD"],"encodeOffsets":[[114716,24047]]}},{"type":"Feature","id":"441225","properties":{"name":"封开县","cp":[111.512343,23.424033],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@NDBDBBBHAHEFDH@F@@@JALEH@HAFCF@B@BFD@BBL@J@J@@NBDBFCJDAFD@FEBEDABFFCVDLFJCDABHPNJDDBF@JEGC@EFBBAF@BDF@TNNFAGBAD@B@BCFDD@BF@@LEPED@FBFB@BBH@B@BCD@J@LDBBHABDBLLBH@@@BB@FAFAJH@JCB@@FHBFHJFADBDDF@DAFBJBFBADCJDN@DFFABC@GBK@GDAGCHA@A@GOCDBDDBAHABGCI@KDA@@@GD@JEBABBDFDP@B@@HAFADBBBDEHDD@BBDADAHBLALAFA@BFFBCNFBPEB@AJ@@DLDDHF@HDJABCFBDB@DF@BHB@J@BBL@@B@BBB@BBFCFBB@BAB@BADABABABABCBA@@@@@@@@@@@@B@@A@@@@@@@@@@@A@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@B@@@B@@@@@@@@@@AB@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@BB@@@@@@@@@@@@@@@B@@@@@@A@@@@B@@@@@@@@@B@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@A@@A@@@@@@@@B@@@@@@@@@B@@@@@@@@A@@@@@AFB@F@FBBB@@@@BAH@D@@DD@B@B@BBB@BB@B@DBF@BAB@@@B@B@B@FBDABI@@D@@C@@DCDCCAB@FEBBB@DAF@@CB@BCBDF@DCBD@@FADBD@@@BCBABAFA@ABCH@FDBCFA@D@@B@DB@@BCD@ACBADBDA@ADABBHDDADABAFADDD@@DBBHHB@HGBBBB@@HGHEDD@HCHDJBDBD@D@BH@HDDB@B@JAD@BBBBBABABBDDD@FCCE@CD@HFF@DABAD@BDBBH@FCDEDC@CDADBBAD@DAFDJFHB@FHBHCB@BBHBDFBDABAF@F@DBF@@GDBDCFCDBDHBBB@FFDFBDCDDDAF@DCF@BABCBAB@HBFDD@B@HD@BBLED@BBFI@CFCBBDAD@FC@DJFFFLDD@FBD@B@@@D@DEFBDAD@BFAB@B@@@@@BA@@BA@@DD@D@@@D@D@BBBBD@@BBB@BABDH@B@B@DBDBAB@DDBB@BBB@BB@BA@@HAJAFFB@F@CEDBBCB@DBBABEBBHGFB@DBBADHBBADB@DBF@@NDBB@BB@B@BAB@CADCHC@A@ABCBA@ABCBAKQBI@AIC@A@A@AAA@@@AAGEEMG@@@AAA@ABA@ABA@ABADABGD@BA@@@A@A@@AA@A@A@@AA@A@AA@@CAA@AIKECCAAGBADEDKBCAM@A@EACACACAC@@@A@AGG@ADE@A@A@A@A@AAAAIEI@ECECGAGCAEACA@ECCCAHECE@EDCBC@A@@@ABA@ABAAAA@AAA@OCCCDGAEBE@@@AA@ACCAAAGIC@A@CEAI@EC@IC@E@I@GCEGBEEBA@A@AACEA@EA@AAA@AAA@CAA@GEIC@@@A@A@A@A@@@A@A@A@A@A@CAEFMFC@@B@AGBCEC@CDEFCDCFBHBDBHDFEFADABAHENAFABAB@@AB@BA@@@@@@@A@A@A@@@AAEHEBABABC@@DA@ABA@@BA@A@A@A@A@C@A@A@@@A@@@AL@H@B@DA@@BAD@B@B@D@DBBBH@FCBE@EDE@@@A@AACDC@ABA@@@AB@@A@@@EBCDEB@@AAAGAGCBECCBEEA@CAGAAAAAAE@EG@OFC@IC@CDAEDCBMAC@C@@ACLGDABAB@BAD@@AB@B@@A@@BA@A@@AACAGIA@@@AA@@BU@@@AB@@A@A@A@@@A@C@A@AA@@A@@CABEHGBCAIEID@@@@AB@BA@@BAB@BAB@@C@A@@DCDEBAHEEGAGCACBGCAIDAJBDB@DHBDCDCFAF@FBFABEGIECBCCACAAAAGBCH@HBHFFHD@BCDFDHBBBBBDDF@DFDFD@@HDBADCBAFABGGEICA@GMACA@CAC@BGCMA@C@ACE@EGECCAEEAAAAA@ECBMAA@AICBKAA@@AA@AAA@AAEBCCGM@GACC@@C@C@CDCACCC@A@E@A@C@CCEGMCEAC@CCC@IACH@@EBABCBCBGDGHE@KFAAC@K@ADC@C@E@EBG@E@E@C@AA@ECEGCG@CBCCAIAAEIAAAAE@ABCAA@ACCAGECAA@G@CBIDAFIDA@A@C@A@A@EA@@ABA@ABAB@@ABABA@AB@@A@A@ABA@G@AFABA@ABA@@@MFA@@@ABA@@@@@A@AA@@A@AA@@AAAA@@AA@@A@@AAA@@@A@A@A@@BAGM@GEEAAAAGECQKIEAKKAEDGBA@A@A@C@C@C@C@EBG@CBCBA@@@AAA@GDECCGA@@@A@A@A@@@A@A@@AACAEGGBKIIBIBOKIAIAA@ICE@EB@AE@GFABE@@A@@EAC@GHAAA@EDCB@FAD@@CGAGCGBE@CCEA@IAACACC@AC@ABC@OAIHEHCFA@AAK@G@CBEC@CABGBA@C@A@CAADGBAFABCCAA@A@A@ECCBCCEA@DA@@B@BE@AAA@A@BHGDBD@@ADBH@A@CB@BDA@AD@@ADABA@@@EBA@BB@BGB@AEEDCE@CG@EACBC@AIDC@G@AACBCFABCDA@CBGDEECBEBCAAAE@@AEBIFCCIC@AA@CBADCECHCDBD@JF@LBFDNFHHDHBDBB@J@B@@@FAD@BAD@B@BA@@D@BA@AB@BABABAB@BCBADCBAB@BGHEHABGHADKRGNOTABCAG@AAA@BADG@ADDBA@ECA@GGEGCAIDEAA@C@@CABEACA@A@@C@CE@ABC@GEE@@BADA@AAACEBCBC@CEEBA@ICIEIEADBBADCCEACADEAACDCDCDA@AAEHDB@DAD@BCFEBC@C@C@EDCBC@@D@@D@@DBBBB@DABEBADGFCBEFCCCD@DEDGD@AIAG@ADEDCBIDCFE@AAE@IAAD@BADGCBEDCC@A@CAAA@E@CGDKFEH@BALBJBB@HBHDFBFB@JJBD@DDHBLBBFFFBJFBDBRBHCFGHA@CD@@@FFHAD@@HH@NDD@@AHBND@FL@DEN@BDFBDBFFBCHADDB@B@FBDVAH@PCN@BL@FHJJBFHHHAFDDJPJCF@BHD@DD@LDDBBFFDF@DDJHFDFAJALDH@FBF@HBD@@"],"encodeOffsets":[[114158,24125]]}},{"type":"Feature","id":"441226","properties":{"name":"德庆县","cp":[111.785937,23.143722],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@E@IBE@A@IDMDGBABEDCBABIDIDEDEBGBI@E@A@GAG@EBIFIDEBEBC@C@CACAGAA@aDKBABEFCBADEJCJEJADABCFEDC@IDGBE@E@GAI@C@C@G@C@E@A@C@A@A@A@ABE@CBEBA@ABC@CBA@CBCBEDCBCBABCBCBC@AB@@@@ED@@IFGDGDCBABGHAF@BBD@BFHBDDDDDJBFB@@@IACDCDGDFBCDAB@@BJDDDJEFA@BF@BBDBFADAFFHCDAB@DCBADEDABBH@D@JC@BADBD@FDHF@CDFF@BHA@AAAB@FA@@B@BABC@@BCB@ACA@@D@BAGBC@@ACHCAGB@B@BBF@@A@AB@@CFBDDDAFDB@B@B@DBADEBABCHBB@D@B@DABAHDBD@AF@D@HBL@BEBGDGFBJ@PAD@BBDD@BDBDJBB@DF@DAFDHBHDH@@BC@EDAFCB@BBHGD@FB@@@BF@BAHEF@@BFAF@JDB@JBJBPLJAJALJHAFHDBBB@@@B@B@@@B@B@B@@HBDDCF@HBB@B@@ABAD@DAH@F@D@D@D@D@B@BABCHBFLLFBLJDRHFBBBBFF@HHNAB@@@B@B@B@@BB@BB@@@BB@@BBBB@@BBB@@@BBB@@@@@B@BA@@B@NE@@B@BAB@BABEH@B@BAB@B@@@BAB@BABA@@BABAB@BA@@FBB@B@D@B@B@JCBEJCDAH@B@DBHFDBBDB@DBBAF@BBBBFJBBBJDDDAH@HDDF@FBBD@F@F@H@FAF@D@D@BCL@D@BBLEF@HGHCDADABAFA@@DGJBD@DDD@FBNDFHDDD@B@F@B@D@DDDBDCD@D@@@DDHBN@DHADBF@BBB@BBB@@BBALJD@BBBANFDB@BBBBFFDBFDFHF@BDD@B@DNAHD@DBB@BDHNB@JDHFDFD@HBLFB@BAHCFBHABD@BDDFADAHFLAFHFBJIDGFAJAFAHLJHFBNNFB@@DFALD@FBNEAEH@FJFFBDFAHAFGD@JCBEBIBCH@DABCDAFCJ@FDJCHBBCBEHIJAHABDF@LKHGBAD@H@FBFAFCB@N@DHDAJCB@B@DAB@@AB@DGBA@AB@B@B@B@B@@@@@B@@@@@BA@@@A@ABA@A@ABA@AAA@AAA@C@C@C@CBEAA@A@@@A@@ECEAGBECQAE@C@CMCCCAEAEAG@@@BJEFCFMB@DABG@C@ECAIGMGOEE@CGCCC@CFAD@BCFGPSPID@@IDCNOEGEGECFI@C@CIGEOCKBGBCFAJB@FFDDABGHCDDBBAFAD@PDHBFHAF@B@JIB@FBDFHD@@B@@B@@@@@@@B@@@@B@@@A@@B@@@@A@@@@@@@@BB@@@@@@@@@@@B@@@@A@@B@@@@@@@B@@@@B@@B@@@@@@@@@B@@@A@@@@A@@@@@@A@@@@@@@@@@A@@@@@@@A@@B@@@@A@@B@DA@GCEBECKBI@E@@@EEADGEEAGC@BEDAEGBECGDK@@IACABQDELIBAECEECECCABAD@FEFC@KBIAKGAACCIEGCMKGMCMFEBACACAEAGAACAEJIDGEGCELIP@JAJ@DCFEDEBCBGCGDIBADA@ECCBG@G@EEACAIAEKL@@A@CCAE@CBME@ECCKEICECIGBIDIFBLDBDRDHDDCB@DBXJDBDADBFDHDHBDBDIBC@CDEBBBBBI@EA@@@C@SAMCECECEEGGCCCCACCCGGGGOMECKIMAE@G@KBK@EBCBEBEBCDQDGFM@C@MCKAMHMHC@A@E@CCECCCGCIEGAEAE@GAIAE@IASCKAKBIHCF@@ABA@ABE@E@E@QDI@C@EBCBC@CBABCBABGFCJANAF@FAFAF@D@DADCFCDCBIDGBGBSCMASCWCU@SBC@@@CBC@CBCBCBCBEBONKFE@M@ECIEQEAAA@A@CAC@A@S@@AY@Y@MBG@G@EBE@"],["@@@@@@@@@@@BA@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@BB@@@@@@@@@B@@@@@@B@@@@A@@@@@AA@@@@@@@B@@@@@@@B@@A@@@@A@@A@@@@@@@@@@@@BB@@@@@AB@@@@@B@@A@@B@@@@@@@B@@@@AA@@@@@AB@@@@@@A@@@@@AB@@@@@@A@@A@@@@A@"]],"encodeOffsets":[[[114464,23688]],[[114950,23908]]]}},{"type":"Feature","id":"441284","properties":{"name":"四会市","cp":[112.734103,23.327001],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CCBC@AAAAC@A@C@ABC@AAC@ABAA@AACAEAA@AACBADBFADEH@BDFFD@BEBABC@CAE@E@AACACDCBC@C@C@ABA@ADADC@@B@DABA@AA@C@@@C@CAACBADE@CAA@AAAA@C@ACCGACCE@CHAAA@@AAC@@CIGHABCD@D@BADBDCH@@@@@@@FDJFBDBFD@@@H@DBDADADABCBC@A@CD@BA@@F@DBDBDCDBF@FBBAHADCFCBGFEDGBEDCBGBGA@@@BABA@A@C@AAEBC@A@ABCBE@AAC@A@A@CBCDA@A@A@CAA@ACCCA@@@AAA@CCE@CAA@AACAAAGDCB@@CACACACCCAAACAEAAAC@EAAAA@CACCAACACACAC@AAC@@@A@KBKBGB@@@BBFADCB@BCFCD@DIDCDABAB@@EAC@IAIBCDCBEHCB@B@@IBC@CD@@IHA@@@A@@@EAGCEBAB@@A@@BC@AB@BA@A@AAAAACA@AAA@CAA@CBC@@BCBB@ABC@@BBBABAD@FABA@AGCBAD@DC@EB@BKJDDCBGBE@EBABCD@@ABCJGB@BA@CD@NAJCHA@AFEDABG@EDA@A@BNCDDDDBBBDDDFBBBDB@BH@JDFFFFDFBFFB@HDDFED@BDD@FDD@@BFDDDDDDBD@BCLBDFFJBHD@A@@@@B@@@@@@@B@@A@@@CH@BED@DB@@BDBF@DFBB@DDAFCFCRHDDDBBF@B@@@BCBCDAB@BB@DD@D@@ADEDEBE@C@ABADBFDHBF@JBLBH@HDBBDFBFBDFBJBFAFFB@BBHB@@@B@@@DBFBB@@@B@B@@BB@B@@@BCD@@AB@BA@CDBF@B@B@BBBBDBDBBDD@BBB@@@B@B@BA@@BAB@@@B@B@B@@BB@BBD@@BFBD@BCBCBADABBF@F@H@BBD@FBD@@AD@BCBCFAFAB@B@BFB@BB@DBBBBBBBBBBBB@B@B@B@D@B@D@DBD@FCDBBFBDBBDF@B@@HBD@FD@DDBDD@@@@B@DCLIDADBDBF@F@DAB@@@DFDBFDD@B@FADABAD@D@@BBD@DDF@B@D@@CFCBADAF@BAFCF@DDFBB@BDBB@@BB@B@DB@@F@DAFDB@FD@B@@BBBBB@@BB@D@B@D@D@@A@@@@BAB@@@BABB@@@@@FBDDBBBF@BBB@@@BBBB@B@B@B@B@B@B@@@B@@BBA@@BA@@B@BA@@B@BBB@B@DBB@B@D@B@DABAD@BABAD@B@B@D@BBBBBBB@BBB@HEDABBFB@@BBBB@@BB@B@B@B@FCDCBGBCD@FDBFB@@@B@BA@AB@B@D@BA@CBC@ABAD@BB@@DDBBBBBBB@DBBBB@FBBA@CACA@AG@@ACACAC@@BCBCF@@@DFBDDDD@B@D@BAD@DCD@DBBFBBB@B@B@B@DADADAFA@AB@BAB@BC@A@A@A@G@G@@DCBA@A@CCI@AAA@AACA@CCAACAAAA@CAA@@@A@IEEA@@EAEACCAAACAGBGAG@C@EDCFCBA@A@@@A@@B@D@B@D@D@D@D@D@D@@@DCBCAAACBEDCD@BAFCN@@@F@FBB@B@B@B@B@@@@@BA@@@CCE@@@G@EBA@A@ABCC@EBCA@@@A@A@ABA@ABABC@CBC@A@C@C@A@AAADCBABADEHBNAH@HFFAFAHABE@IB@DAHAD@HEJGBAAE@G@ICIAIAE@I@G@IBEA@@AGDEECIAAAA@A@A@GCCACGCIAGCE@AAE@AEAAA@CICGA@CKBA@A@A@C@A@A@A@A@AAA@@AAA@AA@@AAAAA@@AAA@A@A@@@A@E@E@E@E@A@@AA@A@A@AIECC@@BI@ACCAA@A@A@E@G@G@E@A@C@C@ABAB@BAJCN@HAD@FDBDAB@BEFBJAH@DDB@@FDFD@@RCB@F@F@BAPC@@TQX[@@H_XBPECUKYACEKCUAKAEAC@A@@@@CCC@IGIQECAAAAEK@KGCIIICAAACCAACCA@@@@@@ACACAAAC@A@A@AFFHHHAHCFCD@DC@ABDH@@CEA@@BE@@@@B@@CDD@C@CCBACCGA@AAA@AAAA@@EEAAECI@@@@@A@C@CBMBAC@CEYM@E@@BBF@FBDDBBB@BAFEHBB@DADA@AD@DCBAA"],"encodeOffsets":[[115505,23786]]}}],"UTF8Encoding":true});}));