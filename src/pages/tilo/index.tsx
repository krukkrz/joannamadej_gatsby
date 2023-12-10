import { getProject } from "../../services/projects";
import ProjectPage from "../../components/project/ProjectPage";

// @ts-ignore
import tilo_0 from "../../assets/projects/tilo/works/tilo_0.png";
// @ts-ignore
import tilo_1 from "../../assets/projects/tilo/works/tilo_1.png";
// @ts-ignore
import tilo_2 from "../../assets/projects/tilo/works/tilo_2.png";
// @ts-ignore
import tilo_3 from "../../assets/projects/tilo/works/tilo_3.png";
// @ts-ignore
import tilo_4 from "../../assets/projects/tilo/works/tilo_4.png";
// @ts-ignore
import tilo_5 from "../../assets/projects/tilo/works/tilo_5.png";
// @ts-ignore
import tilo_6 from "../../assets/projects/tilo/works/tilo_6.png";
// @ts-ignore
import tilo_7 from "../../assets/projects/tilo/works/tilo_7.png";
// @ts-ignore
import tilo_8 from "../../assets/projects/tilo/works/tilo_8.png";
// @ts-ignore
import tilo_9 from "../../assets/projects/tilo/works/tilo_9.png";
// @ts-ignore
import tilo_10 from "../../assets/projects/tilo/works/tilo_10.png";
// @ts-ignore
import tilo_11 from "../../assets/projects/tilo/works/tilo_11.png";
// @ts-ignore
import tilo_12 from "../../assets/projects/tilo/works/tilo_12.png";
// @ts-ignore
import tilo_13 from "../../assets/projects/tilo/works/tilo_13.png";
// @ts-ignore
import tilo_14 from "../../assets/projects/tilo/works/tilo_14.png";
// @ts-ignore
import tilo_15 from "../../assets/projects/tilo/works/tilo_15.png";
// @ts-ignore
import tilo_16 from "../../assets/projects/tilo/works/tilo_16.png";
// @ts-ignore
import tilo_17 from "../../assets/projects/tilo/works/tilo_17.png";
// @ts-ignore
import tilo_18 from "../../assets/projects/tilo/works/tilo_18.png";
// @ts-ignore
import tilo_19 from "../../assets/projects/tilo/works/tilo_19.png";
// @ts-ignore
import tilo_20 from "../../assets/projects/tilo/works/tilo_20.png";
// @ts-ignore
import tilo_21 from "../../assets/projects/tilo/works/tilo_21.png";
// @ts-ignore
import tilo_22 from "../../assets/projects/tilo/works/tilo_22.png";
// @ts-ignore
import tilo_23 from "../../assets/projects/tilo/works/tilo_23.png";
// @ts-ignore
import tilo_24 from "../../assets/projects/tilo/works/tilo_24.png";
// @ts-ignore
import tilo_25 from "../../assets/projects/tilo/works/tilo_25.png";
// @ts-ignore
import tilo_26 from "../../assets/projects/tilo/works/tilo_26.png";
// @ts-ignore
import tilo_27 from "../../assets/projects/tilo/works/tilo_27.png";
// @ts-ignore
import tilo_28 from "../../assets/projects/tilo/works/tilo_28.png";
// @ts-ignore
import tilo_29 from "../../assets/projects/tilo/works/tilo_29.png";
// @ts-ignore
import tilo_30 from "../../assets/projects/tilo/works/tilo_30.png";
// @ts-ignore
import tilo_31 from "../../assets/projects/tilo/works/tilo_31.png";
// @ts-ignore
import tilo_32 from "../../assets/projects/tilo/works/tilo_32.png";

import React from "react";
import Carousel from "../../components/carousel/Carousel";

