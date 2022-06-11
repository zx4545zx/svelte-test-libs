<script>
  import { Route } from "svelte-navigator";
  import Layout from "./component/Layout.svelte";

  // page
  import Home from "./page/Home.svelte";
  import Student from "./page/Student.svelte";
  import Teacher from "./page/Teacher.svelte";
</script>

<Layout>
  <Route path="/" component={Home} />
  <Route path="student" component={Student} />
  <Route path="teacher" component={Teacher} />
</Layout>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  :global(h1) {
    text-align: center;
  }
</style>
