function openTab(tabname, tabClass) {
    let tabList = document.getElementsByClassName(tabClass);
    for (let i = 0; i < tabList.length; i++) {
      tabList[i].style.display = "none";
    }
    document.getElementById(tabname).style.display = "block";
  }