<script>
    import RowItem from './RowItem.svelte'
    export let show
    export let items;

    function sortByAlphabet(rows) {
        return rows.sort((a,b) => a.Name.localeCompare(b.Name))
    }

    $: sortedItems = sortByAlphabet(items)

</script>

<div class="listings {show ? '' : 'is-hidden'}" role="list" aria-label="listings">
    {#each items as item (item.id)}
        <RowItem {item}/>
    {/each}
</div>


<style>
    .listings {
        position: absolute;
        height: 100%;
        width: 100%;
    }
</style>