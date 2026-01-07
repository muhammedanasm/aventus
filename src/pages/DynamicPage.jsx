import { useParams } from "react-router-dom";
import { useConfig } from "../context/ConfigContext";
import ComponentResolver from "../components/ComponentResolver";

const DynamicPage = () => {
  const { pageId = "home" } = useParams();
  const config = useConfig();
  const page = config.pages[pageId];

  if (!page) return <div className="p-20 text-center">Page Not Found</div>;

  return (
    <div className="w-full">
      {page.sections.map((sec, i) => (
        <section
          key={i}
          className={
            sec.type === "HERO_SECTION"
              ? "w-full"
              : "max-w-7xl mx-auto px-6 py-12"
          }
        >
          <ComponentResolver section={sec} />
        </section>
      ))}
    </div>
  );
};
export default DynamicPage;
