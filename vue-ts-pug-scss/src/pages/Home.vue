<template lang="pug">
    div
        div {{content}}
        date-picker(v-model="date")
        div Date={{dateDisplay}}
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import moment from 'moment';

@Component
export default class Home extends Vue {
    content:string = 'Home component';
    date:Date = new Date();
    get dateDisplay():string {
        return moment(this.date).format('YYYY-MM-DD');
    }
    mounted() {
        this.content = moment().format('MM/DD/YYYY');

    }
}

</script>

