<template>
    <div class="content">
      <div v-for="mn in jewels" :key="mn.id" class="card" @click="toPreview(mn.id,mn.title,mn.cat,mn.des,mn.price,mn.image)">
          <div class="image">
  
              <img :src="mn.image" alt="" class="img">
          </div>
          <div class="bottom">
              <div class="box1">
                  <div class="title">{{mn.title}}</div>
          <div class="price">${{mn.price}}</div>
              </div>
              <div class="box1">
  
                  <div class="rate"><font-awesome-icon icon="fa-regular fa-star" /> <font-awesome-icon icon="fa-regular fa-star" /> <font-awesome-icon icon="fa-regular fa-star" /> <font-awesome-icon icon="fa-regular fa-star" /> <font-awesome-icon icon="fa-regular fa-star" /></div>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          jewels:Array
      },
      methods: {
        toPreview(id,title,cat,des,price,image){
            let data = {
                'id':id,
                'title':title,
                'cat':cat,
                'des':des,
                'price':price,
                'image':image,
                'visible':true
            };
            this.$emit('switchtopreview', data);
            
        }
    }
  }
  </script>