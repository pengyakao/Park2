import { useEffect, useState } from "react";
import "./mobile.css";
import "./style.css";

import { ReactComponent as SvgMap } from "./component/park2-all.svg";

import { myJS } from "./func";
import SearchBar from "./component/map_searchBar";
import Card from "./component/map_card";
import SwitchBtn from "./component/map_switch";
import SideBar from "./component/map_sideBar";
import Mobile_bg from "./component/map_mobile_bg"

// api
import { getStore } from "../../../api/storeApi";

const Map = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getStore().then((result) => {
      setdata(result);
    });
  }, []);

  useEffect(() => {
    myJS(data);
  },[data]);

  return (
    <div class="map-container">
      <SideBar />
      <SearchBar />
      <Card />
      <SvgMap />
      <SwitchBtn />
      <Mobile_bg />
    </div>
  );
};

// export { Map };
export default Map;
