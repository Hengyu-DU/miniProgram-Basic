// components/timer/timer.js
Component({
  lifetimes: {
    created: function(){     // 在组件实例【刚刚被创建时】执行
    },
    attached: function() {   // 在组件实例【进入页面节点树时】执行
      console.log('timer组件进入了页面节点树');

      this.countDown = setInterval(() => {
        console.log(this.data.time)  
        if(this.data.time <= 1){
          // 通知父组件移除自己
          this.triggerEvent("event")
          return 
        }
        this.setData({
          time:this.data.time-1
        })
      }, 1000);
    },
    ready: function(){       // 在组件在【视图层布局完成后】执行
    },
    moved: function(){       // 在组件实例【被移动到节点树另一个位置时】执行
    },
    detached: function() {   // 在组件实例【从页面节点树移除时】执行
      console.log("timer组件从节点树移除了")
      clearInterval(this.countDown)
    },
    error: function(){       // 每当组件方法抛出错误时执行
    },
  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    time:5
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
