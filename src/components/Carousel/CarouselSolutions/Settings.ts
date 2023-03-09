import { PublicationType } from "../../../data/@types/publication";

export const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export interface PropsSettings {
    banners: PublicationType[];
}