const Index = () => {
  const tiloProject = getProject("tilo");
  return (
    <ProjectPage project={tiloProject}>
      <p>
        <h3>Research</h3>I began the project by doing research. I looked at the
        sign-up and login processes of various competitors in the market, both
        on mobile and desktop. Here's a snippet from my research - the login and
        registration flow in the Udemy app.
      </p>
      <img src={tilo_0} alt="tilo_0" />
      <img className="small" src={tilo_1} alt="tilo_1" />
      <p>
        Next, I read some articles about best practices in the login and
        registration process. I wanted to learn from the best sources, so I
        focused on articles from the Nielsen Norman Group and the Baymard
        Institute. Here are a few articles I used for insights:
        <ul>
          <li>
            <a
              href="https://www.nngroup.com/articles/checklist-registration-login/"
              target="_blank"
            >
              A Checklist for Registration and Login Forms on Mobile
            </a>
          </li>
          <li>
            <a
              href="https://www.nngroup.com/videos/login-walls/"
              target="_blank"
            >
              Login Walls
            </a>
          </li>
          <li>
            <a
              href="https://baymard.com/blog/simplifying-sign-up/"
              target="_blank"
            >
              19 Ways to Simplify ‘Sign Up’
            </a>
          </li>
          <li>
            <a
              href="https://baymard.com/blog/simplifying-sign-in/"
              target="_blank"
            >
              9 Ways to Simplify ‘Sign In’
            </a>
          </li>
        </ul>
      </p>
      <p>
        <h3>Sketches on Paper</h3>
        After understanding good practices for designing the registration and
        login process and studying how these processes work in other companies,
        I started sketching out the flows on paper. On the pictures below you
        can see my sketches.
      </p>
      <img src={tilo_2} alt="tilo_2" />
      <img className="small" src={tilo_3} alt="tilo_3" />
      <p>
        <h3>UI Screens</h3>
        My next step was to transfer my sketches into wireframes in Figma.
        Below, you can see screens from the registration flow which I have
        designed.
        <Carousel>
          <img src={tilo_4} alt="tilo_4" />
          <img src={tilo_5} alt="tilo_5" />
          <img src={tilo_6} alt="tilo_6" />
          <img src={tilo_7} alt="tilo_7" />
          <img src={tilo_8} alt="tilo_8" />
          <img src={tilo_9} alt="tilo_9" />
          <img src={tilo_10} alt="tilo_10" />
        </Carousel>
      </p>
      <p>
        My goal when designing the registration process was to make it as short
        as possible in order not to discourage the users and not waste their
        time. I only request essential information necessary to create an
        account. If users want to share more about themselves, they can do so
        after creating their account, for instance, in their profile section. To
        achieve this goal, I am not asking the users to to re-enter their email
        and password. However, since it's known that users make fewer mistakes
        when they can see their password (NNGroup), I've added an option to
        reveal it, while keeping it hidden by default for user safety. I've also
        skipped the requirement for users to confirm their registration by
        clicking on an email link, as it would unnecessarily prolong the
        registration process.
      </p>
      <p>
        I assumed that the Tilo application would not store sensitive user data,
        so I do not require a specific password length or the inclusion of
        special characters during registration, but if it turns out that we want
        users to use stronger passwords, I'd include clear rules on the
        registration screen regarding password criteria.
      </p>
      <p>
        In the registration process, I ask users for their email address instead
        of a username, simplifying the login process by eliminating the need to
        remember a unique username created solely for this platform.
      </p>
      <p>
        In addition to the flow, I've also prepared additional screens showing
        specific situations and validations that can occur. In the screen below,
        we see a situation where the user has Caps Lock on while entering the
        password.
      </p>
      <img src={tilo_11} alt="tilo_11" />
      <p>
        In the following screen, we observe a situation in which the user
        entered an email in an incorrect format and clicked the "Sign up"
        button.
      </p>
        <img src={tilo_12} alt="tilo_12" />
        <p>
            In the two screens below, we see a situations in which the user didn't enter on first screen an email and on second password and pressed the "Sign up" button.
        </p>
        <img src={tilo_13} alt="tilo_13" />
        <img src={tilo_14} alt="tilo_14" />
        <p>
            Below, you can see screens from the log in flow.
        </p>
        <Carousel>
            <img src={tilo_15} alt="tilo_15" />
            <img src={tilo_16} alt="tilo_16" />
            <img src={tilo_17} alt="tilo_17" />
            <img src={tilo_18} alt="tilo_18" />
            <img src={tilo_19} alt="tilo_19" />
            <img src={tilo_20} alt="tilo_20" />
            <img src={tilo_21} alt="tilo_21" />
            <img src={tilo_22} alt="tilo_22" />
            <img src={tilo_23} alt="tilo_23" />
            <img src={tilo_24} alt="tilo_24" />
            <img src={tilo_25} alt="tilo_25" />
        </Carousel>
        <p>
            In the log in process I wanted users to know immediately if they are making a mistake in the email so when they enter an email and then press enter/tab or exit focus mode in the email field, the system will check whether the users with a given email have an account on the website. If not, users will immediately see an error message. Screen with error message can be seen below.
        </p>
        <img src={tilo_26} alt="tilo_26" />
        <p>
            I also placed the button with the copy "Forgot your password?" on the login screen so if the users forget it, they will be able to easily set a new one.
        </p>
        <p>
            If users happen to make a mistake when entering their email or password, the information they've typed won't disappear once it's checked. This way, if they accidentally make a typo, they can simply fix it without having to re-enter all their details from the beginning, saving them time and frustration.
        </p>
        <p>
            For the login process, I have also prepared additional screens showing specific situations and validations that can occur. Below you can see the screens, in order: on which user typed in the email in incorrect format, on which user has Caps Lock on when typing the password, on which user didn't fill email field and clicked the "Log in" button, and on which user didn't fill password field and clicked "Log in" button.
        </p>
        <Carousel>
            <img src={tilo_27} alt="tilo_27" />
            <img src={tilo_28} alt="tilo_28" />
            <img src={tilo_29} alt="tilo_29" />
            <img src={tilo_30} alt="tilo_30" />
        </Carousel>
        <p>
            Both on the screens of the registration process and login process, I placed an easy option, at the bottom, to move from one process to another. I have done it to make switching easier for the users who made a mistake and chose the wrong option.
        </p>
        <p>
            To make both processes easier for users, especially on mobile phones where entering the password takes almost twice as long as on a computer (NNGroup), I included the possibility of logging in and registering via a Google, Facebook, or Apple account.
        </p>
        <p>
            To minimize the need for the user to log in whenever they enter the application, which may be inconvenient, especially on a mobile phone, I added a checkbox with the "Keep me logged in" option on the log-in and sign-up screen.
        </p>
        <p>
            For both processes I have prepared also designs for mobile screen size. Below we can see the mobile Sign-up flow.
        </p>
        <img src={tilo_31} alt="tilo_31" />
        <p>
            Below we can see the mobile Login flow.
        </p>
        <img src={tilo_32} alt="tilo_32" />
        <p>
            When I designed the mobile screens, I ensured that every clickable element had a minimum size of 44 pixels by 44 pixels to prevent any clicking difficulties. I chose fonts with a minimum size of 14 pixels to ensure text visibility. To make navigation easier, I made buttons taller at 56 pixels, larger than in the desktop version. I chose to focus on taking care of the comfort of current application users, so I placed the "Log in" button on the main screen, allowing direct access to the login screen. Additionally, I added both login and registration options to the hamburger menu.
        </p>

    </ProjectPage>
  );
};

export default Index;
