"use strict";(self.webpackChunkjoannamadej_gatsby=self.webpackChunkjoannamadej_gatsby||[]).push([[401],{2622:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var a=n(5030),o=n(4778),s=n.p+"static/guild_1-ce0c55539887f0ab76821cf8e460e865.png",l=n.p+"static/guild_2-c8c69298264f5946ca725a18c3f3d765.png",i=n.p+"static/guild_3-c7f9f5c35ad4f3bea2f7ccf696f8d7ab.png",r=n.p+"static/guild_4-7be7b78b6592b6695b00531d25e59122.png",c=n.p+"static/guild_5-df5c9e0d19b3d94e671f4b9f39310ffc.png",d=n.p+"static/guild_6-f2a521950d28bf9650ebebdc4a41c848.png",h=n.p+"static/guild_7-7b0d859e63260923daa8992d673d04ca.png",p=n.p+"static/guild_8-2d075b1159a825ce62a9e3b31e043b28.png",u=n.p+"static/guild_8_desktop-288bc59280dec55cab77934b59d0fb8a.png",g=n.p+"static/guild_9-8fe9f4be9b1f338390c2804f7881eaaf.png",m=n.p+"static/guild_10-97e5adb832fac515430048e775840410.png",f=n.p+"static/guild_10_desktop-7e283ff62b13f26dbdbab9e18748e66e.png",w=n.p+"static/guild_11-fd37160f08c44cefc12b7d195c8e75f8.png",b=n.p+"static/guild_12-4e08a822577ac388b90cf2e1c401625a.png",v=n.p+"static/guild_12_desktop-a78afb5189221aa8f33838d41b43d182.png",y=n.p+"static/guild_13-a39bfd46a7f2636fe10f9008240f71c1.png",E=n.p+"static/guild_14-fdc044e067fd1944f9a82cecdb9173c6.png",k=n.p+"static/guild_15-243489287ee120b60c207213fea2f27b.png",_=n.p+"static/guild_16-035ace94c984297fc5b60f90db4f6298.png",I=n.p+"static/guild_17-621bc4df2571373153f984c1cc4403cd.png",N=n.p+"static/guild_18-03565e37376d6c049fbbd5be6e6d321b.png",T=n.p+"static/guild_19-161c9d3ead9f2df8e00df1f202597823.png",q=n.p+"static/guild_20-cfc4c7ab02f7c577e1f3128c619f99f0.png",x=n.p+"static/guild_21-7a5265c322fc26ad7f35ef8b34641b6f.png",G=n.p+"static/guild_22-f84d83294ca3f78993eb56fed225f0fc.png",W=n.p+"static/guild_23-69d67e3b7b7b60d675b6eb6052ac6b4d.png",j=n.p+"static/guild_24-d1f36d70ad1d932db32272825f4c4be0.png",B=n.p+"static/guild_25-3e4029d18912d8c0f3a0beace7dc5cc1.png",A=n.p+"static/guild_26-350dce9761a18962c2fe60a6b6186637.png";var M=n(7294),C=n(4193);var H=()=>{if("undefined"==typeof window)return M.createElement(M.Fragment,null);const e=(0,a.e)("guild"),t=(0,M.useRef)(window.innerWidth).current>575;return M.createElement(o.Z,{project:e},M.createElement("p",null,M.createElement("h3",null,"First things first"),"First things first, you need a little introduction to the topic. The guild app is a social app created to make networking easier. It is available both on computers and mobile phones. Its website can be seen under this ",M.createElement("a",{target:"_blank",href:"https://guild.co"},"link"),". The main feature of the application is the ability to create and join groups. Groups usually focus on business-related topics or users' interests. Within groups, users can create threads, polls, events, or video calls. While working at Monterail Software House, I had the opportunity to design new features for the Guild app and redesign old ones. I was part of a scrum team consisting of a Product Manager, two Developers (one responsible for front-end and one for back-end), one QA, and me - Product Designer. We were also in frequent contact with the CEO of Guild - Gregor Young."),M.createElement("p",null,"My work on the new poll conversation feature began when Gregor informed me that users lack space to discuss poll results. He said that users create a separate conversation for this purpose, but this way poll and conversation are not connected in any way. Gregor asked for my help in solving this issue. Okay, now you know the basics!"),M.createElement("p",null,M.createElement("h3",null,"The first step and first failure"),"My first step was to look through the patterns existing on the market. I observed how polls typically look in social media applications. After a brief research phase, my initial idea was to allow users to create polls within conversations, similar to how it is done on the Messenger app or Slack. This way, discussions about poll results could take place within the conversation, and both elements would be connected, forming a cohesive whole. However, this idea turned out to be a non-starter due to technical reasons and was rejected at an early stage."),M.createElement("p",null,M.createElement("h3",null,"Getting on the right track"),"After the initial setback, I continued to brainstorm and came up with another idea. I wanted to give users the option to create a dedicated conversation when creating a new poll. I called it a poll conversation. On poll conversation, users could discuss the poll and its results. This conversation would be connected directly with the poll. Before diving into the designs to ensure I was heading in the right direction and not wasting time on designing the wrong solution, I discussed my idea with the development team and Gregor (Guild CEO). The idea received positive feedback, with only one new requirement: Gregor wanted users to have access to the conversation only after taking part in the poll, so they wouldn't be influenced by others' comments while answering the survey."),M.createElement("p",null,M.createElement("h3",null,"Design Process"),"After the meeting, I had a clear design flow in my mind, so I started sketching it in Figma. I began by making changes to the poll creation process. I added a checkbox on the poll creation screen. If the user leaves it checked in, a poll conversation will be created instead of a regular poll. I also added a tooltip to the checkbox, explaining what the new option is and how it works. Below, on the carousel, you can see how the poll conversation creation flow looks in the desktop app.",M.createElement(C.Z,null,M.createElement("img",{src:s,alt:"guild_1"}),M.createElement("img",{src:l,alt:"guild_2"}),M.createElement("img",{src:i,alt:"guild_3"}),M.createElement("img",{src:r,alt:"guild_4"}),M.createElement("img",{src:c,alt:"guild_5"}),M.createElement("img",{src:d,alt:"guild_6"})),"After finishing the design for the poll conversation creation flow, I moved on to the flow of answering poll questions. It was already in place, but I felt it could look better visually, so I decided to give it a fresh look. I felt that in the current design, all the elements were quite large, which could lead to users having to scroll the screen if the question would be longer or if there would be more possible answers. I wanted to avoid this situation, so I reduced the size of all the elements. Below, you can see how mobile screens, showing the flow of answering the poll, looked before and after I made some changes.",M.createElement(C.Z,null,M.createElement("img",{className:"medium",src:h,alt:"guild_7"}),M.createElement("img",{className:"medium",src:p,alt:"guild_8"}),t?M.createElement("img",{src:u,className:"medium",alt:"guild_8_desktop"}):""),M.createElement(C.Z,null,M.createElement("img",{className:"medium",src:g,alt:"guild_9"}),M.createElement("img",{className:"medium",src:m,alt:"guild_10"}),t?M.createElement("img",{className:"medium",src:f,alt:"guild_10_desktop"}):""),M.createElement(C.Z,null,M.createElement("img",{className:"medium",src:w,alt:"guild_11"}),M.createElement("img",{className:"medium",src:b,alt:"guild_12"}),t?M.createElement("img",{className:"medium",src:v,alt:"guild_12_desktop"}):""),"This way, I refreshed the flow of responding to polls. My next step was designing a screen with a poll conversation on the group feed. I wanted the poll conversation to look visually different from a regular poll so that users could easily distinguish between them. I kept the appearance of the regular poll unchanged to avoid confusing users with unnecessary changes. However, in the design of the poll conversation, I included the avatar of the person associated with the conversation. This way, I differentiated the appearance of these two types of polls and added a personal touch to the poll conversation to grab users' attention. Below, you can see how the appearance of these two types of polls differs."),M.createElement("p",{className:"center"},M.createElement("img",{className:"medium",src:y,alt:"guild_13"})),M.createElement("p",null,"In the beginning, I was considering whose avatar to include in the view of the poll conversation on the group feed. The best idea seemed to be featuring the avatar of the person who last commented on the poll conversation. This would be also analogous to how the threads look in the guild app on the group feed. The design of the thread on the group feed included the beginning of the last comment and the avatar of the person who wrote it. I knew that we couldn't apply the exact same pattern, or at least not in every case, as one of the business requirements was to keep comments on poll conversations hidden from users who did not participate in the poll. There was also the question of whose avatar to show when there are no comments in the poll conversation yet. In the end, I decided to prepare separate design versions for a poll conversation on the group feed for users who hadn’t responded to the poll yet and separate, slightly different for the ones who already took part in the poll. Below, you can see how they differ."),M.createElement("p",{className:"center"},M.createElement("img",{className:"small",src:E,alt:"guild_14"})),M.createElement("p",null,"I wanted also to differentiate the design of answered and not-answered poll conversations so users could easily distinguish them. Because of that, I have added a small turquoise ‘check’ icon (same as on the poll results screen) to the design of the answered poll conversation. After we hover over the icon the tooltip shows up."),M.createElement("p",{className:"center"},M.createElement("img",{className:"medium",src:k,alt:"guild_15"})),M.createElement("p",null,"In the beginning, I made this ‘check’ icon pink to maintain color consistency with the rest of the design. However, my team pointed out that because of this color, this icon looks a bit like a notification or an unread message so I have changed it to the second primary guild color - turquoise."),M.createElement("p",{className:"center"},M.createElement("img",{className:"medium",src:_,alt:"guild_16"})),M.createElement("p",null,"Next, I focused on designing the screen with the poll conversation itself. I didn't want to reinvent the wheel, so the poll conversation looks similar to the classic thread that users are already accustomed to. However, I added a bar with the poll question and a button that leads to poll results. On the button, users can also see how many people participated in the poll. Below, you can see the screen of a poll conversation when there are no comments yet. I didn't want to leave an empty screen in such a situation, so I decided to include an automatic first message encouraging conversation."),M.createElement("p",{className:"center"},M.createElement("img",{src:I,alt:"guild_17"})),M.createElement("p",null,"Below, finally, you can see the full mobile flow of taking part in the poll conversation. When users enter the poll conversation for the first time they see the poll question. After answering it, they see the poll results and then they can go to the poll conversation. Next time when users will enter a poll conversation, they will go straight to the poll conversation (as they answered a poll question earlier)."),M.createElement("p",{className:"center"},M.createElement("img",{src:N,alt:"guild_18"})),M.createElement("p",null,M.createElement("h3",null,"Small additional feature"),"During my work on this task, I received information that many hosts were deleting their polls because they no longer wanted to collect responses and there was no other option to do that. In response, I proposed the idea of introducing the ability to close and reopen polls. This gave hosts the option to stop collecting answers while still maintaining a conversation about the results. When the host closes the poll conversation, users who responded to the poll earlier can still comment and view the results. Users who haven't responded to the poll question can't join the poll conversation but they can still see the survey results. To differentiate between closed and open poll conversations on the group feed, I changed the color of the closed poll conversation icon to grey."),M.createElement("p",{className:"center"},M.createElement("img",{className:"medium",src:T,alt:"guild_19"})),M.createElement("p",null,"I changed also the color of the bars on the results page for the closed poll conversation to gray to underline the fact that the poll is no longer active and is not collecting answers."),M.createElement("p",{className:"center"},M.createElement("img",{src:q,alt:"guild_20"})),M.createElement("p",null,'To ensure that users feel comfortable and have a sense of control over what happens in the application, after selecting the "Close" or "Reopen" poll option a bottom bar appears with a confirmation question, ensuring they are certain about their decision to close or reopen the poll. I wanted to make sure users understood the implications of these actions so, I added in the bottom bar, information about what will happen after closing or reopening the poll conversation. Below, you can see screens from the flow of closing and reopening a poll in the mobile app.'),M.createElement("p",{className:"center"},M.createElement("img",{src:x,alt:"guild_21"}),M.createElement("img",{src:G,alt:"guild_22"})),M.createElement("p",null,"During the completion of this task, I redesigned the screens associated with poll creation, responses, and result visualization, while also incorporating the feature to close and reopen polls. My aim was for all processes in the application to be consistent, so in the end, I had also to make similar changes in the flow where users opt to create poll without dedicated conversation."),M.createElement("p",null,M.createElement("h3",null,"What I have learned?"),"Through this project, I gained valuable insights into various aspects of the design process and collaboration. Working within a scrum team taught me the importance of iterative development and adapting to changing requirements. The cooperation with the client enhanced my communication skills, allowing me to better understand their needs and incorporate feedback effectively. I learned the significance of focusing on specific screens rather than drawing out every flow, optimizing time and resources for a more efficient design process. Additionally, input from team members who deeply understand the product, played an important role in enhancing the user experience. This experience provided me with a comprehensive understanding of the design workflow, highlighting the importance of collaboration, efficiency, and responsiveness to both client and team input."),M.createElement("p",null,M.createElement("h3",null,"What I would do differently?"),"Looking back, I think I would now advise the client not to have the checkbox on the poll creation screen (the screen below) pre-selected. This way, users could decide for themselves whether to check it or not and, consequently, decide if they want to create a dedicated conversation for the poll or not."),M.createElement("p",{className:"center"},M.createElement("img",{src:W,alt:"guild_23"})),M.createElement("p",null,M.createElement("h3",null,"What I would do next?"),"My next step would be to create the option of generating a poll conversation for an already existing poll. Currently, a poll conversation can only be initiated during the poll creation process. I would also add the option to create multiple-choice polls. Currently, users can only create single-choice polls."),M.createElement("p",null,"In the end, I'm sharing below a few more shots of the poll conversation feature."),M.createElement("p",{className:"center"},M.createElement("img",{src:j,alt:"guild_24"})),M.createElement("p",{className:"center"},M.createElement("img",{src:B,alt:"guild_25"})),M.createElement("p",{className:"center"},M.createElement("img",{src:A,alt:"guild_26"})))}}}]);
//# sourceMappingURL=component---src-pages-guild-index-tsx-2f70135e0f23961e9bf8.js.map