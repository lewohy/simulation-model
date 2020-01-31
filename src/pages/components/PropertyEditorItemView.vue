<template>
    <div>
        <div id="component" @click="onClick(propertyName)">
            <div id="name-view">
                {{ propertyName }}
            </div>
            <div id="separator-view">:</div>
            <div id="value-view">
                {{ propertyValue }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        propertyName: String,
        propertyValue: [String, Number],
        onClick: Function
    },
    methods: {
        
    }
});
</script>
<style lang="scss" scoped>
#component {
    width: 100%;
    height: 100%;
    padding: 0px 8px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
    cursor: default;
    transition: background-color 0.2s;
}

#component:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

#name-view {
    width: calc(30% - 16px);
    height: auto;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Consolas';
    word-wrap: break-word;
    float: left;
}

#separator-view {
    width: 16px;
    height: 16px;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Consolas';
    float: left;
}

#value-view {
    width: 70%;
    height: auto;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Consolas';
    word-wrap: break-word;
    float: left;
}
</style>