<script>
    import {selectedItem} from '../../../stores'
    import {getValidUrl} from '../../../utils/textFormatting'
    import MarkdownField from './MarkdownField.svelte'
    import ItemDetailsInfo from './ItemDetailsInfo.svelte'
    import PickupDelivery from './PickupDelivery.svelte'
    import LastUpdated from './LastUpdated.svelte'
    import Status from './Status.svelte'
    import MaterialIcon from '../../MaterialIcon.svelte'

    $: item = $selectedItem

    let subCategories = []

    $: if (item) subCategories = item['Sub Categories'].split(',').filter(tag => tag.trim())

    function resetSelect() {
        selectedItem.select(null)
    }
</script>

<div class="details">
    <div class="header">
        <button class="button is-small back" on:click={resetSelect}>
            <MaterialIcon icon="keyboard_backspace"/>
        </button>
        <img class="icon" src="./icons/{item.icon}"/>
    </div>
    <div class="content">
        <h4 class="is-5 subtitle is-marginless notranslate" translate="no">{item.Name}</h4>
        <p style="margin-top:0.25em;">{#if item['Open Time']}<strong>Open:</strong> {item['Open Time']}{/if} {#if item['Close Time']} <strong>Close:</strong> {item['Close Time']}{/if}
        </p>
        
        <p class="address">
            <span class="notranslate" translate="no">{item.Address}</span>
            <a href="http://maps.google.com/?q={item.Address}" target="_blank">
                <MaterialIcon icon="pin_drop"/>
            </a>
        </p>
        <Status status={item.Status}/>

        <div class="category">
            <strong>{item.Category} - </strong>
            {#if subCategories.length}
                <div class="tags are-small">
                    {#each subCategories as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            {/if}
        </div>

        {#if item['Outside Seating Offered'] && item['Outside Seating Offered'].toLowerCase().includes('yes')}
            <div class="category">
                <strong>Outdoor Dining - </strong>
                <p><span class="tag is-primary is-small">{item['Outside Seating Offered']}</span></p>
            </div>
        {/if}

        {#if item['Indoor Seating Offered'] && item['Indoor Seating Offered'].toLowerCase().includes('yes')}
            <div class="category">
                <strong>Indoor Dining - </strong>
                <p><span
                        class="tag is-primary is-small">{item['Indoor Seating Offered'].replace(/^\w/, c => c.toUpperCase())}</span>
                </p>
            </div>
        {/if}

        <ItemDetailsInfo text={item.Phone} url={item.Phone} icon="local_phone" type="phone" alt="Phone Number"/>
        <ItemDetailsInfo url={item['Website']} text="Website" icon="public" type="website" alt="Website"/>
        <ItemDetailsInfo url={item['Instagram']} text="Instagram" icon="photo_camera" type="website" alt="Instagramz"/>

        {#if item['Fundraiser'] || item['Giftcard']}
            <div class="field is-grouped is-grouped-multiline support">
                <div class="tags fund-gift">
                    {#if item['Giftcard']}
                        <a target="_blank" href="{getValidUrl(item['Giftcard'])}">
                            <span class="tag is-link">Buy a GIFTCARD to support this business!</span>
                        </a>
                    {/if}
                    {#if item['Fundraiser']}
                        <a target="_blank" href="{getValidUrl(item['Fundraiser'])}">
                            <span class="tag is-link">Contribute to this business's FUNDRAISER!</span>
                        </a>
                    {/if}
                </div>
            </div>
        {/if}

        <MarkdownField title="Special Offers" content={item['Special Offers']}/>

        <!--{#if item['Open Time']}
            <p><strong>Open Time:</strong> {item['Open Time']}</p>
        {/if}

        {#if item['Close Time']}
            <p><strong>Close Time:</strong> {item['Close Time']}</p>
        {/if}-->

        <MarkdownField title="Special Accommodation Hours" content={item['Special Accommodation Hours']}/>
        <MarkdownField title="Notes" content={item.Notes}/>
        <hr>

        <PickupDelivery
                pickup={item['Pickup Offered']}
                delivery={item['Delivery Offered']}
                shipping={item['Shipping Offered']}
                notes=''
        />

        <LastUpdated lastUpdated={item['Last Updated']} source={item['Source']}/>
        <p class="has-text-grey-light">ID: {item.id}</p>

    </div>
</div>

<style>
    .details {
        padding-top: 10px;
        margin-left: 0.5rem;
        height: 100px;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    .back {
        margin-right: 5px;
    }

    .icon {
        width: 32px;
        height: 35px;
        position: absolute;
        right: 5px;
    }

    .address {
        font-size: 0.9rem;
    }

    .category {
        display: flex;
        flex-direction: row;
    }

    .category * {
        margin-right: 5px;
    }

    .content {
        margin-top: 1rem;
    }

    .content * {
        margin-bottom: 5px;
    }

    .fund-gift a{
        margin-right: 10px;
    }

</style>