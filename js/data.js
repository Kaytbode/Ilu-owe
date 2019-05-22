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
    },
    {
        yor : `Ilẹ̀ mọ́, ọ̀lẹ pòṣé.`,
        lit : `The day breaks and the indolent hissed.`,
        eng : `Be diligent.`
    },
    {
        yor : `Bí ikú ilé ò pa'ni, tòde ò leè pa'ni.`,
        lit : `If there is no enemy within, the one outside can do us no harm.`,
        eng : `Choose your friends wisely; worry less about the enemy without.`
    },
    {
        yor : `Èyàn kì í mọ iyì ohun tó ní, à fi tó bá sọọ́ nù.`,
        lit : `We seldom appreciate what we have, until we lose the thing.`,
        eng : `Familiarity breeds contempt.`
    },
    {
        yor : `Tí a bá ju abẹ̀bẹ̀ sí òkè nígbà igba, ibi pẹlẹbẹ náà ló máa fi lé lẹ̀.`,
        lit : `Even if a hand-fan is thrown up two hundred times, it will consistently rest on one of its flat sides.`,
        eng : `Stubbornness regardless of circumstances; be flexible and open-minded.`
    },
    {
        yor : `Mímì lẹpọ̀n àgbò ńmì, kò lè já.`,
        lit : `The ram's testicles are merely dangling, they cannot fall off.`,
        eng : `Keep hope alive; don't give up.`
    },
    {
        yor : `Ní tútù là ńká ẹja kò; ẹja gbígbẹ ò ṣeé ká.`,
        lit : `Fish may be bent only while still fresh; dried fish cannot be bent.`,
        eng : `Address issues promptly and before they get complicated; complex issues can be difficult to resolve.`
    },
    {
        yor : `Gbólóhùn kan lè ba ọ̀rọ̀ jẹ́, gbólóhùn kan náà lè tún ọ̀rọ̀ ṣe.`,
        lit : `One sentence can mess up a discussion and one sentence can make it better.`,
        eng : `Words have consequences; use them wisely.`
    },
    {
        yor : `Ẹyẹ ò lè fi apá kan fò.`,
        lit : `A bird cannot fly with one wing.`,
        eng : `We need one another; together we can do more.`
    },
    {
        yor : `Ẹni tó kọ̀ tí kò sin Ọlọ́run, òrìṣà kékèèké tí kò to Ọlọ́run ló máa sìn.`,
        lit : `Whoever refuses to worship God will end up worshipping lesser gods.`,
        eng : `To reject God is to accept the consequence of His absence.`
    },
    {
        yor : `Gbogbo ìgbẹ́ kọ́ lọdẹ ti ńpa ọ̀yà; gbogbo ogun kọ́ lakíkanjú ti ńyege.`,
        lit : `It's not from all forests that a hunter kills a grasscutter; it's not all battles that a warrior wins.`,
        eng : `Win some, lose some; don't be deterred; rise up and try again; there'll always be another day.`
    },
    {
        yor : `Ayé tí ẹṣin ò jẹ, tí ìrù ìdí rẹ̀ bá ní sùúrù, á jẹ jù bẹ́ẹ̀ lọ.`,
        lit : `If the tail of a horse can be patient (to become a flywhisk), it will surpass the quality of life never enjoyed by the horse.`,
        eng : `Be patient; the best is yet to come.`
    },
    {
        yor : `Ẹni tó ńbẹ̀rù àti ṣubú, àti dìde á nira fún un.`,
        lit : `Whoever is scared of falling will find rising difficult.`,
        eng : `Be courageous; be bold; nothing ventured, nothing gained.`
    },
    {
        yor : `A kì í fi ọjọ́ kan, bọ́ ọmọ tó rù.`,
        lit : `A lean child cannot be fattened in just one day.`,
        eng : `Good things take time; be patient; don’t force issues before their time.`
    },
    {
        yor : `Tí àdúrà bá gbà tán, apá aládúrà ò ní ka.`,
        lit : `When a prayer is answered, the person who prayed would be overwhelmed.`,
        eng : `Prayers work; answers may be so complete as to be overwhelming.`
    },
    {
        yor : `Tí a bá fi ogún ọdún ṣánpá, ọdún wo la ó fò? `,
        lit : `If we flap arms for twenty years, when are we going to fly?`,
        eng : `Make hay while the sun shines; promptly take advantage of opportunities.`
    },
    {
        yor : `Ikú fẹ́ pa alápatà ó ńkígbe; ọmọ ẹranko tó ti dá lóró ńkọ́?`,
        lit : `Death stalks the butcher and he screams; what about the animals he's butchered?`,
        eng : `Be fair and considerate; don't demand from anyone what you are unwilling to impose on yourself.`
    },
    {
        yor : `Bí ọ́mọdé bá ṣubú á wo iwájú; bí àgbà bá ṣubú á wo ẹ̀hìn. `,
        lit : `Upon falling, a youngster looks ahead (for help); an elder looks back (for the cause).`,
        eng : `Prevention is better than cure; good to look for help after a fall, but better to prevent a recurrence.`
    },
    {
        yor : `Ẹni tó ńsáré tó ńwo ẹ̀hìn, ó di dandan, kó fi ẹsẹ̀ kọ.`,
        lit : `Whoever keeps looking back while running will certainly stumble.`,
        eng : `Stay focused; ignore distractions.`
    },
    {
        yor : `Àkàbà tó bá fi ara ti ilẹ̀, tó bá fi ara ti ilé, kò lè yẹ̀ dànù.`,
        lit : `A ladder that rests on both the ground and the wall, cannot easily fall off.`,
        eng : `Good support empowers and protects; seek to leverage on it.`
    },
    {
        yor : `Ọlọ́run ò dá kainkain kó tóbi, àtapa ni ì bá máa ta èèyàn.`,
        lit : `God did not create the ant big for a reason; it would have been stinging people to death.`,
        eng : `Unpleasant manners, quite often, limit us; oppress no one with your privileges.`
    },
    {
        yor : `Àṣẹ̀ṣẹ̀ dáyé ológbò ni í jìyà, bó bá dàgbà, á tó ọdẹ ẹ́ ṣe.`,
        lit : `Only as a kitten is the cat in deprivation, once fully grown it can do its own hunting.`,
        eng : `The best is yet to come; keep hope alive.`
    },
    {
        yor : `Eré tí ajá bá fi ogún ọdún sá, ìrin fàájì ni fún ẹṣin.`,
        lit : `A race that takes dogs twenty years, is a mere leisurely walk to horses.`,
        eng : `Different strokes for different folks; what proves a challenge to one, may well be a walkover to another.`
    },
    {
        yor : `Ẹranko tó gbọ́n bí ajá kò sí; ajá mọ ọmọ tirẹ̀ ńfún lọ́mú, ó mọ ti òdù ọ̀yà ńkì mọ́'lẹ̀.`,
        lit : `No animal is as crafty as the dog; it knows how to suckle its offsprings and pounce on those of the grass-cutters. `,
        eng : `Shun unbridled craftiness and self-centeredness.`
    },
    {
        yor : `Ọ̀kẹ́rẹ́ tí yóò gun igi ọ̀gẹ̀dẹ̀, èékánná rẹ̀ yóò mú ṣáṣá. `,
        lit : `A squirrel that wants to climb the plantain tree must have sharp claw nails.`,
        eng : `Nothing good comes easy; lofty goals must be well prepared for.`
    },
    {
        yor : `Ìwà rere lẹ̀ṣọ́ ènìyàn.`,
        lit : `Good character is man’s adornment.`,
        eng : `Good character traits are adorable and attractive; we ought to cultivate them.`
    },
    {
        yor : `Ẹni ejò bá ti bùjẹ rí, bó bá rí ekòló, yóò họ.`,
        lit : `Whoever had once been bitten by a snake, would flee at the sight of an earthworm.`,
        eng : `Once beaten, twice shy; quite often, our past exerts pressure on our present.`
    },
    {
        yor : `Ẹní tó rí òkú ìkà nílẹ̀ tó taá ní ìpá, ìkà ti di méjì.`,
        lit : `Whoever came across the corpse of a wicked fellow and kicked it turned himself or herself into a wicked person, as well.`,
        eng : `Forgive and forget; we shouldn't always seek to get even.`
    },
    {
        yor : `Ọsán tó já ló sọ ọrún di ọ̀pá.`,
        lit : `The bowstring that got broken was what turned the bow into a mere baton.`,
        eng : `There is a cause to every effect; a minor issue may produce a major consequence.`
    },
    {
        yor : `Mọ̀jà, mọ̀sá, ni ti akínkanjú; akínkanjú tó mọ̀ọ́ jà tí kò mọ̀ọ́ sá á bá ogun lọ.`,
        lit : `Warriors must know when to fight and when to retreat; a warrior who knows when to fight, but not when to retreat will perish in battle.`,
        eng : `Timing is crucial; know when to pursue, defer or quit.`
    },
    {
        yor : `Bí a bá ní sùúrù, ohun tí ò tó, ṣì ńbọ̀ wá ṣẹ́kù. `,
        lit : `If we are patient, whatever is insufficient will be in excess soon enough.`,
        eng : `With patience, virtually nothing is impossible.`
    },
    {
        yor : `A kì í wo ago aláago ṣiṣẹ́.`,
        lit : `Never carry out your duties using someone else's timepiece.`,
        eng : `Do not compare yourself with anyone; stay in your lane; envy no one.`
    },
    {
        yor : `Adániwáyè ò gbàgbé ẹnìkan; àìmàsìkò ló ńdààmú ẹ̀dá.`,
        lit : `God has not forgotten anyone; ignorance of divine timing is what makes us fret.`,
        eng : `Keep hope alive; the best is yet to come.`
    },
    {
        yor : `Ojú ló ńkán owó tó sọnù; ìgbà wo ni níná ò ní kàn án tẹ́lẹ̀?`,
        lit : `The sum of money that got lost is merely in haste; would it not be spent, eventually? `,
        eng : `Be patient; let things evolve at their time.`
    },
    {
        yor : `Ọ̀pọ̀ ló fẹ lápa láì lápá, bí èèyàn ò sì lápá, kò leè lápa.`,
        lit : `Many want to make a mark without effort, yet without effort, no marks can be made.`,
        eng : `Nothing ventured, nothing gained; be willing to pay the price.`
    },
    {
        yor : `Tí ẹ̀dá bá fẹ́ gba àwìn ẹ̀bà, ni wọ́n máa ńṣe ojú àánú; tí wọ́n bá yó tán, wọ́n á di ọkọ olúwa wọn.`,
        lit : `People present a facade of humility when seeking favour; once satisfied, they easily lord it over their benefactors.`,
        eng : `Be perceptive; appearance can be deceptive.`
    },
    {
        yor : `Agbọ́n tí géńdé rí tó ńsá, ni aláàmù ńṣà jẹ lẹ́ẹ̀gbẹ́ ògiri.`,
        lit : `The same wasps that humans run from are what lizards, crawling on walls, easily snap up and eat.`,
        eng : `Different strokes for different folks; what challenges someone may be well be an opportunity to another.`
    },
    {
        yor : `Olè tó gbé kàkàkí ọba, níbo ni yóò ti fun ún?`,
        lit : `Where would the thief who stole the king's bugle blow it?`,
        eng : `We ought to walk in wisdom; some actions are inherently unwise and ultimately self-defeating.`
    },
    {
        yor : `Gbòngbò kan ṣoṣo kò gbọdọ̀ ré ọ̀jọ̀gbọ́n lẹ́ẹ̀pa lẹ́ẹ̀mejì.`,
        lit : `The same tree stump should not trip a learned person twice.`,
        eng : `Discretion is a better part of valour; a wise fish seldom gets caught twice with the same net.`
    },
    {
        yor : `Ẹyìn tí yóò di epo, yóò tọ́ iná wò.`,
        lit : `A palm nut fruit that wants to become palm oil must be prepared to have a taste of fire.`,
        eng : `Nothing ventured, nothing gained.`
    },
    {
        yor : `A kì í tojú oníka mẹ́ẹ̀sán kàá.`,
        lit : `Never openly count the toes of someone with nine toes.`,
        eng : `Be considerate, courteous, and tactful; never deliberately and pointlessly embarass anyone.`
    },
    {
        yor : `Obì tó bá fara pamọ́, ló máa ńgbó.`,
        lit : `The kolanut fruit that hides itself is the one that grows to maturity.`,
        eng : `It is good to fly under the radar sometimes; drawing undue attention to oneself isn't always beneficial.`
    },
    {
        yor : `Gèlè ò dùn bí i ká mọ̀ọ́ wé, ká mọ̀ọ́ wé, kò dà bí i kó yẹ'ni.`,
        lit : `The beauty of a woman's head-tie lies not just in knowing how to tie it, but in how well it fits when tied.`,
        eng : `Ultimately, end results not activities count.`
    },
    {
        yor : `Oò ṣá igi lọ́gbẹ́, oò ta ògùrọ̀ lọ́fà, o dé ìdí ọ̀pẹ, o ńgbẹ́'nu s'ókè, ṣé ọ̀fẹ́ ló máa ńro ni? `,
        lit : `You neither cut an oil palm, nor punctured a raffia palm, yet you opened up your mouth under a palm for wine; does the wine drip freely?`,
        eng : `Nothing ventured, nothing gained`
    },
    {
        yor : `Obìnrin kì í dàgbà jù lọ́wọ́ ọkọ rẹ̀; bí eyín bá ku méjì lẹ́nu ìyá, ọmọge ni lójú baba.`,
        lit : `A woman is never too old to her husband; even if she's lost all her teeth, a maiden she remains to her man.`,
        eng : `Love is it; with love, other concerns pale.`
    },
    {
        yor : `Ẹni tí kò bá lè ṣe bí aláàárù l'Óyìngbò, kò lè ṣe bí Adégbọrọ̀ l'Ọ́jà Ọba.`,
        lit : `Whoever is not willing to be a hired hand in a local market, cannot hope to become a wealthy merchant in a major one.`,
        eng : `Be willing to start with what you have, right where you are.`
    },
    {
        yor : `Tí òjò bá kọ̀ tí kò rọ̀, ìyẹn ò ní ká sọ pé, kí omi òkun ya wọ ìlú. `,
        lit : `That it has not rained for a while is no reason to wish the sea would flood the city.`,
        eng : `Reactions should be commensurate; adopt extreme and radical measures with caution.`
    },
    {
        yor : `Oko dùn ńro, l'agbẹdẹ ṣe ńrọ ọkọ́!`,
        lit : `Farming is so great, which is why blacksmiths opt to make hoes (for others)!`,
        eng : `Be perceptive to read between the lines; the proverb employs sarcasm to indicate that actions generally speak louder than words.`
    },
    {
        yor : `Pẹ̀lẹ́pẹ̀lẹ́ la ńpa àmúkùrù ẹpọ̀n. `,
        lit : `It is with gentleness and caution that one kills the black ant lodged around the scrotum.`,
        eng : `A delicate matter must be gently and carefully handled.`
    },
    {
        yor : `Àjọjẹ ò dùn bí ẹnìkan ò bá ní; ọjọ́ a ní la ńṣe àjọjẹ.`,
        lit : `Sharing can be hard going when one party lacks; we are usually happy to share, when we all can give.`,
        eng : `It's good to give to others, but better to empower them; it's better to teach people to fish than give them fish`
    },
    {
        yor : `Ọbẹ̀ tó dùn kì í pẹ́ nínú ìṣasùn.`,
        lit : `A tasty soup seldom lasts long in the cooking pot.`,
        eng : `Everybody loves good things; if it is good, it will be in high demand.`
    },
    {
        yor : `Ẹni tó bá ní tòún bàjẹ́, tó bá rí ti ẹlòmíì á yin Ọlọ́run lógo.`,
        lit : `Whoever feels his case is deplorable will give glory to God on learning of another's (possibly worse case).`,
        eng : `Contentment and attitude of gratitude are great virtues.`
    },
    {
        yor : `Ààrò kì í gbóná kó má tutù.`,
        lit : `The hearth does not get hot, without becoming cold eventually.`,
        eng : `Whatever is hot today, will one day become cold; tough times won't last forever; keep hope alive.`
    },
    {
        yor : `Àgbẹ̀ tó roko tí kò gbin ọkà lóun dá ikún lóró; ikún kọ́ ló dá lóró, ara ẹ̀ ló dá lóró.`,
        lit : `A farmer ploughed his farm, but refused to plant any corn & claimed he's hurting the ground squirrel; he hasn't hurt the squirrel, but himself.`,
        eng : `Vindictive actions can be self-defeating.`
    },
    {
        yor : `Adẹ́tẹ̀ ò lè fún wàrà, ṣùgbọ́n ó lè da wàrà nù.`,
        lit : `A leper is unable to express milk, but can very well waste it.`,
        eng : `Ignore or underestimate no one; those who cannot build, may be able to cause untold destruction.`
    },
    {
        yor : `Àjùmọ̀bí kò kan ti àánú, ẹni orí rán sí'ni ló ńṣe'ni lóore.`,
        lit : `Kindness may not necessarily come from one's siblings but those divinely sent to one.`,
        eng : `Help may not necessarily come from expected sources; keep an open-mind, always.`
    },
    {
        yor : `Òkò tí a bá bínú jù, kì í pa ẹyẹ.`,
        lit : `A stone thrown at a bird in anger cannot kill the bird.`,
        eng : `Actions taken in anger seldom achieve desired goals; master your emotions.`
    },
    {
        yor : `Àyè kì í há adìyẹ kó má lè dé ìdí àba rẹ̀.`,
        lit : `A hen is never too busy to brood over its eggs.`,
        eng : `We are always able to make time for what is crucial to us.`
    },
    {
        yor : `A kì í bínú sí ẹni tí a kò rí.`,
        lit : `Never be angry with someone you have not seen (or first heard out).`,
        eng : `Never rush to judgment; there is always a chance you could be wrong; always give people the benefit of the doubt.`
    },
    {
        yor : `Ọ̀pọ̀lọ́ gbé ọmọ sílẹ̀ ó gbé ọkọ pọ̀n, ó lọ́rọ̀ ọkọ bàǹtà banta ni.`,
        lit : `The frog dropped its baby to back its mate, saying husbands are crucial.`,
        eng : `Love is powerful; virtually nothing is impossible or irrational, where love exists.`
    },
    {
        yor : `Ilẹ̀ àánú Olúwa kì í ṣú.`,
        lit : `The sun of God's mercy never sets.`,
        eng : `God's mercy never runs out; keep hope alive and trust Him.`
    },
    {
        yor : `Ìfẹ́ fọ́jú; obìnrin tí a bá fẹ́ràn, kì í ní àléébù.`,
        lit : `Love is blind; a woman one truly loves seldom has blemishes.`,
        eng : `With love, other concerns pale; if it's wrong, love won't see it.`
    },
    {
        yor : `Ẹni tí a fẹ́ rí, la fẹ́ rí; kò sí ọjọ́ táa jí, táà rí èèyàn.`,
        lit : `Our hearts yearn only for those we desire; there's no day we wake without people around us.`,
        eng : `Love can be choosy; loneliness is not for want of people around.`
    },
    {
        yor : `Ìrèké ò níbùdó; ibi gbogbo ló gba alágbára.`,
        lit : `The sprouting of the sugarcane is not constrained to a specific place; every situation suits a hard worker just fine.`,
        eng : `Diligence pays; the diligent person seldom whines.`
    },
    {
        yor : `Agara kì í dá oníṣẹ́ Ọlọ́run.`,
        lit : `God's messenger never grows weary.`,
        eng : `God cannot be overwhelmed with man's needs.`
    },
    {
        yor : `A kì í dámọ̀nràn àti tà'kìtì lágbàlá ọ̀bọ, nítorí ọ̀bọ fúnra'ra rẹ̀, ọba òkìtì ni.`,
        lit : `Never toy with the idea of  somersaulting in the vicinity of a monkey; monkeys themselves, are experts at somersaulting.`,
        eng : `Be modest; never make a public show of your ignorance`
    },
    {
        yor : `Ọ̀gẹ̀dẹ̀ dùn tó bá pọ́n, ṣùgbọ́n tó bá pọ́n láàpọ́njù, oúnjẹ ni fún ẹyẹ oko.`,
        lit : `Banana is sweet when ripe, but it will become food for the birds, if it's overripe.`,
        eng : `Be moderate, even in good things; immoderation, quite often, can be costly.`
    },
    {
        yor : `Àì rìn jìnnà, làì rí abuké ọ̀kẹ́rẹ́; afọ́jú ẹyẹ ńbẹ lóko kárinkése`,
        lit : `Not travelling far enough is why one may not have seen a squirrel with a hump; blind birds can be found deep in the forest.`,
        eng : `Lack of exposure often results in narrow-mindness; exposure broadens the mind`
    },
    {
        yor : `Ẹni tó wọ bàtà nìkan ló mọ ibi tó ti ńta òun lẹ́sẹ̀.`,
        lit : `Only the wearer knows where the shoe pinches.`,
        eng : `Be tolerant and empathetic; you never know for sure what anyone is going through.`
    },
    {
        yor : `A kì í dá aró ní Ìṣokùn; àlà ni wọ́n ńlò níbẹ̀.`,
        lit : `No one engages in a cloth dyeing venture in Isokun Town; only whites (clothes) are worn there.`,
        eng : `Supply should respond to demand; never supply or offer what is not required.`
    },
    {
        yor : `Kò sí ẹni tí Ọlọ́run ò ṣe fún, à fi ẹni tó bá ni tòun ò tó.`,
        lit : `There is no one God has not blessed, except those who believed they have not been blessed enough.`,
        eng : `We all have reasons to be grateful; we have all being blessed, albeit in different ways.`
    },
    {
        yor : `Gbólóhùn ọ̀rọ̀ kan a máa yí ìpinnu ogún ọdún padà.`,
        lit : `A single sentence is well able to change a decision of twenty years.`,
        eng : `Words are powerful; use them wisely; speak in wisdom.`
    },
    {
        yor : `Bí ọsàn bá dúdú, ó ńpadà bọ̀ wá pọ́n ni.`,
        lit : `An unripe orange will most assuredly become ripe, eventually.`,
        eng : `Keep hope alive; the best is yet to come.`
    },
    {
        yor : `Omi tí èyàn máa mu, kò ní ṣàn kọjá rẹ̀.`,
        lit : `A stream from which one will drink will not flow beyond one's reach.`,
        eng : `Keep hope alive; never give up.`
    },
    {
        yor : `Gbogbo ohun tó ńdán kọ́ ni wúrà.`,
        lit : `Not all that glitters is gold.`,
        eng : `Appearance can be deceptive.`
    },
    {
        yor : `Kò sí ohun tí à ńjẹ tí kì í tán, à fi ọlá Ọlọrun.`,
        lit : `Except the blessing of God, there is nothing one eats that won't be exhausted, eventually.`,
        eng : `Only the blessings from God endure.`
    },
    {
        yor : `Èéfín ni ìwà; kò ṣeé fi pamọ́. `,
        lit : `Character is like smoke; it cannot be covered up.`,
        eng : `We cannot pretend to be who we are not for very long.`
    },
    {
        yor : `Ọgbọ́n àgbọ́njù, ni í pa òdù ọ̀yà.`,
        lit : `Unbridled craftiness is what kills the grown grasscutter.`,
        eng : `Crafty people eventually self-destruct; pursue a win-win scenario rather.`
    },
    {
        yor : `Ẹranko tó ya wèrè bí ẹṣin ò wọ́pọ̀: ẹṣin fi ọmọ rẹ̀ sílẹ̀ ó ńgbé ọmọ ọlọ́mọ kiri.`,
        lit : `Not many animals are as stupid as the horse: it left its offspring unattended and carried those of others around.`,
        eng : `Care for others, if you may, but don't neglect your own, either.`
    },
    {
        yor : `Oníjó tó bá jó mọ níwọ̀n, ló ńjó pẹ́; èyí tí kò bá jó mọ níwọ̀n, máa ńjó tẹ́ ni.`,
        lit : `A dancer who dances moderately is the one who dances for long; the one who doesn't dance moderately courts shame.`,
        eng : `Moderation is it.`
    },
    {
        yor : `Ojú tí yóò bá'ni kalẹ́, ki í ti àárọ̀ ṣe ipin.`,
        lit : `A pair of eyes that will serve one until old age will not be rheumy while one is young.`,
        eng : `Be perceptive; whatever will stand the test of time shouldn't be having issues earlier on.`
    },
    {
        yor : `Igi tó tọ́ kì í pẹ́ n'ígbó.`,
        lit : `Trees of value seldom remain in the forest for long.`,
        eng : `What is of value is often in high demand; maintain a passion for excellence and leave a good legacy.`
    },
    {
        yor : `Bí onírèsé bá kọ̀ tí ò fín igbá mọ́, èyí tó ti fín ò leè parun.`,
        lit : `Even if the calabash carver no longer carves calabashes, those already carved will still remain.`,
        eng : `We are outlived by our legacy.`
    },
    {
        yor : `Tí àdúrà bá gbà tán, apá aládúrà ò ní ka.`,
        lit : `When a prayer is answered, the person who prayed would be overwhelmed.`,
        eng : `Prayers work; answers may be so complete as to be overwhelming.`
    },
    {
        yor : `Ẹranko tó bá ṣiyèméjì lọdẹ ńpa.`,
        lit : `An indecisive animal easily gets killed by the hunter.`,
        eng : `Be decisive; indecision can be risky.`
    },
    {
        yor : `Bàtà orí àkìtàn náà re òde ìyàwò rí.`,
        lit : `Those pair of shoes on the refuse dump was once worn to a wedding.`,
        eng : `Life is turn by turn; a season goes, another comes; nothing lasts forever.`
    },
    {
        yor : `Aláǹgbá tó jábọ́ lórí ìrókò, ó ní bí ẹnìkan ò yin òun, òun á yin ara òun.`,
        lit : `The lizard that fell from a teak tree (unharmed), says if it receives no praise from anyone, it will praise itself.`,
        eng : `It is okay to be your own cheerleader; celebrate your successes.`
    },
    {
        yor : `Adùn-ńṣe bí ohun tí Ọlọ́run lọ́wọ́ sí, aṣòroóṣe bí èyí tí Ọlọ́run ò fẹ́.`,
        lit : `As easy to do as what God sanctions, and as difficult to achieve as what He opposes.`,
        eng : `If God is in it, it will work out; keep hope alive.`
    },
    {
        yor : `Ẹni tó gbé ìlù rẹ̀ kọ́ apá, ayé ńbáa lùú, áńbọ̀tórí ẹni tó gbé tirẹ̀ kọ́ igi tó ṣeré lọ.`,
        lit : `The person who hung his drum on his elbow, had the drum beaten by others, not to mention someone who hung his drum on a tree and walked away.`,
        eng : `Diligence is it; no complacency.`
    },
    {
        yor : `Òkun kì í hó ruru, kí á wàá ruru.`,
        lit : `Never paddle wildly in a stormy sea.`,
        eng : `Be patient; complex issues need to be patiently handled.`
    },
    {
        yor : `A kì í gbọ́ kúkù òjò da omi agbada nù.`,
        lit : `We shouldn't pour away the water in the trough simply because the cloud rumbles.`,
        eng : `Don't be presumptuous; never count your chickens before they are hatched.`
    },
    {
        yor : `Ká máa náwó, kò ní kí ówó ó tán; ká ya ahun, kò ní kí owó ó pọ̀ si.`,
        lit : `Generosity does not necessarily make one poor nor does stinginess make one rich.`,
        eng : `Generosity is it; kindness pays.`
    },
    {
        yor : `Ológùńná kan, kì í rìn létí odò.`,
        lit : `A person with a single ember ought not to walk by the river bank.`,
        eng : `Be cautious; avoid intolerably high risks or scenarios with zero way out.`
    },
    {
        yor: `Kò sí ohun tí sùúrù sè, tí kò jinná.`,
        lit: `There is nothing 'cooked' by patience that won't get done.`, 
        eng: `Don’t give up; with patience, even complex issues get resolved.`
     },
     {
        yor: `Àgbẹ̀ tí kòkó ẹ̀ yè, kì í ṣe mímọ̀ọ́ ṣe ẹ̀, bíkòṣe Elédùà.`,
        lit: `A farmer with a thriving cocoa farm owes this not just to his effort, but to God.`, 
        eng: `Be modest; we owe everything to God.`
     },
     {
        yor: `Mọ̀jà, mọ̀sá, ni ti akínkanjú; akínkanjú tó bá mọ̀ọ́ jà tí kò mọ̀ọ́ sá á bá ogun lọ. `,
        lit: `Warriors must know when to fight and when to retreat; a warrior who knows when to fight but not when to retreat would perish in battle.`, 
        eng: `Know when to pursue, defer or quit.`
     },
     {
        yor: `Ìbẹ̀rẹ̀ kọ́ l'oníṣẹ́, à fi ẹni tó bá fi orí tì í d'ópin.`,
        lit: `A good worker is not necessarily the one who starts something, but the one who finishes it.`, 
        eng: `To start any task is not as crucial as seeing it through to completion.`
     },
     {
        yor: `Kò sí ìgbà tí a dá aṣọ, tá ò rí ìgbà fi lòó.`,
        lit: `There is no time one buys clothes that one won't have opportunity to  wear them.`, 
        eng: `Contentment is it.`
     },
     {
        yor: `Wọ́n ní kí olókùnrùn ṣe 'tó' ó lóun ò lè ṣe 'tó tò tó'.`,
        lit: `A sick man who was asked to merely say 'to', profusely insisted he cannot say 'to to to'.`, 
        eng: `Be efficient; don't waste effort rejecting what would have taken far less to accept.`
     },
     {
        yor: `Ìhòhò dodo làgbàdo ńwọ ilẹ̀; tó bá jáde tán ló ńdi onígba aṣọ.`,
        lit: `The maize seed does go into the soil absolutely naked; it ends up with multiple peelings only after sprouting.`, 
        eng: `The best is yet to come; keep hope alive`
     },
     {
        yor: `A kì í bérè lọ́wọ́ adélébọ̀ pé ní'bo ló ti rí oyún.`,
        lit: `No one asks a married woman where she has got her pregnancy.`, 
        eng: `Don't ask obvious questions.`
     },
     {
        yor: `Ilé tí a fi itọ́ mọ́, ìrì ni yóò wóo.`,
        lit: `A house built with saliva will collapse under dew drops.`, 
        eng: `Integrity is it; fruits of deceit seldom last.`
     },
     {
        yor: `Bí èyàn bá dúró sí'nú oòrùn títí, bó pẹ́ bó yá, ibòji, á báa níbẹ̀.`,
        lit: `If one tarries long in the sun without relenting, eventually, the shade will come (when the sun sets).`, 
        eng: `Tough times won't last forever; persistence pays: if we won't quit, we will win, eventually.`
     },
     {
        yor: `Àgbà ò sí ní ìdí ọ̀kẹ́rẹ́; ẹni tí yóò jẹ ẹran níláti ṣetán àti ṣe ọdẹ.`,
        lit: `There should be no deferrence to seniority in sharing the squirrel's meat; whoever wants to partake must be prepared to hunt.`, 
        eng: `Lead by example; we musn't abuse our positions.`
     },
     {
        yor: `Ẹni tó ńwá ẹni tó jẹ bàbá rẹ̀ lówó, àfàìmọ̀, kó má pàdé ẹni tí bàbá rẹ̀ jẹ lówó.`,
        lit: `Whoever is looking for his father's debtors, may well find his father's creditors.`, 
        eng: `Moderation is it; life can come with twists and turns.`
     },
     {
        yor: `Ajá  kì í rorò títí, kó ṣọ́ ojú'lé méjì.`,
        lit: `No matter how tough a dog is, it cannot watch over two separate houses.`, 
        eng: `There is a limit to what any one person can do; cooperate and collaborate more.`
     },
     {
        yor: `Láníntán kan kò lè ni ìwo ẹṣin.`,
        lit: `No one can be so wealthy as to own the horn of a horse (since horses have no horns).`, 
        eng: `No one has it all made; we need one another.`
     },
     {
        yor: `Ọmọ tó gé ìyá a rẹ̀ lẹ́hìn jẹ, ṣòro ó gbà pọ̀n.`,
        lit: `It's tough offering to back a child who bit his mother's back when backed by her.`, 
        eng: `Be perceptive; don't expect anyone to treat you better than they are treating those close to them.`
     },
     {
        yor: `A kì í s'òótọ́ inú, kí ọ̀rọ̀ ẹni má d'ayọ̀, báyé ẹni bá dojúrú ìwà èèyàn ló yẹ ká wò.`,
        lit: `An honest life cannot but end well; if a life remains unpleasant, the person's character needs to be examined.`, 
        eng: `Our character quite often determines our experience; we reap what we sow.`
     },
     {
        yor: `Wúrà tó máa dán, á la iná kọjá.`,
        lit: `A piece of gold that wants to shine must need pass through fire.`, 
        eng: `No pain, no gain; there's always a price tag.`
     },
     {
        yor: `Ọgbọ́n díẹ̀, òmùgọ̀ díẹ̀, l'ọba fi ńto ìlú.`,
        lit: `Applying a little wisdom and a little stupidity is how a king administers his kingdom.`, 
        eng: `Sometimes, you have to act like a monkey to catch one; quite often, what appeared stupid may be a reflection of depths of wisdom.`
     },
     {
        yor: `Kì í ṣe gbogbo ajá tó bá gbó'ni lọ́jà, la ńdá lóhùn.`,
        lit: `It's not all the dogs that bark at one at the marketplace that one responds to.`, 
        eng: `Be focused; ignore distractions; it's not all issues that should command one's attention.`
     },
     {
        yor: `Orí bíbẹ́, kọ́ ni oògùn orí fífọ́.`,
        lit: `Decapitation is not the antidote for headache.`, 
        eng: `Moderation is it; adopt radical measures with caution.`
     },
     {
        yor: `Ará oko tí yóò jẹ búrẹ́dì, á fi èsúrú ránṣẹ́ sílé.`,
        lit: `A farm dweller who would like to eat bread (from those at home), would do well to send some aerial yams (from the farm to those at) home.`, 
        eng: `We easily receive when we are committed to giving: givers seldom lack.`
     },
     {
        yor: `Àìnísùúrù ìnàkí, ló sọọ́ di ará inú igbó.`,
        lit: `Gorilla's impatience was what made it an inhabitant of the forest.`, 
        eng: `Be patient; impatience can exact a heavy price.`
     },
     {
        yor: `Rírò ni tènìyàn, ṣíṣe ni t'Olúwa.`,
        lit: `Man proposes, God disposes.`, 
        eng: `No one knows tomorrow; keep hope alive.`
     },
     {
        yor: `Tí agbada ò bá gbóná, àgbàdo ò lè ta.`,
        lit: `If the frying pan is not heated up, the corns cannot pop.`, 
        eng: `No pain, no gain; there is always a price tag.`
     },
     {
        yor: `Òròmọadìyẹ ńbá àṣà ṣeré, ó rò pé ẹyẹ oko lásán ni.`,
        lit: `The chick plays with the hawk, gullibly believing it to be an ordinary bird.`, 
        eng: `Naivety can be costly; correctly assess risks; don't be presumptuous.`
     },
     {
        yor: `Ikú ẹja ni í mú ẹja mọ ìlú.`,
        lit: `The death of the fish is what enables it to know the city.`, 
        eng: `Adversity is, quite often, a stepping stone to greater heights; be positive, always; it's not over yet.`
     },
     {
        yor: `Eré tí ọ̀pọ̀lọ́ ńsá nínú omi gbígbóná, tó bá sáa lọ́dàn ni, kò ní wọ omi gbígbóná.`,
        lit: `Had the frog been as fleet-footed in the fields as it is now inside hot water, it won't have found itself in the hot water.`, 
        eng: `A stitch in time saves so much later; address issues promptly.`
     },
     {
        yor: `Àrẹ̀mọ má jobì, má ròde ẹmu, kó lè dé ipò bàbá rẹ̀ ni.`,
        lit: `That the royal heir should desist from rioutous living, it's so he can succeed his father (the king).`, 
        eng: `Be open and humble to take to good counsel.`
     },
     {
        yor: `Ní tútù là ńká ẹja kò; ẹja gbígbẹ ò ṣeé ká.`,
        lit: `Fish may be bent (and formed into shapes) only while fresh; dried fish cannot be bent. `, 
        eng: `Promptly resolve issues while still simple; once complicated, issues can be tough to resolve.`
     },
     {
        yor: `Oore kéré, oore tóbi, oore loore yóò máa jẹ́.`,
        lit: `Whether small or big, kindness received deserves to be recognised as such.`, 
        eng: `Attitude of gratitude is it; never discount favours received.`
     },
     {
        yor: `Àgbàdo tí kò bá fẹ́ fi ara gba iná, àti di gúgúrú rẹ̀, á nira.`,
        lit: `Grains of corn that do not want to be exposed to heat would find their becoming pop corns difficult.`, 
        eng: `No pain, no gain; be willing to pay the price.`
     },
     {
        yor: `Ohun ọwọ́ mi ò tó, màá fi gọ̀ǹgọ̀ fàá, àbùkù ni í mú kan'ni.`,
        lit: `To inordinately quest after what is evidently beyond one's reach is to court shame.`, 
        eng: `Contentment is it; live within your means; be wary of greed.`
     },
     {
        yor: `Tí orí kan bá sunwọ̀n, á ran igba.`,
        lit: `If one head is blessed, it positively impacts two hundred others.`, 
        eng: `Success can be contagious.`
     },
     {
        yor: `Ẹni a fẹ́ la mọ̀, a ò mọ ẹni tó fẹ́'ni.`,
        lit: `You can only be certain of who you love, but you cannot tell who really loves you.`, 
        eng: `Be perceptive.`
     },
     {
        yor: `Gbogbo ẹkún kọ́ làpẹrẹ ìbànújẹ́; gbogbo ẹ̀rín sì kọ́ ló túmọ̀ sí ìdùnnú.`,
        lit: `Not all tears signify sadness; not all laughters imply happiness.`, 
        eng: `Appearance can be deceptive; look beyond the obvious.`
     },
     {
        yor: `Bí ọmọdé bá fẹ́ ṣe bí àgbà, ọjọ́ orí i rẹ̀ ò ní jẹ́.`,
        lit: `A youngster who wants to act matured, is quite often betrayed by his or her age (or narrow life experience).`, 
        eng: `Inexperience often distorts youngsters' views of what count as maturity; modesty to learn is crucial.`
     },
     {
        yor: `Gbólóhùn kan lè ba ọ̀rọ̀ jẹ́, gbólóhùn kan náà lè tún ọ̀rọ̀ ṣe.`,
        lit: `One sentence can mess up a discussion, and one sentence can make it better.`, 
        eng: `Words are powerful; use them with care.`
     },
     {
        yor: `Olójú kan kì í mọ'yì Ọlọ́run, à fi tí nǹkan bá gbọ̀n sí i.`,
        lit: `A person with a single good eye is seldom thankful to God, until a speck enters the eye.`, 
        eng: `Attitude of gratitude is it; in every situation, remain grateful.`
     },
     {
        yor: `Mo ṣe é tán ló níyì; a kì í dúpẹ́ aláṣekù.`,
        lit: `I've finished it, is what is honorable; no one gives thanks for an incomplete job.`, 
        eng: `Finish whatever you start; it's good to start a thing, but better to complete it.`
     },
     {
        yor: `Mọ̀kàn mọ̀kàn loyè ńkàn; oyè tó kan ará Ìwó, ó ńbọ̀ wá kan ará Ẹdẹ.`,
        lit: `Chieftancy titles are given turn by turn; the chieftancy title given to an Iwo indigene would soon be given to someone from Ede.`, 
        eng: `Life is in phases; be patient.`
     },
     {
        yor: `Ọmọ tí ẹnu ò bá ká, aṣọ kànkan ò lè ka.`,
        lit: `No amount of cloth will be sufficient for a child who spurns good counsel.`, 
        eng: `Disobedience and wastefulness go arm in arm; whoever is disobedient will be wasteful.`
     },
     {
        yor: `A kì í fura sí ẹni tí a ńbá rìn; ẹni tí a bá ńfura sí, a kì í bá irú wọn rìn.`,
        lit: `Do not be suspicious of those you associate with; those you'd be suspicious of, should not be your close associates.`, 
        eng: `Build trust; don't be paranoid; be positive; be forward-looking.`
     },
     {
        yor: `Ìbẹ̀rẹ̀ ogun là ńmọ̀; ẹni kan kì í mọ ìparí í rẹ̀.`,
        lit: `The beginning of war is what anyone knows; no one knows how it will end.`, 
        eng: `Always seek peace; no one ever knows the full ramifications of a quarrel at the beginning.`
     },
     {
        yor: `Ọmọ tó bá mọ ọwọ́ ọ́ wẹ̀, yóò bá àgbà jẹun.`,
        lit: `A child who knows how to wash his or her hands will get to eat with the elders.`, 
        eng: `A well-behaved person will enjoy uncommon privileges; civility and courtesy do open doors.`
     },
     {
        yor: `Ewúrẹ́ tó lè kígbe jù, kọ́ lebi ńpa jù.`,
        lit: `The goat that bleats the loudest, is not necessarily the most famished.`, 
        eng: `Appearance isn't necessarily reality; noise or drama isn't necessarily substance.`
     },
     {
        yor: `Adìyẹ ńjẹ yangan, ó ńmu omi ó ńgbé ókúta mì, ó tún ńsunkún àìléyín; ṣé òbúkọ tó léyín ńjẹ irin ni?`,
        lit: `Hens eat corns, drink water and swallow stones, yet lament lacking teeth; do goats chew pieces of iron with theirs?`, 
        eng: `Contentment is it; shun greed.`
     },
     {
        yor: `Ẹni a ṣe lóore tí kò dúpẹ́, bí ìgbà tí ọlọ́ṣa ko ni lẹ́rù lọ ni.`,
        lit: `To be kind to a person who isn't thankful is akin to being robbed by a thief.`, 
        eng: `Attitude of gratitude is it.`
     },
     {
        yor: `Ogbe orí àkùkọ, kì í ṣe mímọ̀ ọ́n ṣe àkùkọ; Elédùà ló dá àkùkọ lọ́lá.`,
        lit: `The comb on the cock is not by dint of its prowess; it is the blessing of God.`, 
        eng: `Be modest and thankful; our blessing is, quite often, way more than the results of our effort.`
     },
     {
        yor: `Ẹni tó mọ iyì obì ló ńjá ewé bòó.`,
        lit: `The person who appreciates kolanuts strives to protect them with a covering of leaves.`, 
        eng: `We keenly care for what we value; whatever is valued seldom suffer neglect.`
     },
     {
        yor: `Ààtàn tí kò bá gba ẹ̀gbin, kò ní kún bọ̀rọ̀.`,
        lit: `A refuse dump that's intolerant of filth won't be filled up easily.`, 
        eng: `Be tolerant; intolerance can impose limitations.`
     },
     {
        yor: `Oókan ni wọ́n ńta ẹṣin lọ́run, ó ku ẹni ti yóò lọ rà á.`,
        lit: `Horses sell for one kobo each in heaven, but who's prepared to go buy it?`, 
        eng: `Benefits should be matched against associated risks; any benefit that comes with intolerably high risks easily loses it’s appeal.`
     }
];
