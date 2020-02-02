<template>
    <div id="app">
        <canvas id="renderer-view"></canvas>

        <property-editor id="property-editor" :model="model"></property-editor>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PropertyEditor from './components/PropertyEditor.vue';
import { SimulationModel } from "../models/simulation";
import { TestModel } from "../models/test";

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
        this.model = new SimulationModel(<HTMLCanvasElement> document.getElementById('renderer-view'));
        //this.model = new TestModel(<HTMLCanvasElement> document.getElementById('renderer-view'));
    }
});
</script>
<style lang="scss" scoped>
#renderer-view {
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