// components/navbar/navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:['正在热映','即将上线']},
    current:{
      type:Number,
      value:0
    }
    },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e){
      // this.setData({
      //   current: e.currentTarget.dataset.index
      // })
      this.triggerEvent("ParentEvent",e.currentTarget.dataset.index)
      //  （绑定的属性名，传递的参数）
    }
  }
})
