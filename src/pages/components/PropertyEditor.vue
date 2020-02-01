<template>
    <div>
        <div id="component">
            <div id="name-view">
                {{ objName }}
            </div>
            <property-editor-item-view v-for="propertyData in propertyList"
                :key="propertyData.propertyName"
                :property-name="propertyData.propertyName"
                :property-value="propertyData.propertyValue"
                :on-click="showPropertyEditorDialog">
                
            </property-editor-item-view>

            <transition name="dialog-fade">
                <property-editor-dialog v-if="editingPropertyName != null"
                    :property-name="editingPropertyName"
                    :default-value="getPropertyValue(editingPropertyName)"
                    :on-apply="onApply"
                    :on-cancel="onCancel">

                </property-editor-dialog>
            </transition>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import PropertyEditorItemView from './PropertyEditorItemView.vue';
import PropertyEditorDialog from './PropertyEditorDialog.vue';
import { Model } from '../../ts/model';
import { Unit } from '../../ts/unit';

export default Vue.extend({
    components: {
        PropertyEditorItemView,
        PropertyEditorDialog
    },
    props: {
        model: Model,
    },
    data: function() {
        return {
            obj: <object> null,
            objName: <String> null,
            propertyList: new Array<object>(),
            editingPropertyName: <String> null
        };
    },
    mounted: function() {
        setInterval(() => {
            if (this.obj != this.model.renderer.focused) {
                this.reset();
            }

            if (this.obj) {
                for (let i = 0; i < this.propertyList.length; i++) {
                    this.propertyList[i]['propertyValue'] = this.obj[this.propertyList[i]['propertyName']];
                }
            }
        }, 5);
    },
    methods: {
        reset: function() {
            this.obj = this.model.renderer.focused;

            this.objName = this.obj.constructor.name;
            this.propertyList = new Array<object>();

            for (let propertyName in this.obj) {
                let descriptor = Object.getOwnPropertyDescriptor(this.obj, propertyName);
                if (descriptor && descriptor.configurable) {
                    let propertyValue = this.obj[propertyName];
                    if (['string', 'number'].indexOf(typeof(propertyValue)) > -1) {
                        this.propertyList.push({
                            propertyName: propertyName,
                            propertyValue: propertyValue
                        });
                    }
                }
            }
        },
        showPropertyEditorDialog: function(propertyName: string) {
            this.editingPropertyName = propertyName;
        },
        onApply: function(propertyName: string, propertyValue: string) {
            try {
                this.editingPropertyName = null;

                if (typeof(this.obj[propertyName]) === 'string') {
                    this.obj[propertyName] = propertyValue;
                } else if (typeof(this.obj[propertyName]) === 'number') {
                    this.obj[propertyName] = parseFloat(propertyValue);
                }
                
                this.reset();
            } catch (e) {
                console.log('잘못된 프로퍼티 값 전달.');
                console.log(e);
            }
        },
        onCancel: function() {
            this.editingPropertyName = null;
        },
        getPropertyValue: function(propertyName: string) {
            for (let i = 0; i < this.propertyList.length; i++) {
                let propertyData = this.propertyList[i];
                if (propertyData.propertyName === propertyName) {
                    return propertyData.propertyValue;
                }
            }

            console.log('a')
            return null;
        }
    }
});
</script>
<style lang="scss" scoped>
#component {
    width: 100%;
    height: 100%;
    background-color: #efefef;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    float: left;
}

#name-view {
    width: calc(100% - 48px);
    height: auto;
    margin: 16px 0px;
    padding: 0 8px;
    font-weight: 900;;
    font-size: 20px;
}

#property-editor-item-view {
    width: 100%;
    height: auto;
    margin-bottom: 4px;
}

.dialog-fade-enter-active, .dialog-fade-leave-active {
    transition: opacity 0.1s;
}

.dialog-fade-enter, .dialog-fade-leave-to {
    opacity: 0;
}
</style>