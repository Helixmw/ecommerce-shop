<template>
 <div class="">
  <Nav/>
  <div class="item-preview" v-show="preview">
    <div class="item-modal">
      <div class="close" @click="closeModal()">Close</div>
      <div class="image-frame">
        <img :src="details.image" class="item-image" style="height:8rem;"/>
      </div>
      <div class="item-details">

        <div class="info">

          <div class="item-name">{{ details.title }}</div>
          <div class="price">${{ details.price }}</div>
        </div>

        <div class="ratings">
          <div class="item-rating">
            <div class="level">
              <div class="item-progress" :style="{ 'width': details.rating / total * 100 + '%' }"></div>
            </div>
            <div class="rating">{{ details.rating }}</div>
          
          </div>
        </div>
        

      </div>
      <div class="buttons">
          <a href="#" class="button">Buy it</a>
        </div>
    </div>
  </div>
   <div class="container-1">
    <div class="list">
      <div class="tabs">
        <div class="tab" id="men" @click="switchTab(1)">MEN</div>
        <div class="tab" id="wom" @click="switchTab(2)">WOMEN</div>
        <div class="tab" id="jwl" @click="switchTab(3)">JEWELERY</div>
        
      </div>
      <div class="scroll">
        <Men v-show="men" :men="formen" @switchtopreview="changeToPreview"/>
        <Women v-show="women" :women="forwom"  @switchtopreview="changeToPreview"/>
        <Jewels v-show="jewels" :jewels="forjwls"  @switchtopreview="changeToPreview"/>

</div>
      </div>
     
    <div class="box preview"><div class="frame">
      <Description v-if="descr" :details="details"/>
      <Blank v-else/>
    </div></div>
   </div>
   <div class="container-2">
    <div class="products">
      <div class="section">
        <div class="cat">MEN</div>
        <div class="display">
          <Men v-show="true" :men="formen" @switchtopreview="changeToPreview"/>
        </div>
      </div>
      <div class="section">
        <div class="cat">WOMEN</div>
        <div class="display">
          <Women v-show="true" :women="forwom"  @switchtopreview="changeToPreview"/>
        </div>
      </div>
      <div class="section">
        <div class="cat">JEWELERY</div>
        <div class="display">
          <Jewels v-show="true" :jewels="forjwls"  @switchtopreview="changeToPreview"/>
        </div>
      </div>
    </div>
   </div>
   <BottomNav/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import BottomNav from './components/BottomNav.vue'
import Blank from './components/Blank.vue'
import Men from './components/Men.vue'
import Women from './components/Women.vue'
import Jewels from './components/Jewels.vue'
import Description from './components/Description.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Men,
    Women,
    Jewels,
    Description,
    BottomNav,
    Blank
  },
  data(){
    return{
      men: true,
      women: false,
      jewels: false,
      descr: false,
      blank: true,
      formen : [],
      forwom : [],
      forjwls : [],
      details: {},
      preview:false,
      total:5
      
    }
  },
  mounted(){
this.getShop();
this.displayShop();
  },
  methods:{
    changeToPreview(data){
      this.descr = data.visible;
      this.details = data;  
      this.preview = true;


    },
    closeModal(){
      //this.details = null;
      this.preview = false;
    },
    displayShop(){
      let mn = document.getElementById('men');
      let wm = document.getElementById('wom');
      let jw = document.getElementById('jwl');
      mn.classList.add('sel');
    },
    switchTab(n){
      let mn = document.getElementById('men');
      let wm = document.getElementById('wom');
      let jw = document.getElementById('jwl');
      if(n == 1){
        this.men = true;
        this.women = false;
        this.jewels = false;
        mn.classList.add('sel');
        wm.classList.remove('sel');
        jw.classList.remove('sel');
      }else if(n == 2){
        this.men = false;
        this.women = true;
        this.jewels = false;
        mn.classList.remove('sel');
        wm.classList.add('sel');
        jw.classList.remove('sel');
      }else if(n == 3){
        this.men = false;
        this.women = false;
        this.jewels = true;
        mn.classList.remove('sel');
        wm.classList.remove('sel');
        jw.classList.add('sel');
      }
    },
    sortShop(store){
      if(store.cat == "men's clothing"){
      this.formen.push(store);
    }else if(store.cat == "women's clothing"){
      this.forwom.push(store);
      

    }else if(store.cat == "jewelery"){
      
      this.forjwls.push(store);

    }
    },
    getShop(){
      let items = [];
      let res;
      try{
     let xhr = new XMLHttpRequest();
     xhr.open('GET','https://fakestoreapi.com/products');
     xhr.onload = () => {
      res = JSON.parse(xhr.response);
      for(let i = 0; i <= res.length; i++){
        let data = {
          'id': res[i].id,
          'title' : res[i].title,
          'des': res[i].description,
          'price': res[i].price,
          'cat': res[i].category,
          'image':res[i].image,
          'rating':res[i].rating.rate
        }
        this.sortShop(data); 
       
      }
      
     }
     xhr.send();
    }catch(err){
      console.log('Error' + err);
    }
     
  
    
    
  }

}}
</script>

