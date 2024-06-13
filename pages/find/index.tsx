import React, { useEffect, useCallback, useState } from "react";
import { hangjungdong, storeInfo } from "ComponentsFarm/pageComp/find/constants";
import { fetchStoreSearch } from "ApiFarm/home";
import { IStoreSearch } from "ApiFarm/interface/homeInterface";
import Paging from "ComponentsFarm/Paging";
import { FindWrap } from "ComponentsFarm/pageComp/find/style";
import { findStore } from "MobxFarm/store";
import { getDistance } from "src/util/geolocation";
import { observer } from "mobx-react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import usePaging from "HookFarm/usePaging";

function Index({ storeInfo2 }: { storeInfo2: IStoreSearch[] }) {
  const [timer, setTimer] = useState(0);
  const [distance, setDistance] = useState(true);
  const [load, setLoad] = useState(false);
  const [storeData, setStoreData] = useState<IStoreSearch[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [expandedStores, setExpandedStores] = useState<Set<number>>(new Set());
  const { sido, sigugun } = hangjungdong;

  useEffect(() => {
    async function test() {
      let storeInfo3 = await fetchStoreSearch();
      console.log("storeInfo2", storeInfo2);
      console.log("storeInfo3", storeInfo3);
    }
    test();
  }, [storeInfo2]);

  useEffect(() => {
    if (3 > timer) {
      setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, 2000);
    }
  }, [timer]);

  useEffect(() => {
    if (findStore.latitude !== null) {
      let newStoreInfo = storeInfo2
        ?.map((el) => ({
          ...el,
          distance: getDistance(findStore.latitude, findStore.longitude, Number(el.store_location.lat), Number(el.store_location.lng), "K"),
        }))
        .sort((a, b) => a.distance - b.distance);

      setStoreData(newStoreInfo);
      setLoad(true);
    }
  }, [findStore.latitude, storeInfo2]);

  const handlerTimeOut = useCallback(() => {
    setDistance(false);
    setStoreData(storeInfo2);
    setLoad(true);
  }, [storeInfo2]);

  const { totalPage, setTotalPage, page, setPage, currentData, storesPerPage, handlePageChange } = usePaging(storeData);

  const [filters, setFilters] = useState({
    name: "",
    address1: "",
    address2: "",
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === "address1" ? value : prevFilters.address1,
      address2: name === "address1" ? "" : name === "address2" ? value : prevFilters.address2,
      [name]: value,
    }));
  };

  useEffect(() => {
    handleSearch();
  }, [filters.address1, filters.address2, selectedType]);

  const handleSearch = () => {
    let filteredData = [...storeInfo2];

    if (filters.name) {
      filteredData =
        filteredData.filter((item) => item.name.toLowerCase().includes(filters.name.toLowerCase())).length === 0
          ? filteredData.filter((item) => item.address.includes(filters.name))
          : filteredData.filter((item) => item.name.toLowerCase().includes(filters.name.toLowerCase()));
    }

    if (filters.address1) {
      filteredData = filteredData.filter((item) => item.store_location.district.city.substring(0, 2) === filters.address1.substring(0, 2));
    }

    if (filters.address2) {
      filteredData = filteredData.filter((item) => item.store_location.district.name.substring(0, 2) === filters.address2.substring(0, 2));
    }

    if (selectedType === "GS25") {
      filteredData = filteredData.filter((item) => item.type === "GS25");
    } else if (selectedType === "GOPIZZA") {
      filteredData = filteredData.filter((item) => item.type !== "GS25");
    }

    setTotalPage(filteredData.length);
    setPage(1);

    setStoreData(
      filteredData
        ?.map((el) => ({
          ...el,
          distance: getDistance(findStore.latitude, findStore.longitude, Number(el.store_location.lat), Number(el.store_location.lng), "K"),
        }))
        .sort((a, b) => a.distance - b.distance)
    );

    setExpandedStores(new Set()); // 필터 변경 시 모든 매장 항목 닫기
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
  };

  const getCGVStores = (storeData: IStoreSearch[]) => {
    return storeData.filter((store) => store.name.toLowerCase().includes("cgv"));
  };

  const getFreshStores = (storeData: IStoreSearch[]) => {
    return storeData.filter((store) => store.type === "Fresh");
  };

  const toggleStoreExpansion = (storeId: number) => {
    setExpandedStores((prevExpandedStores) => {
      const newExpandedStores = new Set(prevExpandedStores);
      if (newExpandedStores.has(storeId)) {
        newExpandedStores.delete(storeId);
      } else {
        newExpandedStores.add(storeId);
      }
      return newExpandedStores;
    });
  };

  return (
    <FindWrap>
      <h2 className="tit">매장찾기</h2>
      <div className="sub_tit">
        <h3>전국 매장 검색</h3>
        <span className="txt">전국의 고피자 매장을 찾아보세요.</span>
      </div>
      <div className="wrp_filter">
        <select name="address1" onChange={handleFilterChange} value={filters.address1}>
          <option value="">도/시를 선택하세요</option>
          {sido.map((el) => (
            <option key={el.codeNm} value={el.codeNm}>
              {el.codeNm}
            </option>
          ))}
        </select>
        <select name="address2" onChange={handleFilterChange} value={filters.address2}>
          <option value="">구/군을 선택하세요</option>
          {sigugun
            .filter((el) => el.address1 === filters.address1)
            .map((el) => (
              <option key={el.codeNm} value={el.codeNm}>
                {el.codeNm}
              </option>
            ))}
        </select>
        <div className="box_search_keyword">
          <input
            type="text"
            name="name"
            placeholder="검색어를 입력해주세요"
            onChange={handleFilterChange}
            value={filters.name}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>
      <div className="sub_tit">
        <h3>매장유형 선택</h3>
        <span className="txt">원하는 매장 유형을 선택해 주세요.</span>
      </div>
      <ul className="list_filter_store">
        <li className={selectedType === "All" ? "fst on" : "fst"} onClick={() => handleTypeFilter("All")}>
          <div className="box_img">
            <img src="/images/find/btn_all.svg" alt="ALL" />
          </div>
          <div className="txt">전체</div>
        </li>
        <li className={selectedType === "GOPIZZA" ? "on" : ""} onClick={() => handleTypeFilter("GOPIZZA")}>
          <div className="box_img">
            <img src="/images/find/btn_gopizza.svg" alt="GOPIZZA" />
          </div>
          <div className="txt">GOPIZZA</div>
        </li>
        <li className={selectedType === "GS25" ? "on" : ""} onClick={() => handleTypeFilter("GS25")}>
          <div className="box_img">
            <img src="/images/find/btn_gs25.svg" alt="GS25" />
          </div>
          <div className="txt">GS25</div>
        </li>
        <li className={selectedType === "Fresh" ? "on" : ""} onClick={() => handleTypeFilter("Fresh")}>
          <div className="box_img">
            <img src="/images/find/btn_fresh.svg" alt="Fresh" />
          </div>
          <div className="txt">THE FRESH</div>
        </li>
        <li className={selectedType === "CGV" ? "on" : ""} onClick={() => handleTypeFilter("CGV")}>
          <div className="box_img">
            <img src="/images/find/btn_cgv.svg" alt="CGV" />
          </div>
          <div className="txt">CGV</div>
        </li>
      </ul>

      <ul className={`list_store ${storeData.length === 0 || !load ? "off" : ""}`}>
        {storeData.length === 0 ? (
          <li>
            <div className="box_spinner">
              <div className="location_indicator"></div>
            </div>
            <p>{(filters.name || filters.address1 || filters.address2) && "해당 지역에는 매장이 존재하지 않습니다."}</p>
          </li>
        ) : load ? (
          selectedType === "CGV" ? (
            getCGVStores(storeData).map((store: IStoreSearch) => (
              <ListItem key={store.id} store={store} distance={distance} expanded={expandedStores.has(store.id)} toggleExpansion={() => toggleStoreExpansion(store.id)} />
            ))
          ) : selectedType === "Fresh" ? (
            getFreshStores(storeData).map((store: IStoreSearch) => (
              <ListItem key={store.id} store={store} distance={distance} expanded={expandedStores.has(store.id)} toggleExpansion={() => toggleStoreExpansion(store.id)} />
            ))
          ) : (
            currentData.map((store: IStoreSearch) => (
              <ListItem key={store.id} store={store} distance={distance} expanded={expandedStores.has(store.id)} toggleExpansion={() => toggleStoreExpansion(store.id)} />
            ))
          )
        ) : (
          <li>
            <div className="box_spinner">
              <div className="location_indicator"></div>
            </div>
            {timer > 2 ? (
              <div className="box_basicInfo">
                <p>현재 고객님의 위치정보를 가져올 수 없습니다.</p>
                <button onClick={handlerTimeOut}>직접 매장 검색하기</button>
              </div>
            ) : (
              <p>가까운 매장 순으로 매장 정보를 불러오는 중입니다.</p>
            )}
          </li>
        )}
      </ul>
      {storeData.length !== 0 && <Paging page={page} PerPage={storesPerPage} count={totalPage} setPage={handlePageChange} />}
    </FindWrap>
  );
}

