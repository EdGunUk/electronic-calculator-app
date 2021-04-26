import uuid from 'uuid';

const getId = (): string => uuid.v4();

export default {
    getId,
};
