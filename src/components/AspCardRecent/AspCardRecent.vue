<template>
  <q-expansion-item
    dense
    dense-toggle
    expand-separator
    icon="perm_identity"
    label="Account settings"
    class="asp-card-expansion-item"
  >
    <template v-slot:header>
      <q-item-section avatar>
        <img src="~assets/recentTrans.svg" />
      </q-item-section>
      <q-item-section class="clr-asp-blue text-weight-medium">Recent transactions</q-item-section>
    </template>
    <div class="q-pa-lg">
      <AspCardDetailsItem />
      <AspCardDetailsItem />
      <AspCardDetailsItem />
      <div class="flex-center q-py-md all-card-trns font-md text-weight-medium">View all card transactions</div>
    </div>
  </q-expansion-item>
</template>
<script>
  import { defineComponent, ref } from 'vue'
import AspCardDetailsItem from '../../components/AspCardDetailsItem/AspCardDetailsItem.vue'

export default defineComponent({
  name: 'AspCardRecent',
  components: { AspCardDetailsItem },
  setup () {}
})
</script>