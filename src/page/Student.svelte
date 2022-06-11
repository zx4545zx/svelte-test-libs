<script>
  import { findStd, saveStd } from "./../lib/utiles/students.js";
  import Students from "../database/students.json";

  let students = Students;
  let student;

  // form value
  let name;
  let gender;

  const show = (id) => (student = findStd(id));
  const save = () => (students = saveStd(name, gender));
</script>

<!-- ################################################ -->

<div class="student">
  <h1>Student</h1>

  <div class="new">
    <label for="Name">Name</label>
    <input type="text" name="Name" bind:value={name} />
    <label for="Gender">Gender</label>
    <input type="number" name="Gender" bind:value={gender} />
    <button on:click={save}>New</button>
  </div>

  <div class="columns">
    <div class="column">
      {#each students as std}
        <div class="card" on:click={() => show(std.ID)}>
          {std.ID}.
          {std.Name}
        </div>
      {/each}
    </div>

    {#if student != undefined}
      <div class="column">
        <div class="list">
          <pre>{JSON.stringify(student, null, 2)}</pre>
          <button on:click={() => (student = undefined)}>X</button>
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- ################################################ -->
<style>
  .card {
    padding: 0.5em;
    background-color: bisque;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 0.5em;
  }

  .columns {
    display: flex;
    justify-content: center;
  }

  .column {
    width: 100%;
    margin: 0.5em;
    background-color: darkcyan;
    padding: 0.5em;
  }

  .list {
    display: flex;
    justify-content: space-between;
  }

  button {
    padding: 0.5em;
    width: 40px;
    height: 40px;
    border: none;
    background-color: brown;
    color: white;
    cursor: pointer;
  }
</style>
