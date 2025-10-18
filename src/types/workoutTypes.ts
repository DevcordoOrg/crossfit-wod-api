export interface Workout {
    id?: string;
    name: string;
    mode: string;
    equipment: string[];
    exercises: string[];
    trainerTips: string[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Record {
    id?: string;
    workout: string;
    record: string;
    memberId: string;
    member: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Member {
    id?: string;
    name: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    password: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface Database {
    workouts: Workout[];
    records: Record[];
    members: Member[];
}
