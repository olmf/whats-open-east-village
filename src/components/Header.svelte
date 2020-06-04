<script>
    import TranslationMenu from './TranslationMenu.svelte'
    import MaterialIcon from './MaterialIcon.svelte'

    let innerWidth
    let opened = true;

</script>

<svelte:window bind:innerWidth={innerWidth}/>

<header>
    {#if innerWidth > 768}
        <div class="header-bar">
            <h3 class="title is-3" id="title">What's Open In The East Village Area During COVID-19?</h3>
            <div class="buttons has-text-right">
                <TranslationMenu className="is-small"/>
                <button class="button is-small {opened ? 'is-clicked' : ''}" on:click={() => opened = !opened}>
                    <MaterialIcon icon="info"></MaterialIcon>
                </button>
            </div>
        </div>
        {#if opened}
            <div id="subtitle">
                <p class="is-6 subtitle"><strong>A directory of essential businesses that are open in the East Village
                    area during COVID-19.</strong> Updated frequently and with ❤️️ by Perry Leung, EVCC, EV Grieve, and Paul
                    Gale.</p>
                <p class="is-italic">Note: Hours may be adjusted due to NYC curfew week of June 1</p>
                <div class="buttons are-small">
                    <a href="https://airtable.com/shrhEzCyopsgeOcRf" target="_blank" class="button is-info">Don't see
                        your favorite business or update info?</a>
                    <a href="mailto:whatsopenev@gmail.com" class="button is-info">Submit feedback or want to help</a>
                </div>
            </div>
        {/if}
    {:else}
        <div class="header-bar">
            <h3 class="title is-5">Essentially Open North Brooklyn</h3>
            <div class="buttons has-text-right">
                <TranslationMenu className="is-small"/>
                <button class="button is-small {opened ? 'is-clicked' : ''}" on:click={() => opened = !opened}>
                    <MaterialIcon icon="info"></MaterialIcon>
                </button>
            </div>
        </div>
        {#if opened}
            <div id="subtitle">
                <p class="is-6 subtitle"><strong>A directory of essential businesses that are open in the East Village
                    area during COVID-19.</strong> Updated frequently and with ❤️️ by Perry Leung, EVCC, EV Grieve, and Paul
                    Gale.</p>
                <p class="is-italic">Note: Hours may be adjusted due to NYC curfew week of June 1</p>
                <div class="buttons are-small">
                    <a href="https://airtable.com/shrhEzCyopsgeOcRf" target="_blank" class="button is-info">Don't see
                        your favorite business or update info?</a>
                    <a href="mailto:whatsopenev@gmail.com" class="button is-info">Submit feedback or want to help</a>
                </div>
            </div>
        {/if}
    {/if}
</header>

<style>
    .header-bar {
        margin: 1rem 0rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .title {
        margin-bottom: 10px !important;
    }

    @media only screen and (max-width: 768px) {

        #subtitle {
            margin-top: 5px;
            background-color: #eaeaea;
            padding: 1rem 2rem;
            z-index: 2;
        }
    }

    .is-clicked {
        background-color: #ecf1f8;
    }

    p {
        margin-bottom: 0.25rem !important;
    }
</style>