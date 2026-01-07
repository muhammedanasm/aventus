import userAvatar from "../assets/user.png";
import headphone from "../assets/headphone.jpg";
import coffee from "../assets/coffee.jpg";

export const uiConfig = {
  theme: {
    primaryColor: "#2563eb",
    backgroundColor: "#f1f5f9",
    textColor: "#0f172a",
    borderRadius: "12px",
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Profile", path: "/profile" },
  ],
  pages: {
    home: {
      title: "Welcome Home",
      sections: [
        {
          type: "HERO_SECTION",
          data: {
            title: "Welcome to Aventus",
            subtitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We sell premium laptops, headphones, and modern lifestyle products tailored for your everyday needs.",
            buttonText: "View Products",
            imageUrl:
              //   "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
              //   "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crophttps://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&blend=000000&blend-alpha=50&blend-mode=normal",
          },
        },
      ],
    },
    products: {
      title: "Our Collection",
      sections: [
        {
          type: "PRODUCT_LIST",
          data: {
            items: [
              {
                id: 1,
                name: "Laptop",
                price: 999,
                category: "Electronics",
                image:
                  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
              },
              {
                id: 2,
                name: "Headphones",
                price: 199,
                category: "Electronics",
                image: headphone,
              },
              {
                id: 3,
                name: "Coffee Mug",
                price: 15,
                category: "Lifestyle",
                image: coffee,
              },
            ],
          },
        },
      ],
    },
    profile: {
      title: "User Profile",
      sections: [
        {
          type: "PROFILE_CARD",
          data: {
            name: "Muhammed Anas",
            email: "muhammedanas@example.com",
            bio: "React Developer based in Kerala.",
            avatar: userAvatar,
          },
        },
      ],
    },
  },
};
