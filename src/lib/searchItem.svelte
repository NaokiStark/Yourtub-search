<script>
    export let rItem;
</script>

{#if rItem}
    <div class="card text-start mt-1">
        <!---->
        <div class="row g-0">
            <div class="col-md-4">
                <a
                    href="https://youtube.com/watch?v={rItem.id.videoId}"
                    target="_blank"
                >
                    <img
                        src={rItem.snippet.thumbnails.high.url}
                        class="img-fluid rounded-start"
                        alt={rItem.snippet.description}
                    />
                </a>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <a
                        href="https://youtube.com/watch?v={rItem.id.videoId}"
                        target="_blank"
                    >
                        <h5 class="card-title">{rItem.snippet.title}</h5>
                    </a>
                    <a
                        href="https://www.youtube.com/channel/{rItem.snippet
                            .channelId}"
                        target="_blank"
                    >
                        <h6 class="card-subtitle mb-2 text-body-secondary">
                            {rItem.snippet.channelTitle}
                        </h6>
                    </a>
                    <a
                        href="https://youtube.com/watch?v={rItem.id.videoId}"
                        target="_blank"
                    >
                        <p class="mt-1">{rItem.snippet.description}</p>
                    </a>
                    <p>
                        <small class="text-muted"
                            >Uploaded {new Date(
                                rItem.snippet.publishedAt
                            ).toLocaleDateString()}
                            {new Date(
                                rItem.snippet.publishedAt
                            ).toLocaleTimeString()}</small
                        >
                    </p>
                </div>
            </div>
        </div>
        <!--
        <div class="card-footer">
            Creado el 25 de mayo que plante el zapallo
           
        </div> -->
    </div>
{/if}

<style>
    .img-fluid {
        width: 100%;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
