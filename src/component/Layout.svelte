<script>
  import { Router, Link } from "svelte-navigator";
</script>

<Router>
  <header>
    <nav>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="student">
        <div>Students</div>
      </Link>
      <Link to="/teacher">
        <div>Teachers</div>
      </Link>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>test footer</footer>
</Router>

<style>
  header {
    background-color: gray;
    padding: 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  main {
    background-color: lightgray;
    padding: 1rem;
    margin: 0;
  }

  footer {
    background-color: gray;
    text-align: center;
    padding: 1rem
  }
</style>
