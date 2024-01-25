
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeachesCard from './SpeachesCard';
import Slider from "react-slick";
import AllSpeechCard from './AllSpeechCard';

const info = [
    {
      sl: "1",
      title: "Addressing the Assembly of World Vattern’s Federation conference in Germany",
      date: "October 1957",
      shortdesc:"Mr President and Fellow Veterans, it gives me a great pleasure to greet Veterans of the world   on behalf of the veterans of Pakistan.",

      desc:"Mr President and Fellow Veterans, it gives me a great pleasure to greet Veterans of the world   on behalf of the veterans of Pakistan. Our young State of Pakistan in tradition, history, and spirit, is  not behind others. In speaking to you to-day, I represent millions of the Veterans of Pakistan who  have seen and faced strife and storms in the battlefield, deep seas and the blue sky. Memories crowd  thick and fast when we remember our many comrades-in-arm who gave their all for their country,   people and ideals. Remembrance, however, grief to us, it also means pride and confidence in   ourselves. It does not merely evoke pictures from the pageantry of the history and the resurrection  of pride in the doings of our ancestors, predecessors and even contemporaries in War, it also assures  us that just as we did not fail our country and people in the past, we shall not fail our state and  nation nay to the call of Democracy to-day. There may perhaps will be war, bloodshed, and misery as  long as men inhabit the earth, for, the baser elements in mankind cannot be eradicated, by, any  conceivable method, but to offset this humiliating and shameful failing, the better side of human  nature, also, triumph in the bitterest hour of adversity. Hope courage and determinations have been  some of the redeeming qualities which men have exhibited in difficult times.    Whatever the political antecedent and background of men, he will always remain what he is, a social and political animal aspiring and striving for security and happiness, and what the Veterans   of our days and yester years and indeed all times have done was to fight their wars and battle for  peace. many of them have been disillusioned, for, the prospect of permanent peace seems to be   receding into the background more and more with the passing of years, but the hope has never, and will ever die out from the human breast and armored by faith and hope, mankind today as before,  pays by relentless vigilance, the price for the eternal quest for peace.   In Pakistan, I am proud to state, Democracy is held to be most efficacious method of  achieving and maintaining peace and liberty which ultimately go to promote prosperity and  happiness. The Islamic bases of the Pakistan State is itself sufficient proof, were it required to demos  tract our deep reliance on the equality of men in al respects, and as such it is but natural, that we  believe in the equal rights of mankind, organized in individual in individual State, to participate freely  and equally in the good life, i.e., in the achievement of spiritual exaltation, intellectual greatness and  mundane prosperity. We do not tend to under-estimate the importance of any of these facets of the  full life and we do not subscribe to any ideology, time matured or newfangled which seeks to foist by the sanction of force or indiscretion, the super imposing political, social, and cultural frame works,  alien to and unwanted by Nations numerically, intellectually, politically or economically in  comparatively inferior position. In other words, I would like to stress that if the fight to establish and  perpetuate peace, new battles are to be fought, the combat will be bound to be between the forces  of Democracy and authoritarianism.    Veterans of the World, as one of you, I feel that none of us can rest in peace today. We have  fought the good fight in the past, but the future is yet to be fought and made safe. Let us hope   despite bitter disillusionment in the past that mankind will not repeat the folly of the past, that peaceful persuasion should make for the global rule of reason and that our brothers and sons do not have to shed their blood at the call of Armageddon. Mere hoping, however, is not likely to carry us and our world much nearer to our desired pal, and everyone has to do in the continues and incessant  war for peace i.e., going on all around us. The root of want, misery and jealousy must be dug out and   removed for economic reasons, as all will agree over the basic causes for uneasy situation in our  world today. Just as individual greed and jealousy arise, out of such causes, in the international field   also, International, and inter-state bickering and strife are often similarly motivated. Other points and  spheres of friction have to be traced and neutralized as far as possible.    It is admitted that all the evils that beset and beleaguered mankind may not be eradicated  totally by our efforts, but the very fight to wipe them out be-speaks of the indomitability of the   human will, and the burning faith of mankind in its exalted destiny. Let us therefore resolve on this   day sacred to the memory of the brave fight, dear comrades, and cherished ideals to band togeth   in all parts of the world to fight the evils of selfishness, greed, and power lust, and make the world  free and safe for all men. It is neither the State alone nor the Government of the state which can   mould policies in the arena of our modern world, although the interplay of kaleidoscopic act desires,   and motives of State and Government have created round us a jungle of confusion and obscurity yet   when we think about it coolly, dispassionately and determinedly, we find that in the democ  of the world at least the basic component unit of the state and the nation is still the individual  citizen. Therefore, right thinking, planning and action by him can still guide the policy of his state to   the path of peace. amity, happiness. I do not propose to digress on the modes of winning the peace any further, but trust the native intelligence and goodwill of mankind will open before all those so  desire various avenues leading towards that prized goal of our peace and contentment. I am proud to conclude as a veteran speaking on behalf of his fellow veterans in his country  as well as the overwhelming mass of his compatriots that we in this part of the word re-affirm o faith in peace and happiness as realizable ambitions and also our resolve to work by all means to achieve this, thereby we hope to fulfil one of the ideals cherished by all.",  shortdesc: "Mr President and Fellow Veterans, it gives me a great pleasure to greet Veterans of the world on behalf of the veterans of Pakistan. Our young State of Pakistan in tradition, history, and spirit, is not behind others. In speaking to you to-day",
    },
    {
      sl: "2",
      title: "Statement to the Press by Major A.Ghani, M.L.A, East Pakistan on Serious economic conditions faced by East Pakistani population",
      date: "20.4.57",
      desc:"After I have observed the economic condition of East and west Pakistan, I am of the   same opinion of Mr. Nur Ahmad Ex-M.C.A. Chittagong that Govt. should immediately set up   an economic enquiry commission (i) to find out the reasons of shooting up of prices of  essential commodities such as fish, foul, eggs, veg, mutton, milk, fruits – green and dry rice  and wheat, condiment and mastard oil etc. (ii) to find out the causes of economic crisis in  East Pakistan and to (iii) suggest ways and means to remedy the causes.  As an East Pakistani I have fair idea of economic condition of common men there   and during my tour in West Pakistan I have been observing that the fate of the common   men both in East and West Pakistan is the same. It is only very fortunate few – who have  flourished and will continue to do so as they feel that “self first, country and people last”.  That is make the hay while the sun shines,- Who are they?   After careful study of the economic conditions in Pakistan and specially of East   Pakistan, I strongly feel that unless Government takes some drastic steps immediately to  remedy the causes, responsible for such economic crisis, a situation may arise which will  be beyond the controlling capacity of any Government. When our people are grappling in  economic hardship they do not find any ray of hopes from the political leaders who are busy   in playing “game of chess in politics”. We are confused, common man is confused to see   the elected representative changing parties and cross the floor for his own selfish and  without any rfereme to his people from where he draws his power. That is why we are all  frustrated today. Since politics and economic are interlinked, the fate of the common man  will never change unless there is “clean politics”.  Regarding economic condition of common people in East Pakistan I would like to  take this opportunity of enlightening my brothers and sisters in West Pakistan the actual   condition as it stands today. There are few factors working to shatter out national economy     and ultimately strike at our very existence. There are few fortunates amongst us both in  East and West Pakistan, who are also getting rich at the cost of the common people.  The economic condition of people in general and particularly in flood affected areas  in East Pakistan is really alarming. During the last few years flood people have exhausted  all their resources just to maintain their very existence. The food situation has not improved   at all rather has aggrieved due to failure of Boro crops and unsatisfactory yield of Boro  Crops for want of timely rain. People have nothing to stand behind and fallback upon. Price   of rice is in between Rs. 35-40 per maund. The future is really dark and grim-economically,  Socially, Politically and ideologically. What next?  East Pakistan economy has adversely affected due to drainage of wealth, out of that   area by various ways and means including smuggling of all commodities of indigenous and  imported goods into Bharat amounting to Rs. 50 to 70 crores every year.  All the traders, business community, industrialists, doctors and pleaders, send all  their earning out of East Pakistan. Another factor which should be considered is the  unusual difference of prices of various commodities between Karachi and Dacca.  Consumers in East Pakistan can be saved from the exploitation of the black marketeers  and the profiteers. If the daily market rates are published both in karachi and Dacca. I would  request to our national newspapers to save the common man from exploitation by  publishing daily market reports at Karachi and Narayanganj or Chittagong.  Finally; I like to appeal to the Prime Minister and Finance Minister fo Pakistan to immediately set up the Commission which will be also in a po  misunderstanding between East and West Pakistan. I also like  President Major General Iskandar Mirza in this connection.  To: The Dawn Lahore",
      shortdesc: "After I have observed the economic condition of East and west Pakistan, I am of the same opinion of Mr. Nur Ahmad Ex-M.C.A. ",
    },


    {
        sl: "3",
        title: "CIVIL DEFENCE – A NATIONAL ISSUE",
    
       desc:"There is a quite wrong idea about Civil Defence amongst our civil population. They    think, Civil Defence is our war-time organization and it is needed only when the dangers of   war are imminent. There are also others who think that in a future war which will purely be   menaced by Atomic or Hydrogen bomb, Civil Defence will be absolutely out-dated. The   unfortunate thing is that the above ideas are shared even by many of our leaders. The sooner   these ideas are dispelled, the better for the country.  That Civil Defence is an war-time organization is no longer true. The members of the   Civil Defence corps are now being employed in connection with peace-time emergencies   such as flood, fire, famine, earthquake etc. Moreover in all atomic or hydrogen bomb attack,   there will be many casualties at the tringe of the damaged area. There must be some men   and there are civil Defence personnel to be rushed to their rescue. If this is not done, more   panic will spread and morale of the civil population will completely collapse. Once this  happens, the war will be lost in the home front and victory in the far front will be meaningless.  F.M. Montgomery has said that a collapse in the home front could loose a war for the west  as surely as defeat in the battle. our C-in-C General Ayub Khan has slso appealed to th   youth of the country to pay more attention to the learning of Civil Defence in the interest of  national security.   Civil Defence is vital and that is why to-day Civil Defence just as much as part of  country’s defence system as the Army, The Navy and the Air Force.   We are now an independent nation. We have a very strong military Force and we are  proud of it. We must also make our home front a strong citadel and must therefore have a   strong Civil Defence in the country. As other nations of the world we are all peace loving and   we want to maintain peace under all provocations. It is time for preparation, and we must   make preparations from now.   Civil Defence was given a start in this part of the country in about the year 1951. Four    years have since gone by. The existence of this organization is felt once a year when a so    called Civil Defence week is observed. Otherwise the organization for all practical purposes  dead. We do not see any CD personnel moving about with F.A. cars or rescue Lorries. We  do not witness any practice exercise organization, nor do we hear about black-outs.   There are two schools here- one is managed by the central Government and the other    by the provincial Govt. They are just working in stereotyped holding glasses, having tests and   declaring results in civil Defence. The staff of the school can go out to the various towns,  organise mobile training centre, create interest in the public and devise other ways how to   popularize training in civil defense. The bare skeleton staff now employed cannot do ful   justice to their job as they cannot orgnise services fully for want of equipment. It is not know   why equipments are not being procured from now when many items are not available in th   country at all.   I cannot but state here some of the important points so that the attention of th   authorities may be focused on them for early action.   1. Expansion of the civil Defence (CD) Directorate on the pattern of the Ansar   Organization.   2. One directorate of C. D. to deal with A.R. P. Ansar and Fire Service. This is   essential for better co-ordination and maximum efficiency in service.   3. Implementation of the 5-year C. D Plan approved by the government.   4. Compulsory C.D. training course in schools, colleges and universities.    5. Regular Provincial conference of C.D. officers and workers in District HQs to  develop espirit-de-corps of C.D. personnel.    6. Effective C.D propaganda in all classified towns.   7. Proper and adequate accommodation for the provincial school and appointmen   of required qualified staff.     8. Sanction of adequate daily allowances to voluntary trainees and also Conveyance allowance to the trainees from Dacca.     9. Peace time utilization of services of the C.D. officers and volunteers.  10. Sanction of scale of pay for the C.D. staff.     I feel Civil Defence is being grossly neglected here by the authorities concerne   and also by the member of the public. If this state of things continue we may have to  pay terribly in an emergency. Public opinion should therefore be mobilized to bring  pressure on the authorities so that Civil Defence is fully organized when there is time  yet.  M A Ghani  M. L. A 17.4.1956",
        shortdesc: "There is a quite wrong idea about Civil Defence amongst our civil population. They think, Civil Defence is our war-time organizationand it is needed only when the dangers of   war are imminent. There are also others who think that in a future war which will purely be   .",
      
        
      },
      {
        sl: "4",
        title: "Economic Crisis in East Pakistan",
        shortdesc: "Statement to the Press By Major A Ghani M.L.A. East Pakistan about the causes of economic crisis in East Pakistan .Facts can never lie nor pretences can win.” Some people can be made fools for all the time & one cannot befool all the people for all the time ",
        desc: "Statement to the Press By Major A Ghani M.L.A. East Pakistan about the causes of economic crisis in East Pakistan. “Facts can never lie nor pretences can win.” Some people can be made fools for all the time & one cannot befool all the people for all the time, as the proverb says. I would like to draw the attention of both Central",
      },
      {
        sl: "5",
        title: "LETTER TO PM, C IN C PAKISTAN ARMY FOR RESETTLEMENT OF EX-SERVICEMEN",
        date: "October 1957",
        shortdesc: "This Meeting of Ex-servicemen of East Pakistan views with grave concern the unsympathetic attitude of the Government of East Pakistan to .",
        desc: "This Meeting of Ex-servicemen of East Pakistan views with grave concern the unsympathetic attitude of the Government of East Pakistan to ameliorate the disturbed conditions of the Ex-servicemen of the Province, which directly affected the morale and efficiency of the fighting forces and ultimately affects future recruitment in the defence forces and, therefore resolves:\n\n(1) That the sum of Rs.50 lacs share of East Pakistan Ex-servicemen from the Post War Reconstruction Fund be fully utilized immediately by setting up various types of industries in different parts of the Province for resettlement of Ex-service personnel.\n\n(2) That priority should be given in allotting Khas Mohal Lands to the Ex-service personnel. Their children should be given the facility of education and medical treatment free of cost.\n\n(3) That 25% of the vacancies of the Central and Provincial services Class I, II, III and IV be kept reserved for Ex-service personnel. Similar vacancies should also be kept reserved in different industrial establishments throughout Pakistan.\n\n(4) That all able-bodied ex-servicemen be absorbed in EPR, Police, Railway Watchman and ward, Customs and similar other departments.\n\n(5) That the war service rendered by them should be counted towards increments, seniority, pension etc as soon as they are absorbed in any Govt or industrial establishment.\n\n(6) That in view of acute distress conditions preventing in the province each Ex-servicemen be allowed a lump sum of Rs 200/- as gratuitous relief and members of the family of the Ex-servicemen be allowed modified rationing.\n\n(7) That the East Pakistanis serving in different branches of the armed forces should in no circumstances be released. On the other hand, more should be recruited from this wing of Pakistan.\n\n(8) That in view of geographical distance between two wings of Pakistan, East Pakistan must be made self-sufficient in defense and to achieve that more units should be raised by recruiting more personnel from this part of the country. An Ordnance Factory and other defense industries should be set up in this wing of Pakistan to cater to the needs of the forces stationed here.\n\n(9) That relaxation of age limits, educational qualifications should be made in case of ex-service personnel at the time of recruitment to different jobs.\n\n(10) That sufficient stipends should be granted to the Ex-servicemen for technical and other vocational training.\n\n(11) That to maintain the integrity and stability of Pakistan and to get rid of the disruptive and anti-social elements, the Ex-servicemen will render whole-hearted co-operation to the Govt and will if circumstances need, shed the last drop of blood."
      },
      
      {
        sl: "6",
        title: "Memorandum to Mr Ataur Rahman Khan, Chief Minister-1956 to the Press by Major A.Ghani, M.L.A, East Pakistan on Serious  ",
        date: "The 2nd December,1956",
        shortdesc: "After I have observed the economic condition of East and west Pakistan, I am of the same opinion of Mr. Nur Ahmad Ex-M.C.A. .",
        desc: "Memorandum to Mr Ataur Rahman Khan, Chief Minister, East Pakistan on the occasion of his visit to Comilla on the 2nd Dec'56 on behalf of the flood-stricken people of the district of Tipperah.\n\nSir, I, as an independent representative of the public, beg to bring before your kind notice the following grievances & problems of this district for your personal and immediate attention:\n\n(A) Gumati Problem:\n\nGumati, as you know, is a menace to the people of the Sadar south sub-division, which has been working tremendous havoc for the last few years and it has brought in its train untold miseries & sorrows to the teeming millions. The Flood Control Department has taken up the responsibility to control this problem successfully by excavating two escape channels on either side of the river and re-excavating other dead small tributaries & canals. If this scheme is implemented; it is expected that the people of Burichong, Kasba, Kotwali, Debidwar, and other neighboring areas will be benefited & relieved of the constant fear of flood, consequent sorrows & sufferings. You are requested earnestly that this scheme should be given the topmost priority and no financial or other considerations should stand in the way of the execution of the scheme within the 1st week of January next. As the Flood Control Engineer with his staff has been working very hard to complete their survey work which has almost been finished. I am hopeful about the implementation of the scheme in due time.\n\n(B) Shifting of the Divisional Irrigation Office:\n\nAs our District is worst affected by flood every year, there are about sixty irrigation schemes to be worked out. It is, therefore, essential to have the irrigation office located at Comilla. But it is very much disappointing to say that due to some undue political pressure this office is being shifted to Feni where two sub-divisional Irrigation Offices are already functioning. You are requested to revise the orders of your govt for that best interest of the people of this district to retain the office here at Comilla, Your personal attention in this connection is solicited.\n\n(C) Ziratia Tenants:\n\nThe bordering people of this district have large of cultivation lands in Tripura State. But due to the restrictions of the Indian Govt they cannot have their harvest brought home. As a result of this, the said cultivators have been sustaining heavy losses every year. This matter should be taken up with the Govt of India for the immediate and permanent solution of the problem to the relief of the Ziratia tenants.\n\n(D) Grants to the Flood Affected Educational Institutions:\n\nThe devastating floods of the last three years have caused great damages to the educational institutions of the Burichong & considerable parts of Kotwali police stations. Adequate sums of money should be sanctioned towards the necessary repairs. Upkeep & maintenance of these Schools & Madrasahs. Stipends should also be given to the poor deserving students for the prosecution of their studies.\n\n(E) Payment of Primary School Teachers:\n\nIt is very sad and shocking to the state that the primary school teachers of this district have not been receiving their pay regularly in time. Your kind attention is drawn towards it for the proper & permanent redress of these ill-paid teachers of the man-making department.\n\n(F) Cattle loans to the Flood-Affected Cultivators:\n\nThe successive floods have taken a heavy toll on the cattle of the cultivators. Besides, many of them were compelled to sell off their cattle due to the dire need of necessity. As such, they are now quite helpless to cultivate their lands which are lying fallow. Sufficient cattle purchase loan should be given to them as early as possible to enable them to carry on their cultivation. The people of the flood-affected area have got no purchasing capacity at all. As such, they should be given loans and grants to purchase seeds and build their homestead.\n\nSUGGESTIONS:\n\nThe whole population in the affected areas must be saved at all costs and all out efforts must be made from all concerned. Relief measures in cash or kind should be taken on an emergency level:\n\ni) Full-scale modified rationing for 50% of the total population.\nii) Cheap rate to be allowed to 25% & G. R. 25%.\niii) T.R. scheme is to be carried out till the monsoon sets in.\niv) Sufficient funds should also be made available for cattle & seed loans. Provision should also be made for House Building grants.\nv) Payment of land compensation needs special consideration. This may please be taken up on an emergency basis. Since flood control has placed the money at your kind disposal, it will be really a great relief if they get the money when they need it most.\nvi) The entire five miles border belt is a deficient area & the people within it are the worst sufferers. Due to the restriction of movement of food grains within 5 miles border belt areas, the distress of people knows no bounds. Rice, paddy, and food grain traders should be allowed to carry out their trade in a normal way",
      },
      
      {
        sl: "7",
        title: "A MEMORANDUM OF DEFENCE AND RECRUITMENT OF EAST PAKISTAN BY MAJOR ",
        shortdesc: "Although the talk about the American Military & Economic aid to Pakistan has been going on for quite a long time, at any rate, the .",
        desc: "1. Although the talk about the American Military & Economic aid to Pakistan has been going on for quite a long time, at any rate, the public did not know anything about the shape, extent, and quantity of these aids. In the absence of any positive public indication about these vital facts, the confusion about the desirability or otherwise of such an Arm aid fed by criticism at home in Pakistan abroad and some of the Middle Eastern countries had been worse confounded; especially from the context of the Eastern Wing of Pakistan this aid had received further hostile criticism, until, our prime Minister and Defence Minister made declaration of these aids. Of course, it is clear that the details of tanks, guns and ammunition cannot be discussed in public.",
        observations: [
          "2. I take the liberty of making the following observations as I sincerely feel, as a former officer of Pak. Army and as a Member of East Pakistan Legislative Assembly returned as an Independent candidate, that there is no adequate appreciation of the East Pakistan affairs from the standpoint of Geopolitics, more particularly from the South East Asia and Indian ocean Political and Military Strategy.",
          "3. I do not propose to discuss the purely national regional problem but would like to confine briefly to the geopolitical aspects of the issue.",
          "4. If I correctly understand the broad American policy it is to strengthen the democratic front in backward countries by raising their standard of life, by developing industries, social security, public health and also by building their military might, their fighting capacity-offensive and defensive. The object of US Arms Aid to Pakistan, therefore, one should realize, is to strengthen the military power of Pakistan which means the strengthening of the defensive strength and Resource of the Western as well as the Eastern wing, to contain possible armed aggression as well as infiltration through cold war tactics.",
          "5. Now coming to the East Bengal aspect of the aid some question are asked and on a satisfactory answer to them alone will it be possible to clear the confusion, misunderstanding, and prejudice on the issue.",
          "a. WILL THE ARMS AID COME TO EAST PAKISTAN AT ALL?",
          "b. IF AT ALL IT COMES TO EAST PAKISTAN IN WHAT SHAPE? – IN THE FORM EQUIPMENT ONLY FOR THE ARMY OR IN THE SHAPE OF MILITARIZATION OF THE PEOPLE OF THE REGION BY DEVELOPING DEFENCE INDUSTRIES BY BUILDING OF TRAINING AND GARRISON ESTABLISHMENTS FOR ARMY, ANVY AND AIR FORCE AID RECRUITING LARGE NUMBER OF YOUTHS FROM EAST PAKISTAN?",
          "6. If our government thinks that East Pakistan is exposed to foreign aggression which I think is a general appreciation. I very strongly feel that the question raised above should be examined, not already done, and decisions taken without delay and an authoritative public announcement should be made to satisfy the people’s anxieties in this wing. A dangerous, demoralizing and frustrating feeling has been caused here and is daily gaining ground because of the alleged apathy and indifference shown to East Pakistan and East Pakistanis and because of the alleged feeling that East Pakistanis are not suitable to defend their own land, that is Pakistan, this impression should not be allowed to gain ground further in the interest of all concerned. There is an apprehension that the prevailing opinion is that in any military planning and strategic calculation East Pakistan does not merit consideration because of the belief prevailing in the West that East Pakistan’s security lied on the strength of West Pakistan.",
          "7. I do not want to underline the most obvious but I must, in passing for emphasizing that in any defensive or offensive preparation the hard fact of the geography of Pakistan can be ignored that is why there should be more realistic approach to make East Pakistan self-reliant and self-sufficient militarily to meet any crisis whether it is a “cold” war or a “hot” war, whether it is a military offensive or an infiltration from subversive elements or a combination of both.",
          "8. Another point that needs stressing is that a successful defense policy can only be based on the military resources of the area itself on the fighting capacity of the sons of the soil. They shall be the ‘fighters’ and must be given proper military training before they become fighters in a truly military sense and the necessary wherewithal for the military machine which, when applied to local conditions in East Pakistan, means that the East Pakistanis should bear arms, raised and trained as proper soldiers, sailors, and airmen. They have to be militarized by raising local units for all arms of our defense services- Arm, Navy, and Air Force and kept in the finest fettle. That does not mean that East Pakistanis will be stationed in East Pakistan only.",
          "9. In consideration of the geographical situation & strategic position of the two wings of Pakistan, both of them should be equals strong & self-sufficient so far as their defense is concerned in case of any emergency. If a global war breaks out the armed forces in West Pakistan will have to fulfill the commitment of the Baghdad Pact (mcdo). It will be impracticable & impossible for them to send the armed force from West Pakistan for the defense of East Pakistan and also to fulfill the commitment of SEATO."
        ],
        suggestions: [
          "13. A pre-cadet school should start functioning at once in East Pakistan, to train youths for Army, Navy and Air Force.",
          "14. Military training should be made compulsory in High Schools & Colleges which will serve as feeder institutions to the Pre-cadet & training school. In other words, the Unit of National Cadet corps should be raised.",
          "15. A public school after the model of the schools at Sargoda & Murree Hills should be established as early as possible which will supply the officer cadre in the Army, Navy & Air Force.",
          "16. More recruiting offices should be opened in East Pakistan. In 1948 only one Recruiting office had to cover the entire East Pakistan. In 1951 two Branches Recruiting offices were opened at Comilla & another at Rangpur. But it is a matter of regret to say that the Rangpur Office is a mere apology for a recruiting office as until now no Recruiting Officer & Medical Officer have been posted there. As such it is not functioning as recruiting Officer.",
          "17. A combined recruit training center to impart basic military training to the enrolled recruits bound for their respective units in West Pakistan should be established without any further delay instead of detaining the recruits in transit camps and demoralizing them.",
          "18. Garrison battalions should be raised with the released suitable ex-service personnel, required by the Govt, time to time for various local duties.",
          "19. Territorial forces should be raised, which is being vigorously pursued by other nations. The steps taken by our neighboring country in this connection should be an eye opener for us.",
          "20. P.W.P.G should be re-organized extensively & given intensive training in First Aids, Nursing, Telegraphy, Typewriting, etc, in addition to the necessary military training.",
          "21. The annual training should be made compulsory for all office staff between PNG. Battalions of this wing since 1953. This training should start immediately.",
          "22. Military training should be made compulsory for all office staff between the ages of 18 of 45. They must parade at least two days in a week.",
          "23. A well-represented committee should be set up soon to investigate into the matter why the officers & other ranks from this wing in the different Armed Services are not feeling happy, contended & secure.",
          "24. In the Indian Army the requisite height for the enrollment of Madrasses & the Maharatties is 5.4\" & that of the Gurkhas is 5 ft only. They average height of the East Pakistanis with good physique is 5\" - 4\". This standard was observed in respect of the East Pakistanis till 1952. Since then it has been raised to 5' - 6\". The physical of the East Pakistanis should be reduced to 5' - 2\" for Metric entries which will afford greater scope and better opportunities to them to join the defence forces of Pakistan in a larger number.",
          "25. At present the Recruiting Officers of the Army, the Navy & Air Force in East Pakistan have to depend wholly and solely upon the publicity of the Provincial Govt, in connection with their recruitment. But the civil publicity organization is always frightfully busy with their multifarious affairs and finds no time to do anything on behalf of the military recruitment. As such, a separate publicity organization for the Army, the Navy and the Air Force recruitment in East Pakistan should be arranged by the Central Govt, immediately.",
          "26. An ordinance factory should be set up in East Pakistan to cater the needs of various items of ordinance stores and equipments required for the forces stationed here. At the present moment all such items are imported form West Pakistan which is very expensive."
        ]
      }
 
];

function AllSpeech() {
    const navigate = useNavigate();
  
    const handleCardClick = (sl) => {
      // Navigate to the details page with the selected speech data
      navigate(`/speeches/${sl}`);
    };
    
 
    return (
      <div className="py-[70px]">
        <div class="w-full h-px bg-zinc-800"></div>
    <div className='py-12 bg-majorbg'>
   


    <h1 class="text-center text-white text-[40px] font-normal font-['URWImperialW01-Regular'] capitalize leading-[50px]">Various Speeches</h1>

   </div> 
       <div className="flex flex-wrap justify-center gap-16 mt-8 p-16 text-justify">
          {info.map((inf) => (
            <AllSpeechCard
              key={inf.sl}
              sl={inf.sl}
              title={inf.title}
              desc={inf.shortdesc}
              onClick={() => handleCardClick(inf.sl)} // Pass the click handler
            />
          ))}
        </div>
      
  
        
      
      </div>
    );
  }
  
  export default AllSpeech;