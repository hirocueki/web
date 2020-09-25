<script>
  let name = "";
  let names = [];
  let result = "";

  function add() {
    names = [...names, name];
    name = "";
  }
  function run() {
    if (names.length > 0) {
      result = names[Math.floor(Math.random() * names.length)];
    } else {
      result = "無";
    }
  }
  function preset(i) {
    switch (i) {
      case 1:
        names = "A,B,C,D".split(",");
        break;
      case 2:
        names = "グー,チョキ,パー".split(",");
        break;
    }
  }
</script>

<style>
  .result {
    text-align: center;
    font-size: 10rem;
  }
</style>

<div class="container">
  <h1>ルーレット</h1>

  <input type="text" bind:value={name} />
  <button on:click={() => add()}>追加</button>

  <h3>プリセット</h3>
  <button on:click={() => preset(1)}>ABCD</button>
  <button on:click={() => preset(2)}>じゃんけん</button>
  <h3>実行</h3>
  <button on:click={() => run()}>実行</button>

  <ul>
    {#each names as name}
      <li>{name}</li>
    {/each}
  </ul>

  <div class="result">{result}</div>
</div>
