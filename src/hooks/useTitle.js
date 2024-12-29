import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - Relatos de papel`;
    }, [title]);

  return null;
}