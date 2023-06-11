<template> 
  <div class="content">
    <div v-for="mn in men" :key="mn.id" class="card" @click="toPreview(mn.id,mn.title,mn.cat,mn.des,mn.price,mn.image,mn.rating)">
        <div class="image">

            <img :src="mn.image" alt="" class="img">
        </div>
        <div class="bottom">
            <div class="box1">
                <div class="title">{{mn.title}}</div>
        <div class="price">${{mn.price}}</div>
            </div>
            <div class="box1">
                <div class="rate">
                    <div class="level">
                        <div class="progress" :style="{ 'width':mn.rating / total * 100 + '%' }"></div>
                    </div>
                    <div class="rating">{{ mn.rating }}</div>
                   
                    
                </div>
            </div>
        </div>
    </div>
    <div class="mobile">
        <div class="more">

            See More
        </div>
    </div>
    
  </div>
 
</template>

<script>
export default {
    props: {
        men:Array
    },
    data(){
        return{
            total:5
        }
    },
    methods: {
        toPreview(id,title,cat,des,price,image,rating){
            let data = {
                'id':id,
                'title':title,
                'cat':cat,
                'des':des,
                'price':price,
                'image':image,
                'visible':true,
                'rating':rating
            };
            this.$emit('switchtopreview', data);
            
        }
    }

}
</script>

<style scoped>



.stars-outter{
    position:relative;
    display:inline-block;
}

.stars-inner{
    position:absolute;
    top:0;
    left:0;
    white-space:nowrap;
    overflow: hidden;
    width:0;
}

.stars-outter::before{
    content:"\f005";
    font-family:"Font Awesome Free";
    font-weight:900;
    color:var(--main-color);
}
.rate{
    letter-spacing:0px;
    color:var(--main-color);
    display:flex;
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

.more{
    width:11rem;
    height:14.2rem;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    text-transform:uppercase;
    font-family:Bebas;
    font-size:1.7rem;
}
.mobile{
    display:none;
    
    background:var(--gradient);
    border:0px;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    margin-right:2px;    
}


@media screen and (max-width: 768px){



    .mobile{
        display:block;   
    }
    .content{
        max-width:100%;
        display:inline-flex;
        padding-right:2rem!important;    
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