<template>
    <div id="proerpty-editor">
        <div id="name-view">
            {{ getFocusedUnitName() }}
            {{ a.b.c.d }}
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Model } from '../../ts/model';

export default Vue.extend({
    props: {
        model: Model,
        a: Object
    },
    mounted: function() {
        setInterval(() => {
            this.a.b.c.d++;
        }, 5);
    },
    methods: {
        getFocusedUnitName: function() {
            if (this.model && this.model.renderer.focusedUnit) {
                return this.model.renderer.focusedUnit.name;
            } else {
                return 'Environment';
            }
        }
    }
});
</script>
<style lang="scss" scoped>
#property-editor {
    background-color: #efefef;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    float: left;
}

#name-view {
    width: calc(100% - 48px);
    height: auto;
    min-height: 48px;
    padding: 0 24px 0 24px;
    line-height: 48px;
    font-weight: 900;;
    font-size: 24px;
}
</style>