window.onload = function() {
  // トップ画面の各要素を取得
  var displayFacilityName = document.getElementById("displayFacilityName");
  var displayFacilityAddress = document.getElementById("displayFacilityAddress");
  var displayManager = document.getElementById("displayManager");
  var displayContactNumber = document.getElementById("displayContactNumber");
  var displayMaxCapacity = document.getElementById("displayMaxCapacity");

  // フォームの各要素を取得
  var facilityName = document.getElementById("facilityName");
  var facilityAddress = document.getElementById("facilityAddress");
  var manager = document.getElementById("manager");
  var contactNumber = document.getElementById("contactNumber");
  var maxCapacity = document.getElementById("maxCapacity");
  var isSchool = document.getElementById("isSchool");
  var isCommunityCenter = document.getElementById("isCommunityCenter");
  var isGym = document.getElementById("isGym");
  var isPublicFacility = document.getElementById("isPublicFacility");
  var isOthers = document.getElementById("isOthers");

  // 初期の施設情報を設定
  var facilityInfo = {
    facilityName: '施設名',
    facilityAddress: '〒100-0001 東京都千代田区1-1',
    manager: '山田太郎',
    contactNumber: '03-1234-5678',
    maxCapacity: '200',
    buildingUsage: {
      isSchool: false,
      isCommunityCenter: false,
      isGym: false,
      isPublicFacility: false,
      isOthers: false
    }
  };

  // 施設情報をトップ画面に表示
  displayFacilityInfo(facilityInfo);

  // モーダルを取得
  var modal = document.getElementById("modal");

  // モーダルを閉じる要素を取得
  var closeButton = document.getElementsByClassName("close")[0];

  // モーダルを開くボタンを取得
  var editButton = document.getElementById("editButton");

  // 編集ボタンをクリックした時の動作
  editButton.onclick = function() {
    fillFormWithFacilityInfo(facilityInfo);
    modal.style.display = "block";
  }

  // 閉じるボタンをクリックした時の動作
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // モーダル外をクリックした時の動作
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // フォームを取得
  var form = document.getElementById("editForm");

  // フォーム送信時の動作
  form.onsubmit = function(event) {
    // デフォルトの送信をキャンセル
    event.preventDefault();

    // フォームのデータを施設情報に反映
    facilityInfo = getFacilityInfoFromForm();
    
    // 施設情報をトップ画面に表示
    displayFacilityInfo(facilityInfo);

    // モーダルを閉じる
    modal.style.display = "none";
  }
}

// 施設情報をフォームに反映する関数
function fillFormWithFacilityInfo(facilityInfo) {
  facilityName.value = facilityInfo.facilityName;
  facilityAddress.value = facilityInfo.facilityAddress;
  manager.value = facilityInfo.manager;
  contactNumber.value = facilityInfo.contactNumber;
  maxCapacity.value = facilityInfo.maxCapacity;
  isSchool.checked = facilityInfo.buildingUsage.isSchool;
  isCommunityCenter.checked = facilityInfo.buildingUsage.isCommunityCenter;
  isGym.checked = facilityInfo.buildingUsage.isGym;
  isPublicFacility.checked = facilityInfo.buildingUsage.isPublicFacility;
  isOthers.checked = facilityInfo.buildingUsage.isOthers;
}

// フォームの情報を取得し、施設情報オブジェクトを返す関数
function getFacilityInfoFromForm() {
  return {
    facilityName: facilityName.value,
    facilityAddress: facilityAddress.value,
    manager: manager.value,
    contactNumber: contactNumber.value,
    maxCapacity: maxCapacity.value,
    buildingUsage: {
      isSchool: isSchool.checked,
      isCommunityCenter: isCommunityCenter.checked,
      isGym: isGym.checked,
      isPublicFacility: isPublicFacility.checked,
      isOthers: isOthers.checked
    }
  };
}

// 施設情報をトップ画面に表示する関数
function displayFacilityInfo(facilityInfo) {
  displayFacilityName.textContent = "施設名称: " + facilityInfo.facilityName;
  displayFacilityAddress.textContent = "施設住所: " + facilityInfo.facilityAddress;
  displayManager.textContent = "管理代表者: " + facilityInfo.manager;
  displayContactNumber.textContent = "連絡番号: " + facilityInfo.contactNumber;
  displayMaxCapacity.textContent = "最大収容人数: " + facilityInfo.maxCapacity;

  var buildingUsageText = "建物用途: ";
  if (facilityInfo.buildingUsage.isSchool) {
    buildingUsageText += "学校, ";
  }
  if (facilityInfo.buildingUsage.isCommunityCenter) {
    buildingUsageText += "公民館, ";
  }
  if (facilityInfo.buildingUsage.isGym) {
    buildingUsageText += "体育館, ";
  }
  if (facilityInfo.buildingUsage.isPublicFacility) {
    buildingUsageText += "公共施設, ";
  }
  if (facilityInfo.buildingUsage.isOthers) {
    buildingUsageText += "その他, ";
  }

  // 末尾のコンマを削除
  buildingUsageText = buildingUsageText.replace(/,\s*$/, "");
}
