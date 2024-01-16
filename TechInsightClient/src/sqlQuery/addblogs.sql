/*Instructions
-Delete already existing TechInsight Database then run update-database on asp.net api solution
-Run USE TechInsight;
-Run Categories Inserts then add atleast 6 users to database
- run the insert posts queries
-after -- change datetimes , edit tags , add posts and users manually etc

*/



USE TechInsight;


INSERT INTO CATEGORIES VALUES('Devices');
INSERT INTO CATEGORIES VALUES('Software');
INSERT INTO CATEGORIES VALUES('Innovation');
INSERT INTO CATEGORIES VALUES('Cybersecurity');
INSERT INTO CATEGORIES VALUES('Business');
INSERT INTO CATEGORIES VALUES('AI');

SELECT * FROM Categories



INSERT INTO Posts(Title,Content,ImageURL,CreatedAt,UserId,CategoryId)VALUES('Apple tops Samsung for first time in global smartphone shipments',
'For the first time ever, Apple beat out Samsung to ship the most smartphones in a year according to IDC’s Worldwide Quarterly Mobile Phone Tracker. Although IDC cautions that its data is preliminary and subject to change, a second research agency, Canalys, also has Apple taking its top spot for all of 2023. IDC has Apple’s total mobile shipments at 234.6 million, versus 226.6 million for Samsung. Xiaomi, Oppo, and Transsion round out the top five with 145.9, 103.1 and 94.9 million smartphones shipped, respectively. 
IDC notes that the last time Samsung wasn’t on top of the annual board was 13 years ago in 2010. Back then Apple didn’t even feature in the top five. Instead it was Nokia in first place, Samsung in second, LG Electronics in third, ZTE in fourth, and Research in Motion (manufacturers of BlackBerry devices) in fifth. If you needed any evidence that 13 years is a long time in the smartphone industry, then this list of companies would be it.',
'/blogImages/blog1.png',
GETDATE(),2,1
);

INSERT INTO Posts(Title,Content,ImageURL,CreatedAt,UserId,CategoryId)VALUES(' How a software glitch and a centuries-old British company ruined lives',
'After a piece of software incorrectly showed that money had gone missing, a trusted, centuries-old British government corporation used its financial and legal might to convict and bankrupt hundreds of people who ran its branches. Some family members say their loved-ones were left so distressed they took their own lives.

This could be the plot of a dystopian novel, but it describes the real-life ordeal that scores of the so-called sub-postmasters of the UK Post Office went through between 1999 and 2015. The government — which owns the Post Office — has described the scandal as one of the greatest miscarriages of justice in British history.

Over two decades, livelihoods and reputations were destroyed, families shattered, and savings lost. Out of thousands of affected sub-postmasters who ran small businesses in communities across Britain, 700 were convicted of criminal offences. Some spent time in prison.

It began with errors in an IT system called Horizon, built by Japan’s Fujitsu and introduced in 1999 to replace paper-based accounting.

Soon after its installation, branch managers realized the system was faulty. The software regularly showed that money — often many thousands of pounds — had gone missing from Post Office accounts. In many cases, it was simply wrong.

Jo Hamilton was running a post office in a small village in southern England in 2003 when her Horizon computer started to show a shortfall of £2,000 ($2,500). When she ran the numbers again, she told CNN, that amount “doubled in front of (her) eyes.”

In the end, Hamilton re-financed her home to pay the non-existent shortfall that — by the time the Post Office had taken her to court in 2007, charging her with theft and false accounting — had ballooned to £36,000 ($45,800).

Shamed and exhausted, Hamilton pled guilty to false accounting on the proviso that the theft charge would be dropped. “It was destroying me,” she said.

The scandal has been the subject of legal cases and UK media reports for years, but only since last week’s broadcast of a TV drama spotlighting its brutal human toll have public awareness and outrage skyrocketed.',
'/blogImages/blog2.png',
GETDATE(),2,2
)

INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  'Ubisoft Exec Says Gamers Need to Get ''Comfortable'' Not Owning Their Games for Subscriptions to Take Off',
  'An executive at Assassin’s Creed maker Ubisoft has said gamers will need to get “comfortable” not owning their games before video game subscriptions truly take off.

  Speaking to discuss the launch of Ubisoft’s new Ubisoft+ Premium and Ubisoft+ Classics subscriptions, Philippe Tremblay, director of subscriptions at Ubisoft, explained to GI.biz what needs to happen before subscription services become a more significant slice of the video game business.

  ''One of the things we saw is that gamers are used to, a little bit like DVD, having and owning their games. That''s the consumer shift that needs to happen. They got comfortable not owning their CD collection or DVD collection. That''s a transformation that''s been a bit slower to happen [in games]. As gamers grow comfortable in that aspect… you don''t lose your progress. If you resume your game at another time, your progress file is still there. That''s not been deleted. You don''t lose what you''ve built in the game or your engagement with the game. So it''s about feeling comfortable with not owning your game.''
  ', '/blogImages/blog3.png',
  GETDATE(),
  2,
  3
);

INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  'Ubisoft Exec Says Gamers Need to Get ''Comfortable'' Not Owning Their Games for Subscriptions to Take Off',
  'An executive at Assassin’s Creed maker Ubisoft has said gamers will need to get “comfortable” not owning their games before video game subscriptions truly take off.

  Speaking to discuss the launch of Ubisoft’s new Ubisoft+ Premium and Ubisoft+ Classics subscriptions, Philippe Tremblay, director of subscriptions at Ubisoft, explained to GI.biz what needs to happen before subscription services become a more significant slice of the video game business.

  ''One of the things we saw is that gamers are used to, a little bit like DVD, having and owning their games. That''s the consumer shift that needs to happen. They got comfortable not owning their CD collection or DVD collection. That''s a transformation that''s been a bit slower to happen [in games]. As gamers grow comfortable in that aspect… you don''t lose your progress. If you resume your game at another time, your progress file is still there. That''s not been deleted. You don''t lose what you''ve built in the game or your engagement with the game. So it''s about feeling comfortable with not owning your game.',
  '/blogImages/blog4.png',
  GETDATE(),
  3,
  1
);

INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Former Microsoft CEO Steve Ballmer shares his leadership styleScroll back up to restore default view.',

'Step aside, CFOs: New generative AI technology stands to supplant you as your CEO''s best friend.

This, in part, reflects how the latest crop of powerful tech can unlock major impact on worker productivity and corporate financials, according to a new study of CEOs by consultancy PwC. The survey was released ahead of an AI-themed World Economic Forum kicking off on Tuesday in Davos, Switzerland.

About 68% of US CEOs surveyed say that the next 12 months will see generative AI increasing the amount of work that employees can accomplish. That number is 64% globally, according to PwC. Roughly half of US CEOs expect the technology to help them become more productive in their own work.

The productivity boost should serve up a jolt to profits, CEOs contend.

Nearly 44% of the CEOs questioned say they see generative AI providing a net increase in profits in the next 12 months, versus just 3% anticipating a net decrease.

