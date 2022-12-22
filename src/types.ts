export interface GetMods {
    data: ModObject[];
    result_count: number;
    result_offset: number;
    result_limit: number;
    result_total: number;
}

export interface ModObject {
    id: number;
    game_id: number;
    status: number;
    visible: number;
    submitted_by: UserObject;
    date_added: Date;
    date_updated: Date;
    date_live: Date;
    logo: LogoObject;
    name: string;
    name_id: string;
    summary: string;
    description: string
    description_plaintext: string;
    metadata_blob: string;
    profile_url: string;
    modfile?: ModFileObject;
    tags: ModTagObject[];
}
export interface ModTagObject {
    name: string;
}

export interface UserObject {
    id: number;
    name_id: string;
    username: string;
    avatar: AvatarObject;
    timezone: string;
    profile_url: string;
}

export interface AvatarObject {
    filename: string;
    original: string;
    thumb_50x50: string;
    thumb_100x100: string;
}

export interface LogoObject {
    filename: string;
    original: string;
    thumb_320x180: string;
    thumb_640x360: string;
    thumb_1280x720: string;
}

export interface ModFileObjectDownload {
    binary_url: string;
    date_expires: number;
}

export interface ModFileObject {
    id: number;
    mod_id: number;
    date_added: number;
    date_scanned: number;
    virus_status: number;
    virus_positive: number;
    virustotal_hash: string;
    filesize: number;
    filename: string;
    version: string;
    changelog: string;
    metadata_blob: string;
    download: ModFileObjectDownload;
}

/**
{
    "id": 2575430,
    "game_id": 3693,
    "status": 0,
    "visible": 0,
    "submitted_by": {
        "id": 15075796,
        "name_id": "googleuserpn6qb1",
        "username": "FINjape",
        "display_name_portal": null,
        "date_online": 1671219157,
        "date_joined": 0,
        "avatar": {
            "filename": "aedftp7ykrqfyaeurnz0y87ljjes1snwyf.",
            "original": "https://image.modcdn.io/members/1253/15075796/aedftp7ykrqfyaeurnz0y87ljjes1snwyf.",
            "thumb_50x50": "https://thumb.modcdn.io/members/1253/15075796/crop_50x50/aedftp7ykrqfyaeurnz0y87ljjes1snwyf.",
            "thumb_100x100": "https://thumb.modcdn.io/members/1253/15075796/crop_100x100/aedftp7ykrqfyaeurnz0y87ljjes1snwyf."
        },
        "timezone": "",
        "language": "",
        "profile_url": "https://mod.io/u/googleuserpn6qb1"
    },
    "date_added": 1670596221,
    "date_updated": 1670596222,
    "date_live": 1670596221,
    "maturity_option": 0,
    "community_options": 0,
    "monetisation_options": 0,
    "price": 0,
    "tax": 0,
    "logo": {
        "filename": "vacavillepolicekilpi.jpg",
        "original": "https://image.modcdn.io/mods/5ea4/2575430/vacavillepolicekilpi.jpg",
        "thumb_320x180": "https://thumb.modcdn.io/mods/5ea4/2575430/crop_320x180/vacavillepolicekilpi.jpg",
        "thumb_640x360": "https://thumb.modcdn.io/mods/5ea4/2575430/crop_640x360/vacavillepolicekilpi.jpg",
        "thumb_1280x720": "https://thumb.modcdn.io/mods/5ea4/2575430/crop_1280x720/vacavillepolicekilpi.jpg"
    },
    "homepage_url": null,
    "name": "Police livery test",
    "name_id": "police-livery-test",
    "summary": "Police livery test",
    "description": "",
    "description_plaintext": "",
    "metadata_blob": null,
    "profile_url": "https://mod.io/g/flashing-lights/m/police-livery-test",
    "media": {
        "youtube": [],
        "sketchfab": [],
        "images": []
    },
    "modfile": {},
    "platforms": [],
    "metadata_kvp": [],
    "tags": [
        {
            "name": "Textures",
            "date_added": 1670596222
        },
        {
            "name": "Vehicle",
            "date_added": 1670596222
        }
    ],
    "stats": {
        "mod_id": 2575430,
        "popularity_rank_position": 517,
        "popularity_rank_total_mods": 558,
        "downloads_today": 0,
        "downloads_total": 0,
        "subscribers_total": 0,
        "ratings_total": 0,
        "ratings_positive": 0,
        "ratings_negative": 0,
        "ratings_percentage_positive": 0,
        "ratings_weighted_aggregate": 0,
        "ratings_display_text": "Unrated",
        "date_expires": 86400
    }
},
 */