<script>
    import Header from './components/Header.svelte'
    import MapView from './components/MapView.svelte'
    import Sidebar from './components/Sidebar.svelte'
    import TopButton from './components/TopButton.svelte'
    import Bulletin from './components/bulletin/Bulletin.svelte'

    import {rows, filters} from './stores'


    import {onMount} from 'svelte'
    import importData from './utils/importData'

    $: items = $rows.filter(row => $filters.every(f => f.filter(row)))

    onMount(() => {
        importData('data/rows.csv', rows)
    })

    let urlParams = new URLSearchParams(window.location.search)
    $: bulletin = urlParams.get('bulletin')


</script>

<main>
    <Header/>
    <div class="dash">
        <div class="content">
            <div class="sidebar">
                <Sidebar {items}/>
            </div>
            <div class="map">
                <MapView {items}/>
            </div>
        </div>
    </div>
    <div class="buttons">
        <a href="https://airtable.com/shrhEzCyopsgeOcRf" target="_blank" class="button is-info">Missing Business or Outdated Info?</a>
        <a href="mailto:whatsopenev@gmail.com" target="_blank" class="button is-info">Submit Feedback</a>
    </div>
    <div class="bulletin">
        {#if bulletin !== 'hide'}
            <Bulletin/>
        {/if}
    </div>
    <p class="is-italic has-text-grey-dark">Updated frequently and with ❤ by Perry Leung, <a
            href="http://evccnyc.org/" target="_blank">EVCC</a>, <a href="https://evgrieve.com" target="_blank">EV
        Grieve</a>, and Paul Gale.</p> <br>
</main>
<TopButton/>

<style>
    main {
        margin: 0px auto;
        max-width: 1500px;
        color: #444;
        padding: 0px 25px;
    }

    .dash {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .dash > * {
        flex: 1;
    }

    .content {
        margin: 1rem 0rem;
        display: flex;
        flex-wrap: wrap-reverse;
    }

    .map {
        flex: 2.5 1 300px;
        min-width: 300px;
    }

    .sidebar {
        flex: 1 1 300px;
        min-width: 300px;
        position: relative;
        margin-right: 1rem;
    }


    @media only screen and (max-width: 768px) {
        main {
            padding: 0 30px;
        }

        .dash {
            height: initial;

        }

        .content {
            min-height: 700px;
        }

        .content > div {
            min-width: 51%;
        }

        .sidebar {
            height: 800px;
            margin-right: 0px;
            margin-bottom: 1rem;
        }

        .map {
            height: 500px;
        }
    }

    :global(.is-1, .is-2, .is-3, .is-4, .is-5, .is-6, .is-7) {
        font-family: 'Merriweather', serif;
    }

</style>