''Investors are also increasingly demanding executives pursue profitable growth, prompting many CEOs to turn not only to cost containment strategies, but also to GenAI,'' explained PwC.''What’s alluring about GenAI is its dual ability to produce efficiency gains that hold down current expenses while simultaneously enabling company reinvention. This may mean that, when the macroeconomic headwinds abate, the stage is set for a potentially faster rate of growth on a lower cost basis.'' ,
PwC adds that 2024 is shaping up to be the year of ''business model reinvention.''',
  '/blogImages/blog5.png',
  GETDATE(),
  4,
  6
);

INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Latest YouTube slowdowns aren''t linked to ad blockers, Google says',

'Reports of buggy previews and inaccessible features for YouTube users with ad blockers enabled

It''s no secret that Google has declared war on ad-blockers, and the new year has only brought even more reports of annoying delays for YouTube users with ad blockers enabled. But this time, it appears that Google''s crusade against ad-blockers isn''t at fault. 

A YouTube spokesperson told Android Central that "recent reports of users experiencing loading delays on YouTube are unrelated to our ad blocker detection efforts." Previously, users speculated that the issue stemmed from an artificial timeout written within YouTube''s code, which slows down the video player in much the same way it would when interfacing with a laggy internet connection. 

In reality, the culprit seems to have been recent updates to Adblock and Adblock Plus extensions (version 5.17), according to uBlock Origin developer Raymond Hill on X (formerly Twitter). The team behind AdBlock and Adblock Plus has since rolled out a fix.',
  '/blogImages/blog6.png',
  GETDATE(),
  2,
  2
);

INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
AI can now copy your handwriting. We''re concerned.',

'Nothing is safe from AI copying it.

Researchers at the Mohamed Bin Zayed University of Artificial Intelligence in Abu Dhabi say they developed an AI tool that can pretty closely copy a person''s handwriting. The researchers said that the model needed just a few paragraphs of writing to be trained.

''[People] could not distinguish the mimicked handwriting from the actual handwriting, and it was satisfying to see that kind of validation of the performance'' researcher Salman Khan said in a press release.
AI has proven relatively capable of copying voices and creating images out of whole cloth. Of course, handwriting was next up. Right now the model is primarily focused on mimicking English writing and is not yet available to the public. The researchers were recently granted a patent for the tool.

The team also acknowledged that the potential for forgery and other nefarious uses was very real.
',
  '/blogImages/blog7.png',
  GETDATE(),
  3,
  6
);


INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Tesla Gets a $94 Billion Reality Check as EV Winter Sets In',

'Tesla Inc. had a blockbuster 2023, as its shares more than doubled in 12 months. But 2024 is starting on a different note, with Elon Musk’s electric vehicle maker off to its worst start to any year.

The company has lost more than $94 billion in market valuation in just the first two weeks of 2024. It’s not hard to figure out why, as the Austin, Texas-based EV maker has been pounded by a barrage of negative news: an about-face on EVs from the car rental giant Hertz Global Holdings Inc., yet another price cut for its cars made in China, and signs of rising labor costs.
',
  '/blogImages/blog8.png',
  GETDATE(),
  5,
  5);

  

INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Reddit must share IP addresses of piracy-discussing users, film studios say',

'In 2023, film companies lost two attempts to have Reddit unmask its users. In the first instance, US Magistrate Judge Laurel Beeler ruled in the US District Court for the Northern District of California that the First Amendment right to anonymous speech meant Reddit didn’t have to disclose the names, email addresses, and other account registration information for nine Reddit users. Film companies, including Bodyguard Productions and Millennium Media, had subpoenaed Reddit in relation to a copyright infringement lawsuit against Astound Broadband-owned RCN about subscribers allegedly pirating 34 movie titles, including Hellboy (2019), Rambo V: Last Blood, and Tesla.

In the second instance, the same companies sued Astound Broadband-owned ISP Grande, again for alleged copyright infringement occurring over the ISP’s network. The studios subpoenaed Reddit for user account information, including "IP address registration and logs from 1/1/2016 to present, name, email address, and other account registration information” for six Reddit users, per a July 2023 court filing.

In August, a federal court again quashed that subpoena, citing First Amendment rights. In her ruling, Beeler noted that while the First Amendment right to anonymous speech is not absolute, the film producers had already received the names of 118 Grande subscribers. She also said the film producers had failed to prove that “the identifying information is directly or materially relevant or unavailable from another source.”
',
  '/blogImages/blog9.png',
  GETDATE(),
  5,
 4);

 
INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Elections Canada launches online disinformation tool to prepare voters for next federal election',

'Elections Canada is trying to insulate Canadian voters from false narratives and information during the next federal election by launching an online tool to help voters cut through misinformation and disinformation about the electoral process in Canada. 

The ElectoFacts website, launched this week, provides factual information to debunk the most common misconceptions observed by Elections Canada officials in recent years. 

"Building resilience against inaccurate information helps strengthen the overall health of democracy," Chief Electoral Officer Stéphane Perrault said in a statement.

"ElectoFacts is one additional step electors can take to ensure they are informed and have accurate information about the electoral process."

The ElectoFacts website says that it does not intend to establish Elections Canada as "the arbiter of truth" that will actively monitor the accuracy of statements and information distributed by parties and candidates. The agency said it will instead focus on providing correct information about elections that Canadians can easily access. 
',
  '/blogImages/blog10.png',
  GETDATE(),
  5,
 4);

 INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
‘Don’t Mess With Us’: WebMD Parent Company Demands Return to Office in Bizarre Video',

'The California-based parent company of WebMD has published a cringe-inducing video mocking remote workers and threatening employees who continue to refuse to return to the office.

In a video meant for internal employees but which was also published on the company’s public Vimeo page, Internet Brands CEO Bob Brisco tells employees that “unfortunately, too big of a group” is still only working remotely and that he is getting “more serious” about making sure that changes in the near future. 
',
  '/blogImages/blog11.png',
  GETDATE(),
  3,
 5);

 
 INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
You''ll Soon Have to Pay $20 a Month to Access Copilot''s Coolest Features',

'My colleague Maxwell Zeff once described Microsoft Copilot as “if Clippy went to get his MBA.” Microsoft just announced a new premium subscription to its Copilot AI, which can be analogous to Clippy getting a PhD.

Targeted at “power users and creators,” Copilot Pro promises to be an advanced version of the free tier for a monthly fee of $20. It runs across your devices (yes, on your phones, too—more on that in a bit) to deliver what Microsoft calls a “single AI experience.” During peak times, you also get priority access to OpenAI’s GPT-4 Turbo.
Aimed at creators and coders, it allows an enhanced AI image creation feature with Image Creator—previously Bing Image Creator. Microsoft says the new image creation software is much faster and delivers images with better detail. Through the Copilot GPT Builder—a feature that will launch soon—Copilot Pro enables you to build your own Copilot GPT with fairly simple instructions. The company hasn’t given us a date for the GPT Builder’s availability.
',
  '/blogImages/blog12.png',
  GETDATE(),
  5,
 5);

  INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Apple to Remove Blood-Oxygen Sensor From Watch to Avoid U.S. Ban',

'Apple AAPL -1.93%decrease; red down pointing triangle is removing a blood-oxygen sensor from some of its smartwatches to get around a patent dispute related to the technology, a step likely to avoid further sales disruptions but one that may raise questions about the company’s push into health.

The company halted sales of some watch models briefly last month after a U.S. import ban went into effect stemming from an October ruling by the U.S. International Trade Commission. The trade agency found Apple had violated the patents of medical-technology company Masimo MASI 1.14%increase; green up pointing triangle related to the blood-oxygen tool. Sales resumed temporarily in recent weeks pending a legal review.
',
  '/blogImages/blog13.png',
  GETDATE(),
  3,
 2);

  INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Korea unveils plan to build $471 bil. mega chip cluster in Gyeonggi Province
',

'Korea will build the world''s biggest semiconductor cluster in Gyeonggi Province by 2047 as Samsung Electronics, SK hynix and other chip companies plan to invest a total of 622 trillion won ($471 billion) to build 16 new fabs, creating more than 3 million jobs, according to the Ministry of Trade, Industry and Energy, Monday.

By expanding the existing mega cluster with 19 production fabs and two research fabs across adjoining cities in the province, the new mega chip cluster spanning 2,102 square meters will produce 7.7 million wafers each month starting in 2030.

The ministry unveiled the plan to bolster the nation''s chip industry by providing support for relevant infrastructure and fostering experts in the field. Emphasizing that every country with a sophisticated semiconductor industry is actively seeking global dominance, the focus is on establishing public-private chip clusters.

Inside the new cluster, Samsung Electronics is set to construct six new fabs at a national industrial complex in Yongin, investing 360 trillion won. Additionally, the company plans to establish three fabs in Pyeongtaek with an investment of 120 trillion won and three research fabs at an R&D center in Giheung District at a cost of 20 trillion won. Meanwhile, SK hynix will spend 122 trillion won to build four fabs at another industrial complex in Yongin.

In this joint effort by the industry ministry, the Ministry of Science and ICT and the private chip giants, the new cluster is designed to provide a conducive environment for the production of cutting-edge memory chips, such as high bandwidth memory (HBM) and system semiconductors measuring 2 nanometers or less in size.

The industry ministry said that with the new cluster, the country aims to capture 10 percent of the global system semiconductor market and enhance self-sufficiency in the supply chain of key materials to 50 percent by 2030, up from the current 30 percent.
',
  '/blogImages/blog14.png',
  GETDATE(),
  6,
 3);

   INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
It’s time to accept that disinformation is a cyber security issue
',

'The internet, as life-changing as it can be for digitising businesses, connecting communities and informing individuals, doesn’t come with a user guide to help us navigate it. And as people become more aware of the dark side of the web, they are looking for tools that help to defend them against campaigns designed to manipulate how they think or behave.


Misinformation and disinformation are rife, but so far it’s been seen as a challenge for policy-makers and big tech, including social media platforms. However, because disinformation is by nature an online risk, it is a challenge for our cyber security ecosystem to tackle, too.

But tackling the manipulation of truth is no easy task. The sheer volume of data being created makes it hard to tell what’s real and what’s not. From destroying 5G towers to conspiracies like QAnon and unfounded concern about election fraud, distrust is becoming the default – and this can have incredibly damaging effects on society.

Disinformation and fake news is also part of the delivery package, rather than being the end goal – it is increasingly being used to deliver malware by manipulating people’s fears and heightened emotions. For example, Avast has found that fake shops claiming to sell Covid-19 cures that use the World Health Organization’s logo were intended to get people to download malware.

So far, the tech sector – primarily social media companies, given that their platforms enable fake news to spread exponentially – have tried to implement some measures, with varying levels of success. For example, WhatsApp has placed a stricter limit on its message-forwarding capability and Twitter has begun to flag misleading posts.

Despite these efforts, reports stressing concerns about the issue from intelligence services and independent committees are being overlooked, while policies can’t be put in place fast enough to keep up with the ever-changing ways that fake news spreads. But it’s not just an issue of having more laws – in fact, too much regulation in some cases can be used as a guise for clamping down on free speech. We should be very wary of overusing it as a tool.

We are also seeing the rise of tech startups that are exploring ways to detect and stem the flow of disinformation, such Right of Reply, Astroscreen and Logically. These companies don’t tend to refer to themselves as cyber security companies, but you can argue that this is, in effect, what they are.

It’s a question of definitions: if we agree that cyber security isn’t just about data breaches but data integrity, then it’s clear that these companies come under the umbrella of security.

More than that, disinformation has the potential to undermine national security – and it should be at the core of our cyber defences. 

However, the cyber security innovation ecosystem as a whole has been under-utilised and under-motivated to play a role in this landscape. Plenty of spinouts and startups have the tools to combat disinformation and take on botnets, such as automated threat detection, but don’t regard stemming the flow of disinformation to be in their domain.

This will change as businesses increasingly become the target of disinformation, which will create more market demand among IT teams. We are seeing cyber espionage techniques such as creating fake news to hold influential members of a competitor company ransom or damage the reputation of a brand, and this will shift our perception of the challenge as it becomes more rife in the corporate world.

Data breaches result in the loss of value, but so can data manipulation. This reflects the changing nature of cyber security at large – it’s now more about protecting an enterprise’s values, brand and reputation rather than just a network security issue.

Disinformation is still an emerging frontier for cyber security, and we will need unconventional techniques far beyond data breach notifications and regulatory fines. New alliances and partnerships must emerge between industry and government. More than that, our fundamental assumptions of what a cyber attack looks like must also evolve.

But the first step is recognising it as a new type of online risk where effective cyber security is part of the solution.


The industry ministry said that with the new cluster, the country aims to capture 10 percent of the global system semiconductor market and enhance self-sufficiency in the supply chain of key materials to 50 percent by 2030, up from the current 30 percent.
',
  '/blogImages/blog15.png',
  GETDATE(),
  6,
 4);

 
   INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Three Equifax Managers Sold Stock Before Cyber Hack Revealed',

'Three Equifax Inc. senior executives sold shares worth almost $1.8 million in the days after the company discovered a security breach that may have compromised information on about 143 million U.S. consumers.

The trio had not yet been informed of the incident, the company said late Thursday.
',
  '/blogImages/blog16.png',
  GETDATE(),
  3,
  4);

     INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
Over 50 per cent of users may shun social media by 2025 as misinformation, toxicity grow',

'A Gartner survey found that 53 per cent of consumers believe the current state of social media has decayed compared to either the prior year or five years ago.

Concern about the impact of anticipated GenAI use in social media is high and over 7 in 10 consumers agree that greater integration of GenAI into social media will harm user experience.

“Social media remains the top investment channel for digital marketing, but consumers are actively trying to limit their use,” said Emily Weiss, Senior Principal Researcher in the Gartner Marketing Practice.

“A significant slice says that, compared to a few years ago, they are sharing less of their own lives and content. As the nature of social media use and the experience of the platforms changes, CMOs must refocus their customer acquisition and loyalty retention strategies in response,” Weiss added.

Mistrust and lack of confidence in AI’s abilities will drive some consumers to seek out AI-free brands and interactions.

“A subsection of brands will shun AI and prioritise more human positioning. This ‘acoustic’ concept will be leveraged to distance brands from perceptions of AI-powered businesses as impersonal and homogeneous,” explained Weiss.

By 2028, brands’ organic search traffic will decrease by 50 per cent or more as consumers embrace generative AI-powered search. The rapid adoption of GenAI in search engines will significantly disrupt CMOs’ ability to harness organic search to drive sales.

“CMOs must prepare for the disruption that GenAI-backed search will bring to their organic search strategies,”
said Weiss.
',
  '/blogImages/blog17.png',
  GETDATE(),
  2,
  2);

  
     INSERT INTO Posts (Title, Content, ImageURL, CreatedAt, UserId, CategoryId)
VALUES (
  '
 ''It hasn''t delivered'': The spectacular failure of self-checkout technology',

'I
It''s a common sight at many retail stores: a queue of people, waiting to use a self-checkout kiosk, doing their best to remain patient as a lone store worker attends to multiple malfunctioning machines. The frustration mounts while a dozen darkened, roped-off and cashier-less tills sit in the background.

For shoppers, self-checkout was supposed to provide convenience and speed. Retailers hoped it would usher in a new age of cost savings. Their thinking: why pay six employees when you could pay one to oversee customers at self-service registers, as they do their own labour of scanning and bagging for free?

While self-checkout technology has its theoretical selling points for both consumers and businesses, it mostly isn''t living up to expectations. Customers are still queueing. They need store employees to help clear kiosk errors or check their identifications for age-restricted items. Stores still need to have workers on-hand to help them, and to service the machines.

The technology is, in some cases, more trouble than it''s worth.

"It hasn''t delivered anything that it promises," says Christopher Andrews, associate professor and chair of sociology at Drew University, US, and author of The Overworked Consumer: Self-Checkouts, Supermarkets, and the Do-It-Yourself Economy. "Stores saw this as the next frontier… If they could get the consumer to think that [self-checkout] was a preferable way to shop, then they could cut labour costs. But they''re finding that people need help doing it, or that they''ll steal stuff. They ended up realising that they''re not saving money, they''re losing money."
',
  '/blogImages/blog18.png',
  GETDATE(),
  6,
  3);









