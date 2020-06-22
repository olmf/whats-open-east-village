<script>
    import {filters} from '../../../stores'
    export let name
    export let column
    let showFilter = false
    $: filterLabel = `owned-by-${name}`
    $: updateFilter(showFilter)
    function updateFilter(showFilter) {
        if ($filters) {
            //remove existing filter
            const _filters = $filters
            const filter = _filters.findIndex(f => f.label === filterLabel)
            if (filter > -1) _filters.splice(filter, 1)
            if (showFilter) {
                //generate new filter
                const filter = {
                    label: filterLabel,
                    filter: (row) => {
                        return row[column] === 'true'
                    }
                }
                filters.set([..._filters, filter])
            } else {
                filters.set(_filters)
            }
        }
    }
</script>

<label class="checkbox">
    <input type="checkbox" bind:checked={showFilter}>{name}
</label>

<style>
    label {
        margin-right: 1em;
    }
    input{
        margin-right: 0.5em;
    }
</style>