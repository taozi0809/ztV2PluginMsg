<template>
  <div class="hello">
    <div class="box">
      <canvas id="mycanvas-1" width="1000" height="1500"></canvas>
    </div>
    <div class="box">
      <canvas id="mycanvas-2" width="1000" height="1500"></canvas>
    </div>
    <div class="box">
      <canvas id="mycanvas-3" width="1000" height="1500"></canvas>
    </div>
    <div class="box">
      <canvas id="mycanvas-4" width="1000" height="1500"></canvas>
    </div>
    <div class="box">
      <canvas id="mycanvas-5" width="1000" height="1500"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      images: [
        {
          imgUrl: require("../assets/images/01.jpg"),
        },
        {
          imgUrl: require("../assets/images/02.jpg"),
        },
        {
          imgUrl: require("../assets/images/03.jpg"),
        },
        {
          imgUrl: require("../assets/images/04.jpg"),
        },
        {
          imgUrl: require("../assets/images/05.jpg"),
        },
      ],
    };
  },
  mounted() {
    this.startDoDraw(this.images);
  },
  methods: {
    startDoDraw(images) {
      images.forEach((item, index) => {
        this.doDraw(item.imgUrl, "mycanvas-" + (index + 1));
      });
    },
    doDraw(imageUrl, name) {
      //  获取canvas
      var canvas = document.getElementById(name);
      if (!canvas) {
        return false;
      } else {
        //  可以理解为一个画笔，可画路径、矩形、文字、图像
        var context = canvas.getContext("2d");
        var img = new Image();
        img.src = imageUrl;
        //  加载图片
        img.onload = function () {
          if (img.complete) {
            //  根据图像重新设定了canvas的长宽
            img.width = 620.5;
            img.height = 877.5;
            canvas.setAttribute("width", img.width);
            canvas.setAttribute("height", img.height);
            //  绘制图片
            context.drawImage(img, 0, 0, img.width, img.height);
          }
        };
      }
    },
  },
};
</script>
<style scoped>
.hello {
  width: 1000px;
  height: auto;
  background: #f5f5f5;
  overflow-x: hidden;
  margin: 0 auto;
}
.box {
  margin-bottom: 20px;
}
#mycanvas {
  border: 1px solid rgb(199, 198, 198);
}
</style>
