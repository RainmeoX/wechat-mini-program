Page({
  data: {
    isElderMode: false,
    isVoiceMode: false,
    points: 120,
    checkInDays: 5
  },
  toggleMode() {
    this.setData({
      isElderMode: !this.data.isElderMode
    });
    wx.showToast({
      title: this.data.isElderMode ? '已切换到长辈模式' : '已切换到标准模式',
      icon: 'success'
    });
  },
  toggleVoice() {
    this.setData({
      isVoiceMode: !this.data.isVoiceMode
    });
    wx.showToast({
      title: this.data.isVoiceMode ? '已开启语音播报' : '已关闭语音播报',
      icon: 'success'
    });
  },
  playVideo() {
    wx.showToast({
      title: '播放视频：开国大典',
      icon: 'success'
    });
  },
  playStory(e) {
    const storyName = e.currentTarget.children[1].textContent;
    wx.showToast({
      title: `播放：${storyName}`,
      icon: 'success'
    });
  },
  openMap() {
    wx.showToast({
      title: '打开红色地图',
      icon: 'success'
    });
  },
  checkIn() {
    this.setData({
      checkInDays: this.data.checkInDays + 1,
      points: this.data.points + 10
    });
    wx.showToast({
      title: '打卡成功，获得10积分',
      icon: 'success'
    });
  }
})