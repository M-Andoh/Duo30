import { ComponentType } from 'react';
export type MenuIListitem = {
    label: string;
    name: string;
    path: string;
    element: ComponentType<any>;
};
