<script>
    import CategoryFilters from './CategoryFilters.svelte'
    import OutdoorSeating from './OutdoorSeating.svelte'
    import IndoorSeating from './IndoorSeating.svelte'
    import PickupDeliveryFilter from './PickupDeliveryFilter.svelte'
    import OwnedByFilters from './OwnedByFilters.svelte'

</script>

<CategoryFilters/>
<OutdoorSeating/>
<IndoorSeating/>
<PickupDeliveryFilter/>
<div class="field">
    <label class="label">Additional Categories:</label>
    <OwnedByFilters name="AAPI-owned" column="AAPI Owned"/>
    <OwnedByFilters name="Black-owned" column="Black Owned"/>
    <OwnedByFilters name="Latine-owned" column="Latine Owned"/>
    <OwnedByFilters name="LGBTQ-owned" column="LGBTQ Owned"/>
    <OwnedByFilters name="Ukrainian" column="Ukrainian Owned"/>
    <OwnedByFilters name="Women owned" column="Women Owned"/>
    <!--<OwnedByFilters name="Minority/Women-owned " column="MWBE"/>-->
</div>
