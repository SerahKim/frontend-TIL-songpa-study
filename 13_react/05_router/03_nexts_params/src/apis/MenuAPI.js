import menus from "../data/menu-detail.json";

// 메뉴 데이터 전체 조회
export function getMenuList() {
  return menus;
}

export function getMenuByMenuCode(menuCode) {
  /*
    pathVariable menuCode를 전달받고 있다.
    단 주의점, URL 데이터는 문자열이다.
    */
  // console.log(typeof menuCode);

  /* filter : 배열에서 콜백함수가 true인 요소만 배열로 반환해준다. */
  return menus.filter((menu) => menu.menuCode === parseInt(menuCode))[0];
}

// 메뉴명 전달받아 메뉴 이름을 포함하고 있는 메뉴 목록 조회
export function searchMenu(searchMenuName) {
  return menus.filter((menu) => menu.menuName.match(searchMenuName));
}
