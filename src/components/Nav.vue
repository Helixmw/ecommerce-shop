<template>
  <div class="content">
    <div class="nav">
      <div class="header">
        <div class="logo">DRESS</div>
        <div class="links">
          <a href="#" class="link">HOME </a>
        <a href="#" class="link">ABOUT</a>
        <a href="#" class="link">PRODUCTS</a>
        <a href="#" class="link">ACCOUNT</a>
        <a href="#" class="link">CONTACT US</a>
      </div>
      <div class="bars" @click="toggle()">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      
    </div>
    <div class="dropdown" v-show="dropdown">
      <div class="top">
        <div class="logo mainlogo">
          DRESS
        </div>
        <div class="navbars"  @click="toggle()">
          <font-awesome-icon icon="fa-solid fa-bars" />
        </div>
      </div>
      <div class="menu">
        <div class="heading">Store Menu</div>
        <div class="line line-delay animate-line">
    
        </div>
        <div class="options">
          <a href="#" class="opt slider first">HOME </a>
          <a href="#" class="opt slider second">products </a>
          <a href="#" class="opt slider third">About US</a>
          <a href="#" class="opt slider fourth">contact us</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dropdown: false
    }
  },
  methods:{
    toggle(){
      if(this.dropdown == true){
        this.dropdown = false;
      }else{
        this.dropdown = true;
      }
    }
  }
}
</script>

<style scoped>


.nav{
    background-color: white;
    height:3.8rem;
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;
}

.logo{
  font-family: Bebas;
  font-size:2.3rem;
  margin-right:3rem;
  color:rgb(218, 127, 195);
}

.header{
  display:flex;
  align-items: center;
  margin:0.6rem;
}

.logoimg{
  height:3rem;
}

.link{
  text-decoration: none;
  color:grey;
  font-weight: bold;
  margin-left:3rem;
}

.bars{
    display:none;
   
  }

@media screen and (max-width: 768px){
  .links{
    display:none;
  }

  .nav{
    background:var(--nav);
    backdrop-filter:var(--blur)
    
  }

  .mainlogo, .navbars{
    color:white;
  }

  .navbars{
    font-size:1.2rem;
    margin-right:0.4rem;
  }

  .top{
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin:0.6rem;
  }

  .bars{
    display:block;
    color:var(--main-color);
    font-size:1.2rem;
    margin-right:0.5rem;
  }

  .content{
    position:relative;
  }

  .opt{
    text-decoration:none;
    color:white;
    font-size:1.2rem;
    margin-bottom:1rem;
  }

  .options{
    font-family:bebas;
    display:flex;
    flex-direction:column;
    text-transform:uppercase;

  }

  .first{
    animation-delay: 0.3s;
  }
  .second{
    animation-delay: 0.4s;
  }
  .third{
    animation-delay: 0.5s;
  }
  .fourth{
    animation-delay: 0.6s;
  }

  .line-delay{
    animation-delay: 1s;
  }



  .slider{
    transform: translateY(-8px);
    animation-name:sliding;
    animation-duration: 0.4s;
    opacity:0;
    animation-fill-mode:forwards;
  }

  @keyframes sliding{
    from{
      opacity:0;
      transform: translateY(-8px);
    }
    to{
      opacity:1;
      transform: translateY(0px);
    }
  }

  .animate-line{
    animation-name:underline;
    animation-duration: 0.4s;
    animation-fill-mode:forwards;
  }

  .line{
    border:1px solid white;
    width:0rem;
    opacity:0;
    margin-top:0.3rem;
    margin-bottom:1rem;
  }

  @keyframes underline{
    from{
      opacity:0;
      width:0rem;
    }

    to{
      opacity:1;
      width:15rem;
    }
  }

  .heading{
    text-transform: uppercase;
    font-family:Bebas;
    font-size:1.6rem;
    color:white;
   
    
  }

  .menu{
    max-width:100%;
    display:flex;
    flex-direction: column;
    margin-left:12vh;
  }

  .selected{
    color:var(--main-light);
  }

  .dropdown{
    position:absolute;
    left:0;
    right:0;
    top:0;
    height:100vh;
    backdrop-filter:blur(2px);
    /* z-index:1; */
    background:rgba(116, 16, 99, 0.473);
  }

  .header{
    justify-content:space-between;
  }
}

</style>