Page({
  data: {
    isElderMode: false,
    isVoiceMode: false
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
  viewResource(e) {
    const resourceName = e.currentTarget.children[1].textContent;
    wx.showToast({
      title: `查看：${resourceName}`,
      icon: 'success'
    });
  }
})