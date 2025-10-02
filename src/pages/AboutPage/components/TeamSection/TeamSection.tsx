import imgNickolas from './img/NickolasPerfil.jpeg'
import imgVitoria from './img/VitoriaPerfil.jpeg'
import imgFelipe from './img/FelipePerfil.jpeg';

interface TeamMemberType {
    name: string;
    rm: string;
    img: string;
    linkedin: string;
    github: string;
}

const TeamMember = ({ member }: { member: TeamMemberType; delay: number }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-1">
    <img 
      src={member.img} 
      alt={member.name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
    <p className="text-gray-600 mb-4">RM: {member.rm}</p>
    <div className="flex justify-center gap-4">
      <a 
        href={member.linkedin} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        LinkedIn
      </a>
      <a 
        href={member.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black transition-colors"
      >
        GitHub
      </a>
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers: TeamMemberType[] = [
    {
      name: "Nickolas Davi",
      rm: "564105",
      img: imgNickolas,
      linkedin: "https://www.linkedin.com/in/nickolas-davi-17824b355/",
      github: "https://github.com/Nickolas0506"
    },
    {
      name: "Vitoria Rodrigues",
      rm: "565160",
      img: imgVitoria,
      linkedin: "https://www.linkedin.com/in/vitoria-rodrigues-martins?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Vitoria146"
    },
    {
      name: "Felipe Ishi",
      rm: "565339",
      img: imgFelipe,
      linkedin: "https://www.linkedin.com/in/felipe-ishii",
      github: "https://github.com/Japitu"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Integrantes</h2>
          <p className="text-gray-600 text-lg">Conheça a equipe por trás da Conexus Vitalis</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name}
              member={member}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;