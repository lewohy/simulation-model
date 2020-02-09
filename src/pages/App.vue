<template>
    <div id="app">
        <canvas id="renderer-view"></canvas>

        <property-editor id="property-editor" :model="untraced['model']"></property-editor>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PropertyEditor from './components/PropertyEditor.vue';
import { TestModel } from "../models/test";
import { SimulationModel } from "../models/simulation";
import { SimulationModel2 } from "../models/simulation2";
import Util from '../ts/util';

export default Vue.extend({
    components: {
        PropertyEditor
    },
    data: function() {
        return {
            tmp: null,
            untraced: {
                
            }
        };
    },
    mounted: function() {
        this.untraced = {};

        //this.untraced['model'] = new TestModel(<HTMLCanvasElement> document.getElementById('renderer-view'));
        //this.untraced['model'] = new SimulationModel(<HTMLCanvasElement> document.getElementById('renderer-view'));
        this.untraced['model'] = new SimulationModel2(<HTMLCanvasElement> document.getElementById('renderer-view'));
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