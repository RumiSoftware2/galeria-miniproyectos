import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getSavedProjectCovers,
  removeSavedProjectCover,
  saveProjectCover as saveProjectCoverRecord,
} from '../data/projectCovers';

export function useProjectCovers() {
  const [covers, setCovers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [storageError, setStorageError] = useState('');
  const objectUrls = useRef(new Map());

  useEffect(() => {
    let isMounted = true;
    const currentUrls = objectUrls.current;

    getSavedProjectCovers()
      .then((records) => {
        if (!isMounted) return;

        const savedCovers = {};
        records.forEach((record) => {
          const url = URL.createObjectURL(record.blob);
          currentUrls.set(record.projectId, url);
          savedCovers[record.projectId] = { ...record, url };
        });
        setCovers(savedCovers);
      })
      .catch((error) => {
        if (isMounted) setStorageError(error.message || 'No se pudieron cargar las miniaturas.');
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
      currentUrls.forEach((url) => URL.revokeObjectURL(url));
      currentUrls.clear();
    };
  }, []);

  const saveCover = useCallback(async (projectId, file) => {
    setStorageError('');
    try {
      await saveProjectCoverRecord(projectId, file);
      const oldUrl = objectUrls.current.get(projectId);
      if (oldUrl) URL.revokeObjectURL(oldUrl);

      const url = URL.createObjectURL(file);
      objectUrls.current.set(projectId, url);
      setCovers((current) => ({
        ...current,
        [projectId]: {
          projectId,
          blob: file,
          originalName: file.name,
          type: file.type,
          updatedAt: Date.now(),
          url,
        },
      }));
      return true;
    } catch (error) {
      setStorageError(error.message || 'No se pudo guardar la miniatura.');
      return false;
    }
  }, []);

  const removeCover = useCallback(async (projectId) => {
    setStorageError('');
    try {
      await removeSavedProjectCover(projectId);
      const oldUrl = objectUrls.current.get(projectId);
      if (oldUrl) URL.revokeObjectURL(oldUrl);
      objectUrls.current.delete(projectId);
      setCovers((current) => {
        const next = { ...current };
        delete next[projectId];
        return next;
      });
      return true;
    } catch (error) {
      setStorageError(error.message || 'No se pudo quitar la miniatura.');
      return false;
    }
  }, []);

  return { covers, isLoading, storageError, saveCover, removeCover };
}
