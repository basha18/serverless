<template>
  <header id="default-header">
    <div class="logo">
      <router-link to="/staff-home">Staff Home Page</router-link>
    </div>
    <div>
    <p> Patient Registration </p>
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/patient-registration">Patient Registration</router-link>
        </li>
        <li>
          <router-link to="/logout">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  #default-header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #00bfff;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
    border-style: solid;
    border-color: #D3D3D3;
    border-width:1px;
    padding: 8px;
    border-radius: 10px;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  p {
    text-align: center;
    color: white;
    text-decoration: none;
    font-weight: bold;
 }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
    border-style: solid;
    border-color: #D3D3D3;
    border-width:1px;
    padding: 8px;
    border-radius: 10px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
</style>
