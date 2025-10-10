import { createClientSupabaseClient } from './client';

/**
 * Get public URL for Supabase Storage file
 */
export function getStorageUrl(bucket: string, path: string): string {
    const supabase = createClientSupabaseClient();
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
}

/**
 * Upload file to Supabase Storage
 */
export async function uploadTeamImage(file: File, fileName: string) {
    const supabase = createClientSupabaseClient();
    
    const { data, error } = await supabase.storage
        .from('team-images')
        .upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
        });

    if (error) {
        console.error('Upload error:', error);
        return null;
    }

    return getStorageUrl('team-images', fileName);
}