const proverbs = [
    {
        yor : 'Ilé ọba t\'ójó, ẹwà ló bùsi',
        lit : `When a King's palace burns down, the rebuilt palace is more beautiful`,
        eng : 'Challenges propel you to creativity and greatness'
    },
    {
        yor : 'Ilé lati n ko ẹṣọ re òde',
        lit : `Charity begins at home`,
        eng : `One's behaviour is a reflection of one's upbringing`
    },
    {
        yor : 'A pẹ ko to jeun, ki jẹ ibajẹ',
        lit : `The person who eats late will not eat spoiled food`,
        eng : 'Do not be in a haste to make wealth, it pays to be patient'
    },
    {
        yor : 'Bí abá sọ òkò sọ́jà ará ilé ẹni ní bá',
        lit : `He who throws a stone in a market, will hit his loved ones`,
        eng : 'Be careful how you treat others, your loved ones may bear the brunt'
    },
    {
        yor : 'Adìẹ funfun kò mọ ara rẹ̀ lágbà',
        lit : `The white chicken does not realize its age`,
        eng : 'Always learn to respect yourself'
    },
    {
        yor : 'A bímọ kò gbọ́n, a ní kó má ṣàá kú : kí ní ńpa ọmọ bí àìgbọ́n?',
        lit : `A child lacks wisdom, and some say that what is important is that the child does not die; what kills more surely than lack of wisdom?`,
        eng : 'A foolish child is not much better than a dead child'
    },
    {
        yor : 'A kì í fá orí lẹhìn olórí',
        lit : `One does not shave a head in the absence of the owner`,
        eng : 'One does not settle a matter in the absence of the person most concerned'
    },
    {
        yor : 'A kì í fi ejò sórí òrùlé sùn',
        lit : `One does not go to bed while a snake is on the roof`,
        eng : 'Never let down your guard while danger still lurks'
    },
    {
        yor : 'A kì í fi ìtìjú kárùn',
        lit : `One does not because of shyness expose oneself to a disease`,
        eng : 'Never be too shy to speak out on your own behalf'
    },
    {
        yor : 'A kì í fi ọlá jẹ iyọ̀',
        lit : `One does not consume salt according to one's greatness`,
        eng : 'Too much of a good thing can be dangerous'
    },
    {
        yor : 'A kì í fi ọ̀nà odò han ikún',
        lit : `One does not show a squirrel the way to the river`,
        eng : 'You cannot teach a person what he already knows'
    },
    {
        yor : 'Gbogbo alangba lo d\'anu delẹ, a ko mọ eyi t\'inú nrun',
        lit : `All lizards lie on their belly, you cannot tell which one has stomach ache`,
        eng : `You cannot determine the challenges a person is going through, by mere looking at them`
    },
    {
        yor : 'Àgbà ki wa lọjà, ki orí ọmọ titun o wọ',
        lit : `You cannot have elders in a market, and have a baby not well positioned on the mother's back`,
        eng : 'Behave in a matured manner to avoid bad reputation'
    },
    {
        yor : 'Ọbẹ̀ kìí gbé inú ̀agbà mì',
        lit : `The soup does not move around in an elder's belly`,
        eng : 'You should learn to keep secrets'
    },
    {
        yor : 'À ń pe gbẹ́nàgbẹ́nà ẹyẹ àkókó ń yọjú',
        lit : `A sculptor is summoned and the woodpecker shows up`,
        eng : 'Do not think too highly of yourself'
    },
    {
        yor : 'Díẹ̀ díẹ̀ nimú ẹlẹ́dẹ̀ẹ́ fi ń wọgbà',
        lit : `Little by little, a pig's nose enters the yard`,
        eng : 'Attend to problems at the early stage, before they become insurmountable'
    },
    {
        yor : 'A fọwọ́ mú ajá o lọ, a ṣẹ̀ṣẹ̀ ńfi ìka méjì pè é',
        lit : `We grab a dog with both hands and it flees, thereafter we beckon to it`,
        eng : 'To regain what you lost, you have to intensify your efforts'
    },
    {
        yor : 'A fún ọ lọ́bẹ̀ o tami si; o gbọ́n ju ọlọ́bẹ̀ lọ',
        lit : `You add water to the soup you were given, you must feel you know more than the cook`,
        eng : 'Learn to stay humble'
    },
    {
        yor : 'A kì í bọ́ sínú omi tán ká máa sá fún ̀otútù',
        lit : `One does jump into a pool, and be scared of being cold`,
        eng : 'Precautions are useful only before the event'
    },
    {
        yor : 'A kì í du orí olórí kí ̀awọ̀dì gbé tẹni lọ',
        lit : `One does not fight to save another person's head, only to have the eagle carry one's own away`,
        eng : `One should not save others at the expense of one's safety`
    },
    {
        yor : 'A kì í fi àìmọ̀wẹ̀ mòòkùn',
        lit : `One does not dive into water without knowing how to swim`,
        eng : 'Never engage in a project for which you lack the requisite skills'
    },
    {
        yor : 'A kì í fi ẹ̀tẹ̀ sílẹ̀ pa làpálàpá',
        lit : `One does ignore leprosy to treat a rash`,
        eng : 'More serious problems deserve more immediate attention'
    },
    {
        yor : 'A kì í fi idà pa ìgbín',
        lit : `One does not use a sword to kill a snail`,
        eng : 'Remedies should be commensurate with the problem'
    },
    {
        yor : 'A kì í gbọ́ ẹjọ́ ẹnìkan dájọ́',
        lit : `One does not deliver a verdict after just hearing one side of a matter`,
        eng : 'Justice should be impartial'
    },
    {
        yor : 'A kì í léku méji ká má pòfo',
        lit : `One does not chase two rats and avoid catching nothing`,
        eng : 'Never try to do two different things at once'
    },
    {
        yor : 'A kì í mọ ọkọ ọmọ ká tún mọ àlè-e rẹ̀',
        lit : `One does not acknowledge the husband of one's daughter and also acknowledge her illicit lover`,
        eng : 'Never betray trust or connive at betraying it'
    },
    {
        yor : 'A kì í pé kí ̀oṣìkà ṣe é ká wò ó',
        lit : `One should not dare a wicked person to do his worst`,
        eng : 'Never tempt evil people to do evil'
    },
    {
        yor : 'A kì í ṣe fáàárí ẹ̀ṣẹ́ didi sọ́mọ adẹ́tẹ̀',
        lit : `One does not boast of one's ability to make a fist in the presence of a leper's child`,
        eng : 'Never make fun of people because of their affliction'
    },
    {
        yor : 'A kì í ṣoore tán ká lóṣòó tì í',
        lit : `One should not do a favour and then camp by it`,
        eng : 'Having done some good, do not hang around to compel gratitude'
    },
    {
        yor : 'A kì í wá aláṣọ-àlà nísọ̀ elépo',
        lit : `One should not look for someone wearing a white garment in the stall of palm oil sellers`,
        eng : 'One should know the likely places to look for whatever one seeks'
    },
    {
        yor : 'A kì í wà nínú ìṣẹ́ ká perin tọrẹ',
        lit : `One does not wallow in poverty, yet kill an elephant to give others`,
        eng : 'Live according to your means'
    },
    {
        yor : 'Àgùtàn to ba ba ajá rìn, a jẹ ẹ igbẹ',
        lit : `A sheep that moves with a dog, will consume faeces`,
        eng : 'Bad company corrupt good manners'
    },
    {
        yor : 'A kì í wíjọ́ọ wíwò ka jàre',
        lit : `One does not complain of being stared at and be vindicated`,
        eng : 'One should not complain that other people are doing what one is also doing'
    },
    {
        yor : 'À ńjùwọn ò ṣéé wí lẹ́jọ́; ìjà ìlara ò tán bọ̀rọ̀',
        lit : `'we are driven by envy of them' is a bad case to make; a quarrel spawned by jealousy lingers on`,
        eng : 'Quarrels whose causes cannot be openly admitted will not readily end'
    },
    {
        yor : 'Àgbà ̀oṣìkà ńgbin ìyà sílẹ̀ de ọmọ ọ rẹ̀',
        lit : `A wicked person sows bitterness for his descendants`,
        eng : 'One character often affects the fortunes of one children'
    },
    {
        yor : 'Àì-sọ̀rọ̀ ní ńmú ẹnu rùn',
        lit : `It's abstention from speaking that causes the mouth to smell`,
        eng : `One should always express one's opinion in a discussion`
    },
    {
        yor : 'Ajàkàṣù  ò mọ̀ bí ìyàn-án mú',
        lit : `The person who eats large helpings does not care that there is a famine`,
        eng : 'Greed knows no thrift'
    },
    {
        yor : 'ọrọ yi so simi lẹnu, o buyọ si. iso o ṣe pọnla, iyọ o ṣe tu danu',
        lit : `This message farts in my mouth, and also add salt. I should not lick the fart, neither should i throw out the salt.`,
        eng : 'one is in a dilemma to choose between 2 conditions by weighing the merits and demerits.'
    },
    {
        yor : 'Kirakita o dola,ka sise bi eru ko da nnkan',
        lit : `Runing helter skelter don't translates into wealth,even one might work like a slave`,
        eng : `God's blessing makes one prosper`
    },
    {
        yor : 'Bi ina ba joni, to jo ọmọ ẹni, tara ẹni la nkọ gbọn',
        lit : `If one is on fire and one's child is on fire, one douses one's fire first`,
        eng : `Without first solving one's problems, one cannot solve others`
    },
    {
        yor : 'Ni iṣoju oloko, ni agbado ti n gbo',
        lit : `In the presence of a farmer, a corn matures`,
        eng : `At the appointed time, nothing can hinder progress`
    },
    {
        yor : 'O nbọ o nbọ lo n bọmọde lẹru',
        lit : `Its almost here! its almost here! is what frightens a child`,
        eng : `Even if a challenge appears insurmountable, there is always a way to tackle it`
    },
    {
        yor : 'A kì í saju eleede pe edee',
        lit : `One should not make a conclusion from a part statement`,
        eng : 'One should not preempt the response to a conversation.'
    },
    {
        yor : 'Moja mosa laa mo akinkanju loju ogun',
        lit : `Retreating is a virtue of a brave man`,
        eng : 'Discretion is a better part of valor.'
    },
    {
        yor : 'Igi gogoro ma gun mi loju, lati okere lati wo',
        lit : `If you do not want to be impaled by a long stick, you stare from a long distance.`,
        eng : 'One avoids danger at an early stage'
    },
    {
        yor : `Eni bama m'obo akoko se bi lagido`,
        lit : `To catch a monkey, you must act like a monkey`,
        eng : 'You have to be in a situation in order to proffer solution to it.'
    },
    {
        yor : `Enibama ba esu jeun sibi e a gun`,
        lit : `You need a long spoon to dine with the devil`,
        eng : 'You have to be extremely careful in your dealings with people with bad reputation'
    },
    {
        yor : `Eti baba nile, eti baba loko. eniyan ni je ba.`,
        lit : `A father's ear at home, another one at the farm. That's human for you.`,
        eng : 'Whatever you do in public, will eventually be heard at home.'
    },
    {
        yor : `Ká dúpẹ́ lọ́wọ́ ẹni tó mọ́ni lójú; ọ̀pọ̀ ni ò wo ibi tí èyàn wà.`,
        lit : `We should thank those who looked at one with disdain.`,
        eng : 'Be forward-looking; be grateful.'
    },
    {
        yor : `A kì í fi ojú ọwọ́ ṣiṣẹ́ tán, káa tún wá fi ẹ̀hìn ọwọ̀ dàánù.`,
        lit : `Never destroy with your backhand what your open hand had accomplished.`,
        eng : 'Avoid hasty and impulsive decisions; handle drastic decisions with caution.'
    },
    {
        yor : `Asúrétete kò ní kọjá ilé, arìngbẹ̀rẹ̀ kò ní sùn sí ọ̀nà.`,
        lit : `Those who run very fast are not going to run beyond their homes (or destination) and those walking gently won't sleep on the way.`,
        eng : 'Be focused and be steadfast; stay in your lane; envy no one.'
    },
    {
        yor : `A kì í fi ojú ọwọ́ ṣiṣẹ́ tán, káa tún wá fi ẹ̀hìn ọwọ̀ dàánù.`,
        lit : `Never destroy with your backhand what your open hand had accomplished.`,
        eng : 'Avoid hasty and impulsive decisions; handle drastic decisions with caution.'
    },
    {
        yor : `Lọ́jọ́ ti omi bá tán lẹ́hìn ẹja, ọwọ́ lásán ni wọ́n máa fi mú u.`,
        lit : `The day water ceases to back the fish, it will simply be picked up (in the river) with mere hands.`,
        eng : 'Good support and network matter; absence of good support could make one vulnerable.'
    },
    {
        yor : `A kì í bá Ọlọ́run ṣòwò ká pàdánù.`,
        lit : `No one trades with God and looses.`,
        eng : 'God is faithful; you can depend on Him.'
    },
    {
        yor : `Kì í ṣe gbogbo ajá tó bá gbó'ni lọ́jà, la ńdá lóhùn.`,
        lit : `It's not all the dogs that bark at one at the marketplace that one responds to.`,
        eng : `Be focused; it's not all issues that should command one's attention.`
    },
    {
        yor : `Ẹni tó ṣe ohun tó dun'ni lóòní, lè ṣe ohun tí yóò dùn mọ́'ni lọ́la.`,
        lit : `A person who hurts one today may still be a source of blessing tomorrow.`,
        eng : `No one is perfect; avoid overreaction and look ahead.`
    }
];