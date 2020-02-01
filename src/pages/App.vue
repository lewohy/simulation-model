<template>
    <div id="app">
        <canvas id="simulation-view"></canvas>

        <property-editor id="property-editor" :model="model"></property-editor>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PropertyEditor from './components/PropertyEditor.vue';
import { Model } from "../ts/model";

let simulationModel: Model;

export default Vue.extend({
    components: {
        PropertyEditor
    },
    data: function() {
        return {
            model: null
        };
    },
    mounted: function() {
        this.model = new Model(<HTMLCanvasElement> document.getElementById('simulation-view'));
    }
});
</script>
<style lang="scss" scoped>
#simulation-view {
    width: 80%;
    height: 100%;
    float: left;
}

#property-editor {
    width: 20%;
    height: 100%;
    float: left;
}
</style>