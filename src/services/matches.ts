import api from '../services/api';
import { data } from '../utils/matchesData'

export interface IMatchesProps {
    team: string,
    gols: number
}

export const getMatches = () => {
    const matches = data;
    return matches;
};