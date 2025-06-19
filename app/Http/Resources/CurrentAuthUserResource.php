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
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            "phone" => $this->profile->phone ?? null,
            "first_name" => $this->profile->first_name ?? null,
            "last_name" => $this->profile->last_name ?? null,
            "username" => $this->profile->username ?? null,
            "avatar_url" => asset('storage/' . $this->profile->avatar_url ?? null),
        ];
    }
}
