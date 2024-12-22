import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import HomeIcon from "../../assets/svgs/Home";
import ProductDetail from "../../assets/svgs/ProductDetail";
// import Events from "../../assets/svgs/Events";
import MediaAndNews from "../../assets/svgs/MediaAndNews";
import Article from "../../assets/svgs/Article";
import Blogs from "../../assets/svgs/Blogs";
import Brochure from "../../assets/svgs/Brochure";
import Career from "../../assets/svgs/Career";
import Settings from "../../assets/svgs/Settings";
import Logout from "../../assets/svgs/Logout";
import { useNavigate, useLocation } from "react-router-dom";
import useAuthStore from "../../store/auth";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPathActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const topItems = [
    {
      key: "/",
      icon: <HomeIcon active={location.pathname === "/"} />,
      label: `Home`,
    },
    {
      key: "/product-details",
      icon: <ProductDetail active={isPathActive("/product-details")} />,
      label: `Product Detail`,
    },
    // {
    //   key: "/event-details",
    //   icon: <Events active={isPathActive("/event-details")} />,
    //   label: `Events`,
    // },
    {
      key: "/mediaAndNews-details",
      icon: <MediaAndNews active={isPathActive("/mediaAndNews-details")} />,
      label: `Media and News`,
    },
    {
      key: "/article-details",
      icon: <Article active={isPathActive("/article-details")} />,
      label: `Article`,
    },
    {
      key: "/blog-details",
      icon: <Blogs active={isPathActive("/blog-details")} />,
      label: `Blogs`,
    },
    {
      key: "/content-details",
      icon: <Blogs active={isPathActive("/content-details")} />,
      label: `Content`,
    },
    {
      key: "/brochure-details",
      icon: <Brochure active={isPathActive("/brochure-details")} />,
      label: `Brochure`,
    },
    {
      key: "/job-details",
      icon: <Career active={isPathActive("/job-details")} />,
      label: `Career`,
    },
  ];

  const bottomItems = [
    {
      key: "/settings",
      icon: <Settings active={location.pathname === "/settings"} />,
      label: `Settings`,
    },
    {
      key: "/logout",
      icon: <Logout active={location.pathname === "/logout"} />,
      label: `Log out`,
    },
  ];
  const { logout } = useAuthStore();

  const handleMenuClick = (e) => {
    if (e.key === "/logout") {
      logout();
      return navigate("/auth");
    }
    const allItems = [...topItems, ...bottomItems];
    const selectedItem = allItems.find((item) => item.key === e.key);
    console.log(e);

    if (selectedItem?.key) {
      navigate(selectedItem.key);
    }
  };

  return (
    <Sider
      width={240}
      style={{
        background: "#FFF",
        paddingLeft: "16px",
        borderRadius: "12px",
        paddingRight: "32px",
        height: "100%",
        overflow: "auto",
      }}
      className="!h-[calc(100vh-100px)] mb-[19px]"
      id="sidebar"
    >
      <div className="flex flex-col justify-between pb-[24px] pt-[14px] h-full">
        <div className="">
          <Menu
            mode="inline"
            selectedKeys={[
              topItems.find((item) => isPathActive(item.key))?.key || "",
            ]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={topItems}
            onClick={handleMenuClick}
          />
        </div>

        <div className="">
          <Menu
            mode="inline"
            selectedKeys={[
              bottomItems.find((item) => item.key === location.pathname)?.key ||
                "",
            ]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={bottomItems}
            onClick={handleMenuClick}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
