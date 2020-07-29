<script>
    import {onMount} from 'svelte'
    import {rows, mapObject, selectedItem} from '../../stores'
    import importBulletin from '../../utils/importBulletin'
    import BulletinItem from './BulletinItem.svelte'

    let items = []
    let newestMapUpdates = []

    $: {
        if($rows.length){
            newestMapUpdates =  $rows.sort((a, b) => {
                return new Date(a['Last Updated']) <= new Date(b['Last Updated']) ? 1 : -1
            }).slice(0, 4)
        }
    }

    onMount(async () => {
        items = await importBulletin('data/bulletin.csv')
    })

</script>

<div class="bulletin">
    <h4 class="is-4 title">East Village Spotlight</h4>
    {#each items as item}
        <BulletinItem {item}/>
    {/each}
</div>

<div class="newest">
    <h4 class="is-4 title">Newest Map Updates</h4>
    {#each newestMapUpdates as row}
        <p><a href="#" on:click={() => selectedItem.select(row, $mapObject, row.coordinates)}>{row.Name}</a>
            - {row.Category} - {row['Sub Category']}</p>
    {/each}
</div>

<style>
    .bulletin {
        margin-top: 1rem;
    }

    .newest{
        margin-bottom: 1rem;
    }
</style>