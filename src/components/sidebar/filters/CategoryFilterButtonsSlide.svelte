<script>
    import hexToRgbA from '../../../utils/hexToRgbA'

    export let options = {}
    export let value = []
    export let text = ''

    let categoryOptions = []

    function resetCategoryItems() {
        value = []
    }


    function toggleCategoryItem(item) {
        value = [item.value]
    }


    $: if (options && 'data' in options) {
        categoryOptions = options.data.filter(({text}) => text)
    }
</script>

<div class="field">
    <div class="filter-header">
        <label class="label">Filter by {text}</label>
        <button class="button is-small {value.length === 0 ? 'is-info' : ''}" on:click={resetCategoryItems}>All</button>
    </div>
    <div class="filter-container">
        {#each categoryOptions as item}
            <button class="button is-small {value.includes(item.value) ? 'is-info' : ''}"
                    on:click={toggleCategoryItem(item)}>{item.text}</button>
        {/each}
    </div>
</div>


<style>
    .filter-header {
        display: flex;
        flex-direction: row;
        margin-bottom: 0.4rem;
    }

    .filter-header button {
        margin-left: 1rem;
    }

    .filter-container{
        display: flex;
        flex-direction: row;
        overflow-x: auto;
    }

    .filter-container button {
        padding: 1.5em 1.6em;
        margin-right: 0.5rem;
        max-width: 20rem;
    }
</style>