import { getProject } from "../../services/projects";
import ProjectPage from "../../components/project/ProjectPage";
// @ts-ignore
import guild_1 from "../../assets/projects/guild/works/guild_1.png";
// @ts-ignore
import guild_2 from "../../assets/projects/guild/works/guild_2.png";
// @ts-ignore
import guild_3 from "../../assets/projects/guild/works/guild_3.png";
import React, {useState} from "react";
import ReactSimplyCarousel from 'react-simply-carousel';

const Index = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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
      <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToScroll={1}
          itemsToShow={1}
          
          forwardBtnProps={{
            show: true,
            children: ">",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center"
            }
          }}
          backwardBtnProps={{
            show: true,
            children: "<",
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center"
            }
          }}
          dotsNav={{
            show: true,
            itemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0
              }
            },
            activeItemBtnProps: {
              style: {
                height: 16,
                width: 16,
                borderRadius: "50%",
                border: 0,
                background: "black"
              }
            }
          }}
      >
        <img src={guild_1} alt="guild_1" />
        <img src={guild_2} alt="guild_2" />
        <img src={guild_3} alt="guild_3" />
      </ReactSimplyCarousel>

      <p>
        The poll conversation is automatically created after poll creation. To
        not create a poll conversation user needs to uncheck the checkbox on the
        bottom of the poll creation screen, with the copy 'Create a conversation
        for this poll'.
        <br />
        Below you can see the screens from flow of answering to poll question
        and joining the connected conversation.
      </p>
      <img src={guild_2} alt="guild_2" />
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
      <img src={guild_3} alt="guild_3" />
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
