<script setup lang="ts">
import { reactive } from "vue";

import InputField from "../components/InputField.vue";
import TitleText from "../components/TitleText.vue";
import { validateString } from "../helpers/InputValidation";

import type { ProjectInfo } from "../types";

const projectInfo = reactive<ProjectInfo>({
  title: "",
  referenceNum: "",
  description: "",
});

</script>

<template>
  <v-card variant="outlined">
    <v-card-title>
      <title-text label="Project Information" :font-size="25" />
    </v-card-title>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-row>
        <v-col>
          <title-text label="Project Title" />
          <input-field
            v-model="projectInfo.title"
            placeholder="Eg., Website Redesign"
            :rules="validateString('Project title', 2, 26)"
          />
        </v-col>
        <v-col>
          <title-text label="Project Reference" />
          <input-field
            v-model="projectInfo.referenceNum"
            placeholder="Eg., #REF-2025-001"
            :rules="validateString('Project reference', 13, 15)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <title-text label="Project Description" />
          <input-field
            v-model="projectInfo.description"
            placeholder="Eg., Redesign the website for ACME..."
            :rules="validateString('Project description', 10, 126)"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
