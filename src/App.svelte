<script>
  import SearchItem from "./lib/searchItem.svelte";
  import { getSearch } from "./yt-api.js";
  import InfiniteLoading from "svelte-infinite-loading";

  let searchInput = "MrBeast";
  let results = {};
  let item_results = [];
  let searchEnabled;
  let sort;
  let api_key = localStorage.api_key ?? "";

  let infiniteId = Symbol();

  async function search() {
    searchEnabled = true;
    results = {};
    item_results = [];
    localStorage.api_key = api_key;
    infiniteId = Symbol();
  }

  function infiniteHandler({ detail: { loaded, complete } }) {
    let searchobj = { q: searchInput, order: sort, key: api_key };
    if (Object.keys(results).length > 0) {
      searchobj = { ...searchobj, pageToken: results.nextPageToken };
    }
    getSearch(searchobj).then((x) => {
      results = x;
      if (x.items.length > 0 && x.items.length > 19) {
        item_results = [...item_results, ...x.items];
        loaded();
      } else {
        item_results = [...item_results, ...x.items];
        complete();
      }
    });
  }
</script>

<main class="text-center">
  <h2 class="mt-3">Yourtub search</h2>

  <div class="searchbox d-flex flex-column align-content-center mx-auto mt-5">
    <div class="row">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Search something"
          bind:value={searchInput}
        />
      </div>
      <div class="col-4 mt-1">
        <input
          type="text"
          class="form-control"
          placeholder="Api Key"
          bind:value={api_key}
        />
      </div>
      <div class="col-2 mt-1">
        <a
          href="https://www.youtube.com/watch?v=N18czV5tj5o"
          target="_blank"
          class="btn btn-primary"
        >
          How to get
        </a>
      </div>
    </div>
    <div class="searchopt">
      <div class="form-group d-flex flex-row mt-3">
        <label for="sort">Sort: </label>
        <select class="form-select" id="sort" bind:value={sort}>
          <option selected value="relevance">Relevance</option>
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
    <button type="button" class="btn btn-primary mt-2" on:click={search}
      >Search da sht</button
    >
  </div>

  <div class="resultbox d-flex flex-column align-content-center mx-auto mt-5">
    <h3>Results</h3>
    {#each item_results as rItem}
      <SearchItem {rItem} />
    {/each}
    <InfiniteLoading
      spinner="wavedots"
      on:infinite={infiniteHandler}
      identifier={infiniteId}
    />
  </div>

  <!---->
</main>

<style>
  .form-group {
    max-width: 50%;
  }
</style>
