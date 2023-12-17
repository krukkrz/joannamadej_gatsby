import { getProject } from "../../services/projects";
import ProjectPage from "../../components/project/ProjectPage";

// @ts-ignore
import guild_1 from "../../assets/projects/guild/works/guild_1.png";
// @ts-ignore
import guild_2 from "../../assets/projects/guild/works/guild_2.png";
// @ts-ignore
import guild_3 from "../../assets/projects/guild/works/guild_3.png";
// @ts-ignore
import guild_4 from "../../assets/projects/guild/works/guild_4.png";
// @ts-ignore
import guild_5 from "../../assets/projects/guild/works/guild_5.png";
// @ts-ignore
import guild_6 from "../../assets/projects/guild/works/guild_6.png";
// @ts-ignore
import guild_7 from "../../assets/projects/guild/works/guild_7.png";
// @ts-ignore
import guild_8 from "../../assets/projects/guild/works/guild_8.png";
// @ts-ignore
import guild_8_desktop from "../../assets/projects/guild/works/guild_8_desktop.png";
// @ts-ignore
import guild_9 from "../../assets/projects/guild/works/guild_9.png";
// @ts-ignore
import guild_10 from "../../assets/projects/guild/works/guild_10.png";
// @ts-ignore
import guild_10_desktop from "../../assets/projects/guild/works/guild_10_desktop.png";
// @ts-ignore
import guild_11 from "../../assets/projects/guild/works/guild_11.png";
// @ts-ignore
import guild_12 from "../../assets/projects/guild/works/guild_12.png";
// @ts-ignore
import guild_12_desktop from "../../assets/projects/guild/works/guild_12_desktop.png";
// @ts-ignore
import guild_13 from "../../assets/projects/guild/works/guild_13.png";
// @ts-ignore
import guild_14 from "../../assets/projects/guild/works/guild_14.png";
// @ts-ignore
import guild_15 from "../../assets/projects/guild/works/guild_15.png";
// @ts-ignore
import guild_16 from "../../assets/projects/guild/works/guild_16.png";
// @ts-ignore
import guild_17 from "../../assets/projects/guild/works/guild_17.png";
// @ts-ignore
import guild_18 from "../../assets/projects/guild/works/guild_18.png";
// @ts-ignore
import guild_19 from "../../assets/projects/guild/works/guild_19.png";
// @ts-ignore
import guild_20 from "../../assets/projects/guild/works/guild_20.png";
// @ts-ignore
import guild_21 from "../../assets/projects/guild/works/guild_21.png";
// @ts-ignore
import guild_22 from "../../assets/projects/guild/works/guild_22.png";
// @ts-ignore
import guild_23 from "../../assets/projects/guild/works/guild_23.png";
// @ts-ignore
import guild_24 from "../../assets/projects/guild/works/guild_24.png";
// @ts-ignore
import guild_25 from "../../assets/projects/guild/works/guild_25.png";
// @ts-ignore
import guild_26 from "../../assets/projects/guild/works/guild_26.png";

import {XS_MAX_WIDTH} from "../../styles/sizes"

import React, {useRef} from "react";
import Carousel from "../../components/carousel/Carousel";

