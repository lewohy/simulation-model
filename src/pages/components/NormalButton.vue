<template>
    <div>
        <div id="component" @click="onClick(buttonId)">
            <div id="text-area">
                {{ text }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        buttonId: String,
        text: String,
        onClick: Function
    }
});
</script>
<style lang="scss" scoped>
#component {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    text-align: center;
    display: table;
    cursor: pointer;
}

#text-area {
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0);
    display: table-cell;
    transition: background-color 0.2s;
}

#text-area:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

#text-area:active {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>