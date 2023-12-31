const answers = [
    {
        id: 1,
        name:'AS',
        title:'Autoestima',
        values :[
            {
              min: 0,
              max: 7,
              response: 'S’evidencia una alta autoestima, mostra que es sent còmoda amb si mateix/a i s’accepta tal com és, sense necessitat de comparar-se amb els altres, valora les seves habilitats i èxits, reconeixent el seu propi valor. ' 
            },
            {
              min: 8,
              max: 16,
              response: 'S’evidencia una autoestima mitjana, mostra una acceptació moderada de si mateix/a, tot i que pot tenir moments de confiança, també pot experimentar dubtes i autocrítica, tendint a comparar-se ocasionalment amb els altres, cercant validació i reconeixement extern. Reconeix algunes de les seves habilitats i èxits, encara que de vegades pot subestimar el seu propi valor.',
            },
            {
	      min: 17,
	      max: 24,
              response: 'S’evidencia una baixa autoestima, mostra una profunda manca de confiança en si mateix/a i una dificultat per acceptar-se tal com és, constantment es compara negativament amb els altres, sentint-se inferior i sense valor, tendint a subestimar les seves habilitats i èxits, i te dificultats per reconèixer qualsevol forma d’èxit personal.',
            },
        ],
    },
    {
        id: 2,
        name:'AP',
        title:'Autopercepció',
        values :[
            {
              min: 0,
              max: 5,
              response: 'S’evidencia una bona autopercepció, mostra una connexió positiva i saludable amb el seu propi ésser, reconeixent i valorant les seves capacitats, qualitats i èxits sense dependre del seu aspecte físic.',
            },
            {
              min: 6,
              max: 10,
              response: 'S’evidencia una distorsionada autopercepció, mostra una relació equilibrada entre les seves capacitats i el seu aspecte físic, reconeixent que la seva vàlua personal no es limita únicament a la seva aparença externa, sinó que també es basa en les seves habilitats, els èxits i les qualitats internes, tot i que atorga bastanta importància al seu aspecte físic.',
            },
            {
              min: 11,
              max: 16,
              response: 'S’evidencia una autopercepció negativa, mostra una relació desequilibrada entre les capacitats, la vàlua personal i l’aspecte físic, tendint a jutjar-se durament basant-se en estàndards externs de bellesa i aparença, sentint que no és suficient o digna de valor a causa del seu aspecte.',
            },
        ],
    },
    {
        id: 3,
        name:'SC',
        title:'Sentiments de culpa',
        values :[
            {
              min: 0,
              max: 3,
              response: 'No s’evidencien sentiments de culpa relacionats amb l’acte de menjar, reconeix que l’alimentació és una part natural i necessària de la vida, i que gaudir d’un àpat no ha d’estar acompanyat de sentiments negatius o de culpa.',
            },
            {
              min: 4,
              max: 8,
              response: 'S’evidencia una lleu incomoditat amb un mateix relacionada amb l’acte de menjar, tot i que reconeix que l’alimentació és una part natural i necessària de la vida, en ocasions pot sentir remordiments.',
            },
            {
              min: 9,
              max: 12,
              response: 'S’evidencien sentiments de culpa relacionats amb l’acte de menjar, mostra tenir unes creences negatives arrelades sobre l’alimentació, l’aparença física o l’autopercepció.',
            },
        ],
    },
    {
        id: 4,
        name:'SD',
        title:'Simptomatologia depressiva',
        values :[
            {
              min: 0,
              max: 10,
              response: 'No s’evidencia la presència de simptomatologia depressiva, mostra interès en les relacions personals, gaudint de les diferents activitats que realitza.',
            },
            {
              min: 11,
              max: 19,
              response: 'S’evidencia indicis de la presència de simptomatologia depressiva, mostra manca d’interès en activitats abans gaudia.',
            },
            {
              min: 20,
              max: 28,
              response : 'S’evidencia la presència de simptomatologia depressiva, mostra manca d’interès en activitats abans gaudia, disminució de la libido, aïllament social.',

            },
        ],
    },
    {
        id: 5,
        name:'CS',
        title:'Condicions socials',
        values :[
            {
              min: 0,
              max: 3,
              response: 'No s’evidencien sentiments negatius relacionats amb la ingesta d’aliments en públic.',
            },
            {
              min: 4,
              max: 8,
              response: 'S’evidencia una lleu incomoditat relacionada amb la ingesta d’aliments en públic.',
            },
            {
              min: 9,
              max: 12,
              response: 'S’evidencien sentiments negatius relacionats amb la ingesta d’aliments en públic i evitació d’aquesta situació.',
            },
        ],
    },
    {
        id: 6,
        name:'P',
        title:'Pes',
        values :[
            {
              min: 0,
              max: 7,
              response: 'No s’evidencia preocupació pel pes, es mostra satisfet/a amb el seu pes, sense necessitat de controlar-lo ni voler canviar-lo.',
            },
            {
              min: 8,
              max: 16,
              response: 'S’evidencia una importància pel pes, no es mostra del tot satisfet/a amb aquest, el controla o té algun pensament de canvi.',
            },
            {
              min: 17,
              max: 24,
              response: 'S’evidencia una marcada preocupació pel pes, mostra un clar desig de canvi, sentiments negatius, i un fort control.',
            },
        ],
    },
    {
        id: 7,
        name:'F',
        title:'Forma',
        values :[
            {
              min: 0,
              max: 6,
              response: 'No s’evidencia preocupació per la forma corporal, es mostra satisfet/a amb la seva constitució, sense necessitat de controlar-la ni voler canviar-la.',
            },
            {
              min: 7,
              max: 13,
              response: 'S’evidencia una importància per la forma corporal, no es mostra del tot satisfet/a amb aquesta, la controla o té algun pensament de canvi.',
            },
            {
              min: 14,
              max: 20,
              response: 'S’evidencia una marcada preocupació per la forma corporal, mostra un clar desig de canvi, sentiments negatius, i un fort control.',
            },
        ],
    },
    {
        id: 8,
        name:'RM',
        title:'Rebuig menjar',
        values :[
            {
              min: 0,
              max: 6,
              response: 'S’evidencia que gaudeix de l’alimentació, mostra una clara apreciació del menjar en termes de gustos i textures, considera l’acte de menjar com un plaer.',
            },
            {
              min: 7,
              max: 13,
              response: 'S’evidencia que no troba plaer ni satisfacció en l’experiència alimentària, mostra un enfocament cap al menjar més funcional i orientat a cobrir les necessitats nutricionals bàsiques, no s’observa un gaudi evident en menjar, percep el menjar com una tasca més i no com una oportunitat per gaudir de sabors, textures i aromes.',
            },
            {
              min: 14,
              max: 20,
              response: 'S’evidencia un fort rebuig al menjar i manca d’interès per alimentar-se, mostra una clara aversió cap a certes textures o consistències específiques, trobant-ne la presència desagradable o fins i tot repulsiva, i cap a certs sabors, que poden resultar desagradables o difícils de tolerar, portant a una manca d’interès per l’alimentació.',
            },
        ],
    },
    {
        id: 9,
        name:'R',
        title:'Ruminacions',
        values :[
            {
              min: 0,
              max: 2,
              response: 'No s’evidencia presencia de regurgitacions.',
            },
            {
              min: 3,
              max: 8,
              response: 'S’evidencia presencia de regurgitacions i mostra sentiment de vergonya cap aquest fet.',
            },
        ],
    },
    {
        id: 10,
        name:'D',
        title:'Dieta',
        values :[
            {
              min: 0,
              max: 7,
              response: 'No s’evidencia la presència de dietes restrictives, mostra una relació amb el menjar flexible i equilibrada, sense donar importància a regles estrictes o limitacions extremes a la seva alimentació, tampoc s’observa un enfocament obsessiu a comptar calories, evitar grups d’aliments o establir restriccions severes a la quantitat de menjar consumit.',
            },
            {
              min: 8,
              max: 16,
              response: 'S’evidencia una disminució de la quantitat i varietat d’aliments, mostra preocupació per l’alimentació disminuint el seu consum d’aliments, tant en quantitat com en varietat, amb una tendència cap a una dieta restrictiva.',
            },
            {
              min: 17,
              max: 24,
              response: 'S’evidencia una dieta restrictiva, mostra limitació en la varietat i quantitat d’aliments que consumeix, implicant l’exclusió i la restricció de certs grups d’aliments i àpats, seguint regles estrictes, com evitar carbohidrats, greixos, sucres o aliments processats, mostrant una preocupació excessiva pel recompte de calories i el control de la ingesta alimentària.',
            },
        ],
    },
    {
        id: 11,
        name:'EF',
        title:'Exercici físic',
        values :[
            {
              min: 0,
              max: 6,
              response: 'No s’evidencia obsessió amb l’exercici com a mitjà per perdre pes, mostra un enfocament cap a l’activitat física equilibrat i centrat en el benestar general en lloc de perseguir únicament objectius estètics, no s’observa una compulsió per entrenar excessivament o una dependència emocional envers l’exercici com a única manera de mantenir el pes sota control.',
            },
            {
              min: 7,
              max: 13,
              response: 'S’evidencia un interès per l’exercici com a mitjà per perdre pes, mostra motivació i dedicació cap a l’activitat física, impulsada pel desig d’assolir un pes corporal específic, amb un notable compromís per assolir els objectius de pèrdua de pes.',
            },
            {
              min: 14,
              max: 20,
              response: 'S’evidencia clarament una obsessió amb l’exercici com a mitjà per perdre pes, mostra un enfocament cap a l’activitat física dominat per una compulsió i una preocupació constant per cremar calories i assolir un cos prim, convertint l’activitat física en una obsessió que ocupa gran part del temps i energia, deixant poc espai per a altres activitats o interessos. Hi ha una cerca desesperada per aconseguir resultats ràpids en termes de pèrdua de pes, cosa que pot portar a entrenaments excessius, fins i tot a expenses de la seva salut i benestar.',
            },
        ],
    },
    {
        id: 12,
        name:'CM',
        title:'Consum medicaments',
        values :[
            {
              min: 0,
              max: 5,
              response: 'No s’evidencia consum de medicaments, particularment pel que fa a laxants, ènemes, medicaments per aprimar-se i diürètics. L’absència de consum d’aquest tipus de medicaments és positiva, ja que el seu ús indegut pot comportar riscos per a la salut.',
            },
            {
              min: 6,
              max: 11,
              response: 'S’evidencia un consum de medicaments, particularment pel que fa a laxants, ènemes, medicaments per aprimar-se i diürètics, tot i que la seva finalitat no necessàriament està relacionada amb la pèrdua de pes. És important tenir esbrinar si l’ús d’aquests medicaments està essent supervisat per professionals de la salut i està basat en necessitats mèdiques específiques.',
            },
            {
              min: 12,
              max: 20,
              response: 'S’evidencia un consum de medicaments, particularment pel que fa a laxants, ènemes, medicaments per aprimar-se i diürètics, amb la finalitat d’aprimar-se. Mostra una actitud preocupant cap al cos i una possible obsessió per assolir una aparença física determinada, sense mostrar preocupació per la salut.',
            },
        ],
    },
    {
        id: 13,
        name:'V',
        title:'Vomit',
        values :[
            {
              min: 0,
              max: 7,
              response: 'S’evidencia una opinió negativa sobre el vòmit autoinduït, mostra una actitud que reflecteix una comprensió dels riscos i les conseqüències negatives associades amb aquesta pràctica.',
            },
            {
              min: 8,
              max: 16,
              response: 'S’evidencia una predisposició cap al vòmit autoinduït, mostra una actitud que pot ser indicativa d’una predisposició cap al vòmit autoinduït manifestant-se a través de pensaments obsessius sobre el pes, el menjar i la imatge corporal, així com de la cerca de mètodes extrems per controlar el pes.',
            },
            {
              min: 17,
              max: 24,
              response: 'S’evidencia una pràctica de vòmit autoïnduit, mostra una actitud oberta cap a aquesta conducta sense mostrar preocupació per la seva perillositat, reflectint pensaments obsessius sobre el pes, el menjar i la imatge corporal, arribant a relacionar aquest comportament amb alleugeriment emocional.',
            },
        ],
    },
    {
        id: 14,
        name:'SOAA',
        title:'Suplements nutritius o alimentació artificial',
        values :[
            {
              min: 0,
              max: 3,
              response: 'No s’evidencia el consum de suplements alimentaris ni d’alimentació enteral, mostra que la seva alimentació es basa principalment en aliments naturals i no requereix complements addicionals per cobrir les seves necessitats nutricionals.',
            },
            {
              min: 4,
              max: 8,
              response: 'S’evidencia un possible consum de suplements alimentaris, mostra la presència de suplements a la seva rutina alimentària suggerint que busca complementar la seva dieta amb nutrients addicionals per tal assolir un equilibri nutricional òptim, per la necessitat de cobrir deficiències nutricionals, augmentar el rendiment esportiu o donar suport a objectius específics de salut.',
            },
            {
              min: 9,
              max: 12,
              response: 'S’evidencia el consum de suplements alimentaris i/o d’alimentació enteral, mostra que la seva alimentació no es suficient per tenir un bon estat de salut, i necessita suplements alimentaris o alimentació enteral.',
            },
        ],
    },
    {
        id: 15,
        name:'CSNN',
        title:'Consum de substàncies no nutritives',
        values :[
            {
              min: 0,
              max: 6,
              response: 'No s’evidencia interès per consumir substàncies no nutritives.',
            },
            {
              min: 7,
              max: 15,
              response: 'S’evidencia un interès notable per consumir substàncies no nutritives.',
            },
            {
              min: 16,
              max: 24,
              response: 'S’evidencia un consum de substàncies no nutritives.',
            },
        ],
    },
    {
        id: 16,
        name:'FG',
        title:'Fartaneres general',
        values :[
            {
              min: 0,
              max: 6,
              response: 'No s’evidencia la presència d’ingestió de grans quantitats d’aliments, no mostra un consum excessiu en poc temps d’aliments.',
            },
            {
              min: 7,
              max: 13,
              response: 'S’evidencia una predisposició envers a consumir grans quantitats d’aliments, mostra una tendència o propensió a poder experimentar episodis de consum excessiu d’aliments, de manera compulsiva, en un curt període de temps. Pot ser un reflex de dificultats emocionals, estrès, problemes d’imatge corporal, baixa autoestima. És important destacar que la predisposició cap a les fartaneres no necessàriament implica que s’estiguin experimentant episodis de manera activa.',
            },
            {
              min: 14,
              max: 20,
              response: 'S’evidencia la presència de consum de grans quantitats d’aliments, mostra una ingesta compulsiva de grans quantitats d’aliments en un curt període de temps, sense la necessitat d’experimentar gana física, que genera sentiments de culpa, vergonya o disgust cap a si mateixes després dels episodis. Aquests episodis poden estar associats a l’ansietat, l’estrès, la baixa autoestima, problemes d’imatge corporal, provocant.',
            },
        ],
    },
    {
        id: 17,
        name:'FC',
        title:'Fartaneres control',
        values :[
            {
              min: 0,
              max: 6,
              response: 'No s’evidencia descontrol ni sentiments de descontrol en consumir aliments, mostra una alimentació equilibrada i conscient.',
            },
            {
              min: 7,
              max: 13,
              response: 'S’evidencia una predisposició al descontrol i als sentiments de descontrol en consumir aliments, mostra una manca d’equilibri i autocontrol en la seva relació amb el menjar, manifestant-se a través de patrons d’alimentació desordenats i emocions intenses associades a la ingesta d’aliments. Mostra dificultat per regular la quantitat i varietat d’aliments que consumeix, que el/la porten a una predisposició d’episodis d’excés alimentari.',
            },
            {
              min: 14,
              max: 20,
              response: 'S’evidencia un clar descontrol i sentiments de descontrol en consumir aliments, mostra una relació amb el menjar caracteritzada per la manca d’equilibri i la sensació de no poder controlar adequadament els hàbits alimentaris, mostra experimentar una sensació aclaparadora de descontrol, impulsant-la a menjar en excés, sense poder aturar-se, fins i tot quan ja ha assolit la sacietat. Els aliments es converteixen en una forma d’escapament i de gratificació, utilitzats per fer front a emocions difícils o situacions estressants. A més del descontrol físic, també mostra sentiments de descontrol emocional relacionats amb el menjar, els aliments es converteixen en una font de consol o distracció davant de situacions d’ansietat, tristesa o estrès, buscant omplir un buit emocional a través de la ingesta excessiva d’aliments, cosa que genera una sensació de culpa i penediment posteriorment.',
            },
        ],
    },
]

export default answers;
