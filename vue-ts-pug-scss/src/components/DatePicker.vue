<!--
    usage: date-picker(v-model="date")
-->
<template lang="pug">
    datepicker(:placeholder="placeholder", :formt="format", :value="initial", @input="$emit('input', $event)")
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from "vue-property-decorator";
import Datepicker from 'vuejs-datepicker/src/components/Datepicker.vue';

declare var $:any;

@Component({ components: { Datepicker }})
export default class DatePicker extends Vue {
    @Prop() placeholder:string;
    @Prop() format:string;
    @Prop() initial:string;
}
</script>

