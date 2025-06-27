import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/OIP (1).webp';
import vercel from '../../assets/e co.jpeg';
import web from '../../assets/book.jpeg';
import chat from '../../assets/misha barnd.webp';
import ProjectCard from '../../common/ProjectCard';
// import mcp from "../../assets/solana-mcp.png"
// import solback from "../../assets/solback.png"
// import swap from "../../assets/swap.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Bhavik-1602/QuickKart-"
          h3="QuickKart-Clone"
          p="Ecommerce Website "
        />
        <ProjectCard
          src={vercel}
          link="https://github.com/Bhavik-1602/HRM"
          h3="HRM"
          p="Human Resource Management System"
        />
        <ProjectCard
          src={web}
          link="https://github.com/Bhavik-1602/Bookwebsite"
          h3="Book Website"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/Bhavik-1602/misha-barnd-factory"
          h3="Misha Barnd Factory"
          p="eCommerce Website"
        />
        {/* <ProjectCard
          src={mcp}
          link="https://github.com/Devang0907/Solana-MCP"
          h3="Solona Bot"
          p="MCP server for solana"
        />
        <ProjectCard
          src={solback}
          link="https://github.com/Devang0907/Solback"
          h3="SolBack"
          p="SOL Recovery Web App"
        />
        <ProjectCard
          src={swap}
          link="https://github.com/Devang0907/Token-Flow"
          h3="Token Flow"
          p="Crypto swap visualizer"
        /> */}

      </div>
    </section>
  );
}

export default Projects;
