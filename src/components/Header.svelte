<script>
    import TranslationMenu from './TranslationMenu.svelte'
    import MaterialIcon from './MaterialIcon.svelte'

    let innerWidth
    let opened = localStorage.getItem('header') === null ? true : JSON.parse(localStorage.getItem('header'));

    function toggleOpen(){
        //toggle and save to local storage
        opened = !opened
        localStorage.setItem('header', opened)
    }

</script>

<svelte:window bind:innerWidth={innerWidth}/>

<header>
    {#if innerWidth > 768}
        <div class="header-bar">
            <h1 class="page-heading">Get Local! East Village</h1>
            <img class="pigeon-image" src="/images/pigeon.png"/>
            <h3 class="title is-3" id="title">A directory of local indepenedent businesses in the East Village NYC.</h3>
            <div style="min-height:210px;">
                <img class="buildings float-right" src="/images/buildings.png"/>
                <p class="map-text">A diversity of local independent retail shops and services is an essential part of life in the East Village. This interactive map helps you locate some of those great places to visit. The <a src="https://evccnyc.org">East Village Community Coalition</a> supports our neighborhood in a variety of ways. Our Retail Diversity and Preservation initiatives defend the East Village against the corporate homogenization sweeping the city and ensure the continuation of a rich history of immigrant settlers who make the neighborhood our home.
            </div>
        </div>
        {#if opened}
            <div id="sub">
                <div class="subtitle-container">
                    <!--<div class="buttons">
                        <a href="https://airtable.com/shrhEzCyopsgeOcRf" target="_blank" class="button is-info">Missing Business or Outdated Info?</a>
                        <a href="mailto:whatsopenev@gmail.com" target="_blank" class="button is-info">Submit Feedback</a>
                    </div>-->
                    <div class="buttons has-text-right">
                        <strong>Translate:&nbsp;</strong> <TranslationMenu className="is-small"/>
                       <!--<button class="button is-small {opened ? 'is-clicked' : ''}" on:click={toggleOpen}>
                        <MaterialIcon icon="info"></MaterialIcon>
                    </button>-->
                    </div>
                </div>
            </div>
        {/if}
    {:else}
        <div class="header-bar">
            <img class="pigeon-image-mobile" src="/images/pigeon.png"/>
            <h1 class="page-heading">Get Local! East Village</h1>
            <h3 class="title is-3" id="title">A directory of local independent businesses in the East Village.</h3>
            <div>
            <img class="buildings" src="/images/buildings.png"/>
            <p class="map-text">The Get Local! map is an initiative of the <a href="http://evccnyc.org">East Village Community Coalition</a>, maintained with tips from local blogger <a href="http://EVGrieve.com">EVGrieve.com</a> and a team of dedicated virtual volunteers. Use it to find local businesses, they are the lifeblood of the East Village.</p>
            </div>
        </div>
        {#if opened}
            <div id="sub">
                <div class="subtitle-container">
                    <!--<div class="buttons are-small">
                        <a href="https://airtable.com/shrhEzCyopsgeOcRf" target="_blank" class="button is-info">Missing Business or Outdated Info?</a>
                        <a href="mailto:whatsopenev@gmail.com" target="_blank" class="button is-info">Submit Feedback</a>
                    </div>-->
                    <div class="buttons has-text-right">
                        <strong>Translate:&nbsp;</strong> <TranslationMenu className="is-small"/>
                       <!--<button class="button is-small {opened ? 'is-clicked' : ''}" on:click={toggleOpen}>
                        <MaterialIcon icon="info"></MaterialIcon>
                    </button>-->
                    </div>                    
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
ff
    .title {
        margin-bottom: 10px !important;
    }

    #subtitle {
        margin-top: 5px;
        background-color: #f1f1f1;
        padding: 1rem 2rem;
        z-index: 2;
    }

    .is-clicked {
        background-color: #adbbb2;
    }

    p {
        margin-bottom: 0.25rem !important;
    }

    .button {
        font-weight: bold;
    }
</style>