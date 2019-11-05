import { createSlice, PayloadAction } from 'redux-starter-kit';
import { K8sKinds } from '../k8s/K8sKinds';
import { K8sObjectImpl } from '../k8s/model/K8sObject';

export interface DescriptorDocument {
    objects: K8sObjectImpl[]
}

const emptyDescriptor: DescriptorDocument = {
    objects: [
        K8sKinds.instance.kinds.Deployment.create({name: "apps/v1"}, "deployment 1")
    ]
};

const descriptor = createSlice({
    name: 'descriptor',
    initialState: emptyDescriptor,
    reducers: {
        addObject: (document: DescriptorDocument, action: PayloadAction<K8sObjectImpl>) => {
            document.objects.push(action.payload);
        }
    }
});

export const { addObject } = descriptor.actions;

export default descriptor.reducer;
