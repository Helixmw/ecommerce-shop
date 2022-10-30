<template>
  <div class="content">
    <div v-for="mn in men" :key="mn.id" class="card" @click="toPreview(mn.id,mn.title,mn.cat,mn.des,mn.price,mn.image)">
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
        men:Array
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

<style>

.rate{
    letter-spacing:0px;
    color:rgb(218, 127, 195);
}
.card{
    cursor: pointer;
    border:1px rgb(187, 187, 187) solid;
    height:13rem;
    border-radius:5px;
    margin-right:0.4rem;
    margin-bottom: 0.5rem;
}

.bottom{
    margin: 0.4rem;
    display: flex;
    justify-content: space-between;
}

.price{
    color:rgb(127, 73, 180);
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
    border-bottom:1px rgb(190, 190, 190) solid;
}

</style>