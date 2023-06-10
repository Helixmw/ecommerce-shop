<template>
    <div></div>
    <!-- <div class="nav">
        <div class="bx"></div>
        <div class="bx">
            <div class="icon">

                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </div>
        </div>
        <div class="bxx"></div>
    </div> -->
</template>
<script>
export default {
    
}
</script>
<style scoped>

.icon{
    border:4px solid rgba(218, 127, 195, 0.575);
    padding:0.3rem;
    height:2rem;
    width:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    color:var(--main-color);
    font-size:1.2rem;
    animation-name:flash;
    animation-delay:3s;
    animation-duration:1s;
    animation-fill-mode:forwards;
    /* animation-iteration-count: infinite; */
}

@keyframes flash{
    from{
        border:4px solid rgba(218, 127, 195, 0.575);
        height:2rem;
        width:2rem;
    }
    to{
        border:4px solid rgba(218, 127, 195, 0);
        height:3rem;
        width:3rem;
    }
}
.nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width:100%;
    background:var(--white);
    height:3.8rem;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
}
</style>