const ListItem = ({ distance, store, expanded, toggleExpansion }: { distance: boolean; store: IStoreSearch; expanded: boolean; toggleExpansion: () => void }) => {
  const getStoreClassName = (store: IStoreSearch, expanded: boolean) => {
    const isExpanded = expanded ? "on" : "";
    const storeType = store.name.toLowerCase().includes("cgv") ? "cgv" : store.type === "GS25" ? "gs25" : store.type === "Fresh" ? "fresh" : "";

    return `${isExpanded} ${storeType}`.trim();
  };

  const handleAClick = (e: any) => {
    e.stopPropagation(); // a 태그 클릭시 이벤트 버블링 방지
  };

  const logoSrc = store.name.toLowerCase().includes("cgv")
    ? "/images/find/btn_cgv.svg"
    : store.type === "GS25"
    ? "/images/find/btn_gs25.svg"
    : store.type === "Fresh"
    ? "/images/find/btn_fresh.svg"
    : "/images/find/btn_gopizza.svg";

  return (
    <li className={getStoreClassName(store, expanded)}>
      <div className="wrap_info">
        <div className="logo">
          <img src={logoSrc} alt={store.name} />
        </div>
        <dl
          onClick={(e) => {
            e.stopPropagation();
            toggleExpansion();
          }}
        >
          <dt className="storeName">
            {store.name}
            {distance && <span className="distance">{Number(store.distance).toFixed(2)}km</span>}
          </dt>
          <dd className="address">{store.address}</dd>
          <dd className="info">
            <span className="tel">
              <span className="pc">{store.store_phone_number}</span>
              <a href={`tel:${store.store_phone_number}`} className="mobile" onClick={handleAClick}>
                {store.store_phone_number}
              </a>
            </span>
            <span className="time">{store.business_time}</span>
          </dd>
        </dl>
      </div>
      <div>
        {expanded && (
          <Map center={{ lat: store.store_location.lat, lng: store.store_location.lng }} level={4}>
            <MapMarker position={{ lat: store.store_location.lat, lng: store.store_location.lng }}></MapMarker>
            <CustomOverlayMap
              position={{
                lat: store.store_location.lat,
                lng: store.store_location.lng,
              }}
            >
              <div className="info_label">
                <span className="left"></span>
                <span className="center">{store.name}</span>
                <span className="right"></span>
              </div>
            </CustomOverlayMap>
          </Map>
        )}
      </div>
    </li>
  );
};

export const getStaticProps = async () => {
  let storeInfo2 = await fetchStoreSearch();

  storeInfo2.forEach((store: any) => {
    store.address = store.address
      .replace(/전라남도/g, "전남")
      .replace(/전라북도/g, "전북")
      .replace(/경상남도/g, "경남")
      .replace(/경상북도/g, "경북");
  });

  // Fresh 타입의 mock 데이터 추가
  const mockFreshStores = [
    {
      id: "mock-fresh-1",
      name: "Mock Fresh Store 1",
      type: "Fresh",
      address: "Mock Fresh Address 1",
      store_phone_number: "010-1234-5678",
      business_time: "09:00 ~ 22:00",
      store_location: {
        lat: 37.1234,
        lng: 127.5678,
        district: {
          city: "서울특별시",
          name: "강남구",
        },
      },
      distance: 0,
    },
  ];

  storeInfo2 = [...storeInfo2, ...mockFreshStores];

  return {
    props: {
      storeInfo2,
    },
    revalidate: 10,
  };
};

export default observer(Index);