const Index = () => {
    if (typeof window === `undefined`) {
        return (<></>);
    }

    const guildProject = getProject("guild");
    const windowWidth = useRef(window.innerWidth);
    const shouldDisplay = windowWidth.current > XS_MAX_WIDTH;

    return (
        <ProjectPage project={guildProject}>
            <p>
                <h3>First things first</h3>
                First things first, you need a little introduction to the topic. The guild app is a social app created
                to make networking easier. It is available both on computers and mobile phones. Its website can be seen
                under this <a target="_blank" href="https://guild.co">link</a>. The main feature of the application is
                the ability to create and join groups. Groups usually focus on business-related topics or users'
                interests. Within groups, users can create threads, polls, events, or video calls. While working at
                Monterail Software House, I had the opportunity to design new features for the Guild app and redesign
                old ones. I was part of a scrum team consisting of a Product Manager, two Developers (one responsible
                for front-end and one for back-end), one QA, and me - Product Designer. We were also in frequent contact
                with the CEO of Guild - Gregor Young.
            </p>
            <p>
                My work on the new poll conversation feature began when Gregor informed me that users lack space to
                discuss poll results. He said that users create a separate conversation for this purpose, but this way
                poll and conversation are not connected in any way. Gregor asked for my help in solving this issue.
                Okay, now you know the basics!
            </p>
            <p>
                <h3>The first step and first failure</h3>
                My first step was to look through the patterns existing on the market. I observed how polls typically
                look in social media applications. After a brief research phase, my initial idea was to allow users to
                create polls within conversations, similar to how it is done on the Messenger app or Slack. This way,
                discussions about poll results could take place within the conversation, and both elements would be
                connected, forming a cohesive whole. However, this idea turned out to be a non-starter due to technical
                reasons and was rejected at an early stage.
            </p>
            <p>
                <h3>Getting on the right track</h3>
                After the initial setback, I continued to brainstorm and came up with another idea. I wanted to give
                users the option to create a dedicated conversation when creating a new poll. I called it a poll
                conversation. On poll conversation, users could discuss the poll and its results. This conversation
                would be connected directly with the poll. Before diving into the designs to ensure I was heading in the
                right direction and not wasting time on designing the wrong solution, I discussed my idea with the
                development team and Gregor (Guild CEO). The idea received positive feedback, with only one new
                requirement: Gregor wanted users to have access to the conversation only after taking part in the poll,
                so they wouldn't be influenced by others' comments while answering the survey.
            </p>
            <p>
                <h3>Design Process</h3>
                After the meeting, I had a clear design flow in my mind, so I started sketching it in Figma. I began by
                making changes to the poll creation process. I added a checkbox on the poll creation screen. If the user
                leaves it checked in, a poll conversation will be created instead of a regular poll. I also added a
                tooltip to the checkbox, explaining what the new option is and how it works. Below, on the carousel, you
                can see how the poll conversation creation flow looks in the desktop app.
                <Carousel>
                    <img src={guild_1} alt="guild_1"/>
                    <img src={guild_2} alt="guild_2"/>
                    <img src={guild_3} alt="guild_3"/>
                    <img src={guild_4} alt="guild_4"/>
                    <img src={guild_5} alt="guild_5"/>
                    <img src={guild_6} alt="guild_6"/>
                </Carousel>
                After finishing the design for the poll conversation creation flow, I moved on to the flow of answering
                poll questions. It was already in place, but I felt it could look better visually, so I decided to give
                it a fresh look. I felt that in the current design, all the elements were quite large, which could lead
                to users having to scroll the screen if the question would be longer or if there would be more possible
                answers. I wanted to avoid this situation, so I reduced the size of all the elements. Below, you can see
                how mobile screens, showing the flow of answering the poll, looked before and after I made some changes.
                <Carousel>
                    <img className="medium" src={guild_7} alt="guild_7"/>
                    <img className="medium" src={guild_8} alt="guild_8"/>
                    {shouldDisplay ? <img src={guild_8_desktop} className="medium" alt="guild_8_desktop"/> : ''}
                </Carousel>
                <Carousel>
                    <img className="medium" src={guild_9} alt="guild_9"/>
                    <img className="medium" src={guild_10} alt="guild_10"/>
                    {shouldDisplay ? <img className="medium" src={guild_10_desktop} alt="guild_10_desktop"/> : ''}
                </Carousel>
                <Carousel>
                    <img className="medium" src={guild_11} alt="guild_11"/>
                    <img className="medium" src={guild_12} alt="guild_12"/>
                    {shouldDisplay ? <img className="medium" src={guild_12_desktop} alt="guild_12_desktop"/> : ''}
                </Carousel>
                This way, I refreshed the flow of responding to polls. My next step was designing a screen with a poll
                conversation on the group feed. I wanted the poll conversation to look visually different from a regular
                poll so that users could easily distinguish between them. I kept the appearance of the regular poll
                unchanged to avoid confusing users with unnecessary changes. However, in the design of the poll
                conversation, I included the avatar of the person associated with the conversation. This way, I
                differentiated the appearance of these two types of polls and added a personal touch to the poll
                conversation to grab users' attention. Below, you can see how the appearance of these two types of polls
                differs.
            </p>
            <p className="center">
                <img className="medium" src={guild_13} alt="guild_13"/>
            </p>
            <p>
                In the beginning, I was considering whose avatar to include in the view of the poll conversation on the
                group feed. The best idea seemed to be featuring the avatar of the person who last commented on the poll
                conversation. This would be also analogous to how the threads look in the guild app on the group feed.
                The design of the thread on the group feed included the beginning of the last comment and the avatar of
                the person who wrote it. I knew that we couldn't apply the exact same pattern, or at least not in every
                case, as one of the business requirements was to keep comments on poll conversations hidden from users
                who did not participate in the poll. There was also the question of whose avatar to show when there are
                no comments in the poll conversation yet. In the end, I decided to prepare separate design versions for
                a poll conversation on the group feed for users who hadn’t responded to the poll yet and separate,
                slightly different for the ones who already took part in the poll. Below, you can see how they differ.
            </p>
            <p className="center">
                <img className="small" src={guild_14} alt="guild_14"/>
            </p>
            <p>
                I wanted also to differentiate the design of answered and not-answered poll conversations so users could
                easily distinguish them. Because of that, I have added a small turquoise ‘check’ icon (same as on the
                poll results screen) to the design of the answered poll conversation. After we hover over the icon the
                tooltip shows up.
            </p>
            <p className="center">
                <img className="medium" src={guild_15} alt="guild_15"/>
            </p>
            <p>
                In the beginning, I made this ‘check’ icon pink to maintain color consistency with the rest of the
                design. However, my team pointed out that because of this color, this icon looks a bit like a
                notification or an unread message so I have changed it to the second primary guild color - turquoise.
            </p>
            <p className="center">
                <img className="medium" src={guild_16} alt="guild_16"/>
            </p>
            <p>
                Next, I focused on designing the screen with the poll conversation itself. I didn't want to reinvent the
                wheel, so the poll conversation looks similar to the classic thread that users are already accustomed
                to. However, I added a bar with the poll question and a button that leads to poll results. On the
                button, users can also see how many people participated in the poll. Below, you can see the screen of a
                poll conversation when there are no comments yet. I didn't want to leave an empty screen in such a
                situation, so I decided to include an automatic first message encouraging conversation.
            </p>
            <p className="center">
                <img src={guild_17} alt="guild_17"/>
            </p>
            <p>
                Below, finally, you can see the full mobile flow of taking part in the poll conversation. When users
                enter the poll conversation for the first time they see the poll question. After answering it, they see
                the poll results and then they can go to the poll conversation. Next time when users will enter a poll
                conversation, they will go straight to the poll conversation (as they answered a poll question earlier).
            </p>
            <p className="center">
                <img src={guild_18} alt="guild_18"/>
            </p>
            <p>
                <h3>Small additional feature</h3>
                During my work on this task, I received information that many hosts were deleting their polls because
                they no longer wanted to collect responses and there was no other option to do that. In response, I
                proposed the idea of introducing the ability to close and reopen polls. This gave hosts the option to
                stop collecting answers while still maintaining a conversation about the results. When the host closes
                the poll conversation, users who responded to the poll earlier can still comment and view the results.
                Users who haven't responded to the poll question can't join the poll conversation but they can still see
                the survey results. To differentiate between closed and open poll conversations on the group feed, I
                changed the color of the closed poll conversation icon to grey.
            </p>
            <p className="center">
                <img className="medium" src={guild_19} alt="guild_19"/>
            </p>
            <p>
                I changed also the color of the bars on the results page for the closed poll conversation to gray to
                underline the fact that the poll is no longer active and is not collecting answers.
            </p>
            <p className="center">
                <img src={guild_20} alt="guild_20"/>
            </p>
            <p>
                To ensure that users feel comfortable and have a sense of control over what happens in the application,
                after selecting the "Close" or "Reopen" poll option a bottom bar appears with a confirmation question,
                ensuring they are certain about their decision to close or reopen the poll. I wanted to make sure users
                understood the implications of these actions so, I added in the bottom bar, information about what will
                happen after closing or reopening the poll conversation. Below, you can see screens from the flow of
                closing and reopening a poll in the mobile app.
            </p>
            <p className="center">
                <img src={guild_21} alt="guild_21"/>
                <img src={guild_22} alt="guild_22"/>
            </p>
            <p>
                During the completion of this task, I redesigned the screens associated with poll creation, responses,
                and result visualization, while also incorporating the feature to close and reopen polls. My aim was for
                all processes in the application to be consistent, so in the end, I had also to make similar changes in
                the flow where users opt to create poll without dedicated conversation.
            </p>
            <p>
                <h3>What I have learned?</h3>
                Through this project, I gained valuable insights into various aspects of the design process and
                collaboration. Working within a scrum team taught me the importance of iterative development and
                adapting to changing requirements. The cooperation with the client enhanced my communication skills,
                allowing me to better understand their needs and incorporate feedback effectively. I learned the
                significance of focusing on specific screens rather than drawing out every flow, optimizing time and
                resources for a more efficient design process. Additionally, input from team members who deeply
                understand the product, played an important role in enhancing the user experience. This experience
                provided me with a comprehensive understanding of the design workflow, highlighting the importance of
                collaboration, efficiency, and responsiveness to both client and team input.
            </p>
            <p>
                <h3>What I would do differently?</h3>
                Looking back, I think I would now advise the client not to have the checkbox on the poll creation screen
                (the screen below) pre-selected. This way, users could decide for themselves whether to check it or not
                and, consequently, decide if they want to create a dedicated conversation for the poll or not.
            </p>
            <p className="center">
                <img src={guild_23} alt="guild_23"/>
            </p>
            <p>
                <h3>What I would do next?</h3>
                My next step would be to create the option of generating a poll conversation for an already existing
                poll. Currently, a poll conversation can only be initiated during the poll creation process. I would
                also add the option to create multiple-choice polls. Currently, users can only create single-choice
                polls.
            </p>
            <p>
                In the end, I'm sharing below a few more shots of the poll conversation feature.
            </p>
            <p className="center">
                <img src={guild_24} alt="guild_24"/>
            </p>
            <p className="center">
                <img src={guild_25} alt="guild_25"/>
            </p>
            <p className="center">
                <img src={guild_26} alt="guild_26"/>
            </p>


        </ProjectPage>
    );
};

export default Index;
