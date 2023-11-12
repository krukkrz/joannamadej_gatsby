export type Tag = {
    name: string;
    color?: TagColor;
}

export enum TagColor {
    LIGHT_BLUE = "#DCF6FF",
}

// TAGS
export const COMMERCIAL: Tag = {
    name: "Commercial project",
    color: TagColor.LIGHT_BLUE
}

export const UX_UI: Tag = {
    name: "UX/UI",
}

export const CASE_STUDY: Tag = {
    name: "Case study",
}

export const EDUCATIONAL_PLATFORM: Tag = {
    name: "Educational platform",
}

export const ECOMMERCE: Tag = {
    name: "Ecommerce",
}

export const UX_AUDIT: Tag = {
    name: "UX Audit",
}

export const DESK_BOOKING_APP: Tag = {
    name: "Desk booking app",
}

export const UI: Tag = {
    name: "UI",
}

export const DARE_IT_CHALLENGE: Tag = {
    name: "DareITChallenge",
}

export const SOCIAL_APP: Tag = {
    name: "Social app",
}