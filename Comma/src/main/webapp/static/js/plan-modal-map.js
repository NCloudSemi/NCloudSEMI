//map controller
$(()=>{

    const contextPath = document.getElementById("contextPath").value;

    const optionData ={
        Area : ['서울','제주','전라','광주','경상','울산','대구','부산','충천','세종','대전','인천'],
        priceCap :['3만원 이하', '3~5만원', '5~7만원', '7만원 이상'],
        recommend :  ['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐', '⭐'],
    }
    //나중에 읽어오게
    const station_data = [{"name":"가락시장","alt":"","coordinate":[37.492522,127.118234]},{"name":"종로3가","alt":"","coordinate":[37.571607,126.991806]},{"name":"오금","alt":"","coordinate":[37.502162,127.128111]},{"name":"동대문","alt":"","coordinate":[37.57142,127.009745]},{"name":"동대문역사문화공원","alt":"","coordinate":[37.565138,127.007896]},{"name":"충무로","alt":"","coordinate":[37.561243,126.99428]},{"name":"서울","alt":"","coordinate":[37.554648,126.972559]},{"name":"신도림","alt":"","coordinate":[37.508725,126.891295]},{"name":"이촌","alt":"","coordinate":[37.522272,126.974345]},{"name":"왕십리","alt":"","coordinate":[37.561533,127.037732]},{"name":"시청","alt":"","coordinate":[37.564718,126.977108]},{"name":"교대","alt":"","coordinate":[37.493415,127.01408]},{"name":"신설동","alt":"","coordinate":[37.575297,127.025087]},{"name":"강변","alt":"","coordinate":[37.535095,127.094681]},{"name":"까치산","alt":"","coordinate":[37.531768,126.846683]},{"name":"을지로3가","alt":"","coordinate":[37.566295,126.99191]},{"name":"홍대입구","alt":"","coordinate":[37.557192,126.925381]},{"name":"광운대","alt":"","coordinate":[37.623632,127.061835]},{"name":"상봉","alt":"","coordinate":[37.596362,127.085032]},{"name":"망우","alt":"","coordinate":[37.59955,127.091909]},{"name":"영등포구청","alt":"","coordinate":[37.52497,126.895951]},{"name":"신길","alt":"","coordinate":[37.517122,126.917169]},{"name":"을지로4가","alt":"","coordinate":[37.566941,126.998079]},{"name":"합정","alt":"","coordinate":[37.549463,126.913739]},{"name":"공덕","alt":"","coordinate":[37.544018,126.951592]},{"name":"삼각지","alt":"","coordinate":[37.534777,126.97311]},{"name":"약수","alt":"","coordinate":[37.55434,127.010655]},{"name":"신당","alt":"","coordinate":[37.565972,127.01782]},{"name":"동묘앞","alt":"","coordinate":[37.572627,127.016429]},{"name":"석계","alt":"","coordinate":[37.614805,127.065851]},{"name":"도봉산","alt":"","coordinate":[37.689313,127.046222]},{"name":"불광","alt":"","coordinate":[37.610469,126.929887]},{"name":"연신내","alt":"","coordinate":[37.619001,126.921008]},{"name":"금정","alt":"","coordinate":[37.372221,126.943429]},{"name":"수원","alt":"","coordinate":[37.265974,126.999874]},{"name":"원인재","alt":"","coordinate":[37.412603,126.687389]},{"name":"회기","alt":"","coordinate":[37.58946,127.057583]},{"name":"대곡","alt":"","coordinate":[37.631626,126.811024]},{"name":"디지털미디어시티","alt":"","coordinate":[37.576646,126.900984]},{"name":"회룡","alt":"","coordinate":[37.724846,127.046895]},{"name":"판교","alt":"","coordinate":[37.394761,127.111217]},{"name":"오이도","alt":"","coordinate":[37.362357,126.738714]},{"name":"이매","alt":"","coordinate":[37.396104,127.12827]},{"name":"선정릉","alt":"","coordinate":[37.51098,127.043593]},{"name":"종합운동장","alt":"","coordinate":[37.510997,127.073642]},{"name":"천호","alt":"","coordinate":[37.538397,127.123572]},{"name":"창동","alt":"","coordinate":[37.653166,127.047731]},{"name":"사당","alt":"","coordinate":[37.47653,126.981685]},{"name":"노원","alt":"","coordinate":[37.655128,127.061368]},{"name":"군자","alt":"","coordinate":[37.557121,127.079542]},{"name":"건대입구","alt":"","coordinate":[37.540693,127.07023]},{"name":"고속터미널","alt":"","coordinate":[37.50481,127.004943]},{"name":"총신대입구","alt":"이수","coordinate":[37.486263,126.981989]},{"name":"대림","alt":"","coordinate":[37.49297,126.895801]},{"name":"가산디지털단지","alt":"","coordinate":[37.481072,126.882343]},{"name":"온수","alt":"","coordinate":[37.492258,126.823388]},{"name":"부평구청","alt":"","coordinate":[37.508336,126.720548]},{"name":"잠실","alt":"","coordinate":[37.51395,127.102234]},{"name":"복정","alt":"","coordinate":[37.470047,127.126662]},{"name":"모란","alt":"","coordinate":[37.43213,127.129087]},{"name":"부평","alt":"","coordinate":[37.489493,126.724805]},{"name":"당산","alt":"","coordinate":[37.53438,126.902281]},{"name":"여의도","alt":"","coordinate":[37.521624,126.924191]},{"name":"동작","alt":"","coordinate":[37.502971,126.979306]},{"name":"김포공항","alt":"","coordinate":[37.562434,126.801058]},{"name":"강남","alt":"","coordinate":[37.497175,127.027926]},{"name":"양재","alt":"","coordinate":[37.484147,127.034631]},{"name":"정자","alt":"","coordinate":[37.36706,127.108105]},{"name":"강남구청","alt":"","coordinate":[37.517186,127.04128]},{"name":"선릉","alt":"","coordinate":[37.504503,127.049008]},{"name":"효창공원앞","alt":"","coordinate":[37.539261,126.961351]},{"name":"태릉입구","alt":"","coordinate":[37.617983,127.07512]},{"name":"검암","alt":"","coordinate":[37.569104,126.673728]},{"name":"주안","alt":"","coordinate":[37.464941,126.679923]},{"name":"인천","alt":"","coordinate":[37.476691,126.616936]},{"name":"인천시청","alt":"","coordinate":[37.457405,126.702221]},{"name":"청량리","alt":"","coordinate":[37.580178,127.046835]},{"name":"중랑","alt":"","coordinate":[37.594917,127.076116]},{"name":"충정로","alt":"","coordinate":[37.559973,126.963672]},{"name":"청구","alt":"","coordinate":[37.560245,127.013828]},{"name":"성신여대입구","alt":"","coordinate":[37.592624,127.016403]},{"name":"보문","alt":"","coordinate":[37.585286,127.019381]},{"name":"계양","alt":"","coordinate":[37.571462,126.735637]},{"name":"기흥","alt":"","coordinate":[37.275619,127.115936]},{"name":"옥수","alt":"","coordinate":[37.540685,127.017965]},{"name":"도곡","alt":"","coordinate":[37.490858,127.055381]},{"name":"수서","alt":"","coordinate":[37.487371,127.10188]},{"name":"용산","alt":"","coordinate":[37.529849,126.964561]},{"name":"종각","alt":"","coordinate":[37.570161,126.982923]},{"name":"종로5가","alt":"","coordinate":[37.570926,127.001849]},{"name":"제기동","alt":"","coordinate":[37.578103,127.034893]},{"name":"을지로입구","alt":"","coordinate":[37.566014,126.982618]},{"name":"탑석","alt":"","coordinate":[37.733579,127.088704]},{"name":"419민주묘지","alt":"","coordinate":[37.649593,127.013746]},{"name":"가오리","alt":"","coordinate":[37.641701,127.016792]},{"name":"화계","alt":"","coordinate":[37.634802,127.017519]},{"name":"한티","alt":"","coordinate":[37.496237,127.052873]},{"name":"구룡","alt":"","coordinate":[37.486839,127.058856]},{"name":"홍제","alt":"","coordinate":[37.589066,126.943736]},{"name":"김유정","alt":"","coordinate":[37.818466,127.71434]},{"name":"남춘천","alt":"","coordinate":[37.864007,127.723792]},{"name":"성균관대","alt":"","coordinate":[37.300349,126.97075]},{"name":"경찰병원","alt":"","coordinate":[37.495918,127.12454]},{"name":"구일","alt":"","coordinate":[37.496756,126.870793]},{"name":"야탑","alt":"","coordinate":[37.411185,127.128715]},{"name":"삼송","alt":"","coordinate":[37.653083,126.895558]},{"name":"화정","alt":"","coordinate":[37.634592,126.83265]},{"name":"영등포시장","alt":"","coordinate":[37.522669,126.905139]},{"name":"상일동","alt":"","coordinate":[37.556712,127.166417]},{"name":"공릉","alt":"","coordinate":[37.625742,127.072896]},{"name":"상도","alt":"","coordinate":[37.502834,126.94791]},{"name":"박촌","alt":"","coordinate":[37.553703,126.745077]},{"name":"구성","alt":"","coordinate":[37.298969,127.105664]},{"name":"인하대","alt":"","coordinate":[37.448493,126.649619]},{"name":"숭의","alt":"","coordinate":[37.460789,126.638297]},{"name":"센트럴파크","alt":"","coordinate":[37.393054,126.634729]},{"name":"국제업무지구","alt":"","coordinate":[37.399907,126.630347]},{"name":"강매","alt":"","coordinate":[37.612314,126.843223]},{"name":"달월","alt":"","coordinate":[37.379681,126.745177]},{"name":"원흥","alt":"","coordinate":[37.650658,126.872642]},{"name":"완정","alt":"","coordinate":[37.592928,126.673203]},{"name":"지평","alt":"","coordinate":[37.476444,127.629617]},{"name":"석바위시장","alt":"","coordinate":[37.457611,126.692575]},{"name":"상왕십리","alt":"","coordinate":[37.564354,127.029354]},{"name":"한양대","alt":"","coordinate":[37.555273,127.043655]},{"name":"뚝섬","alt":"","coordinate":[37.547184,127.047367]},{"name":"성수","alt":"","coordinate":[37.544581,127.055961]},{"name":"청계산입구","alt":"","coordinate":[37.447211,127.055664]},{"name":"북한산우이","alt":"","coordinate":[37.663146,127.012789]},{"name":"구의","alt":"","coordinate":[37.537077,127.085916]},{"name":"잠실나루","alt":"","coordinate":[37.520733,127.10379]},{"name":"잠실새내","alt":"","coordinate":[37.511687,127.086162]},{"name":"삼성","alt":"","coordinate":[37.508844,127.06316]},{"name":"역삼","alt":"","coordinate":[37.500622,127.036456]},{"name":"서초","alt":"","coordinate":[37.491897,127.007917]},{"name":"방배","alt":"","coordinate":[37.481426,126.997596]},{"name":"낙성대","alt":"","coordinate":[37.47693,126.963693]},{"name":"서울대입구","alt":"","coordinate":[37.481247,126.952739]},{"name":"봉천","alt":"","coordinate":[37.482362,126.941892]},{"name":"신림","alt":"","coordinate":[37.484201,126.929715]},{"name":"신대방","alt":"","coordinate":[37.487462,126.913149]},{"name":"구로디지털단지","alt":"","coordinate":[37.485266,126.901401]},{"name":"문래","alt":"","coordinate":[37.517933,126.89476]},{"name":"신촌","alt":"","coordinate":[37.555134,126.936893]},{"name":"이대","alt":"","coordinate":[37.556733,126.946013]},{"name":"아현","alt":"","coordinate":[37.557345,126.956141]},{"name":"용답","alt":"","coordinate":[37.561904,127.050899]},{"name":"신답","alt":"","coordinate":[37.57004,127.046481]},{"name":"도림천","alt":"","coordinate":[37.514287,126.882768]},{"name":"양천구청","alt":"","coordinate":[37.512398,126.865819]},{"name":"신정네거리","alt":"","coordinate":[37.520074,126.852912]},{"name":"용두","alt":"","coordinate":[37.574028,127.038091]},{"name":"지축","alt":"","coordinate":[37.648048,126.913951]},{"name":"구파발","alt":"","coordinate":[37.636763,126.918821]},{"name":"녹번","alt":"","coordinate":[37.600927,126.935756]},{"name":"무악재","alt":"","coordinate":[37.582299,126.950291]},{"name":"독립문","alt":"","coordinate":[37.574571,126.957748]},{"name":"경복궁","alt":"","coordinate":[37.575762,126.97353]},{"name":"안국","alt":"","coordinate":[37.576477,126.985443]},{"name":"동대입구","alt":"","coordinate":[37.559052,127.005602]},{"name":"금호","alt":"","coordinate":[37.548034,127.015872]},{"name":"압구정","alt":"","coordinate":[37.527072,127.028461]},{"name":"신사","alt":"","coordinate":[37.516334,127.020114]},{"name":"잠원","alt":"","coordinate":[37.512759,127.01122]},{"name":"남부터미널","alt":"","coordinate":[37.485013,127.016189]},{"name":"매봉","alt":"","coordinate":[37.486947,127.046769]},{"name":"대치","alt":"","coordinate":[37.494612,127.063642]},{"name":"학여울","alt":"","coordinate":[37.496663,127.070594]},{"name":"대청","alt":"","coordinate":[37.493514,127.079532]},{"name":"일원","alt":"","coordinate":[37.483681,127.08439]},{"name":"당고개","alt":"","coordinate":[37.670272,127.079066]},{"name":"상계","alt":"","coordinate":[37.660878,127.073572]},{"name":"쌍문","alt":"","coordinate":[37.648627,127.034709]},{"name":"수유","alt":"","coordinate":[37.638052,127.025732]},{"name":"미아","alt":"","coordinate":[37.62667,127.025983]},{"name":"미아사거리","alt":"","coordinate":[37.613292,127.030053]},{"name":"길음","alt":"","coordinate":[37.603407,127.025053]},{"name":"한성대입구","alt":"","coordinate":[37.588458,127.006221]},{"name":"혜화","alt":"","coordinate":[37.582336,127.001844]},{"name":"명동","alt":"","coordinate":[37.560989,126.986325]},{"name":"회현","alt":"","coordinate":[37.558514,126.978246]},{"name":"숙대입구","alt":"","coordinate":[37.54456,126.972106]},{"name":"신용산","alt":"","coordinate":[37.52917,126.967894]},{"name":"남태령","alt":"","coordinate":[37.463873,126.989134]},{"name":"남영","alt":"","coordinate":[37.541021,126.9713]},{"name":"노량진","alt":"","coordinate":[37.514219,126.942454]},{"name":"대방","alt":"","coordinate":[37.513342,126.926382]},{"name":"영등포","alt":"","coordinate":[37.515504,126.907628]},{"name":"서빙고","alt":"","coordinate":[37.519594,126.988537]},{"name":"한남","alt":"","coordinate":[37.52943,127.009169]},{"name":"응봉","alt":"","coordinate":[37.549946,127.034538]},{"name":"외대앞","alt":"","coordinate":[37.596073,127.063549]},{"name":"신이문","alt":"","coordinate":[37.601854,127.067325]},{"name":"월계","alt":"","coordinate":[37.633212,127.058831]},{"name":"녹천","alt":"","coordinate":[37.644799,127.051269]},{"name":"개포동","alt":"","coordinate":[37.489116,127.06614]},{"name":"대모산입구","alt":"","coordinate":[37.491373,127.07272]},{"name":"양원","alt":"","coordinate":[37.606596,127.107906]},{"name":"구리","alt":"","coordinate":[37.603392,127.143869]},{"name":"도농","alt":"","coordinate":[37.608806,127.161153]},{"name":"양정","alt":"","coordinate":[37.60533,127.19364]},{"name":"덕소","alt":"","coordinate":[37.586781,127.208832]},{"name":"도심","alt":"","coordinate":[37.579622,127.222672]},{"name":"팔당","alt":"","coordinate":[37.547371,127.243939]},{"name":"운길산","alt":"","coordinate":[37.554669,127.310115]},{"name":"양수","alt":"","coordinate":[37.545981,127.329098]},{"name":"신원","alt":"","coordinate":[37.525545,127.372921]},{"name":"국수","alt":"","coordinate":[37.516169,127.399367]},{"name":"아신","alt":"","coordinate":[37.51382,127.443173]},{"name":"오빈","alt":"","coordinate":[37.506062,127.473868]},{"name":"양평","alt":"경의중앙선","coordinate":[37.492832,127.491814]},{"name":"원덕","alt":"","coordinate":[37.468672,127.547076]},{"name":"용문","alt":"","coordinate":[37.48223,127.594647]},{"name":"서울","alt":"경의중앙선","coordinate":[37.556328,126.969522]},{"name":"신촌","alt":"경의중앙선","coordinate":[37.559783,126.942319]},{"name":"서강대","alt":"","coordinate":[37.551881,126.935711]},{"name":"가좌","alt":"","coordinate":[37.568491,126.915487]},{"name":"수색","alt":"","coordinate":[37.580842,126.895611]},{"name":"화전","alt":"","coordinate":[37.602888,126.868387]},{"name":"행신","alt":"","coordinate":[37.612102,126.834146]},{"name":"능곡","alt":"","coordinate":[37.618808,126.820783]},{"name":"곡산","alt":"","coordinate":[37.645676,126.801762]},{"name":"백마","alt":"","coordinate":[37.658239,126.794461]},{"name":"풍산","alt":"","coordinate":[37.672346,126.786243]},{"name":"일산","alt":"","coordinate":[37.682077,126.769846]},{"name":"탄현","alt":"","coordinate":[37.694023,126.761086]},{"name":"야당","alt":"","coordinate":[37.712327,126.761356]},{"name":"운정","alt":"","coordinate":[37.725826,126.767257]},{"name":"금릉","alt":"","coordinate":[37.751322,126.765347]},{"name":"금촌","alt":"","coordinate":[37.766217,126.774644]},{"name":"월롱","alt":"","coordinate":[37.796188,126.792587]},{"name":"파주","alt":"","coordinate":[37.815298,126.792783]},{"name":"문산","alt":"","coordinate":[37.854619,126.788047]},{"name":"신내","alt":"","coordinate":[37.612887,127.103218]},{"name":"갈매","alt":"","coordinate":[37.634118,127.114757]},{"name":"별내","alt":"","coordinate":[37.64202,127.12684]},{"name":"퇴계원","alt":"","coordinate":[37.648311,127.143952]},{"name":"사릉","alt":"","coordinate":[37.65108,127.176933]},{"name":"금곡","alt":"","coordinate":[37.637382,127.207853]},{"name":"평내호평","alt":"","coordinate":[37.653225,127.244493]},{"name":"천마산","alt":"","coordinate":[37.658978,127.285379]},{"name":"마석","alt":"","coordinate":[37.652782,127.311767]},{"name":"대성리","alt":"","coordinate":[37.684071,127.379319]},{"name":"청평","alt":"","coordinate":[37.735488,127.42661]},{"name":"상천","alt":"","coordinate":[37.770246,127.454821]},{"name":"가평","alt":"","coordinate":[37.814536,127.510739]},{"name":"굴봉산","alt":"","coordinate":[37.832067,127.557695]},{"name":"백양리","alt":"","coordinate":[37.830779,127.58933]},{"name":"강촌","alt":"","coordinate":[37.805723,127.634146]},{"name":"춘천","alt":"","coordinate":[37.885054,127.717023]},{"name":"봉명","alt":"","coordinate":[36.801215,127.135763]},{"name":"쌍용","alt":"나사렛대","coordinate":[36.793759,127.1214]},{"name":"아산","alt":"","coordinate":[36.792053,127.104361]},{"name":"배방","alt":"","coordinate":[36.777629,127.052991]},{"name":"온양온천","alt":"","coordinate":[36.780483,127.003249]},{"name":"신창","alt":"","coordinate":[36.769502,126.951108]},{"name":"선바위","alt":"","coordinate":[37.451673,127.002303]},{"name":"경마공원","alt":"","coordinate":[37.443885,127.007888]},{"name":"대공원","alt":"","coordinate":[37.435675,127.006523]},{"name":"과천","alt":"","coordinate":[37.433021,126.996568]},{"name":"정부과천청사","alt":"","coordinate":[37.426513,126.98978]},{"name":"인덕원","alt":"","coordinate":[37.401553,126.976715]},{"name":"평촌","alt":"","coordinate":[37.394287,126.963883]},{"name":"범계","alt":"","coordinate":[37.389793,126.950806]},{"name":"삼동","alt":"","coordinate":[37.409522,127.20336]},{"name":"경기광주","alt":"","coordinate":[37.399907,126.630347]},{"name":"초월","alt":"","coordinate":[37.374419,127.299]},{"name":"곤지암","alt":"","coordinate":[37.351315,127.34674]},{"name":"신둔도예촌","alt":"","coordinate":[37.317185,127.40476]},{"name":"이천","alt":"","coordinate":[37.265579,127.44226]},{"name":"부발","alt":"","coordinate":[37.260192,127.490277]},{"name":"세종대왕릉","alt":"","coordinate":[37.295309,127.570938]},{"name":"여주","alt":"","coordinate":[37.282701,127.628607]},{"name":"구로","alt":"","coordinate":[37.503039,126.881966]},{"name":"금천구청","alt":"","coordinate":[37.455626,126.89398]},{"name":"석수","alt":"","coordinate":[37.435047,126.902295]},{"name":"관악","alt":"","coordinate":[37.419232,126.908706]},{"name":"안양","alt":"","coordinate":[37.401592,126.922874]},{"name":"명학","alt":"","coordinate":[37.384653,126.935433]},{"name":"군포","alt":"","coordinate":[37.35356,126.948462]},{"name":"의왕","alt":"","coordinate":[37.320852,126.948217]},{"name":"화서","alt":"","coordinate":[37.283862,126.989627]},{"name":"독산","alt":"","coordinate":[37.466613,126.889249]},{"name":"세류","alt":"","coordinate":[37.245025,127.013222]},{"name":"병점","alt":"","coordinate":[37.207503,127.032731]},{"name":"세마","alt":"","coordinate":[37.187533,127.04318]},{"name":"오산대","alt":"","coordinate":[37.168953,127.063197]},{"name":"오산","alt":"","coordinate":[37.145885,127.06672]},{"name":"진위","alt":"","coordinate":[37.109447,127.062278]},{"name":"송탄","alt":"","coordinate":[37.075696,127.054301]},{"name":"서정리","alt":"","coordinate":[37.056496,127.052819]},{"name":"지제","alt":"","coordinate":[37.0188,127.070444]},{"name":"평택","alt":"","coordinate":[36.990726,127.085159]},{"name":"성환","alt":"","coordinate":[36.916076,127.126964]},{"name":"직산","alt":"","coordinate":[36.870593,127.143904]},{"name":"두정","alt":"","coordinate":[36.833705,127.14896]},{"name":"천안","alt":"","coordinate":[36.810005,127.146826]},{"name":"당정","alt":"","coordinate":[37.344285,126.948345]},{"name":"서동탄","alt":"","coordinate":[37.195504,127.051672]},{"name":"광명","alt":"","coordinate":[37.416182,126.884466]},{"name":"산본","alt":"","coordinate":[37.358101,126.933274]},{"name":"대야미","alt":"","coordinate":[37.328467,126.917332]},{"name":"반월","alt":"","coordinate":[37.312212,126.903524]},{"name":"상록수","alt":"","coordinate":[37.302795,126.866489]},{"name":"한대앞","alt":"","coordinate":[37.309689,126.85344]},{"name":"중앙","alt":"","coordinate":[37.315941,126.838573]},{"name":"고잔","alt":"","coordinate":[37.316777,126.823249]},{"name":"초지","alt":"","coordinate":[37.320646,126.805913]},{"name":"안산","alt":"","coordinate":[37.327082,126.788532]},{"name":"신길온천","alt":"","coordinate":[37.338212,126.765844]},{"name":"정왕","alt":"","coordinate":[37.351735,126.742989]},{"name":"수리산","alt":"","coordinate":[37.349801,126.925365]},{"name":"개봉","alt":"","coordinate":[37.494594,126.85868]},{"name":"오류동","alt":"","coordinate":[37.494526,126.845365]},{"name":"역곡","alt":"","coordinate":[37.485178,126.811502]},{"name":"부천","alt":"","coordinate":[37.48405,126.782686]},{"name":"송내","alt":"","coordinate":[37.4876,126.753664]},{"name":"백운","alt":"","coordinate":[37.483664,126.707704]},{"name":"동암","alt":"","coordinate":[37.471408,126.702896]},{"name":"제물포","alt":"","coordinate":[37.466769,126.656666]},{"name":"동인천","alt":"","coordinate":[37.475276,126.632802]},{"name":"부개","alt":"","coordinate":[37.488418,126.74109]},{"name":"간석","alt":"","coordinate":[37.464737,126.694181]},{"name":"도원","alt":"","coordinate":[37.468446,126.642706]},{"name":"중동","alt":"","coordinate":[37.486562,126.764843]},{"name":"도화","alt":"","coordinate":[37.46607,126.668672]},{"name":"서울숲","alt":"","coordinate":[37.543617,127.044707]},{"name":"압구정로데오","alt":"","coordinate":[37.527381,127.040534]},{"name":"소사","alt":"","coordinate":[37.482753,126.79544]},{"name":"가천대","alt":"","coordinate":[37.448605,127.126697]},{"name":"태평","alt":"","coordinate":[37.440019,127.127709]},{"name":"서현","alt":"","coordinate":[37.385126,127.123592]},{"name":"수내","alt":"","coordinate":[37.378455,127.114322]},{"name":"미금","alt":"","coordinate":[37.350077,127.10891]},{"name":"오리","alt":"","coordinate":[37.339824,127.108942]},{"name":"보정","alt":"","coordinate":[37.312752,127.108196]},{"name":"죽전","alt":"","coordinate":[37.324753,127.107395]},{"name":"신갈","alt":"","coordinate":[37.286102,127.111313]},{"name":"상갈","alt":"","coordinate":[37.26181,127.108847]},{"name":"청명","alt":"","coordinate":[37.259489,127.078934]},{"name":"영통","alt":"","coordinate":[37.251568,127.071394]},{"name":"망포","alt":"","coordinate":[37.245795,127.057353]},{"name":"매탄권선","alt":"","coordinate":[37.252759,127.040566]},{"name":"수원시청","alt":"","coordinate":[37.261911,127.030736]},{"name":"매교","alt":"","coordinate":[37.265481,127.015678]},{"name":"월곶","alt":"","coordinate":[37.391769,126.742699]},{"name":"소래포구","alt":"","coordinate":[37.40095,126.733522]},{"name":"인천논현","alt":"","coordinate":[37.400614,126.722478]},{"name":"호구포","alt":"","coordinate":[37.401637,126.708627]},{"name":"남동인더스파크","alt":"","coordinate":[37.407722,126.695216]},{"name":"연수","alt":"","coordinate":[37.417804,126.67894]},{"name":"송도","alt":"","coordinate":[37.428514,126.657772]},{"name":"신포","alt":"","coordinate":[37.46874,126.623853]},{"name":"방학","alt":"","coordinate":[37.667503,127.044273]},{"name":"도봉","alt":"","coordinate":[37.679563,127.045595]},{"name":"망월사","alt":"","coordinate":[37.709914,127.047455]},{"name":"의정부","alt":"","coordinate":[37.738415,127.045958]},{"name":"가능","alt":"","coordinate":[37.748577,127.044213]},{"name":"녹양","alt":"","coordinate":[37.75938,127.042292]},{"name":"양주","alt":"","coordinate":[37.774381,127.044708]},{"name":"덕계","alt":"","coordinate":[37.818486,127.056486]},{"name":"덕정","alt":"","coordinate":[37.843188,127.061277]},{"name":"지행","alt":"","coordinate":[37.892334,127.055716]},{"name":"동두천중앙","alt":"","coordinate":[37.901885,127.056482]},{"name":"보산","alt":"","coordinate":[37.913702,127.057277]},{"name":"동두천","alt":"","coordinate":[37.927878,127.05479]},{"name":"소요산","alt":"","coordinate":[37.9481,127.061034]},{"name":"원당","alt":"","coordinate":[37.653324,126.843041]},{"name":"백석","alt":"","coordinate":[37.643114,126.78787]},{"name":"마두","alt":"","coordinate":[37.652206,126.77762]},{"name":"정발산","alt":"","coordinate":[37.659477,126.773359]},{"name":"주엽","alt":"","coordinate":[37.670072,126.761334]},{"name":"대화","alt":"","coordinate":[37.676087,126.747569]},{"name":"방화","alt":"","coordinate":[37.577446,126.812741]},{"name":"개화산","alt":"","coordinate":[37.572399,126.806171]},{"name":"송정","alt":"","coordinate":[37.561184,126.811973]},{"name":"마곡","alt":"","coordinate":[37.560183,126.825448]},{"name":"발산","alt":"","coordinate":[37.558598,126.837668]},{"name":"우장산","alt":"","coordinate":[37.548768,126.836318]},{"name":"화곡","alt":"","coordinate":[37.541513,126.840461]},{"name":"신정","alt":"","coordinate":[37.524997,126.856191]},{"name":"목동","alt":"","coordinate":[37.526065,126.864931]},{"name":"오목교","alt":"","coordinate":[37.524496,126.875181]},{"name":"양평","alt":"","coordinate":[37.525648,126.885778]},{"name":"여의나루","alt":"","coordinate":[37.527098,126.932901]},{"name":"마포","alt":"","coordinate":[37.539574,126.945932]},{"name":"애오개","alt":"","coordinate":[37.553736,126.95682]},{"name":"서대문","alt":"","coordinate":[37.565773,126.966641]},{"name":"광화문","alt":"","coordinate":[37.571026,126.976669]},{"name":"신금호","alt":"","coordinate":[37.554548,127.020331]},{"name":"행당","alt":"","coordinate":[37.557322,127.029476]},{"name":"마장","alt":"","coordinate":[37.5661,127.042973]},{"name":"답십리","alt":"","coordinate":[37.566747,127.052704]},{"name":"장한평","alt":"","coordinate":[37.56144,127.064623]},{"name":"아차산","alt":"","coordinate":[37.551691,127.089761]},{"name":"광나루","alt":"","coordinate":[37.545303,127.10357]},{"name":"강동","alt":"","coordinate":[37.535804,127.132481]},{"name":"길동","alt":"","coordinate":[37.537801,127.140004]},{"name":"굽은다리","alt":"","coordinate":[37.545477,127.142853]},{"name":"명일","alt":"","coordinate":[37.55137,127.143999]},{"name":"고덕","alt":"","coordinate":[37.555004,127.154151]},{"name":"둔촌동","alt":"","coordinate":[37.527788,127.136248]},{"name":"올림픽공원","alt":"","coordinate":[37.516078,127.130848]},{"name":"방이","alt":"","coordinate":[37.508857,127.126133]},{"name":"개롱","alt":"","coordinate":[37.498079,127.13482]},{"name":"거여","alt":"","coordinate":[37.493105,127.14415]},{"name":"마천","alt":"","coordinate":[37.49499,127.152781]},{"name":"응암","alt":"","coordinate":[37.598605,126.915577]},{"name":"역촌","alt":"","coordinate":[37.606021,126.922744]},{"name":"독바위","alt":"","coordinate":[37.618456,126.933031]},{"name":"구산","alt":"","coordinate":[37.611377,126.91727]},{"name":"새절","alt":"","coordinate":[37.591148,126.913629]},{"name":"증산","alt":"","coordinate":[37.583876,126.909645]},{"name":"월드컵경기장","alt":"","coordinate":[37.569532,126.899298]},{"name":"마포구청","alt":"","coordinate":[37.563515,126.903343]},{"name":"망원","alt":"","coordinate":[37.556094,126.910052]},{"name":"상수","alt":"","coordinate":[37.547716,126.922852]},{"name":"광흥창","alt":"","coordinate":[37.547456,126.931993]},{"name":"대흥","alt":"","coordinate":[37.547771,126.942069]},{"name":"녹사평","alt":"","coordinate":[37.534675,126.986695]},{"name":"이태원","alt":"","coordinate":[37.534488,126.994302]},{"name":"한강진","alt":"","coordinate":[37.539631,127.001725]},{"name":"버티고개","alt":"","coordinate":[37.548013,127.007055]},{"name":"창신","alt":"","coordinate":[37.579661,127.015241]},{"name":"안암","alt":"","coordinate":[37.586272,127.029005]},{"name":"고려대","alt":"","coordinate":[37.590508,127.036296]},{"name":"월곡","alt":"","coordinate":[37.601948,127.041518]},{"name":"상월곡","alt":"","coordinate":[37.606377,127.048491]},{"name":"돌곶이","alt":"","coordinate":[37.610537,127.056431]},{"name":"화랑대","alt":"","coordinate":[37.620064,127.084689]},{"name":"봉화산","alt":"","coordinate":[37.617283,127.091401]},{"name":"장암","alt":"","coordinate":[37.700109,127.053196]},{"name":"수락산","alt":"","coordinate":[37.67785,127.055315]},{"name":"마들","alt":"","coordinate":[37.66494,127.057675]},{"name":"중계","alt":"","coordinate":[37.644583,127.064303]},{"name":"하계","alt":"","coordinate":[37.636352,127.06799]},{"name":"먹골","alt":"","coordinate":[37.610637,127.077725]},{"name":"중화","alt":"","coordinate":[37.602545,127.079264]},{"name":"면목","alt":"","coordinate":[37.588579,127.087503]},{"name":"사가정","alt":"","coordinate":[37.580894,127.088478]},{"name":"용마산","alt":"","coordinate":[37.573647,127.086727]},{"name":"중곡","alt":"","coordinate":[37.565923,127.08432]},{"name":"어린이대공원","alt":"","coordinate":[37.548014,127.074658]},{"name":"뚝섬유원지","alt":"","coordinate":[37.53154,127.066704]},{"name":"청담","alt":"","coordinate":[37.519365,127.05335]},{"name":"학동","alt":"","coordinate":[37.514229,127.031656]},{"name":"논현","alt":"","coordinate":[37.511093,127.021415]},{"name":"반포","alt":"","coordinate":[37.508178,127.011727]},{"name":"내방","alt":"","coordinate":[37.487618,126.993513]},{"name":"남성","alt":"","coordinate":[37.484596,126.971251]},{"name":"숭실대입구","alt":"","coordinate":[37.496029,126.953822]},{"name":"장승배기","alt":"","coordinate":[37.504898,126.93915]},{"name":"신대방삼거리","alt":"","coordinate":[37.499701,126.928276]},{"name":"보라매","alt":"","coordinate":[37.499872,126.920428]},{"name":"신풍","alt":"","coordinate":[37.50008,126.90993]},{"name":"남구로","alt":"","coordinate":[37.486056,126.887249]},{"name":"철산","alt":"","coordinate":[37.47605,126.867911]},{"name":"광명사거리","alt":"","coordinate":[37.479252,126.854876]},{"name":"천왕","alt":"","coordinate":[37.486637,126.838713]},{"name":"까치울","alt":"","coordinate":[37.506207,126.810939]},{"name":"부천종합운동장","alt":"","coordinate":[37.50538,126.797337]},{"name":"춘의","alt":"","coordinate":[37.503663,126.787036]},{"name":"신중동","alt":"","coordinate":[37.503048,126.77596]},{"name":"부천시청","alt":"","coordinate":[37.504631,126.763538]},{"name":"상동","alt":"","coordinate":[37.505781,126.753083]},{"name":"삼산체육관","alt":"","coordinate":[37.506411,126.742153]},{"name":"굴포천","alt":"","coordinate":[37.506997,126.73128]},{"name":"암사","alt":"","coordinate":[37.55021,127.127562]},{"name":"강동구청","alt":"","coordinate":[37.530341,127.120508]},{"name":"몽촌토성","alt":"","coordinate":[37.517409,127.112359]},{"name":"석촌","alt":"","coordinate":[37.505431,127.106979]},{"name":"송파","alt":"","coordinate":[37.499703,127.112183]},{"name":"문정","alt":"","coordinate":[37.485855,127.1225]},{"name":"장지","alt":"","coordinate":[37.478703,127.126191]},{"name":"산성","alt":"","coordinate":[37.457122,127.149908]},{"name":"남한산성입구","alt":"","coordinate":[37.451535,127.159816]},{"name":"단대오거리","alt":"","coordinate":[37.44521,127.156866]},{"name":"신흥","alt":"","coordinate":[37.440918,127.147564]},{"name":"수진","alt":"","coordinate":[37.437428,127.140722]},{"name":"귤현","alt":"","coordinate":[37.566379,126.742654]},{"name":"임학","alt":"","coordinate":[37.545059,126.738665]},{"name":"계산","alt":"","coordinate":[37.543238,126.728128]},{"name":"경인교대입구","alt":"","coordinate":[37.538157,126.722597]},{"name":"작전","alt":"","coordinate":[37.530415,126.722527]},{"name":"갈산","alt":"","coordinate":[37.517268,126.721514]},{"name":"부평시장","alt":"","coordinate":[37.498383,126.722244]},{"name":"동수","alt":"","coordinate":[37.485312,126.718247]},{"name":"부평삼거리","alt":"","coordinate":[37.477679,126.710208]},{"name":"간석오거리","alt":"","coordinate":[37.467048,126.707938]},{"name":"예술회관","alt":"","coordinate":[37.449396,126.701012]},{"name":"인천터미널","alt":"","coordinate":[37.442383,126.699706]},{"name":"문학경기장","alt":"","coordinate":[37.434935,126.698579]},{"name":"선학","alt":"","coordinate":[37.426684,126.698863]},{"name":"신연수","alt":"","coordinate":[37.41804,126.693863]},{"name":"동춘","alt":"","coordinate":[37.404737,126.681015]},{"name":"동막","alt":"","coordinate":[37.397878,126.674005]},{"name":"캠퍼스타운","alt":"","coordinate":[37.387855,126.661673]},{"name":"테크노파크","alt":"","coordinate":[37.382268,126.656365]},{"name":"지식정보단지","alt":"","coordinate":[37.378384,126.645168]},{"name":"인천대입구","alt":"","coordinate":[37.386007,126.639484]},{"name":"검단오류","alt":"","coordinate":[37.594877,126.627178]},{"name":"왕길","alt":"","coordinate":[37.59518,126.642696]},{"name":"검단사거리","alt":"","coordinate":[37.60185,126.657108]},{"name":"마전","alt":"","coordinate":[37.597566,126.666998]},{"name":"독정","alt":"","coordinate":[37.585212,126.675844]},{"name":"검바위","alt":"","coordinate":[37.561405,126.677566]},{"name":"아시아드경기장","alt":"","coordinate":[37.5517,126.677122]},{"name":"서구청","alt":"","coordinate":[37.543742,126.676787]},{"name":"가정","alt":"","coordinate":[37.524649,126.675539]},{"name":"가정중앙시장","alt":"","coordinate":[37.517054,126.676672]},{"name":"석남","alt":"","coordinate":[37.506193,126.676203]},{"name":"서부여성회관","alt":"","coordinate":[37.506193,126.676203]},{"name":"인천가좌","alt":"","coordinate":[37.4897,126.675208]},{"name":"가재울","alt":"","coordinate":[37.484192,126.683673]},{"name":"주안국가산단","alt":"","coordinate":[37.473703,126.68113]},{"name":"시민공원","alt":"","coordinate":[37.458335,126.681192]},{"name":"석천사거리","alt":"","coordinate":[37.456805,126.709986]},{"name":"모래내시장","alt":"","coordinate":[37.45583,126.719298]},{"name":"만수","alt":"","coordinate":[37.454911,126.732094]},{"name":"남동구청","alt":"","coordinate":[37.448161,126.736939]},{"name":"인천대공원","alt":"","coordinate":[37.448769,126.752618]},{"name":"운연","alt":"","coordinate":[37.440127,126.75997]},{"name":"개화","alt":"","coordinate":[37.578608,126.798153]},{"name":"공항시장","alt":"","coordinate":[37.563726,126.810678]},{"name":"신방화","alt":"","coordinate":[37.567532,126.816601]},{"name":"마곡나루","alt":"","coordinate":[37.567336,126.829497]},{"name":"양천향교","alt":"","coordinate":[37.568381,126.841333]},{"name":"가양","alt":"","coordinate":[37.561391,126.854456]},{"name":"증미","alt":"","coordinate":[37.557402,126.861939]},{"name":"등촌","alt":"","coordinate":[37.550632,126.865689]},{"name":"염창","alt":"","coordinate":[37.546936,126.874916]},{"name":"신목동","alt":"","coordinate":[37.544277,126.88308]},{"name":"선유도","alt":"","coordinate":[37.53802,126.893525]},{"name":"국회의사당","alt":"","coordinate":[37.528105,126.917874]},{"name":"샛강","alt":"","coordinate":[37.517274,126.928422]},{"name":"노들","alt":"","coordinate":[37.512887,126.953222]},{"name":"흑석","alt":"","coordinate":[37.50877,126.963708]},{"name":"구반포","alt":"","coordinate":[37.501364,126.987332]},{"name":"신반포","alt":"","coordinate":[37.503415,126.995925]},{"name":"사평","alt":"","coordinate":[37.504206,127.015259]},{"name":"신논현","alt":"","coordinate":[37.504598,127.02506]},{"name":"언주","alt":"","coordinate":[37.507287,127.033868]},{"name":"삼성중앙","alt":"","coordinate":[37.513011,127.053282]},{"name":"봉은사","alt":"","coordinate":[37.514219,127.060245]},{"name":"청라국제도시","alt":"","coordinate":[37.555878,126.625327]},{"name":"운서","alt":"","coordinate":[37.492904,126.49379]},{"name":"공항화물청사","alt":"","coordinate":[37.458366,126.476241]},{"name":"인천국제공항","alt":"","coordinate":[37.447464,126.452508]},{"name":"영종","alt":"","coordinate":[37.511466,126.5237]},{"name":"양재시민의숲","alt":"","coordinate":[37.470023,127.03842]},{"name":"김량장","alt":"","coordinate":[37.237247,127.198781]},{"name":"운동장·송담대","alt":"","coordinate":[37.237845,127.209198]},{"name":"고진","alt":"","coordinate":[37.24484,127.214251]},{"name":"보평","alt":"","coordinate":[37.258965,127.218457]},{"name":"둔전","alt":"","coordinate":[37.267051,127.21364]},{"name":"전대·에버랜드","alt":"","coordinate":[37.285342,127.219561]},{"name":"발곡","alt":"","coordinate":[37.727048,127.052803]},{"name":"범골","alt":"","coordinate":[37.728755,127.04353]},{"name":"경전철의정부","alt":"","coordinate":[37.737202,127.043257]},{"name":"의정부시청","alt":"","coordinate":[37.739256,127.034781]},{"name":"흥선","alt":"","coordinate":[37.743302,127.037023]},{"name":"의정부중앙","alt":"","coordinate":[37.743676,127.049565]},{"name":"동오","alt":"","coordinate":[37.745271,127.056947]},{"name":"새말","alt":"","coordinate":[37.748885,127.06362]},{"name":"경기도청북부청사","alt":"","coordinate":[37.75059,127.071495]},{"name":"효자","alt":"","coordinate":[37.754025,127.076902]},{"name":"곤제","alt":"","coordinate":[37.750471,127.083715]},{"name":"어룡","alt":"","coordinate":[37.742802,127.085035]},{"name":"송산","alt":"","coordinate":[37.737279,127.087159]},{"name":"솔밭공원","alt":"","coordinate":[37.656088,127.013252]},{"name":"삼양","alt":"","coordinate":[37.627165,127.018152]},{"name":"삼양사거리","alt":"","coordinate":[37.621512,127.02048]},{"name":"솔샘","alt":"","coordinate":[37.62124,127.013528]},{"name":"북한산보국문","alt":"","coordinate":[37.612343,127.008009]},{"name":"정릉","alt":"","coordinate":[37.602798,127.01349]},{"name":"동천","alt":"","coordinate":[37.337928,127.102976]},{"name":"수지구청","alt":"","coordinate":[37.322702,127.095026]},{"name":"성복","alt":"","coordinate":[37.313335,127.0801]},{"name":"상현","alt":"","coordinate":[37.297664,127.069342]},{"name":"광교중앙","alt":"","coordinate":[37.288617,127.051478]},{"name":"광교","alt":"","coordinate":[37.30211,127.044483]},{"name":"강남대","alt":"","coordinate":[37.270161,127.126033]},{"name":"지석","alt":"","coordinate":[37.269606,127.136515]},{"name":"어정","alt":"","coordinate":[37.274917,127.143714]},{"name":"동백","alt":"","coordinate":[37.269043,127.152716]},{"name":"초당","alt":"","coordinate":[37.260752,127.159443]},{"name":"삼가","alt":"","coordinate":[37.242115,127.168075]},{"name":"시청·용인대","alt":"","coordinate":[37.239151,127.178406]},{"name":"명지대","alt":"","coordinate":[37.237964,127.190294]}];
    //추가 예정
    const areaPosition  = {
        서울: [37.56356944444444, 126.98000833333333],
        제주: [33.48569444444445, 126.50033333333333],
        전라: [34.813044444444444, 126.465],
        강원: [38.642618, 127.170231],
        광주: [35.156974999999996, 126.85336388888888],
        경기: [35.23473611111111, 128.69416666666666],
        울산: [35.53540833333333, 129.3136888888889],
        대구: [35.868541666666665, 128.60355277777776],
        부산: [35.17701944444444, 129.07695277777776],
        충천: [36.32387222222223, 127.42295555555556],
        세종: [36.4800121, 127.2890691],
        경상: [35.459369, 128.214826],
        대전: [36.347119444444445, 127.38656666666667],
        인천: [37.45323333333334, 126.70735277777779]
    }


    //검색
    let markers = []; //검색된 마커들 보관용
    let modalMarkers =[]
    let serchResults =[]
    const serchFillter ={ //필터용
        Area: '서울',
        priceCap: null,
        grade:0
    }

    //modal
    modal =  new bootstrap.Modal(document.getElementById('resultModal'));


    //카카오 지도
    const mapContainer = document.querySelector('.map-box-map')
    const modalMapContainer = document.getElementById('resultModalMap')
    const mapOptionMain = {
        center: new kakao.maps.LatLng(37.56356944444444, 126.98000833333333), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    const mapOptionModal = {
        center: new kakao.maps.LatLng(37.56356944444444, 126.98000833333333), // 지도의 중심좌표
        level: 2 // 지도의 확대 레벨
    };

    const kakaoMap = new kakao.maps.Map(mapContainer, mapOptionMain);
    const modalMap = new kakao.maps.Map( modalMapContainer, mapOptionModal);


    //위치 검색서비스
    const pleaceService = new kakao.maps.services.Places();

    //마커 이름 뛰울거
    const infowindow = new kakao.maps.InfoWindow({zIndex:1});


    //kakao 검색관련 이벤트 TEST
    const serchingData = () =>{
        let serchValue = "호텔" //document.querySelector('#serchBar').val()
        //검색창 비워져 있는지
        if($('#map-box-search-input').val() !=''){
            serchValue = $('#map-box-search-input').val()
        }

        //serch options
        const option ={
            radius: parseInt(5000),
        }
        const f_a =serchFillter['Area']
        if( f_a != null){
            option['location'] = new kakao.maps.LatLng(areaPosition[f_a][0], areaPosition[f_a][1])
        }
        pleaceService.keywordSearch(serchValue,placesSearchCB,option);
    }


    // 장소검색 결과 확인
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            filtered_data = dataFiltering(data)
            if(filtered_data.length == 0)
            {
                console.log("no Data")
                return;
            }
            //지도 marker
            displayPlaces(filtered_data)

        } else if (status === kakao.maps.services.Status.ZERO_RESULT || status === kakao.maps.services.Status.ERROR) {
            console.log("no Data or Serch Error")
            return;
        }
    }

    //데이터 필터링
    dataFiltering = (data) =>{
        let new_data =[]
        data.forEach(di => {
            const adress =di["address_name"].split(' ')
            if(adress[0].indexOf(serchFillter['Area']) !== -1 || serchFillter['Area'] === null)
                new_data.push(di);
        });
        return new_data
    }

    //마커 뛰우기
    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayPlaces(places) {

        bounds = new kakao.maps.LatLngBounds()
        removeMarker();
        removeResult();


        for ( let i=0; i<places.length; i++ ) {
            //DB에 있는지 확인 할것
            $.ajax({
                url: "/location/data.do",
                type: "get",
                data: {
                    "location_name" : places[i]["place_name"],
                    "x": places[i]['x'],
                    "y": places[i]['y'],
                    "tag": places[i]['category_group_name']
                },
                contentType: "x-www-form-urlencoded",
                success: (location_data) => {
                    const loc = location_data["loc"]
                    let imgPath =  loc["cover_img_url"] || `/static/image/Food.svg`;
                    let grade = loc['grade']  || 0.0; //use make_grade
                    let cost =  loc["cost"]  || 0;

                    const placePosition = new kakao.maps.LatLng(places[i].y, places[i].x)
                    const marker = addMarker(placePosition)
                    // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                    // LatLngBounds 객체에 좌표를 추가합니다
                    bounds.extend(placePosition);

                    (function(marker,place) {
                        kakao.maps.event.addListener(marker, 'mouseover', function() {
                            markerImage = new kakao.maps.MarkerImage(`${contextPath}/static/image/marker_active.svg`,new kakao.maps.Size(31, 35), new kakao.maps.Point(13, 34));
                            marker.setImage(markerImage)
                            displayMinInfo(marker, loc["location_name"]);
                        });

                        kakao.maps.event.addListener(marker, 'mouseout', function() {
                            markerImage = new kakao.maps.MarkerImage(`${contextPath}/static/image/marker.svg`,new kakao.maps.Size(31, 35), new kakao.maps.Point(13, 34));
                            marker.setImage(markerImage)
                            infowindow.close();
                        });

                        kakao.maps.event.addListener(marker, 'click', function() {
                            displayModal(loc,place);
                        });

                        addResult(loc,place,i)
                        $(`#map-box-preview-item${i}`)
                            .on("click",()=>{ displayModal(loc,place)})

                    })(marker,places[i]);

                },
                error: (err) => {
                    console.log(err);
                }
            })

        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        //kakaoMap.relayout(); //ㅅㅂ 느리다
        //kakaoMap.setBounds(bounds);
    }

    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    function addMarker(position) {
        const imageSrc = `/static/image/marker.svg`// 마커 이미지 url, 스프라이트 이미지를 씁니다
        const    imageSize = new kakao.maps.Size(36, 37) // 마커 이미지의 크기
        const   markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
        const   marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage
        });
        marker.setMap(kakaoMap); // 지도 위에 마커를 표출합니다
        markers.push(marker);  // 배열에 생성된 마커를 추가합니다

        return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
        for ( var i = 0; i < markers.length; i++ ) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    //나중에 함수 합치기
    function addMarkerModal(position) {
        const imageSrc = `${contextPath}/static/image/marker.svg`// 마커 이미지 url, 스프라이트 이미지를 씁니다
        const    imageSize = new kakao.maps.Size(36, 37) // 마커 이미지의 크기
        const   markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
        const   marker = new kakao.maps.Marker({
            position: position, // 마커의 위치
            image: markerImage
        });
        marker.setMap(modalMap); // 지도 위에 마커를 표출합니다
        modalMarkers.push(marker);  // 배열에 생성된 마커를 추가합니다

        return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarkerModal() {
        for ( var i = 0; i < modalMarkers.length; i++ ) {
            modalMarkers[i].setMap(null);
        }
        modalMarkers = [];
    }

    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    function displayMinInfo(marker, title) {

        const content = '<div style="padding:5px;z-index:1;">' + title + '</div>';
        infowindow.setContent(content);
        infowindow.open(kakaoMap, marker);
    }

    function  displayModal(loc,place){

        console.log(loc)
        const position = new kakao.maps.LatLng(place.y, place.x)
        //title
        document.querySelector("#place_name").textContent = loc["location_name"]
        document.querySelector("#resultModalDatas .price-info .price").textContent = loc["cost"]
        document.querySelector("#resultModalDatas .location-info .location").textContent =place["road_address_name"]
        document.querySelector("#resultModalDatas .direction-info .direction").textContent = make_direction(place)
        //img
        document.querySelector("#resultModalImg").style.backgroundImage = `url(${loc["cover_img_url"]})`;


        $(`#optionImage-carouse .carousel-inner`).empty()
        if(place['category_group_name'] ==  "숙박"){
            let r_val = parseInt(Math.random()*5) + 1;
            for (let i = 0; i < 3; i++) {
                const isAc = i == 0 ?  "active" :""
                const carousel =   `
                <div class="carousel-item ${isAc}">
                    <img src="/static/random_img/호텔_객실_img1-${(r_val++)%5 +1}.jpg" class="d-block w-100  " alt="...">
                </div>`
                $(`#optionImage-carouse .carousel-inner`).append(carousel)

            }
        }
        else if( place['category_group_name'] == "음식점" || place['category_group_name'] == "카페"  ){
            for (let i = 0; i < 3; i++) {
                const r_val = parseInt(Math.random()*24) + 1;
                const isAc = i == 0 ?  "active" :""
                const carousel =   `
                <div class="carousel-item ${isAc}">
                    <img src="/static/random_img/식당_img${r_val}.jpg" class="d-block w-100  " alt="...">
                </div>`
                $(`#optionImage-carouse .carousel-inner`).append(carousel)
            }
        }
        else{
            for (let i = 0; i < 3; i++) {
                const r_val = parseInt(Math.random()*16) + 1;
                const isAc = i == 0 ?  "active" :""
                const carousel =   `
                <div class="carousel-item ${isAc}">
                    <img src="/static/random_img/엑티비티_img${r_val}.jpg" class="d-block w-100  " alt="...">
                </div>`
                $(`#optionImage-carouse .carousel-inner`).append(carousel)
            }
        }

        modal.show();
        removeMarkerModal()
        addMarkerModal(position)
        modalMap.setCenter(position);
    }



    //ResultList에 모든 Result을 제거합디다
    const removeResult = ()=>{
        $('.map-box-preview-box').empty()
    }

    const addResult =(loc,place,i)=>{

        const direction = make_direction(place)
        let imgPath =  loc["cover_img_url"] || `/static/image/Food.svg`;
        let grade = loc['grade']  || 0.0; //use make_grade
        let cost =  loc["cost"]  || 0;
        serchResults.push(loc);
        const serchResultForm =
            `<div id="map-box-preview-item${i}" class="map-box-preview-item">
                          
                                <div class="map-box-preview-img" id="map-box-preview-img1">
                                    <img src="${imgPath}" alt="">
                                </div>
                                <div class="description-box">
                                    <div class="place-name">${place["place_name"]}</div>
                                    <div class="grade-box">
                                        <img src="/static/image/Grade-40.jpg" alt="">
                                        <p>4.0 / 5</p>
                                    </div>
                                    <div class="certification-box">
                                        <div class="certification-name"></div>
                                    </div>
                                </div>
                                <div class="description-detail-box">
                                    <div class="cost-box">
                                        <div class="cost-name">가격</div>
                                        <div class="cost-content">${cost}</div>
                                    </div>
                                    <div class="address-box">
                                        <div class="address-name">주소</div>
                                        <div class="address-content">${place["road_address_name"]}</div>
                                    </div>
                                </div>
                            </div>`
        $('.map-box-preview-box').append(serchResultForm)

        //drag event
        const mapBoxPreviewItems = document.querySelectorAll('.map-box-preview-item')
        //add events
        const isEditable = true

        mapBoxPreviewItems .forEach(item => {
            item.setAttribute('draggable',  isEditable);
            item.querySelectorAll('*').forEach(el => el.style.pointerEvents = isEditable ? '' : 'none');
        });

        mapBoxPreviewItems.forEach(item => {
            item.setAttribute('draggable', true);
            item.addEventListener('dragstart', handleDragStart);

            item.querySelectorAll('*').forEach(child => {
                child.setAttribute('draggable', false);
                child.addEventListener('dragstart', e => e.preventDefault());
            });
        });




    };




    //return_grade_img
    const make_grade= (grade) =>{

    }

    const make_direction =(place)=>{
        let station =''
        let min_distance = 100
        const x = place['x']
        const y = place['y']
        for (let index = 0; index < station_data.length; index++) {
            const station_x = station_data[index]["coordinate"][1];
            const station_y = station_data[index]["coordinate"][0];
            const distance = getDistance(x, y, station_x, station_y);
            if(min_distance > distance){
                min_distance = distance
                station =station_data[index]['name']
            }
        }
        return `${station}역 에서 도보로 ${ parseInt(min_distance*15)}분 거리`
    }

    // 라디안 변환 함수
    function toRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    // 두 지점 사이의 거리 계산 함수 (Haversine formula)
    function getDistance(latitude1, longitude1, latitude2, longitude2) {
        const earthRadiusKm = 6371; // 지구 반지름 (단위: 킬로미터)

        // 위도와 경도를 라디안으로 변환
        const lat1 = toRadians(latitude1);
        const lon1 = toRadians(longitude1);
        const lat2 = toRadians(latitude2);
        const lon2 = toRadians(longitude2);

        // 위도 차이와 경도 차이 계산
        const dLat = lat2 - lat1;
        const dLon = lon2 - lon1;

        // Haversine formula 계산
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // 거리 계산 (단위: 킬로미터)
        const distance = earthRadiusKm * c;

        return distance;
    }


    //like location evet
    function ToggleLike(){
        const $this = $(this);
        const isLiked = $this.attr('is-like') === "true"; // 엄격한 비교 사용
        const target_id = $this.attr('target-id');

        console.log($this.attr('is-like'));

        //pick-unpick
        if (isLiked) {
            $this.find('img').attr("src", `${contextPath}/static/image/Unliked-Icon.svg`);
            $this.attr('is-like', false);
        } else {
            $this.find('img').attr("src", `${contextPath}/static/image/Liked-Icon.svg`);
            $this.attr('is-like', true);
        }

        console.log($this);
        console.log(target_id);

        if (target_id && target_id !== "undefined") {
            const formData = new FormData();
            formData.append("type", "location");
            formData.append("target_id", target_id);
            formData.append("id", 3); // 테스트용
            $this.addClass('disabled');
            fetch(`/location/like.do`, {
                method: 'POST',
                body: formData
            }).then(() => {
                $this.removeClass('disabled');
            });
        }
    }



    //calender

    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();
    let startDate =null
    let endDate =null


    const months = [
        '01','02','03','04','05','06','07','08','09','10','11','12',
    ];

    function renderCalendar() {
        $('.calendar-body').empty();
        $('#month-year').text(`${months[month]} ${year}`);

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const firstDayOfMonthNext = new Date(year, month+1, 1).getDay();
        const daysInMonthNext = new Date(year, month + 2, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            $('#cur-calender').append(createEmptyDay());
        }
        for (let i = 1; i <= daysInMonth; i++) {
            $('#cur-calender').append(createDay(year,month,i));
        }

        for (let i = 0; i < firstDayOfMonthNext; i++) {
            $('#next-calendar').append(createEmptyDay());
        }
        for (let i = 1; i <= daysInMonthNext; i++) {
            $('#next-calendar').append(createDay( (month === 11 ? year+1:year) ,(month+1)%12,i));
        }

        if(startDate != null)
        {
            $("#check_in").val(`${startDate.getFullYear()}-${startDate.getMonth() +1}-${startDate.getDate()}`)
        }
        if(endDate != null)
        {
            $("#check_out").val(`${endDate.getFullYear()}-${endDate.getMonth() +1}-${endDate.getDate()}`)
        }

        $("#next-month").text( months[(month+1)%12])
        $("#cur-month").text(months[month])

    }

    function createEmptyDay() {
        return $('<div>').addClass('day');
    }

    function createDay(y,m,d) {
        const div = $('<div>')
            .addClass('day')
            .text(d)
            .on('click',bookingDay);
        let selectedDate = new Date(y, m, d); // Corrected this part
        if (startDate != null && endDate != null &&
            startDate <= selectedDate && selectedDate <= endDate) {
            div.addClass('booked');
        }
        return div
    }

    function bookingDay(){
        const parent_id  = $(this).parent().attr('id')
        $(this).addClass('booked')
        if (startDate == null) {
            if(parent_id ==='next-calendar')
                startDate = new Date(year, (month+1)%12, $(this).text());
            else
                startDate = new Date(year, month, $(this).text());

        }
        else {
            if(parent_id ==='next-calendar')
                endDate = new Date(year, (month+1)%12, $(this).text());
            else
                endDate = new Date(year, month, $(this).text());

        }

        //교환
        if (startDate > endDate) {
            let temp = startDate;
            startDate = endDate;
            endDate = temp;
        }
        console.log(startDate,endDate)
        renderCalendar()
    }


    //각종 이벤트변수 초기화
    initalize_val = ()=>{
        date = new Date();
        month = date.getMonth();
        year = date.getFullYear();
        startDate =null
        endDate =null
    }


    //calender button
    $('#prev').on('click', function () {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        renderCalendar();
    });
    //
    $('#next').on('click', function () {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        renderCalendar();
    });

    //modal show callback
    modal._element.addEventListener('shown.bs.modal', function () {
        modalMap.relayout();    // 지도의 크기가 변동이 있을 경우 함수 호출
    });



    //TEST SERCH
    serchingData() //SEARCH TEST
    renderCalendar()


    $('#map-box-search-button').on('click',serchingData)


})





