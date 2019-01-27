<!--
    usage: date-picker(v-model="date")
-->
<template lang="pug">
    datepicker(:placeholder="placeholder", :format="format", :value="initial", @input="$emit('input', $event)")
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from "vue-property-decorator";
import Datepicker from 'vuejs-datepicker/dist/vuejs-datepicker.esm.js';

declare var $:any;

@Component({ components: { Datepicker }})
export default class DatePicker extends Vue {
    @Prop() placeholder:string;
    @Prop() format:string;
    @Prop() initial:string;
}
</script>

