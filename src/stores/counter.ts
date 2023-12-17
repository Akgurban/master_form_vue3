import { ref, computed } from 'vue'

import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
interface Input {
  type: string
  id: number
  items?: any
  placeholder: string
  required: boolean
}
interface Form {
  id?: number | any
  form?: any
}
export const useInputsStore = defineStore('counter', {
  state: () => ({
    inputs: useLocalStorage<Input[]>('inputs', []),
    selectedFormId: useLocalStorage('selectedFormId', null),
    forms: useLocalStorage<Form[]>('forms', [])
  }),
  actions: {
    addToForm(data: any) {
      this.inputs.push({ type: data.type, id: data.id, placeholder: '', required: false })
    },
    deleteFromForm(data: any) {
      this.inputs.map((e: any, index: number) => {
        if (data.id == e.id) {
          this.inputs.splice(index, 1)
        }
      })
    },
    updateOneInput(data: any) {
      this.inputs.map((item: any, index: number) => {
        if (item.id == data.id) {
          this.inputs.splice(index, 1, data)
        }
      })
    },
    saveToForms() {
      if (this.inputs[0]?.id) {
        if (this.selectedFormId) {
          this.forms.filter((e: any) => {
            if (e.id == this.selectedFormId) {
              console.log('edit')
              e.form = this.inputs
              this.inputs = []
              this.selectedFormId = null
            }
          })
        } else {
          console.log('push')

          this.forms.push({ id: Math.random(), form: this.inputs })
          this.inputs = []
        }
        if (this.forms.length == 0) {
          this.forms.push({ id: Math.random(), form: this.inputs })
          this.inputs = []
        }
      }
    },
    deleteForm(data: any) {
      console.log('pp')

      this.forms.pop()
    },
    editForm(data: any) {
      console.log(data)
      this.inputs = data.form
      this.selectedFormId = data.id
    },
    setSelectedFormIDNull() {
      this.selectedFormId = null
      this.inputs = []
      console.log('xs')
    }
  },
  getters: {
    getInputs(): any {
      // autocompletion and typings for the wxhole store ✨
      return this.inputs
    }
  }
})
