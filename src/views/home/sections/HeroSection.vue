<template>
  <section class="hero-section">
    <div class="text">
      <h1>
        Hi,
        <br/>
        I'm Lukas
        <br/>
        <span style="color: #58c537; text-shadow: 3px 3px 3px rgba(0,0,0,.20);">Web developer/Aspiring Game Dev</span>
      </h1>
      <div class="link-wrapper">
        <a href="https://www.linkedin.com/in/lukas-br%C3%A5kenhielm-7724ab2ba/" target="_blank" class="links"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="mailto:brakenhielmlukas@gmail.com" class="links"><i class="fa-regular fa-envelope"></i></a>
        <a href="https://github.com/LukasBFrontend" target="_blank" class="links"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    <div class="profile-wrapper">
      <img class="profile-background" src="/images/profile_background_waves.png" alt="profile-background">
      <img class="profile" src="/images/profile.png" alt="profile">
    </div>
  </section>
</template>

<style scoped>
  .hero-section{
    background: rgba(0, 0, 0, 0.801);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 100px 0;
    box-shadow: 16px 16px 0px 0px #ff4fff;
    border-radius: 8px;
    margin-bottom: 5rem;
  }

  .profile-wrapper{
    position: relative;
    width: 400px;
    height: 422px;
  }
  .profile{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 900;
  }

  .profile-background{
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 0;

    background-color: #ff4fffb2;

  }

  h1{
    font-size: 4rem;
    color: white;
  }

  .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: space-between;
  }

  .link-wrapper{
    display: flex;
    gap: 2rem;
  }

  .links{
    border-radius: 50%;
    width: 68px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.5rem;
    color: white;
    background: #272727;

    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  .links:hover{
    transform: translateY(-10px);
    color: #78ff4f;
  }
</style>
