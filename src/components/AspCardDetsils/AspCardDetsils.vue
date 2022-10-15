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
        <img src="~assets/cardDetails.svg" />
      </q-item-section>
      <q-item-section class="clr-asp-blue text-weight-medium">Card details</q-item-section>
    </template>
    <q-card>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
        eveniet doloribus ullam aliquid.
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>