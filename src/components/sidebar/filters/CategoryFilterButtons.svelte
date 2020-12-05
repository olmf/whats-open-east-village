<script>
    import hexToRgbA from '../../../utils/hexToRgbA'

    export let options = {}
    export let value = []
    export let text = ''

    let categoryOptions = []

    function resetCategoryItems() {
        value = []
    }

    function getCustomColor(color, selected = false) {
        //change transparency based on type
        return selected ? hexToRgbA(color, 1) : hexToRgbA(color, 0.4)
    }

    function getBorderColor(item, value) {
        return `
            border-bottom: 5px solid ${value.includes(item.value) ? getCustomColor(item.color, true) : getCustomColor(item.color, false)};
        `
    }

    function toggleCategoryItem(item) {
        value = [item.value]
    }


    $: if (options && 'data' in options) {
        //ungroup options.data
        categoryOptions = options.data.reduce((categoryOptions, group) => {
            return [...categoryOptions, ...group.options]
        }, [])
    }
</script>

<div class="field">
    <div class="filter-header">
        <label class="label">Filter by {text}</label>
        <button class="button is-small {value.length === 0 ? 'is-info' : ''}" on:click={resetCategoryItems}>All</button>
    </div>
    <div class="filter-container">
        {#each categoryOptions as item}
            <button class="button is-small"
                    style={getBorderColor(item, value)}
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

    .filter-container button {
        padding: 1.2em 1.3em;
        margin-right: 1rem;
        margin-bottom: 0.2rem;
    }
</style>