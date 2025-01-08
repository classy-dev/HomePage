import React, { useState, useMemo } from "react";
import { hangjungdong } from "ComponentsFarm/pageComp/find/constants";
import { fetchStoreSearch } from "ApiFarm/home";
import { IStoreSearch, IStoreSearchRequest } from "ApiFarm/interface/homeInterface";
import Paging from "ComponentsFarm/Paging";
import { FindWrap } from "ComponentsFarm/pageComp/find/style";
import { findStore } from "MobxFarm/store";
import { getDistance } from "src/util/geolocation";
import { observer } from "mobx-react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import { useQuery } from "@tanstack/react-query";

function Index() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [expandedStores, setExpandedStores] = useState<Set<number>>(new Set());
  const [page, setPage] = useState(1);
  const { sido, sigugun } = hangjungdong;

  const [filters, setFilters] = useState({
    name: "",
    address1: "",
    address2: "",
  });

  const [searchParams, setSearchParams] = useState({
    name: "",
    address1: "",
    address2: "",
    type: "All"
  });

  const ITEMS_PER_PAGE = 10;
  const params: IStoreSearchRequest = {
    per_num: 999,
    current_num: 1,
    business_type: searchParams.type === "All" ? undefined : searchParams.type,
    city: searchParams.address1 || undefined,
    district: searchParams.address2 || undefined,
    query: searchParams.name || undefined,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["stores", { ...params, current_num: undefined }],
    queryFn: () => fetchStoreSearch(params),
  });

  // Add distance to stores if location is available and sort by distance
  const storesWithDistance = useMemo(() => {
    if (!data?.result_list) return [];
    
    return data.result_list.map(store => ({
      ...store,
      distance: findStore.latitude !== null
        ? getDistance(
            findStore.latitude,
            findStore.longitude,
            Number(store.store_location.lat),
            Number(store.store_location.lng),
            "K"
          )
        : Infinity
    })).sort((a, b) => (a.distance || Infinity) - (b.distance || Infinity));
  }, [data?.result_list, findStore.latitude, findStore.longitude]);

  // Calculate pagination
  const totalPages = Math.ceil((storesWithDistance?.length || 0) / ITEMS_PER_PAGE);
  const currentPageStores = storesWithDistance.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: name === "address1" ? value : prevFilters.address1,
      address2: name === "address1" ? "" : name === "address2" ? value : prevFilters.address2,
      [name]: value,
    }));

    // 주소 필터는 바로 적용
    if (name === "address1" || name === "address2") {
      setSearchParams(prev => ({
        ...prev,
        [name]: value,
        address2: name === "address1" ? "" : value
      }));
      setPage(1);
    }
  };

  const handleSearch = () => {
    setSearchParams({
      ...filters,
      type: selectedType
    });
    setPage(1);
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    setSearchParams(prev => ({
      ...prev,
      type
    }));
    setPage(1);
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
        <li className={selectedType === "GSTHEFRESH" ? "on" : ""} onClick={() => handleTypeFilter("GSTHEFRESH")}>
          <div className="box_img">
            <img src="/images/find/btn_fresh.svg" alt="Fresh" />
          </div>
          <div className="txt">GS THE FRESH</div>
        </li>
        <li className={selectedType === "CGV" ? "on" : ""} onClick={() => handleTypeFilter("CGV")}>
          <div className="box_img">
            <img src="/images/find/btn_cgv.svg" alt="CGV" />
          </div>
          <div className="txt">CGV</div>
        </li>
      </ul>

      <ul className={`list_store ${!data?.result_list.length || isLoading ? "off" : ""}`}>
        {isLoading ? (
          <li>
            <div className="box_spinner">
              <div className="location_indicator"></div>
            </div>
            <p>매장 정보를 불러오는 중입니다.</p>
          </li>
        ) : !data?.result_list.length ? (
          <li>
            <p>해당 조건의 매장이 존재하지 않습니다.</p>
          </li>
        ) : (
          currentPageStores.map((store) => (
            <ListItem
              key={store.store_idx}
              store={store}
              distance={findStore.latitude !== null}
              expanded={expandedStores.has(store.store_idx)}
              toggleExpansion={() => toggleStoreExpansion(store.store_idx)}
            />
          ))
        )}
      </ul>

      {storesWithDistance.length > 0 && (
        <Paging
          page={page}
          PerPage={ITEMS_PER_PAGE}
          count={storesWithDistance.length}
          setPage={setPage}
        />
      )}
    </FindWrap>
  );
}

const ListItem = ({ distance, store, expanded, toggleExpansion }: { distance: boolean; store: IStoreSearch; expanded: boolean; toggleExpansion: () => void }) => {
  const getStoreClassName = (store: IStoreSearch, expanded: boolean) => {
    const isExpanded = expanded ? "on" : "";
    const storeType = store.store_name.toLowerCase().includes("cgv") 
      ? "cgv" 
      : store.business_type === "GS25" 
      ? "gs25" 
      : store.business_type === "GSTHEFRESH" 
      ? "fresh" 
      : "";

    return `${isExpanded} ${storeType}`.trim();
  };

  const handleAClick = (e: any) => {
    e.stopPropagation();
  };

  const logoSrc = store.store_name.toLowerCase().includes("cgv")
    ? "/images/find/btn_cgv.svg"
    : store.business_type === "GS25"
    ? "/images/find/btn_gs25.svg"
    : store.business_type === "GSTHEFRESH"
    ? "/images/find/btn_fresh.svg"
    : "/images/find/btn_gopizza.svg";

  return (
    <li className={getStoreClassName(store, expanded)}>
      <div className="wrap_info">
        <div className="logo">
          <img src={logoSrc} alt={store.store_name} />
        </div>
        <dl
          onClick={(e) => {
            e.stopPropagation();
            toggleExpansion();
          }}
        >
          <dt className="storeName">
            {store.store_name}
            {distance && <span className="distance">{store.distance ? Number(store.distance).toFixed(2) : 0}km</span>}
          </dt>
          <dd className="address">{store.address}</dd>
          <dd className="info">
            {store.store_phone_number && (
              <span className="tel">
                <span className="pc">{store.store_phone_number}</span>
                <a href={`tel:${store.store_phone_number}`} className="mobile" onClick={handleAClick}>
                  {store.store_phone_number}
                </a>
              </span>
            )}
            {store.business_time && <span className="time">{store.business_time}</span>}
           {store.regular_holiday && <span className="regular_holiday">{store.regular_holiday}</span>}
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
                <span className="center">{store.store_name}</span>
                <span className="right"></span>
              </div>
            </CustomOverlayMap>
          </Map>
        )}
      </div>
    </li>
  );
};

export default observer(Index);
