<script>
    import CategoryFilters from './CategoryFilters.svelte'
    import OpenedFilter from './OpenedFilter.svelte'
    import PickupDeliveryFilter from './PickupDeliveryFilter.svelte'
    import MaterialIcon from '../../MaterialIcon.svelte'

    let opened = true

</script>

<CategoryFilters/>
<OpenedFilter/>
<PickupDeliveryFilter/>

<style>
    .full {
        display: block;
        width: 100%;
        border: solid 1px #d5d5d5;
        border-radius: 4px;
        padding: 5px 10px;
    }

    .hidden {
        display: none;
    }
</style>