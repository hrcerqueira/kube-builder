import { createSlice, PayloadAction } from 'redux-starter-kit';
import { K8sKinds } from '../k8s/K8sKinds';
import { K8sObjectImpl, KindName } from '../k8s/model/K8sObject';

export interface DescriptorDocument {
    objects: K8sObjectImpl[]
}

const emptyDescriptor: DescriptorDocument = {
    objects: [
        K8sKinds.instance.create(KindName.Deployment, "deployment 1"),
        K8sKinds.instance.create(KindName.Deployment, "deployment 2"),
        K8sKinds.instance.create(KindName.Deployment, "deployment 3")
    ]
};

const descriptor = createSlice({
    name: 'descriptor',
    initialState: emptyDescriptor,
    reducers: {
        addObject: (document: DescriptorDocument, action: PayloadAction<K8sObjectImpl>) => {
            document.objects.push(action.payload);
        },
        setObjectProperty(document: DescriptorDocument, { payload: { index, key, value }}: PayloadAction<{index: number, key: string, value: any}>) {
            document.objects[index][key] = value;
        }
    }
});

export const { addObject, setObjectProperty } = descriptor.actions;

export default descriptor.reducer;
