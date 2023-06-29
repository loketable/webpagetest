window.onload = function() {
  // �g�b�v��ʂ̊e�v�f���擾
  var displayFacilityName = document.getElementById("displayFacilityName");
  var displayFacilityAddress = document.getElementById("displayFacilityAddress");
  var displayManager = document.getElementById("displayManager");
  var displayContactNumber = document.getElementById("displayContactNumber");
  var displayMaxCapacity = document.getElementById("displayMaxCapacity");

  // �t�H�[���̊e�v�f���擾
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

  // �����̎{�ݏ���ݒ�
  var facilityInfo = {
    facilityName: '�{�ݖ�',
    facilityAddress: '��100-0001 �����s���c��1-1',
    manager: '�R�c���Y',
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

  // �{�ݏ����g�b�v��ʂɕ\��
  displayFacilityInfo(facilityInfo);

  // ���[�_�����擾
  var modal = document.getElementById("modal");

  // ���[�_�������v�f���擾
  var closeButton = document.getElementsByClassName("close")[0];

  // ���[�_�����J���{�^�����擾
  var editButton = document.getElementById("editButton");

  // �ҏW�{�^�����N���b�N�������̓���
  editButton.onclick = function() {
    fillFormWithFacilityInfo(facilityInfo);
    modal.style.display = "block";
  }

  // ����{�^�����N���b�N�������̓���
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // ���[�_���O���N���b�N�������̓���
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // �t�H�[�����擾
  var form = document.getElementById("editForm");

  // �t�H�[�����M���̓���
  form.onsubmit = function(event) {
    // �f�t�H���g�̑��M���L�����Z��
    event.preventDefault();

    // �t�H�[���̃f�[�^���{�ݏ��ɔ��f
    facilityInfo = getFacilityInfoFromForm();
    
    // �{�ݏ����g�b�v��ʂɕ\��
    displayFacilityInfo(facilityInfo);

    // ���[�_�������
    modal.style.display = "none";
  }
}

// �{�ݏ����t�H�[���ɔ��f����֐�
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

// �t�H�[���̏����擾���A�{�ݏ��I�u�W�F�N�g��Ԃ��֐�
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

// �{�ݏ����g�b�v��ʂɕ\������֐�
function displayFacilityInfo(facilityInfo) {
  displayFacilityName.textContent = "�{�ݖ���: " + facilityInfo.facilityName;
  displayFacilityAddress.textContent = "�{�ݏZ��: " + facilityInfo.facilityAddress;
  displayManager.textContent = "�Ǘ���\��: " + facilityInfo.manager;
  displayContactNumber.textContent = "�A���ԍ�: " + facilityInfo.contactNumber;
  displayMaxCapacity.textContent = "�ő���e�l��: " + facilityInfo.maxCapacity;

  var buildingUsageText = "�����p�r: ";
  if (facilityInfo.buildingUsage.isSchool) {
    buildingUsageText += "�w�Z, ";
  }
  if (facilityInfo.buildingUsage.isCommunityCenter) {
    buildingUsageText += "������, ";
  }
  if (facilityInfo.buildingUsage.isGym) {
    buildingUsageText += "�̈��, ";
  }
  if (facilityInfo.buildingUsage.isPublicFacility) {
    buildingUsageText += "�����{��, ";
  }
  if (facilityInfo.buildingUsage.isOthers) {
    buildingUsageText += "���̑�, ";
  }

  // �����̃R���}���폜
  buildingUsageText = buildingUsageText.replace(/,\s*$/, "");
}
