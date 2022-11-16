import React, { createContext, useState } from 'react';
import { usermicroservice } from '@services/api';

export const UploadContext = createContext({});

export const UploadProvider = (props: any) => {
  const [selectedFile, setSelectedFile] = useState<any>([]);
  const [loading, setLoading] = useState<any>([]);
  const acceptedFiles = [
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/svg',
    'image/svg+xml',
  ];
  const fileSelectedHandler = (event: any) => {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = async () => {
    if (acceptedFiles.includes(selectedFile.type)) {
      const formData = new FormData();
      formData.append('files', selectedFile);
      try {
        const { data } = await usermicroservice.put('/photo', formData, {
          onUploadProgress: () => {
            setLoading('Fazendo upload...');
          },
        });
        setLoading('Upload realizado com sucesso');
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoading('Erro, formato de imagem não aceito');
    }
  };

  return (
    <UploadContext.Provider
      value={{
        UploadProvider,
        fileSelectedHandler,
        fileUploadHandler,
        selectedFile,
        setLoading,
        loading,
      }}
    >
      {props.children}
    </UploadContext.Provider>
  );
};
