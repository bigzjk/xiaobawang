Component({
    data: {
      selected: 0,
      color: "#7A7E83",
      selectedColor: "#3cc51f",
      list: [{
        pagePath: "/pages/index/index",
        iconPath: "/asset/images/icon_home_dis.png",
        selectedIconPath: "/asset/images/icon_home.png",
        text: "首页"
      }, {
        pagePath: "/pages/search/index",
        iconPath: "/asset/images/icon_search_dis.png",
        selectedIconPath: "/asset/images/icon_search.png",
        text: "搜索"
      },
      {
        pagePath: "/pages/center/index",
        iconPath: "/asset/images/icon_center_dis.png",
        selectedIconPath: "/asset/images/icon_center.png",
        text: "我的"
      }
    ]
    },
    attached() {
    },
    methods: {
      switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        wx.switchTab({url})
        this.setData({
          selected: data.index
        })
      }
    }
  })
