import Hero from "./hero/Hero";
import ProductList from "./productlist/ProductList";
import ProfileCard from "./ProfileCard";

const components = {
  HERO_SECTION: Hero,
  PRODUCT_LIST: ProductList,
  PROFILE_CARD: ProfileCard,
};

const ComponentResolver = ({ section }) => {
  const Tag = components[section.type];
  return Tag ? <Tag {...section.data} /> : null;
};

export default ComponentResolver;