<style>
:root{
  --main-color:rgb(218, 127, 195);
  --main-light:rgb(235, 170, 222);
  --main-dark:rgb(170, 32, 142);
  --nav:rgba(255,255,255,0.7);
  --background:rgb(107, 46, 95);
  --background-mobile:rgb(255, 215, 247);
  --blur:blur(8px);
  --white:white;
  --grey:rgb(114, 114, 114);
  --lightGrey:rgb(192, 190, 190);
  --light-grey:rgb(241, 241, 241);
  --foreground:black;
  --gradient:linear-gradient(128deg, rgba(60,5,60,1) 17%, rgba(181,71,186,1) 70%);
  --gradient-two:linear-gradient(230deg, rgba(60,5,60,1) 17%, rgba(181,71,186,1) 70%);
  --main-dim:rgba(60,5,60,1);
  --dim:rgba(0,0,0,0.8);
}

@font-face{
  font-family: 'OpenSans';
  src: url('./assets/fonts/OpenSans-Regular.ttf');
}

@font-face {
  font-family: 'Bebas';
  src: url('./assets/fonts/BebasNeue-Regular.ttf');
}

.item-name{
  width:10rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:1.1rem;
    font-weight: bold;
    margin-bottom:0.3rem;
}

.close{
  cursor:pointer;
  margin:0.5rem;
  text-align:right;
  text-decoration:none;
  color:var(--main-dark);
  font-weight:bold;
}

.item-rating{
  letter-spacing:0px;
    color:var(--main-color);
    display:flex;
}

.item-modal{
  background:white;
  border-radius:4px;
  width:18rem;
  
  display:flex;
  flex-direction:column;
  padding:0.5rem;
}

.image-frame{
  /*border:1px solid black;*/
  margin:0.4rem;
  display:flex;
  justify-content:center;
}

.item-preview{
  display:none;
  justify-content:center;
  align-items:center;
  z-index:1;
  position:absolute;
  background:var(--dim);
  top:0;
  bottom:0;
  left:0;
  right:0;
}

.mainbg{
  background-color:rgb(253, 237, 250);
}

.secondarybg{
  background-color: rgb(235, 170, 222);
}

body{
  margin:0;
  font-family:OpenSans;
  background-color:var(--background);
}

body::-webkit-scrollbar{
  opacity:0!important;
  width: 6px;
}

body::-webkit-scrollbar-track{
  opacity:0;
  background: #f1f1f1;
  border-radius:4px;
}


body::-webkit-scrollbar-thumb {
  
  border-radius:4px;
  background:var(--main-color);
}

.preview{
  border-radius:5px;
}

.frame{
  border:5px solid rgb(233, 233, 233);
  position: relative;
  border-radius:8px;
  height:93%;
  margin:1rem;
}


.scroll{
  padding-left:0.1rem;
  padding-right:0.1rem;
  overflow-x:auto;
  
  min-height:33rem;
  width:22rem;
  margin-left:0.4rem;
  margin-right:0.4rem;
}

.sel{
  background-color: rgb(235, 170, 222);
  color:white;
}
.tab{
  color:grey;
  cursor: pointer;
  flex:1;
  text-align: center;
  font-size:0.9rem;
  font-weight: bold;
  color:grey;
  padding:0.5rem;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
}

.tabs{
  display: flex;
  margin-bottom:0.5rem;
  justify-content: center;
 

}

.list{
  border-radius:5px;
  flex:1;
  background-color: white;
  margin-left:3rem;
}

.container-1{
  margin-top:6rem;
  display: flex;
  
}

.box{
  background-color: white;
 flex:3;
 
 height:80vh;
 margin-left:3rem;
 margin-right:3rem;
  
}

.container-2{
    display:none;
  }

  
  .rating{
    font-weight:bold;
    color:var(--main-dim);
}

.level{

    width:8rem;
    margin-right:5px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
}

.item-progress{
    background:var(--gradient-two);
    height:5px;
    border-radius:100px;
}

.progress{
    background:var(--gradient-two);
    height:5px;
    border-radius:100px;
}
  
.price{
    color:var(--main-dark);
    font-weight: bold;
}


.item-details{
  display:flex;
  align-items:flex-end;
  margin:0.5rem;
}

.button{
  text-transform:uppercase;
  text-decoration:none;
  color:var(--main-dark);
  font-weight:bold;
  border:1px solid var(--main-dark);
  padding:6px;
  font-size:0.8rem;
  border-radius:4px;
}

.buttons{
  margin:0.5rem;
  display:flex;
  justify-content:flex-end;
  
}

@media screen and (max-width: 768px){


  .item-rating{
        display:flex;
        justify-content: flex-end;
    }

  .level{   
    width:5rem;
}


  .item-preview{
    display:flex;
  }
 

  body{
    background:white;
  }

  


  .container-1{
    display:none;
  }

  .display{
    background:var(--white);
    max-width:100%;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    overflow-y:none;
        overflow-x:auto;
  }

  .section{
    margin-bottom:0.3rem;
  }

  .cat{
    color:var(--grey);
    font-weight:bold;
    font-size:0.9rem;
    margin-left:0.5rem;
    margin-bottom:0rem;
  }

  .container-2{
    display:block;
    margin-top:4rem;
  }
  
  .preview{
    display:none;
  }

  .list{
  margin-left:0rem;
  background:transparent;
  }

  .scroll{
    padding:0rem;
    margin:0rem;
    overflow-x:none!important;
    overflow-y:none!important;
  }
}

</style>
