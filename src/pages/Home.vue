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
          <div>
            <img src="~assets/plus.svg" class="q-mr-sm" />
            <span class="font-md clr-asp-lblue text-weight-medium">New card</span>
          </div>
        </div>
        <q-tabs
          v-model="tab"
          class="text-teal"
          align="left"
        >
          <q-tab name="debitCards" label="My debit cards" class="q-pa-none q-mr-lg"/>
          <q-tab name="companyCards" label="All company cards" class="q-pa-none"/>
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="debitCards" class="bg-asp-blue q-pa-none">
            <q-carousel
              v-model="slide"
              animated
              control-color="primary"
              navigation
            >
              <q-carousel-slide name="d1" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard />
              </q-carousel-slide>
              <q-carousel-slide name="d2" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard />
              </q-carousel-slide>
              <q-carousel-slide name="d3" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard />
              </q-carousel-slide>
              <template v-slot:navigation-icon="{ active, btnProps, onClick }">
                <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
                <q-btn v-else size="sm" :icon="btnProps.icon" color="primary" flat round dense @click="onClick" />
              </template>
            </q-carousel>
          </q-tab-panel>

          <q-tab-panel name="companyCards" class="bg-asp-blue q-pa-none">
            <q-carousel
              v-model="slide"
              animated
              control-color="primary"
              navigation
            >
              <q-carousel-slide name="d1" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard />
              </q-carousel-slide>
              <q-carousel-slide name="d2" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard />
              </q-carousel-slide>
              <q-carousel-slide name="d3" class="column no-wrap bg-asp-blue q-pa-none">
                <AspCard />
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
    <div>
      <AspCardActions />
      <div class="q-pa-lg">
        <AspCardDetsils class="q-mb-lg q-pa-lg bg-asp-ltblue asp-card-expantion"/>
        <AspCardRecent class="q-mb-lg q-pa-lg bg-asp-ltblue asp-card-expantion" />
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Logo from '../components/AspLogo/AspLogo.vue'
import AspCard from '../components/AspCard/AspCard.vue'
import AspCardActions from '../components/AspCardActions/AspCardActions.vue'
import AspCardDetsils from '../components/AspCardDetsils/AspCardDetsils.vue'
import AspCardRecent from '../components/AspCardRecent/AspCardRecent.vue'

export default defineComponent({
  name: 'ErrorNotFound',
  components: { Logo, AspCard, AspCardActions, AspCardDetsils, AspCardRecent },
  setup () {
    const tab =  ref('debitCards');

    return {
      tab,
      slide: ref('d1')
    }
  }
})
</script>
