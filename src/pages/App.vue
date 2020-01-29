<template>
    <div id="app">
        <canvas id="simulation-view"></canvas>

        <property-editor id="property-editor" :model="model" :a="a"></property-editor>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PropertyEditor from './components/PropertyEditor.vue';
import { Model } from "../ts/model";

let simulationModel: Model;

export default Vue.extend({
    data: function() {
        return {
            model: null,
            a: {
                b: {
                    c: {
                        d: 0
                    }
                }
            }
        };
    },
    components: {
        PropertyEditor
    },
    mounted: function() {
        this.model = new Model(<HTMLCanvasElement> document.getElementById('simulation-view'));

    }
});
</script>
<style lang="scss" scoped>
#simulation-view {
    width: calc(100% - 256px);
    height: 100%;
    float: left;
}

#property-editor {
    width: 256px;
    height: 100%;
    float: left;
}
</style>