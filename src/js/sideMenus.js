export function openSideMenus() {
  const sideBlock = document.querySelector(".sideBlock");
    const containerFog = document.querySelector(".containerFog");
    const sideBlockBtn = document.querySelector(".upperMenu__item_burger");
    const closeSideBlockBtn = document.querySelector(".sideBlock__header_burger");

    const feedBack = document.querySelector(".feedback");
    const feedBackBtn = document.querySelector(".sideBlock__bottomNav_chat");
    const feedBackBtnHead = document.querySelector(".upperMenu__item_chat")
    const closeFeedBackBtn = document.querySelector(".feedback__burger");

    const callBack = document.querySelector(".callback");
    const callBackBtn = document.querySelector(".sideBlock__bottomNav_call");
    const callBackBtnHead = document.querySelector(".upperMenu__item_call")
    const closeCallBackBtn = document.querySelector(".callback__burger");

    function openSideBlock() {
      sideBlock?.classList.add("clicked");
      containerFog?.classList.add("active");
    }

    function openFeedBack() {
      feedBack?.classList.add("clicked");
      sideBlock?.classList.remove("clicked");
      containerFog?.classList.add("active");
    }

    function openCallBack() {
      callBack?.classList.add("clicked");
      sideBlock?.classList.remove("clicked");
      containerFog?.classList.add("active");
    }

    function closeAllMenus() {
      sideBlock?.classList.remove("clicked");
      feedBack?.classList.remove("clicked");
      callBack?.classList.remove("clicked");
      containerFog?.classList.remove("active");
    }

    sideBlockBtn?.addEventListener("click", openSideBlock)
    feedBackBtn?.addEventListener("click", openFeedBack)
    feedBackBtnHead?.addEventListener("click", openFeedBack)
    callBackBtn?.addEventListener("click", openCallBack)
    callBackBtnHead?.addEventListener("click", openCallBack)
    
    closeSideBlockBtn?.addEventListener("click", closeAllMenus)
    closeFeedBackBtn?.addEventListener("click", closeAllMenus)
    closeCallBackBtn?.addEventListener("click", closeAllMenus)

    containerFog?.addEventListener("click", function () {
      if (containerFog.classList.contains("active")) {
        closeAllMenus();
      }
    });
}
