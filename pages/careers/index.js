import { useState } from "react";
export default function Careers() {
  const [activeRole, setActiveRole] = useState(0);
  const scroll2top = () => {
    window.scrollTo({
      top: document.getElementById("__next").offsetTop,
      behavior: "smooth",
    });
  };
  const roles = [
    {
      title: "QA Automation (Mid or Senior)",
      location: "Engineer	Germany, European Union",
      technologies:
        "Kubernetes, RabbitMQ, Docker, AWS, Azure, Terraform, Jenkins, Git, Ansible",
      requirements: () => (
        <>
          <p className="pb-[50px]">
            - Bachelor&apos;s degree in Computer Science or equivalent <br /> -
            Web services (REST) <br /> - Web technologies (Angular2, Typescript
            and HTML5) - Linux knowledge (scripting, configuration) <br /> -
            Excellent knowledge of object-oriented programming (OOP). <br /> -
            Experience in version control is preferred <br />- Strong knowledge
            of Javascript, HTML, CSS and related tools / packages
            <br /> - Solid knowledge of relational databases and / or
            non-relational databases
            <br /> - Good understanding of software architecture and design
            <br /> - Advanced level of written and spoken English
          </p>
          <h2 className="pb-[25px]">Knowing the following is a plus:</h2>
          <p className="pb-[50px]">
            - C++ development skills
            <br />- Knowledge of scripting languages- NodeJS, Express, Npm,
            Angular
            <br /> - Cloud architecture (AWS / Azure / Google Cloud) - ReactJS /
            React Native / GraphQL
            <br /> - Routing, TCP / IP, sockets- Database knowledge (SQL)
            <br /> - NoSQL knowledge
            <br /> - Familiarity with Python / Perl / Ruby would be a plus
            <br /> - Experience in working with V-Model, Agile methods
          </p>
          <h2 className="pb-[25px]">Responsibilities</h2>
          <p className="pb-[25px]">
            Continuous development, continuous integration and continuous
            testing using GIT, Jenkins Configuration management and continuous
            deployment using Chef, SaltStack, Ansible and Docker.
          </p>
          <p className="pb-[25px]">You will find out more at the interview.</p>
          <p>
            To apply please send your CV to office@alfa-point.com or contact us
            by any other means possible.
          </p>
        </>
      ),
    },
    {
      title: "QA Automation (Junior)",
      location: "Engineer	Germany, European Union",
      technologies:
        "Kubernetes, RabbitMQ, Docker, AWS, Azure, Terraform, Jenkins, Git, Ansible",
      requirements: () => (
        <>
          <p className="pb-[50px]">
            - Bachelor's degree in Computer Science or equivalent <br /> - Web
            services (REST) <br /> - Web technologies (Angular2, Typescript and
            HTML5) - Linux knowledge (scripting, configuration) <br /> -
            Excellent knowledge of object-oriented programming (OOP). <br /> -
            Experience in version control is preferred <br />- Strong knowledge
            of Javascript, HTML, CSS and related tools / packages
            <br /> - Solid knowledge of relational databases and / or
            non-relational databases
            <br /> - Good understanding of software architecture and design
            <br /> - Advanced level of written and spoken English
          </p>
          <h2 className="pb-[25px]">Knowing the following is a plus:</h2>
          <p className="pb-[50px]">
            - C++ development skills
            <br />- Knowledge of scripting languages- NodeJS, Express, Npm,
            Angular
            <br /> - Cloud architecture (AWS / Azure / Google Cloud) - ReactJS /
            React Native / GraphQL
            <br /> - Routing, TCP / IP, sockets- Database knowledge (SQL)
            <br /> - NoSQL knowledge
            <br /> - Familiarity with Python / Perl / Ruby would be a plus
            <br /> - Experience in working with V-Model, Agile methods
          </p>
          <h2 className="pb-[25px]">Responsibilities</h2>
          <p className="pb-[25px]">
            Continuous development, continuous integration and continuous
            testing using GIT, Jenkins Configuration management and continuous
            deployment using Chef, SaltStack, Ansible and Docker.
          </p>
          <p className="pb-[25px]">You will find out more at the interview.</p>
          <p>
            To apply please send your CV to office@alfa-point.com or contact us
            by any other means possible.
          </p>
        </>
      ),
    },
  ];
  return (
    <main>
      <main>
        <div className="md:grid md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="px-[25px] md:px-[50px] bg-regal-blue h-[400px] relative">
              <div className="absolute bottom-[50px] md:left-[50px] left-[25px] pr-[25px]">
                <h1 className="leading-[50px]">{roles.at(activeRole).title}</h1>
              </div>
            </div>
            <section className="px-[25px] py-[50px] md:px-[50px] text-black">
              <h2 className="pb-[25px]">Required technical competence:</h2>
              {roles.at(activeRole).requirements()}
            </section>
          </div>
          <div className="relative col-span-3">
            <div className="max-md:hidden h-[220px] bg-regal-blue"></div>
            <div className="sticky top-0 overflow-hidden">
              <div className="relative">
                <div className="py-[50px] md:h-[100vh] bg-[#F2F2F2] md:pt-[100px] px-[25px] text-black">
                  <h2 className="pb-[50px] px-[15px]">Vacancies to consider</h2>
                  <table>
                    <thead>
                      <tr>
                        <td className="w-[15px]"></td>
                        <td className="py-[10px] border-b-[1px] border-black border-opacity-[30%]">
                          Position
                        </td>
                        <td className="py-[10px] border-b-[1px] border-black border-opacity-[30%]">
                          Location
                        </td>
                        <td className="py-[10px] border-b-[1px] border-black border-opacity-[30%]">
                          Technologies and environment
                        </td>
                        <td className="w-[15px]"></td>
                      </tr>
                    </thead>
                    <tbody>
                      {roles.map((r, i) => (
                        <tr
                          className="group hover:bg-regal-blue cursor-pointer"
                          key={`role-${i}`}
                          onClick={() => {
                            setActiveRole(i);
                            scroll2top();
                          }}
                        >
                          <td className="w-[15px] border-y-[1px] border-transparent group-hover:border-regal-blue"></td>
                          <td className="py-[10px] pr-[15px] border-b-[1px] border-black border-opacity-[30%] text-[#0087C0] underline group-hover:text-white group-hover:border-regal-blue">
                            {r.title}
                          </td>
                          <td className="py-[10px] pr-[15px] border-b-[1px] border-black border-opacity-[30%] group-hover:text-white">
                            {r.location}
                          </td>
                          <td className="py-[10px] border-b-[1px] border-black border-opacity-[30%] group-hover:text-white">
                            {r.technologies}
                          </td>
                          <td className="w-[15px] border-y-[1px] border-transparent group-hover:border-regal-blue"></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
