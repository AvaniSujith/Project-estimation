<script setup lang="ts">
import { ref, reactive } from "vue";

import InputField from "../components/InputField.vue";
import TitleText from "../components/TitleText.vue";
import DropDown from "../components/DropDown.vue";

import type { PaymentInfo } from "../types";

const paymentInfo = reactive<PaymentInfo>({
  currency: "",
  discount: null,
  upfront: null,
  notes: "",
});

const currencies = [
  { item: "INR - Indian Rupee", value: "India" },
  { item: "$- Dollar", value: "US" },
];

const selectedCurrency = ref<string>("");

const handleChange = (value: string) => {
  selectedCurrency.value = value;
};
</script>

<template>
  <v-card variant="outlined">
    <v-card-title>
      <title-text label="Payment Information" :font-size="25" />
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <title-text label="Payment Currency" />
          <drop-down
            v-model="selectedCurrency"
            :items="currencies"
            @select="handleChange"
          />
          <p>{{ selectedCurrency }}</p>
        </v-col>
        <v-col>
          <title-text label="Discount( % )" />
          <input-field
            v-model="paymentInfo.discount"
            type="number"
            placeholder="10"
            :rules="[]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <title-text label="Payment Terms" :font-size="20" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <title-text label="Upfront" />
          <input-field
            v-model="paymentInfo.upfront"
            type="number"
            placeholder="10"
            :rules="[]"
          />
        </v-col>
        <v-col>
          <title-text label="% on Delivery" />
          <input-field
            v-model="selectedCurrency"
            :placeholder="selectedCurrency"
            :rules="[]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <title-text label="Notes" />
          <input-field
            v-model="paymentInfo.notes"
            placeholder="10"
            :rules="[]"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
