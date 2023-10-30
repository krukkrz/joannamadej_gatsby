import { getProject } from "../../services/projects";
import ProjectPage from "../../components/project/ProjectPage";
//@ts-ignore
import work_1 from "../../assets/projects/omantel/works/work_1.png";
//@ts-ignore
import work_2 from "../../assets/projects/omantel/works/work_2.png";
//@ts-ignore
import work_3 from "../../assets/projects/omantel/works/work_3.png";
//@ts-ignore
import work_4 from "../../assets/projects/omantel/works/work_4.png";
import React from "react";

const Index = () => {
  const omantelProject = getProject("omantel");
  return (
    <ProjectPage project={omantelProject}>
      <div>
        <p>
          Omantel is the largest telecommunications company in Oman. In addition
          to telecommunications services, they also have an online store with
          electronics. While working at the Unriddl agency, I had the
          opportunity to work on the Omantel store project and design new
          features for it. Below few features that I have introduced:
        </p>
        <ul>
          <li>Possibility to pay with points and vouchers</li>
          <li>
            Possibility to buy products online and pick them up from physical
            outlets
          </li>
          <li>Possibility to buy products in bundles</li>
          <li>Possibility to order internet and telephone offers</li>
          <li>Possibility to switch offer from prepaid to postpaid</li>
        </ul>
        <p>
          One of the features I have designed while working on the Omantel
          online store project was outlet pickup. The purpose of this task was
          to provide users with the opportunity to order products from the
          Omantel online store and pick them up at one of the physical outlets
          in Oman. User flow for this task starts on the product page where
          users can check whether a given product is available with the outlet
          pickup option, if so, they can check the exact outlet where the pickup
          is possible, check its address, location on the map, and opening
          hours. If the users decide to purchase the product, they go through
          the initial checkout process, and then in the shipping options they
          can select the outlet pickup option. If they select this option, they
          will be able to select a specific outlet, where they want to pick up
          the products, from the list. Once they choose an outlet, they can also
          make an appointment at the outlet for a specific time, so they won't
          have to wait in line when picking up the item, but this is not a
          necessary option. Then they will go to the order summary which
          contains all the necessary information - the selected outlet, its
          address and opening hours, and if they made an appointment to pick up
          the products, its date. All this information will also be included in
          the order history. Below, I present most of the screens that I have
          designed for this task in user flow order. Full flow with all screens
          can be seen in <a target="_blank" href={omantelProject.figmaFile}>figma file</a>.
        </p>
        <img src={work_1} alt="work_1" />
        <p>
          After placing an order with the outlet pickup option, the user will
          also receive an e-mail with all the necessary information. I designed
          two email templates one for users who made an appointment in the
          outlet and one for those who did not. Both designs can be seen below.
        </p>
        <img src={work_2} alt="work_2" />
        <p>
          I have prepared all elements used in the date and time picker in all
          possible states. And I've done the same for all new checkout elements.
          They can be seen below.
        </p>
        <img src={work_3} alt="work_3" />
        <img src={work_4} alt="work_4" />
      </div>
    </ProjectPage>
  );
};

export default Index;
