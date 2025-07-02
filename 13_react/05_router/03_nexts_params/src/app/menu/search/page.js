"use client";
import { searchMenu } from "@/apis/MenuAPI";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import MenuItem from "@/item/MenuItem";

export default function MenuSearchResult() {
  const searchParam = useSearchParams();
  const menuName = searchParam.get("menuName");
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    setMenuList(searchMenu(menuName));
  }, []);

  return (
    <>
      <h1>검색 결과!!</h1>
      <div>
        {menuList.map((menu) => (
          <MenuItem key={menu.menuCode} menu={menu} />
        ))}
      </div>
    </>
  );
}
