<template>
    <div>
        <div id="component"
            @keydown.esc="onCancel"
            @keydown.enter="onApply(propertyName, value)">
            <div id="dialog-area">
                <div id="title-view">
                    {{ propertyName }}
                </div>

                <input id="value-input" v-model="value">

                <normal-button id="cancel-button"
                    button-id="cancel-button"
                    text="Cancel"
                    :onClick="onClick">
                    
                </normal-button>
                
                <normal-button id="apply-button"
                    button-id="apply-button"
                    text="Apply"
                    :onClick="onClick">

                </normal-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import NormalButton from './NormalButton.vue';

export default Vue.extend({
    components: {
        NormalButton
    },
    props: {
        propertyName: String,
        defaultValue: [String, Number],
        onApply: Function,
        onCancel: Function
    },
    data: function() {
        return {
            value: null
        };
    },
    created: function() {
        this.value = this.defaultValue;
    },
    mounted: function() {
        document.getElementById('value-input').focus();
    },
    methods: {
        onClick: function(id: string) {
            if (id === 'apply-button') {
                this.onApply(this.propertyName, this.value);
            } else {
                this.onCancel();
            }
        }
    }
});
</script>
<style lang="scss" scoped>
#component {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    position: fixed;
}

#dialog-area {
    width: 512px;
    height: auto;
    margin: auto;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    display: block;
    overflow: hidden;
}

#title-view {
    width: calc(100% - 32px);
    height: auto;
    padding: 16px;
    font-size: 20px;
    font-family: 'Consolas';
    font-weight: 900;
    text-align: left;
}

#value-input {
    width: calc(100% - 32px);
    height: 32px;
    margin: 0px 16px;
    font-size: 16px;
    font-family: 'Consolas';
    line-height: 32px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #efefef;
    transition: border-bottom 0.2s;
}

#value-input:focus {
    border-bottom: 2px solid #efafaf;
}

#apply-button, #cancel-button {
    width: 64px;
    height: 48px;
    margin: 4px 4px 4px 0px;
    background-color: white;
    float: right;
}

#apply-button {
    color: blue;
}

#cancel-button {
    color: red;
}
</style>