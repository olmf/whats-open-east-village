<script>
    import MarkdownField from '../sidebar/details/MarkdownField.svelte'

    export let item;

    $: images = item['Images'].split(',')

</script>

<MarkdownField content={item['Text']}/>
<div class="images">
    {#each images as image}
        <img src={image}/>
    {/each}
</div>
<hr>

<style>
    hr{
        margin: 0.75rem
    }
    img {
        margin-top: 0.5rem;
        max-height: 300px;
    }
</style>