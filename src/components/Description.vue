<template>
    <div class="preview"></div>
  <div class="prev">
    <div class="imge">
        <img :src="details.image" alt="" class="img-prev">
    </div>
    <div class="details">
        <div class="basic">
            <div class="title ttle">{{details.title}}</div>
            <div class="cat">{{details.cat}}</div>
            <div class="price pr">${{details.price}}</div>
            <div class="grey">Rating</div>
            <div class="rte"> 
                <div class="rating-number">
                    {{ details.rating }}
                </div>
                <div class="level">
                    <div class="progress description" style="width:70%;"></div>
                </div>
                
            </div>
        </div>
        <div class="des">{{details.des}}</div>
    </div>
  </div>
  <div class="bttn">
    <div class="button secondarybg">ADD TO CART</div>
  </div>
</template>

<script>
export default {
    props: {
        details:Object
    }
}
</script>

<style scoped>


.grey{
    color:var(--main-dim);
    font-size:0.7rem;
    font-weight:bold;
    margin-top:-0.4rem;
}
.rating-number{
    font-weight:bold;
    color:var(--main-dim);
}

.rte{
    display:flex;
    align-items:center;

}

.description{
    background:var(--gradient);
}

.level{
    margin-left:-1.8rem;
}

.img-prev{
    height:12rem;
}
.prev, .bttn{
    margin:auto;
}
.button{
    cursor:pointer;
    
    padding:0.5rem;
    color:white;
    font-size:0.9rem;
    font-weight:bold;
    background-color:rgb(218, 124, 218);
}
.bttn{
    bottom:0;
    width:40rem;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height:30%;
    
}
.des{
    width:25rem;
    font-style:italic;
    line-height:1.2rem;
}
.basic, .des{
    margin-left:0.7rem;
}
.cat, .pr , .ttle, .rating, .rte{
    margin-bottom:0.7rem;
}
.cat{
    color:rgb(189, 187, 187);
}

.pr{
    font-size:1.5rem;
}
.ttle{
    font-size:1.5rem;
    width:25rem;
}
.prev{
    margin-top:3rem;
    display:flex;
    height:18rem;
    width:41rem;
    
}

.imge{
    background-color: rgb(255, 255, 255);
    height:15rem;
    width:15rem;
}

</style>