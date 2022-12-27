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
  
  <script scoped>
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
  <style scoped>
  .rate{
    letter-spacing:0px;
    color:var(--main-color);
}
.card{
    cursor: pointer;
    border:2px var(--light-grey) solid;
    height:13rem;
    border-radius:7px;
    margin-right:0.4rem;
    margin-bottom: 0.5rem;
}

.bottom{
    margin: 0.4rem;
    display: flex;
    justify-content: space-between;
}

.price{
    color:var(--main-dark);
    font-weight: bold;
}

.img{
    height:8rem;
   
}

.title{
    width:10rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:1.1rem;
    font-weight: bold;
    margin-bottom:0.3rem;
}

.image{
    background-color:rgb(255, 255, 255);
    width:100%;
    height:9rem;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom:1px var(--light-grey) solid;
}


@media screen and (max-width: 768px){
    .content{
        max-width:100%;
        display:inline-flex;
        
    }

    .price, .title{
        font-size:0.9rem;
    }

    .bottom{
        flex-direction:column;
    }

    .rate{
        display:flex;
        justify-content: flex-end;
    }
  
    .card{
        height:14rem;
        margin-right:0.4rem;
        margin-left:0.4rem;
        margin-bottom: 0rem;
    }
}
  </style>