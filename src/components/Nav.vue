<template>
  <div class="nav">
    <div class="header">
      <div class="logo">DRESS</div>
      <div class="links">
        <a href="#" class="link">HOME</a>
        <a href="#" class="link">ABOUT</a>
        <a href="#" class="link">PRODUCTS</a>
        <a href="#" class="link">ACCOUNT</a>
        <a href="#" class="link">CONTACT US</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

</style>