<template>
  <main>
    <div class="bg-asp-blue">
      <Logo />
      <section class="q-px-lg">
        <strong class="q-mb-md inline-block clr-asp-white">Account balance</strong>
        <div class="flex justify-between">
          <div class="clr-asp-white">
            <span class="q-mr-sm font-sm asp-currency">S$</span>
            <strong>3,000</strong>
          </div>
          <div class="cursor-pointer" @click="showNewCard = true">
            <img src="~assets/plus.svg" class="q-mr-sm" />
            <span class="font-md clr-asp-lblue text-weight-medium">New card</span>
          </div>
        </div>
        <q-tabs
          v-model="tab"
          class="text-teal"
          align="left"
        >
          <q-tab
            v-for="card in allCards"
            :key="card.name"
            :name="card.name"
            :label="card.label" 
            lass="q-pa-none q-mr-lg"
          />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-for="(card, index) in allCards" :key="card.name" :name="card.name" class="bg-asp-blue q-pa-none">
            <q-carousel
              v-model="slides[index]"
              animated
              control-color="primary"
              navigation
              :ref="'carousel'+index"
            >
              <q-carousel-slide v-for="(_card, position) in card.cards" :key="_card.name" :name="position" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard
                  :card="_card"
                />
              </q-carousel-slide>
              <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
                <q-btn v-else size="sm" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
              </template>
            </q-carousel>
          </q-tab-panel>
        </q-tab-panels>
      </section>
    </div>
    <div v-if="activeCard">
      <AspCardActions :card="activeCard" @toggleFreeze="toggleFreeze" @removeCard="openConfirm = true"/>
      <div class="q-pa-lg">
        <AspCardDetails class="q-mb-lg q-pa-lg bg-asp-ltblue asp-card-expantion"/>
        <AspCardRecent class="q-mb-lg q-pa-lg bg-asp-ltblue asp-card-expantion" />
      </div>
    </div>
    <q-dialog v-model="showNewCard">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Card name</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="newCardName" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add" @click="addCard" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="openConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Are you sure to delete the card with name {{ activeCard.name }}.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yes" color="primary" @click="removeCard" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </main>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import Logo from '../components/AspLogo/AspLogo.vue'
import AspCard from '../components/AspCard/AspCard.vue'
import AspCardActions from '../components/AspCardActions/AspCardActions.vue'
import AspCardDetails from '../components/AspCardDetails/AspCardDetails.vue'
import AspCardRecent from '../components/AspCardRecent/AspCardRecent.vue'

export default defineComponent({
  name: 'ErrorNotFound',
  components: { Logo, AspCard, AspCardActions, AspCardDetails, AspCardRecent },
  setup () {
    const $store = useStore()
    const tab = ref('Debit');
    const slides = ref([0, 0]);
    const showNewCard = ref(false);
    const openConfirm = ref(false);
    const newCardName = ref('');
    $store.dispatch('cards/getAllCards');
    const allCards = computed(() => $store.state.cards.allCards);
    const index = computed(() => allCards.value.findIndex(card => card.name === tab.value));
    const activeCard = computed(() => allCards.value[index.value].cards && allCards.value[index.value].cards[slides.value[index.value]]);

    function addCard() {
      $store.dispatch('cards/addNewCard', { name: newCardName.value, index: index.value });
      newCardName.value = '';
      showNewCard.value = false;
    }

    function toggleFreeze() {
      $store.dispatch('cards/toggleFreeze', { type: index.value, index: slides.value[index.value] });
    }

    function removeCard() {
      $store.dispatch('cards/removeCard', { type: index.value, index: slides.value[index.value] });
      slides.value[index.value] = 0;
      openConfirm.value = false;
    }

    return {
      tab,
      slides,
      allCards,
      showNewCard,
      openConfirm,
      activeCard,
      newCardName,
      addCard,
      toggleFreeze,
      removeCard
    }
  }
})
</script>
