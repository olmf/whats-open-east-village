<script>
    import CategoryFilters from './CategoryFilters.svelte'
    import PickupDeliveryFilter from './PickupDeliveryFilter.svelte'
    import OwnedByFilters from './OwnedByFilters.svelte'

</script>

<CategoryFilters/>
<PickupDeliveryFilter/>
<div class="field">
    <label class="label">Additional Categories:</label>
    <OwnedByFilters name="Minority/Women-owned " column="MWBE"/>
    <OwnedByFilters name="Black-owned" column="Black Owned Business"/>
    <OwnedByFilters name="LGBTQ-owned" column="LGBTQ"/>
</div>