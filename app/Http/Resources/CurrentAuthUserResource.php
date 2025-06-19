<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CurrentAuthUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $profile = $this->profile;

        $avatar = $profile->avatar_url ?? null;

        if ($avatar && (str_starts_with($avatar, 'http://') || str_starts_with($avatar, 'https://'))) {
            $avatarUrl = $avatar;
        } elseif ($avatar) {
            $avatarUrl = asset('storage/' . $avatar);
        } else {
            $avatarUrl = asset('images/default-avatar.png');
        }

        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "phone" => $profile->phone ?? null,
            "first_name" => $profile->first_name ?? null,
            "last_name" => $profile->last_name ?? null,
            "username" => $profile->username ?? null,
            "avatar_url" => $avatarUrl,
            "password" => $this->password,
        ];
    }

}
