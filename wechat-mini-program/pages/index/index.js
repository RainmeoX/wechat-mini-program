Page({
  goHome() {
    wx.navigateTo({url:'/pages/index/index'})
  },
  goGovernment(){wx.navigateTo({url:'/pages/government/government'})},
  goRed(){wx.navigateTo({url:'/pages/red/red'})},
  goCall(){wx.makePhoneCall({phoneNumber:'13800000000'})},
  goCalendar(){wx.navigateTo({url:'/pages/calendar/calendar'})},
  goEmergency(){wx.navigateTo({url:'/pages/emergency/emergency'})}
})