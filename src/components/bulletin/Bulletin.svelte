<script>
    import {onMount} from 'svelte'
    import importBulletin from '../../utils/importBulletin'
    import BulletinItem from './BulletinItem.svelte'

    let items = []

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

<style>
    .bulletin{
        margin: 1rem 2rem;
    }
</style>