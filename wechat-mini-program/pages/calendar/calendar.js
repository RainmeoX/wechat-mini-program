Page({
  data: {
    viewMode: 'list', // 'list' 或 'poster'
    reminders: {
      day: false,
      hour: false,
      minute: false
    },
    events: [
      { id: 1, date: '2026-04-05', title: '清明节', desc: '放假一天' },
      { id: 2, date: '2026-04-15', title: '村务会议', desc: '讨论村庄发展规划' },
      { id: 3, date: '2026-04-20', title: '党员活动日', desc: '学习党的最新理论' }
    ]
  },
  switchView() {
    this.setData({
      viewMode: this.data.viewMode === 'list' ? 'poster' : 'list'
    });
    wx.showToast({
      title: `已切换到${this.data.viewMode === 'list' ? '列表' : '海报'}视图`,
      icon: 'success'
    });
  },
  openFilter() {
    wx.showActionSheet({
      itemList: ['全部', '会议', '节日', '活动'],
      success: function(res) {
        console.log('筛选:', res.tapIndex);
        wx.showToast({
          title: '筛选功能已触发',
          icon: 'success'
        });
      }
    });
  },
  viewDetail(e) {
    const eventTitle = e.currentTarget.children[1]?.children[0]?.textContent || e.currentTarget.children[1]?.textContent;
    wx.showToast({
      title: `查看：${eventTitle}`,
      icon: 'success'
    });
  },
  toggleReminder(e) {
    const type = e.currentTarget.dataset.type;
    const value = e.detail.value;
    this.setData({
      [`reminders.${type}`]: value
    });
    wx.showToast({
      title: `已${value ? '开启' : '关闭'}提前${type === 'day' ? '1天' : type === 'hour' ? '2小时' : '30分钟'}提醒`,
      icon: 'success'
    });
  }
})