import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import ProjectCard from "../components/UI/ProjectCard";
export default function ProjectsContent() {
  return (
    <div className="h-[18rem]">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <ProjectCard
            title="Smart-Downloading-System"
            description="The Distributed Downloading System , also known as SmartDownloader, is a multi-device downloader designed to enhance file download efficiency."
            techstack="HTML,CSS,Javascript,React JS"
            imgSrc={project1}
            liveUrl="https://smart-downloader.vercel.app/"
            codeUrl="https://github.com/AmanAB-9162/Distributng-downloading-system"
          />
          <ProjectCard
            title="Smart-Finder"
            description="The document finder is a tool that searches for a given keyword in the content of files within a specified directory and its subdirectories."
            techstack="HTML,CSS,Javascript,React JS"
            imgSrc={project2}
            liveUrl="https://smart-document-locator.vercel.app/"
            codeUrl="https://github.com/AmanAB-9162/Smart-Finder"
          />
        </div>

        <div className="flex flex-row">
          <ProjectCard
            title="Drum-Kit"
            description="Funny and a basic Drum kit system"
            techstack="HTML, CSS,Javascript"
            imgSrc={project3}
            // liveUrl="https://github.com/saloni-15/nextlevel-food"
            codeUrl="https://github.com/AmanAB-9162/Drum-Sound-Kit"
          />
          <ProjectCard
            title="Comment-Basic"
            description="Comment add website "
            techstack="HTML,CSS,Javascript,React JS"
            imgSrc={project4}
            liveUrl="https://social-media-basic.vercel.app/"
            codeUrl="https://github.com/AmanAB-9162/Social-Media-Basic"
          />
        </div>
      </div>
    </div>
  );
}
