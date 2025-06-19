import { useForm } from '@inertiajs/react';
import { useRef, useState, useEffect } from 'react';

export default function useProfileForm(authData) {
  const fileInputRef = useRef(null);

  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: authData.first_name || '',
    last_name: authData.last_name || '',
    email: authData.email || '',
    username: authData.username || '',
    phone: authData.phone || '',
    avatar_url: authData.avatar_url || '',
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
    avatar_file: null,
  });

  const [preview, setPreview] = useState(authData.avatar_url || '');

  useEffect(() => {
    if (data.avatar_file) {
      const objectUrl = URL.createObjectURL(data.avatar_file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(data.avatar_url || '');
    }
  }, [data.avatar_file]);

  const handleChooseAvatar = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setData('avatar_file', e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in data) {
      if (key === 'avatar_file' && data.avatar_file) {
        formData.append('avatar_file', data.avatar_file);
      } else if (key !== 'avatar_file') {
        formData.append(key, data[key]);
      }
    }

    post(route('profile.update'), {
      data: formData,
      onSuccess: () =>
        reset('current_password', 'new_password', 'new_password_confirmation', 'avatar_file'),
      preserveScroll: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    window.location.reload();
  };

  return {
    data,
    setData,
    post,
    processing,
    errors,
    reset,
    fileInputRef,
    preview,
    handleChooseAvatar,
    handleAvatarChange,
    handleSubmit,
  };
}
