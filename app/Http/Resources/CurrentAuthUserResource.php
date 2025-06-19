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

        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "phone" => $profile->phone ?? null,
            "first_name" => $profile->first_name ?? null,
            "last_name" => $profile->last_name ?? null,
            "username" => $profile->username ?? null,
            "avatar_url" => $profile && $profile->avatar_url
                ? asset('storage/' . $profile->avatar_url)
                : asset('images/default-avatar.png'), 
        ];
    }

}
