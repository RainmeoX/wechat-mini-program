Page({
  data: {
    healthRecord: {
      name: '张三',
      age: '65岁',
      bloodType: 'A型',
      medicalHistory: '高血压'
    }
  },
  callEmergency() {
    wx.showModal({
      title: '紧急求助',
      content: '确定要触发紧急求助吗？',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '求助已发送，正在联系救援',
            icon: 'success'
          });
        }
      }
    });
  },
  makeCall(e) {
    const phoneNumber = e.currentTarget.children[2].textContent;
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
      success: function() {
        console.log('拨打成功');
      },
      fail: function() {
        console.log('拨打失败');
      }
    });
  },
  editHealth() {
    wx.showToast({
      title: '编辑健康档案',
      icon: 'success'
    });
  }
})