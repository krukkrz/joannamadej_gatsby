export const getTestimonials = (): Testimonial[] => {
  return [
    {
      title: "Gregor Young - CEO at Guild",
      description:
        "Joanna supported Guild's product design work through a critical stage of our growth. Guild is already a very well designed product and the bar was high. She ramped up really quick and fast became a highly valuable contributor. She delivered multiple design-led initiatives tackling some really complex business and user challenges and solving with elegant solutions and beautiful designs. I really liked working with Joanna and think she will be a credit to any high-performing product team.",
    },
    {
      title: "Agnieszka Zygmunt - Lead UX Researcher at 10Clouds",
      description:
        "I've had the pleasure of working with Joanna as her UX mentor, supporting her work in the scope of UX research. Joanna is an incredibly ambitious designer, hungry for knowledge, who finds a solution in every possible situation. During our collaborative journey, Joanna not only expanded her research and design knowledge but also actively engaged in acquiring strategic insights, always connecting the dots between user needs and the business goals of projects. She was never afraid to take on new challenges, but more importantly, she sought unconventional solutions to deliver the best possible end result. I wholeheartedly recommend Joanna for both design and ux research work, and I hope our paths will cross again on future projects.",
    },
    {
      title: "Piotr Stanisławski - Founder and Experienced Designer at Unriddl",
      description:
        "Joanna is more than just a skilled professional. She has a great understanding of what users want and need. She's really good at thinking like a user, and she uses this talent to create designs that users love. Joanna is also incredibly driven, always working hard and looking for ways to improve.While working with us, Joanna faced a lot of tough situations. These included really tight deadlines and tricky business problems. But no matter what was thrown at her, Joanna handled it really well. She stayed calm, kept focused, and worked hard to find solutions.If you need someone who really understands users and isn't afraid to work hard, I highly recommend Joanna for your UX team. She's got the skills, the empathy, and the work ethic that can make any team better.",
    },
  ];
};

export type Testimonial = {
  title: string;
  description: string;
};
