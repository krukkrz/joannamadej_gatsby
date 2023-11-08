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
import guild_9 from "../../assets/projects/guild/works/guild_9.png";
// @ts-ignore
import guild_10 from "../../assets/projects/guild/works/guild_10.png";
// @ts-ignore
import guild_11 from "../../assets/projects/guild/works/guild_11.png";
// @ts-ignore
import guild_12 from "../../assets/projects/guild/works/guild_12.png";
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


import React from "react";
import Carousel from "../../components/carousel/Carousel";

const Index = () => {
  const guildProject = getProject("guild");
  return (
    <ProjectPage project={guildProject}>
      <p>
        The guild app is a social app created to make networking easier. The
        main feature of the application is the ability to create and join
        groups. Groups usually focus on business-related topics or users'
        interests. Within groups, users can create threads, polls, events, or
        video calls. While working at Monterail Software House, I had the
        opportunity to design new features for the Guild app and redesign old
        ones.
        <br />
        <br />
        One of the features which I designed, was introducing the ability to
        create a conversation for the specific poll. The poll conversation was
        meant to be a space to exchange opinions about the poll results. The
        business requirement was that group members would be able to see the
        poll conversation, only after responding to the poll question, to not be
        biased by other members' comments during answering it. Below, you can
        see screens from the flow of creating a poll and the associated
        conversation.
      </p>
      <Carousel>
        <img src={guild_1} alt="guild_1" />
        <img src={guild_2} alt="guild_2" />
        <img src={guild_3} alt="guild_3" />
        <img src={guild_4} alt="guild_4" />
        <img src={guild_5} alt="guild_5" />
        <img src={guild_6} alt="guild_6" />
      </Carousel>
      <p>
        The poll conversation is automatically created after poll creation. To
        not create a poll conversation user needs to uncheck the checkbox on the
        bottom of the poll creation screen, with the copy 'Create a conversation
        for this poll'.
        <br />
        Below you can see the screens from flow of answering to poll question
        and joining the connected conversation.
      </p>
      <Carousel>
        <img src={guild_7} alt="guild_7" />
        <img src={guild_8} alt="guild_8" />
        <img src={guild_9} alt="guild_9" />
        <img src={guild_10} alt="guild_10" />
        <img src={guild_11} alt="guild_11" />
        <img src={guild_12} alt="guild_12" />
        <img src={guild_13} alt="guild_13" />
      </Carousel>
      <p>
        When users enter the poll conversation for the first time they see the
        poll question. After answering it, they see the poll results and then
        they can go to the poll conversation. Next time when users will enter a
        poll conversation, they will go straight to the poll conversation (as
        they answered a poll question earlier).
        <br />
        <br />
        When I was conducting research for this task, it turned out that many
        users deleted their polls because they no longer wanted to collect
        responses to them. Because of that, I came up with the idea to introduce
        the possibility of closing and reopening the polls. If the host closes
        the poll conversation, members are not able to answer the poll question
        anymore but they still can comment and see results. If members didn't
        respond to a poll and the poll is closed, they are still able to see its
        results.
        <br />
        Below you can see screens from flow of closing and reopening poll.
      </p>
      <Carousel>
        <img src={guild_14} alt="guild_14" />
        <img src={guild_15} alt="guild_15" />
        <img src={guild_16} alt="guild_16" />
        <img src={guild_17} alt="guild_17" />
        <img src={guild_18} alt="guild_18" />
        <img src={guild_19} alt="guild_19" />
      </Carousel>
      <p>
        The flows which I presented cover only the most common user journeys,
        but for implementation, I ensured coverage of all scenarios. You can
        view all the screens I've prepared for this task, including mobile
        views, in Figma file.
        <br />
        <br />
        During the completion of this task, I redesigned the screens associated
        with poll creation, responses, and result visualisation, while also
        incorporating the feature to close and reopen polls. My aim was for all
        processes in the application to be consistent, so I had to make similar
        changes also in the flow where users opt to create polls without
        dedicated conversations. You can see those screens which I've prepared
        for this purpose in the same <a href="https://www.figma.com/file/I7GdLv9k80cEmmJ6Ko8mb4/Guild---Poll-conversation?type=design&node-id=0%3A1&mode=design&t=0DjI4AlO65n9gYVm-1" target="_blank">Figma file</a>.
      </p>
    </ProjectPage>
  );
};

export default Index;
